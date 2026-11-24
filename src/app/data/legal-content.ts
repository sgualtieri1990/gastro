/**
 * Rechtstexte – übernommen von der bisherigen Kundenseite (sicitalia.eu).
 * Angepasst wurden nur Stellen, die sich durch die neue Website ändern
 * (Hosting, lokale Schriftarten, Cookie-Banner). Vor Livegang rechtlich prüfen lassen.
 */

export interface LegalLink {
  label: string;
  text: string;
  href: string;
}

export interface LegalBlock {
  type: 'h2' | 'p' | 'ul' | 'links';
  text?: string;
  items?: string[];
  links?: LegalLink[];
}

export interface LegalDoc {
  title: string;
  blocks: LegalBlock[];
}

const h2 = (text: string): LegalBlock => ({ type: 'h2', text });
const p = (text: string): LegalBlock => ({ type: 'p', text });
const ul = (items: string[]): LegalBlock => ({ type: 'ul', items });

export const DATENSCHUTZ: LegalDoc = {
  title: 'Datenschutzerklärung',
  blocks: [
    h2('Verantwortlicher'),
    p('Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:'),
    p(
      'Sicitalia – Carmelo Marotta\nBeckerfelder Straße 96\n47269 Duisburg\nDeutschland\n\nE-Mail: info@sicitalia.eu\nTelefon: 0049-203-738 718 15',
    ),

    h2('Allgemeines'),
    p(
      'Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen, zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen oder zur Wahrung berechtigter Interessen erforderlich ist.',
    ),
    p(
      'Personenbezogene Daten sind alle Informationen, mit denen eine Person direkt oder indirekt identifiziert werden kann, zum Beispiel Name, E-Mail-Adresse, Telefonnummer, IP-Adresse oder Angaben aus Kontaktformularen.',
    ),

    h2('Besuch der Website, Hosting und Server-Logfiles'),
    p(
      'Beim Besuch unserer Website werden technisch notwendige Daten verarbeitet, damit die Website angezeigt, stabil betrieben und gegen Missbrauch geschützt werden kann. Dazu können insbesondere folgende Daten gehören:',
    ),
    p(
      'IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, verwendeter Browser, Betriebssystem, Referrer-URL sowie technische Server-Logdaten.',
    ),
    p(
      'Unsere Website wird bei der united-domains AG (Starnberg, Deutschland) gehostet. Dabei können personenbezogene Daten auf Servern von united-domains oder durch von united-domains eingesetzte Dienstleister verarbeitet werden. Die Verarbeitung erfolgt zur technischen Bereitstellung, Sicherheit und Verwaltung der Website.',
    ),
    p(
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und funktionsfähigen Betrieb unserer Website.',
    ),

    h2('Kontaktaufnahme'),
    p(
      'Wenn Sie uns über ein Kontaktformular, per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten, zum Beispiel Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Nachrichtentext und gegebenenfalls weitere Angaben zu Ihrem Betrieb.',
    ),
    p(
      'Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage, zur Kommunikation mit Ihnen und gegebenenfalls zur Vorbereitung oder Durchführung einer Geschäftsbeziehung.',
    ),
    p(
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist. In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
    ),

    h2('Interesse an Zusammenarbeit und Belieferung'),
    p(
      'Wenn Sie über unsere Website Interesse an einer Zusammenarbeit oder Belieferung anmelden, verarbeiten wir die von Ihnen angegebenen Unternehmens- und Kontaktdaten. Dazu können insbesondere gehören:',
    ),
    p(
      'Name, Firma, Betriebsart, Anschrift, Telefonnummer, E-Mail-Adresse, Ansprechpartner, steuerlich relevante Angaben sowie Informationen zu Sortiment, Liefergebiet oder Produktinteresse.',
    ),
    p(
      'Die Verarbeitung erfolgt zur Prüfung und Bearbeitung Ihrer Anfrage, zur Kundenanlage, zur Vorbereitung einer möglichen Geschäftsbeziehung sowie zur internen Vertriebsorganisation.',
    ),
    p('Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.'),

    h2('Kundenkonto und Kundenbereich'),
    p(
      'Wenn Sie über unsere Website ein Kundenkonto beantragen, verarbeiten wir die dabei angegebenen Daten: Name, Position, Firma, Betriebsart, Gesellschaftsform, Geschäfts-, Liefer- und Rechnungsadresse, E-Mail-Adressen, Telefonnummern, gewünschte Kontaktwege, USt-IdNr. bzw. Steuernummer, gewünschten Lieferbeginn, Produktinteresse sowie Ihr selbst gewähltes Passwort.',
    ),
    p(
      'Das Passwort speichern wir nicht im Klartext, sondern ausschließlich als mit einem aktuellen Verfahren gesicherten Hash-Wert. Wir können es nicht einsehen. Ihr Konto wird erst nach unserer Prüfung freigeschaltet; über die Freischaltung informieren wir Sie per E-Mail an die angegebene Adresse.',
    ),
    p(
      'Nach der Anmeldung im Kundenbereich setzen wir ein technisch notwendiges Sitzungs-Cookie, damit Sie angemeldet bleiben. Es wird beim Abmelden oder Schließen des Browsers gelöscht bzw. läuft nach längerer Inaktivität ab. Zum Schutz vor Missbrauch (z. B. automatisierten Anmeldeversuchen) speichern wir zudem für kurze Zeit eine nicht rückrechenbare Kennung Ihrer IP-Adresse zusammen mit Zeitpunkt der Anfrage.',
    ),
    p(
      'Zweck der Verarbeitung sind die Kundenanlage, die Prüfung der Berechtigung als gewerblicher Kunde, die Bereitstellung des Kundenbereichs (z. B. Preislisten) und die Durchführung der Geschäftsbeziehung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, für die Missbrauchsabwehr Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gespeichert, solange das Konto besteht; auf Ihren Wunsch löschen wir das Konto, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
    ),

    h2('Downloads und Kataloge'),
    p(
      'Wenn Sie auf unserer Website Kataloge, Präsentationen oder Produktinformationen herunterladen oder anfordern, können technische Zugriffsdaten verarbeitet werden. Sofern der Download mit einem Formular verbunden ist, verarbeiten wir zusätzlich die dort eingegebenen Kontaktdaten.',
    ),
    p(
      'Die Verarbeitung erfolgt zur Bereitstellung der angeforderten Informationen und gegebenenfalls zur Bearbeitung Ihrer Anfrage.',
    ),

    h2('WhatsApp und Messenger-Dienste'),
    p(
      'Wir können auf unserer Website Kontaktmöglichkeiten über WhatsApp, Messenger-Dienste oder vergleichbare digitale Kommunikationskanäle anbieten.',
    ),
    p(
      'Wenn Sie uns über einen solchen Kommunikationsweg kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten. Dazu gehören insbesondere Name, Telefonnummer, Nachrichteninhalte, Zeitstempel sowie gegebenenfalls weitere freiwillige Angaben.',
    ),
    p(
      'Zur Bearbeitung und Organisation dieser Kommunikation können wir technische Dienstleister für Messenger-, E-Mail- und Kommunikationsmanagement einsetzen. Diese Dienstleister verarbeiten personenbezogene Daten ausschließlich in unserem Auftrag und nach unseren Weisungen.',
    ),
    p(
      'Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage, zur Kundenkommunikation, zur Bestellannahme, zur Beratung sowie zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen.',
    ),
    p(
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Kommunikation der Vertragsanbahnung oder Vertragsdurchführung dient. In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer effizienten, kundenorientierten und nachvollziehbaren Kommunikation.',
    ),
    p(
      'Bitte beachten Sie, dass bei Nutzung externer Messenger-Dienste auch Daten durch den jeweiligen Anbieter verarbeitet werden können. Nutzen Sie diesen Kommunikationsweg daher nur, wenn Sie damit einverstanden sind. Alternativ können Sie uns jederzeit per E-Mail oder Telefon kontaktieren.',
    ),

    h2('Eingebettete Inhalte (YouTube)'),
    p(
      'Unsere Website kann eingebettete Inhalte von Drittanbietern enthalten, zum Beispiel Videos von YouTube. Beim Aufruf solcher Inhalte können Daten an den jeweiligen Drittanbieter übermittelt werden, insbesondere IP-Adresse, Geräteinformationen und Nutzungsdaten.',
    ),
    p(
      'Soweit möglich, verwenden wir datenschutzfreundliche Einbindungen oder aktivieren Inhalte erst nach Ihrer Einwilligung.',
    ),
    p(
      'Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, sofern der Dienst nicht technisch notwendig ist.',
    ),

    h2('Schriftarten'),
    p(
      'Die auf dieser Website verwendeten Schriftarten sind lokal eingebunden. Dabei werden keine Daten an externe Anbieter übertragen.',
    ),

    h2('Cookies und ähnliche Technologien'),
    p(
      'Unsere Website kann Cookies und ähnliche Technologien einsetzen. Cookies sind kleine Dateien, die auf Ihrem Endgerät gespeichert werden.',
    ),
    p(
      'Wir unterscheiden zwischen technisch notwendigen Cookies und optionalen Cookies. Technisch notwendige Cookies sind erforderlich, damit die Website funktioniert. Optionale Cookies, zum Beispiel für Analyse, Marketing oder eingebettete Inhalte, setzen wir nur mit Ihrer Einwilligung ein.',
    ),
    p(
      'Sie können Ihre Cookie-Einstellungen über das Cookie-Banner oder die Datenschutzeinstellungen der Website ändern oder widerrufen. Beim ersten Besuch fragen wir Ihre Auswahl über ein Banner ab; über den Link „Cookie-Einstellungen“ im Seitenfuß können Sie sie jederzeit ändern.',
    ),

    h2('Empfänger von Daten'),
    p(
      'Eine Weitergabe personenbezogener Daten erfolgt nur, wenn dies zur Bearbeitung Ihrer Anfrage, zur Vertragserfüllung, zur technischen Bereitstellung der Website, aufgrund gesetzlicher Pflichten oder auf Grundlage berechtigter Interessen erforderlich ist.',
    ),
    p('Empfänger können insbesondere sein:'),
    p(
      'united-domains AG als Hosting-Anbieter, IT- und Hosting-Dienstleister, Kommunikationsdienstleister, Superchat, Steuerberater, Zahlungs- oder Logistikdienstleister sowie Behörden, sofern eine gesetzliche Verpflichtung besteht.',
    ),

    h2('Speicherdauer'),
    p(
      'Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist. Danach werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
    ),
    p(
      'Geschäfts- und steuerrelevante Unterlagen können aufgrund gesetzlicher Aufbewahrungspflichten länger gespeichert werden.',
    ),

    h2('Ihre Rechte'),
    p('Sie haben nach Maßgabe der DSGVO folgende Rechte:'),
    p(
      'Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerruf erteilter Einwilligungen sowie Widerspruch gegen bestimmte Verarbeitungen.',
    ),
    p('Zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden.'),

    h2('Beschwerderecht'),
    p(
      'Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt.',
    ),
    p(
      'Zuständig kann insbesondere die Datenschutzaufsichtsbehörde Ihres Wohnortes, Ihres Arbeitsplatzes oder unseres Unternehmenssitzes sein.',
    ),

    h2('Stand und Änderungen'),
    p('Diese Datenschutzerklärung gilt ab: November 2026'),
    p(
      'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich rechtliche Anforderungen, technische Funktionen oder eingesetzte Dienstleister ändern.',
    ),
  ],
};

export const AGB: LegalDoc = {
  title: 'Allgemeine Geschäftsbedingungen',
  blocks: [
    p('Sicitalia – Inhaber Carmelo Marotta\nBeckerfelderstr. 96 – 47269 Duisburg\nStand: Dezember 2025'),

    h2('Geltungsbereich'),
    p(
      'Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über den Verkauf und die Lieferung von Waren durch Sicitalia – unabhängig vom Vertriebsweg (Außendienst, Innendienst, E-Mail, Telefon, schriftliche Bestellung, persönliche Abholung oder Website-Anfrage). Unsere Angebote richten sich überwiegend an gewerbliche Kunden (B2B). Bestellungen durch Verbraucher (§ 13 BGB) sind möglich und unterliegen den gesetzlichen Verbraucherschutzvorschriften. Abweichende Bedingungen gelten nur bei schriftlicher Bestätigung.',
    ),

    h2('Vertragsschluss'),
    p(
      'Ein Vertrag kommt erst zustande, wenn wir eine Anfrage prüfen und ein verbindliches Angebot oder eine Auftragsbestätigung übermitteln. Über die Website findet kein Direktverkauf statt; sie dient ausschließlich der Information sowie der Möglichkeit zur Angebots- oder Termin-Anfrage. Alle Angaben, Fotos und Preise sind unverbindlich.',
    ),

    h2('Preise'),
    p(
      'Alle Preise verstehen sich netto zzgl. gesetzlicher MwSt., sofern kein B2C-Geschäft vorliegt. Mindestbestellmengen variieren je nach Liefergebiet und Warenart und werden durch Innen- oder Außendienst kommuniziert. Preisänderungen und Irrtümer vorbehalten.',
    ),

    h2('Zahlung'),
    p(
      'Zahlungen erfolgen – sofern vereinbart – per Vorkasse, Rechnung oder PayPal. Rechnungen sind innerhalb der angegebenen Fristen zu begleichen. Bei Zahlungsverzug gelten gesetzliche Verzugszinsen; weitere Lieferungen können zurückgehalten werden.',
    ),

    h2('Lieferung und Gefahrübergang'),
    p(
      'Lieferungen erfolgen innerhalb Deutschlands; Lieferungen in Nachbarländer nur nach Absprache. Tiefkühlware liefern wir mit eigenen Fahrzeugen, Trockenware ggf. auch über Dienstleister (DHL etc.). Gefahrübergang:',
    ),
    ul(['B2B: beim Verlassen unseres Lagers', 'B2C: erst bei Übergabe an den Verbraucher']),
    p('Lieferzeiten sind unverbindlich, sofern nicht ausdrücklich zugesichert.'),

    h2('Rückgabe, Widerruf und Reklamation'),
    p(
      'Rückgaben sind nur für verschlossene Verpackungen möglich, wenn die Einhaltung der Kühlkette nachgewiesen werden kann. Widerruf (freiwillig bei B2B, gesetzlich bei B2C) ist bis zum Liefertag möglich; es kann eine Bearbeitungsgebühr anfallen. Reklamationen müssen unverzüglich, spätestens innerhalb von 24 Stunden nach Lieferung gemeldet werden.',
    ),

    h2('Eigentumsvorbehalt'),
    p(
      'Die Ware bleibt bis zur vollständigen Bezahlung Eigentum von Sicitalia. Wir dürfen unsere Rechte aus dem Eigentumsvorbehalt jederzeit geltend machen.',
    ),

    h2('Haftung'),
    p(
      'Wir haften für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haften wir nur für wesentliche Vertragspflichten und nur für typische, vorhersehbare Schäden. Haftung für entgangenen Gewinn und Folgeschäden ist ausgeschlossen (ausgenommen B2C).',
    ),

    h2('Datenschutz'),
    p(
      'Personenbezogene Daten werden ausschließlich gemäß unserer Datenschutzerklärung verarbeitet und nur zur Kontaktaufnahme, Vertragsabwicklung und Lieferung genutzt.',
    ),

    h2('Anwendbares Recht und Gerichtsstand'),
    p(
      'Es gilt deutsches Recht (ohne UN-Kaufrecht). Gerichtsstand für Unternehmer: Duisburg. Für Verbraucher gelten die gesetzlichen Regelungen.',
    ),

    h2('Salvatorische Klausel'),
    p(
      'Sollte eine Klausel unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Klausel wird durch eine rechtlich wirksame ersetzt, die dem wirtschaftlichen Zweck am nächsten kommt.',
    ),

    h2('Hinweis auf der gesamten Rechnungskette'),
    p('Es gelten ausschließlich die aktuellen AGB sowie diese Ergänzungen.'),
    p(
      'Unsere AGB gelten automatisch auch für zukünftige Geschäfte. Abweichende Bedingungen des Kunden gelten nur bei schriftlicher Zustimmung.',
    ),
    p(
      'Wir dürfen Forderungen aus Verträgen abtreten. Es gilt ausschließlich deutsches Recht. Gerichtsstand nach unserer Wahl: Firmensitz oder Frankfurt am Main.',
    ),
    p('Bei Zahlungsverzug werden alle offenen Forderungen sofort fällig.'),
    p(
      'Wir sind berechtigt, unser Eigentumsvorbehalt-Recht ohne vorherige Rücktrittserklärung auszuüben.',
    ),
    p('Alle Zahlungen sind ausschließlich an folgende Bankverbindung zu leisten:'),
    p('AKTIVBANK AG\nHerriotstraße 1\n60528 Frankfurt am Main'),
    p('Dorthin haben wir unsere gegenwärtigen und künftigen Forderungen abgetreten.'),
    p(
      'Aufrechnung durch den Kunden ist ausgeschlossen, außer bei unbestrittenen oder rechtskräftig festgestellten Forderungen.',
    ),
    p('Duisburg, 01.12.2025'),
  ],
};

export const TDB: LegalDoc = {
  title: 'Technische Datenblätter (TDB) erhalten',
  blocks: [
    h2('Deine Pflicht, unser Service'),
    p(
      'Als Gastronom bist du gesetzlich verpflichtet, technische Datenblätter (TDB) vor Ort bereitzuhalten. Diese Dokumente werden bei Kontrollen durch Lebensmittelüberwachung, Gesundheitsamt oder Berufsgenossenschaft verlangt und schützen dich im Falle von Rückfragen oder Haftungsthemen.',
    ),

    h2('Warum das wichtig ist'),
    p('Technische Datenblätter enthalten alle relevanten Informationen zu:'),
    ul([
      'Inhaltsstoffen und Allergenen',
      'Zusatz- und Konservierungsstoffen',
      'Nährwertangaben',
      'Lager- und Verarbeitungshinweisen',
      'Kennzeichnungspflichten (LMIV, LMHV)',
    ]),
    p('So kannst du jederzeit nachweisen, dass du alle gesetzlichen Anforderungen erfüllst.'),

    h2('Wir machen es dir einfach'),
    p(
      'Für alle Produkte, die du bei uns kaufst, stellen wir dir die passenden technischen und/oder Sicherheitsdatenblätter kostenfrei zur Verfügung. Du kannst sie jederzeit bei uns anfordern – schnell und unkompliziert:',
    ),
    {
      type: 'links',
      links: [
        { label: 'E-Mail', text: 'sales@sicitalia.eu', href: 'mailto:sales@sicitalia.eu' },
        { label: 'WhatsApp', text: '+49 1590 5730 547', href: 'https://wa.me/4915905730547' },
        { label: 'Telefon', text: '0800 76225 48 (= 0800 SNACK IT)', href: 'tel:+498007622548' },
      ],
    },

    h2('Unser Tipp'),
    p(
      'Bewahre die Datenblätter digital oder ausgedruckt im Betrieb auf. So hast du sie bei jeder Kontrolle direkt griffbereit – und bist immer auf der sicheren Seite.',
    ),
  ],
};

/** Zuordnung über `data.doc` in den Routen. */
export const LEGAL_DOCS: Record<string, LegalDoc> = {
  datenschutz: DATENSCHUTZ,
  agb: AGB,
  tdb: TDB,
};
