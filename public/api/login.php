<?php
/** POST /api/login.php – meldet eine freigeschaltete Person an. */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

guard_request('POST');
$in = read_json();

$email = strtolower(clean_string($in['email'] ?? '', 190));
$password = is_string($in['password'] ?? null) ? $in['password'] : '';
if ($email === '' || $password === '' || strlen($password) > 200) {
    fail('invalid_credentials', 401);
}

$accountBucket = bucket_key('login-acct', client_ip(), $email);
$ipBucket = bucket_key('login-ip', client_ip());
if (throttle_exceeded($accountBucket, 8, 900) || throttle_exceeded($ipBucket, 40, 900)) {
    fail('too_many_requests', 429);
}

$stmt = db()->prepare('SELECT * FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

// Auch ohne passenden Benutzer rechnen, damit die Antwortzeit nichts verrät.
$valid = $user
    ? password_verify($password, (string) $user['password_hash'])
    : (password_hash($password, PASSWORD_DEFAULT) === '');

if (!$valid) {
    throttle_hit($accountBucket);
    throttle_hit($ipBucket);
    fail('invalid_credentials', 401);
}

if ($user['status'] === 'pending') {
    fail('pending', 403);
}
if ($user['status'] !== 'active') {
    fail('disabled', 403);
}

if (password_needs_rehash((string) $user['password_hash'], PASSWORD_DEFAULT)) {
    $user['password_hash'] = password_hash($password, PASSWORD_DEFAULT);
    db()->prepare('UPDATE users SET password_hash = ? WHERE id = ?')->execute([$user['password_hash'], $user['id']]);
}
db()->prepare('UPDATE users SET last_login_at = ? WHERE id = ?')->execute([now(), $user['id']]);

login_session($user);
json_out(['user' => public_user($user), 'downloads' => available_downloads()]);
