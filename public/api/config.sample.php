<?php
/**
 * Vorlage für die Server-Konfiguration.
 * Auf dem Webspace als `api/config.php` anlegen (nicht ins Repository, nicht öffentlich weitergeben).
 */
return [
    // MySQL bei united-domains: Zugangsdaten stehen im Kundenmenü unter „Datenbanken“.
    'db' => [
        'dsn' => 'mysql:host=DB_HOST;dbname=DB_NAME;charset=utf8mb4',
        'user' => 'DB_USER',
        'pass' => 'DB_PASSWORD',
    ],

    // Tabellen beim ersten Aufruf automatisch anlegen. Danach auf false stellen.
    'auto_migrate' => true,

    // Öffentliche Adresse der Seite (ohne Schrägstrich am Ende) – wird in Mail-Links verwendet.
    'base_url' => 'https://www.sicitalia.eu',

    // Empfänger der Registrierungsanfragen (Freischaltung) und Absender der Systemmails.
    'admin_email' => 'info@sicitalia.eu',
    'mail_from' => 'noreply@sicitalia.eu',

    // Nur für die Entwicklung: Mails in diese Datei schreiben statt zu versenden.
    // 'mail_log' => '/pfad/zu/mail.log',

    // Geschützte Downloads für angemeldete Kunden. Dateien AUSSERHALB des öffentlichen
    // Webverzeichnisses ablegen (oder in einem per .htaccess gesperrten Ordner).
    'downloads' => [
        'preisliste' => [
            'label' => 'Preisliste',
            'path' => '/pfad/ausserhalb/des/webroots/preisliste.pdf',
        ],
    ],
];
