<?php
/**
 * POST /api/register.php – legt ein Kundenkonto an (Status „pending“).
 * Das Konto wird erst nach Freigabe durch Sicitalia nutzbar (siehe approve.php).
 */
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

guard_request('POST');
$in = read_json();

$ipBucket = bucket_key('register', client_ip());
if (throttle_exceeded($ipBucket, 6, 3600)) {
    fail('too_many_requests', 429);
}
throttle_hit($ipBucket);

$email = strtolower(clean_string($in['email'] ?? '', 190));
$firstName = clean_string($in['firstName'] ?? '', 120);
$lastName = clean_string($in['lastName'] ?? '', 120);
$company = clean_string($in['company'] ?? '', 190);
$password = $in['password'] ?? null;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)
    || $firstName === '' || $lastName === '' || $company === ''
    || ($in['consent'] ?? false) !== true) {
    fail('invalid_input', 422);
}
if (!valid_password($password)) {
    fail('weak_password', 422);
}

// Nur bekannte Felder werden gespeichert, jeweils in der Länge begrenzt.
$allowed = [
    'position' => 190, 'businessType' => 190, 'legalForm' => 190,
    'street' => 190, 'houseNumber' => 30, 'zip' => 20, 'city' => 120,
    'deliveryStreet' => 190, 'deliveryHouseNumber' => 30, 'deliveryZip' => 20, 'deliveryCity' => 120,
    'billingStreet' => 190, 'billingHouseNumber' => 30, 'billingZip' => 20, 'billingCity' => 120,
    'billingEmail' => 190, 'phone' => 40, 'phoneAlt' => 40,
    'vatId' => 60, 'deliveryStart' => 60, 'productInterest' => 2000,
];
$profile = [];
foreach ($allowed as $key => $max) {
    $value = clean_string($in['profile'][$key] ?? '', $max);
    if ($value !== '') {
        $profile[$key] = $value;
    }
}
$contactVia = [];
foreach (['E-Mail', 'Festnetz', 'Handy', 'WhatsApp'] as $channel) {
    if (is_array($in['profile']['contactVia'] ?? null) && in_array($channel, $in['profile']['contactVia'], true)) {
        $contactVia[] = $channel;
    }
}
$profile['contactVia'] = $contactVia;

$pdo = db();
$stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
$stmt->execute([$email]);
$exists = (bool) $stmt->fetch();

if (!$exists) {
    [$token, $tokenHash] = new_token();
    try {
        $pdo->prepare(
            'INSERT INTO users (email, password_hash, status, first_name, last_name, company, profile, consent_at, created_at, approve_token_hash)
             VALUES (?, ?, \'pending\', ?, ?, ?, ?, ?, ?, ?)'
        )->execute([
            $email,
            password_hash((string) $password, PASSWORD_DEFAULT),
            $firstName,
            $lastName,
            $company,
            json_encode($profile, JSON_UNESCAPED_UNICODE),
            now(),
            now(),
            $tokenHash,
        ]);
    } catch (PDOException $e) {
        if ($e->getCode() !== '23000') {
            error_log('Sicitalia API register: ' . $e->getMessage());
            fail('server_error', 500);
        }
        $exists = true; // parallele Registrierung mit derselben E-Mail
    }
}

if ($exists) {
    // Keine Auskunft nach außen, ob die Adresse schon existiert – nur eine Mail an die Adresse selbst.
    send_mail(
        $email,
        'Sicitalia – Du hast bereits ein Kundenkonto',
        "Hallo,\n\nfür diese E-Mail-Adresse besteht bereits ein Kundenkonto bei Sicitalia.\n"
        . "Du kannst Dich hier anmelden: " . base_url() . "/anmelden\n"
        . "Passwort vergessen? " . base_url() . "/passwort-vergessen\n\n"
        . "Falls Du diese Anfrage nicht gestellt hast, kannst Du diese Nachricht ignorieren.\n\nSicitalia\n"
    );
    json_out(['ok' => true]);
}

$labels = [
    'position' => 'Position', 'businessType' => 'Art des Unternehmens', 'legalForm' => 'Gesellschaftsform',
    'street' => 'Straße', 'houseNumber' => 'Hausnummer', 'zip' => 'PLZ', 'city' => 'Ort',
    'deliveryStreet' => 'Lieferadresse Straße', 'deliveryHouseNumber' => 'Lieferadresse Nr.',
    'deliveryZip' => 'Lieferadresse PLZ', 'deliveryCity' => 'Lieferadresse Ort',
    'billingStreet' => 'Rechnungsadresse Straße', 'billingHouseNumber' => 'Rechnungsadresse Nr.',
    'billingZip' => 'Rechnungsadresse PLZ', 'billingCity' => 'Rechnungsadresse Ort',
    'billingEmail' => 'E-Mail Rechnung', 'phone' => 'Telefon', 'phoneAlt' => 'Telefon (2)',
    'contactVia' => 'Kontaktwege', 'vatId' => 'USt-IdNr.', 'deliveryStart' => 'Lieferung ab',
    'productInterest' => 'Produktinteresse',
];
$lines = [
    "Neue Kundenregistrierung auf sicitalia.eu\n",
    str_pad('Firma:', 26) . $company,
    str_pad('Ansprechpartner:', 26) . "$firstName $lastName",
    str_pad('E-Mail (Login):', 26) . $email,
];
foreach ($profile as $key => $value) {
    $lines[] = str_pad(($labels[$key] ?? $key) . ':', 26) . (is_array($value) ? implode(', ', $value) : $value);
}
$lines[] = "\nKonto freischalten (Bestätigungsseite):\n" . base_url() . '/api/approve.php?token=' . $token;
$lines[] = "\nSolange das Konto nicht freigeschaltet ist, kann sich die Person nicht anmelden.";

send_mail((string) cfg('admin_email'), 'Neue Kundenregistrierung: ' . $company, implode("\n", $lines));

send_mail(
    $email,
    'Sicitalia – Deine Registrierung ist eingegangen',
    "Hallo $firstName,\n\nvielen Dank für Deine Registrierung bei Sicitalia. Wir prüfen Deine Angaben und schalten "
    . "Dein Kundenkonto frei. Sobald das erledigt ist, erhältst Du eine weitere E-Mail und kannst Dich mit Deiner "
    . "E-Mail-Adresse und Deinem Passwort anmelden.\n\nSicitalia\n"
);

json_out(['ok' => true]);
