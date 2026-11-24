<?php
/**
 * GET  /api/approve.php?token=…  – zeigt die Bestätigungsseite für die Freischaltung.
 * POST /api/approve.php          – schaltet das Konto frei (der Link aus der Admin-Mail).
 * Bewusst zweistufig: Mail-Scanner, die Links nur abrufen, schalten so nichts frei.
 */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store');
header('Referrer-Policy: no-referrer');
header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; form-action 'self'");

function page(string $title, string $body): never
{
    echo '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="robots" content="noindex">'
        . '<meta name="viewport" content="width=device-width, initial-scale=1"><title>' . h($title) . '</title>'
        . '<style>body{font-family:system-ui,sans-serif;max-width:560px;margin:60px auto;padding:0 20px;color:#2a1a1a}'
        . 'dl{display:grid;grid-template-columns:140px 1fr;gap:6px 14px}dt{color:#777}dd{margin:0}'
        . 'button{background:#5c2e2e;color:#fff;border:0;padding:12px 22px;font-size:16px;border-radius:6px;cursor:pointer}</style>'
        . '</head><body><h1>' . h($title) . '</h1>' . $body . '</body></html>';
    exit;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$token = (string) ($method === 'POST' ? ($_POST['token'] ?? '') : ($_GET['token'] ?? ''));

if (!preg_match('/^[a-f0-9]{64}$/', $token)) {
    http_response_code(400);
    page('Ungültiger Link', '<p>Dieser Freischaltungslink ist ungültig.</p>');
}

$ipBucket = bucket_key('approve', client_ip());
if (throttle_exceeded($ipBucket, 30, 3600)) {
    http_response_code(429);
    page('Zu viele Anfragen', '<p>Bitte versuche es später erneut.</p>');
}
throttle_hit($ipBucket);

$maxAge = gmdate('Y-m-d H:i:s', time() - 30 * 86400);
$stmt = db()->prepare(
    "SELECT * FROM users WHERE approve_token_hash = ? AND status = 'pending' AND created_at >= ?"
);
$stmt->execute([hash('sha256', $token), $maxAge]);
$user = $stmt->fetch();

if (!$user) {
    http_response_code(404);
    page('Link nicht mehr gültig', '<p>Das Konto wurde bereits freigeschaltet oder der Link ist abgelaufen.</p>');
}

if ($method !== 'POST') {
    page(
        'Kundenkonto freischalten',
        '<dl><dt>Firma</dt><dd>' . h((string) $user['company']) . '</dd>'
        . '<dt>Ansprechpartner</dt><dd>' . h($user['first_name'] . ' ' . $user['last_name']) . '</dd>'
        . '<dt>E-Mail</dt><dd>' . h((string) $user['email']) . '</dd></dl>'
        . '<form method="post"><input type="hidden" name="token" value="' . h($token) . '">'
        . '<p><button type="submit">Konto jetzt freischalten</button></p></form>'
    );
}

db()->prepare("UPDATE users SET status = 'active', approved_at = ?, approve_token_hash = NULL WHERE id = ?")
    ->execute([now(), $user['id']]);

send_mail(
    (string) $user['email'],
    'Sicitalia – Dein Kundenkonto ist freigeschaltet',
    "Hallo {$user['first_name']},\n\nDein Kundenkonto bei Sicitalia ist freigeschaltet. "
    . "Du kannst Dich jetzt mit Deiner E-Mail-Adresse und Deinem Passwort anmelden:\n\n"
    . base_url() . "/anmelden\n\nSicitalia\n"
);

page('Konto freigeschaltet', '<p>' . h((string) $user['company']) . ' ist freigeschaltet. Die Person wurde per E-Mail informiert.</p>');
