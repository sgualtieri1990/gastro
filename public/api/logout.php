<?php
/** POST /api/logout.php – beendet die Sitzung. */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

guard_request('POST');
logout_session();
json_out(['ok' => true]);
