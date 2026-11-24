<?php
/** POST /api/forgot.php – verschickt einen Link zum Zurücksetzen des Passworts (antwortet immer gleich). */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

guard_request('POST');
$in = read_json();
$email = strtolower(clean_string($in['email'] ?? '', 190));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_out(['ok' => true]);
}

$ipBucket = bucket_key('forgot-ip', client_ip());
$mailBucket = bucket_key('forgot-mail', $email);
if (throttle_exceeded($ipBucket, 10, 3600) || throttle_exceeded($mailBucket, 3, 3600)) {
    fail('too_many_requests', 429);
}
throttle_hit($ipBucket);
throttle_hit($mailBucket);

$stmt = db()->prepare("SELECT id, first_name FROM users WHERE email = ? AND status = 'active'");
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user) {
    [$token, $tokenHash] = new_token();
    db()->prepare('DELETE FROM password_resets WHERE user_id = ?')->execute([$user['id']]);
    db()->prepare('INSERT INTO password_resets (user_id, token_hash, expires_at) VALUES (?, ?, ?)')
        ->execute([$user['id'], $tokenHash, gmdate('Y-m-d H:i:s', time() + 3600)]);

    send_mail(
        $email,
        'Sicitalia – Passwort zurücksetzen',
        "Hallo {$user['first_name']},\n\nüber diesen Link kannst Du ein neues Passwort vergeben (eine Stunde gültig):\n\n"
        . base_url() . '/passwort-zuruecksetzen?token=' . $token
        . "\n\nFalls Du das nicht angefordert hast, kannst Du diese Nachricht ignorieren.\n\nSicitalia\n"
    );
}

json_out(['ok' => true]);
