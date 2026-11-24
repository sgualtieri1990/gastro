<?php
/** GET /api/download.php?file=<id> – liefert eine geschützte Datei nur an angemeldete, freigeschaltete Kunden. */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

guard_request('GET');
if (current_user() === null) {
    fail('unauthenticated', 401);
}

$id = (string) ($_GET['file'] ?? '');
$downloads = (array) cfg('downloads', []);
$entry = $downloads[$id] ?? null;
$path = is_array($entry) ? (string) ($entry['path'] ?? '') : '';
if ($path === '' || !is_file($path)) {
    fail('not_found', 404);
}

$name = preg_replace('/[^A-Za-z0-9._-]/', '_', basename($path)) ?: 'download';
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="' . $name . '"');
header('Content-Length: ' . filesize($path));
header('Cache-Control: private, no-store');
header('X-Content-Type-Options: nosniff');
readfile($path);
exit;
