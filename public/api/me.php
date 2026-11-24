<?php
/** GET /api/me.php – liefert die angemeldete Person oder 401. */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

guard_request('GET');
$user = current_user();
if ($user === null) {
    fail('unauthenticated', 401);
}
json_out(['user' => public_user($user), 'downloads' => available_downloads()]);
