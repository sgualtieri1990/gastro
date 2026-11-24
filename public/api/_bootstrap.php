<?php
/**
 * Gemeinsame Funktionen für die Kundenbereich-API (PHP 8.1+, MySQL oder SQLite).
 * Wird von allen Endpunkten per require eingebunden, ist selbst kein Endpunkt
 * (der Zugriff von außen ist über .htaccess gesperrt).
 */
declare(strict_types=1);

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo '{"error":"server_config"}';
    exit;
}

/** @var array<string,mixed> $GLOBALS['sicitalia_config'] */
$GLOBALS['sicitalia_config'] = require $configFile;

function cfg(string $key, mixed $default = null): mixed
{
    return $GLOBALS['sicitalia_config'][$key] ?? $default;
}

// ───────────────────────── Antworten & Eingaben ─────────────────────────

function json_out(array $data, int $status = 200): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function fail(string $code, int $status): never
{
    json_out(['error' => $code], $status);
}

function is_https(): bool
{
    return (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
}

/**
 * Schutz gegen Cross-Site-Anfragen: Der Header X-Requested-With kann von fremden
 * Seiten nicht ohne CORS-Freigabe gesetzt werden; zusätzlich muss ein mitgesendeter
 * Origin zum eigenen Host passen.
 */
function guard_request(string $method): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== $method) {
        header('Allow: ' . $method);
        fail('method_not_allowed', 405);
    }
    if ($method === 'POST' && ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') !== 'XMLHttpRequest') {
        fail('forbidden', 403);
    }
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '') {
        $originHost = (string) parse_url($origin, PHP_URL_HOST);
        $host = preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? ''));
        if (!hash_equals(strtolower($host), strtolower($originHost))) {
            fail('forbidden', 403);
        }
    }
}

/** @return array<string,mixed> */
function read_json(): array
{
    $raw = file_get_contents('php://input', false, null, 0, 65537);
    if ($raw === false || strlen($raw) > 65536) {
        fail('payload_too_large', 413);
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        fail('invalid_json', 400);
    }
    return $data;
}

function clean_string(mixed $value, int $max): string
{
    if (!is_string($value)) {
        return '';
    }
    $value = trim(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '');
    return mb_substr($value, 0, $max);
}

function valid_password(mixed $password): bool
{
    return is_string($password) && mb_strlen($password) >= 10 && strlen($password) <= 200;
}

// ───────────────────────── Datenbank ─────────────────────────

function now(): string
{
    return gmdate('Y-m-d H:i:s');
}

function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }
    $db = cfg('db', []);
    try {
        $pdo = new PDO((string) ($db['dsn'] ?? ''), $db['user'] ?? null, $db['pass'] ?? null, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
    } catch (PDOException $e) {
        error_log('Sicitalia API: DB-Verbindung fehlgeschlagen: ' . $e->getMessage());
        fail('server_error', 500);
    }
    if (cfg('auto_migrate', true)) {
        migrate($pdo);
    }
    return $pdo;
}

function migrate(PDO $pdo): void
{
    $sqlite = $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'sqlite';
    $id = $sqlite ? 'INTEGER PRIMARY KEY AUTOINCREMENT' : 'INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY';
    $uint = $sqlite ? 'INTEGER' : 'INT UNSIGNED';
    $tail = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';

    $pdo->exec("CREATE TABLE IF NOT EXISTS users (
        id $id,
        email VARCHAR(190) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        status VARCHAR(16) NOT NULL DEFAULT 'pending',
        first_name VARCHAR(120) NOT NULL,
        last_name VARCHAR(120) NOT NULL,
        company VARCHAR(190) NOT NULL,
        profile TEXT NOT NULL,
        consent_at DATETIME NOT NULL,
        created_at DATETIME NOT NULL,
        approved_at DATETIME NULL,
        last_login_at DATETIME NULL,
        approve_token_hash CHAR(64) NULL
    )$tail");

    $pdo->exec("CREATE TABLE IF NOT EXISTS password_resets (
        id $id,
        user_id $uint NOT NULL,
        token_hash CHAR(64) NOT NULL,
        expires_at DATETIME NOT NULL
    )$tail");

    $pdo->exec("CREATE TABLE IF NOT EXISTS throttle (
        id $id,
        bucket VARCHAR(100) NOT NULL,
        created_at DATETIME NOT NULL
    )$tail");
    if ($sqlite) {
        $pdo->exec('CREATE INDEX IF NOT EXISTS idx_throttle_bucket ON throttle (bucket, created_at)');
    } else {
        try {
            $pdo->exec('CREATE INDEX idx_throttle_bucket ON throttle (bucket, created_at)');
        } catch (PDOException) {
            // Index existiert bereits.
        }
    }
}

// ───────────────────────── Ratenbegrenzung ─────────────────────────

function client_ip(): string
{
    return (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

function bucket_key(string $name, string ...$parts): string
{
    return $name . ':' . substr(hash('sha256', implode('|', $parts)), 0, 40);
}

function throttle_exceeded(string $bucket, int $max, int $windowSeconds): bool
{
    $since = gmdate('Y-m-d H:i:s', time() - $windowSeconds);
    $stmt = db()->prepare('SELECT COUNT(*) FROM throttle WHERE bucket = ? AND created_at >= ?');
    $stmt->execute([$bucket, $since]);
    return (int) $stmt->fetchColumn() >= $max;
}

function throttle_hit(string $bucket): void
{
    db()->prepare('INSERT INTO throttle (bucket, created_at) VALUES (?, ?)')->execute([$bucket, now()]);
    if (random_int(1, 50) === 1) {
        db()->prepare('DELETE FROM throttle WHERE created_at < ?')->execute([gmdate('Y-m-d H:i:s', time() - 86400)]);
    }
}

// ───────────────────────── Sitzung ─────────────────────────

const SESSION_IDLE_SECONDS = 43200; // 12 Stunden

function start_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    session_name('sicitalia_sid');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => is_https(),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    ini_set('session.use_strict_mode', '1');
    session_start();
}

/** Kurze Kennung des aktuellen Passworts: macht Sitzungen nach einer Passwortänderung ungültig. */
function password_stamp(string $passwordHash): string
{
    return substr(hash('sha256', $passwordHash), 0, 16);
}

function login_session(array $user): void
{
    start_session();
    session_regenerate_id(true);
    $_SESSION = [
        'uid' => (int) $user['id'],
        'stamp' => password_stamp((string) $user['password_hash']),
        'seen' => time(),
    ];
}

function logout_session(): void
{
    start_session();
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $p = session_get_cookie_params();
        setcookie(session_name(), '', [
            'expires' => time() - 3600,
            'path' => $p['path'],
            'secure' => $p['secure'],
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
    }
    session_destroy();
}

/** @return array<string,mixed>|null Zeile aus `users` für die angemeldete, freigeschaltete Person. */
function current_user(): ?array
{
    start_session();
    $uid = $_SESSION['uid'] ?? null;
    if (!is_int($uid)) {
        return null;
    }
    if (time() - (int) ($_SESSION['seen'] ?? 0) > SESSION_IDLE_SECONDS) {
        logout_session();
        return null;
    }
    $stmt = db()->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$uid]);
    $user = $stmt->fetch();
    if (!$user || $user['status'] !== 'active'
        || !hash_equals(password_stamp((string) $user['password_hash']), (string) ($_SESSION['stamp'] ?? ''))) {
        logout_session();
        return null;
    }
    $_SESSION['seen'] = time();
    return $user;
}

/** @return array<string,mixed> Das, was das Frontend über die Person wissen darf. */
function public_user(array $user): array
{
    $profile = json_decode((string) $user['profile'], true);
    return [
        'email' => $user['email'],
        'firstName' => $user['first_name'],
        'lastName' => $user['last_name'],
        'company' => $user['company'],
        'status' => $user['status'],
        'profile' => is_array($profile) ? $profile : new stdClass(),
        'createdAt' => $user['created_at'],
    ];
}

/** @return list<array{id:string,label:string,url:string}> Geschützte Dateien, die tatsächlich vorhanden sind. */
function available_downloads(): array
{
    $out = [];
    foreach ((array) cfg('downloads', []) as $id => $download) {
        if (is_file((string) ($download['path'] ?? ''))) {
            $out[] = [
                'id' => (string) $id,
                'label' => (string) $download['label'],
                'url' => '/api/download.php?file=' . rawurlencode((string) $id),
            ];
        }
    }
    return $out;
}

// ───────────────────────── Tokens & Mail ─────────────────────────

function new_token(): array
{
    $token = bin2hex(random_bytes(32));
    return [$token, hash('sha256', $token)];
}

function base_url(): string
{
    return rtrim((string) cfg('base_url', ''), '/');
}

function send_mail(string $to, string $subject, string $text): bool
{
    $from = (string) cfg('mail_from', 'noreply@localhost');
    $log = cfg('mail_log');
    if (is_string($log) && $log !== '') {
        $dir = dirname($log);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }
        file_put_contents($log, "=== " . now() . " UTC ===\nTo: $to\nSubject: $subject\n\n$text\n\n", FILE_APPEND | LOCK_EX);
        return true;
    }
    $headers = implode("\r\n", [
        'From: Sicitalia <' . $from . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
    ]);
    $ok = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $text, $headers);
    if (!$ok) {
        error_log('Sicitalia API: Mailversand an ' . $to . ' fehlgeschlagen');
    }
    return $ok;
}

function h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
