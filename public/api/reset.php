<?php
/** POST /api/reset.php – setzt mit einem gültigen Token ein neues Passwort. */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

guard_request('POST');
$in = read_json();

$token = is_string($in['token'] ?? null) ? $in['token'] : '';
$password = $in['password'] ?? null;

$ipBucket = bucket_key('reset-ip', client_ip());
if (throttle_exceeded($ipBucket, 20, 3600)) {
    fail('too_many_requests', 429);
}
throttle_hit($ipBucket);

if (!preg_match('/^[a-f0-9]{64}$/', $token)) {
    fail('invalid_token', 400);
}
if (!valid_password($password)) {
    fail('weak_password', 422);
}

$stmt = db()->prepare('SELECT user_id FROM password_resets WHERE token_hash = ? AND expires_at >= ?');
$stmt->execute([hash('sha256', $token), now()]);
$reset = $stmt->fetch();
if (!$reset) {
    fail('invalid_token', 400);
}

db()->prepare('UPDATE users SET password_hash = ? WHERE id = ?')
    ->execute([password_hash((string) $password, PASSWORD_DEFAULT), $reset['user_id']]);
db()->prepare('DELETE FROM password_resets WHERE user_id = ?')->execute([$reset['user_id']]);

json_out(['ok' => true]);
