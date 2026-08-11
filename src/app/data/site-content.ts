export interface NavItem {
  path: string;
  label: string;
  external?: boolean;
}

export interface DownloadItem {
  title: string;
  file: string;
  image: string;
}

export interface ProductItem {
  title: string;
  image: string;
  description?: string;
}

export interface InstagramPost {
  image: string;
  alt: string;
}

export interface JobOpening {
  title: string;
  location: string;
  type: string;
  start: string;
  description: string;
  tasks: string[];
  profile: string[];
}

/** Zentrale Bild-Assets */
export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/geschaeftsfuehrer-cannoli.jpg',
  portrait: '/images/geschaeftsfuehrer-portrait.jpg',
  arancino: '/images/geschaeftsfuehrer-arancino.jpg',
  cornetti: '/images/geschaeftsfuehrer-cornetti.jpg',
  introCornetto: '/images/intro-cornetto.jpg',
  laPerfetta: '/images/la-perfetta-product.jpg',
  videoThumbnail: '/images/video-thumbnail.jpg',
  downloadsMenu: '/images/downloads-menu.jpg',
  downloadPraesentation: '/images/download-praesentation.jpg',
  downloadBindi: '/images/download-bindi-katalog.jpg',
  downloadPizzella: '/images/download-pizzella.jpg',
  downloadGelantine: '/images/download-gelantine.jpg',
  downloadAlkoholfrei: '/images/download-alkoholfrei.jpg',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Willkommen' },
  { path: '/gastrogeraete', label: 'Gastrogeräte' },
  { path: '/ueber-uns', label: 'Über uns' },
  { path: '/produkte', label: 'Produkte' },
  { path: '/la-perfetta', label: 'La Perfetta' },
  { path: '/termin', label: 'Termin buchen' },
  { path: '/kunde-werden', label: 'Kunde werden' },
  { path: '/karriere', label: 'Karriere' },
  { path: 'https://www.instagram.com/sicitalia/', label: 'Instagram', external: true },
];

/** Navigation links links vom Logo (Referenz-Layout) */
export const NAV_LEFT: NavItem[] = [
  { path: '/', label: 'Willkommen' },
  { path: '/produkte', label: 'Produkte' },
  { path: '/ueber-uns', label: 'Über uns' },
];

/** Navigation links rechts vom Logo */
export const NAV_RIGHT: NavItem[] = [
  { path: '/la-perfetta', label: 'La Perfetta' },
  { path: '/termin', label: 'Termin' },
  { path: '/kunde-werden', label: 'B2B' },
  { path: '/karriere', label: 'Karriere' },
  { path: 'https://www.instagram.com/sicitalia/', label: 'Instagram', external: true },
];

export const DOWNLOADS: DownloadItem[] = [
  {
    title: 'Präsentation Sicitalia',
    file: 'praesentation-sicitalia.pdf',
    image: IMAGES.downloadPraesentation,
  },
  {
    title: 'Bindi-Katalog',
    file: 'bindi-katalog.pdf',
    image: IMAGES.downloadBindi,
  },
  {
    title: 'Pizzella Katalog',
    file: 'pizzella-katalog.pdf',
    image: IMAGES.downloadPizzella,
  },
  {
    title: 'Bindi Artikelliste Gelantine',
    file: 'bindi-gelantine.pdf',
    image: IMAGES.downloadGelantine,
  },
  {
    title: 'Bindi Artikelliste Alkoholfrei',
    file: 'bindi-alkoholfrei.pdf',
    image: IMAGES.downloadAlkoholfrei,
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    title: 'La Perfetta Premium Pizzabasen',
    image: '/images/produkt-pizzabasen.jpg',
    description: 'Authentische vorgebackene Pizzabasen – schnell belegt, perfekt gebacken.',
  },
  {
    title: 'Pasticceria Konditorei',
    image: '/images/produkt-pasticceria.jpg',
    description: 'Exquisite Backwaren und Desserts für Ihre Konditorei.',
  },
  {
    title: 'Arancini Siciliani',
    image: '/images/produkt-arancini.jpg',
    description: 'Traditionelle sicilianische Reisbällchen – knusprig und aromatisch.',
  },
  {
    title: 'Streetfood',
    image: '/images/produkt-streetfood.jpg',
    description: 'Italienische Streetfood-Klassiker für Foodtrucks und Events.',
  },
  {
    title: 'Gelateria Eisdiele',
    image: '/images/produkt-gelateria.jpg',
    description: 'Premium-Eisprodukte für Ihre Eisdiele.',
  },
  {
    title: 'Cannoli Siciliani',
    image: '/images/produkt-cannoli.jpg',
    description: 'Original sicilianische Cannoli – knusprig, cremig, unvergleichlich.',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    image: '/images/instagram-1.jpg',
    alt: 'Frische Pizza – La Perfetta für deine Karte',
  },
  {
    image: '/images/instagram-2.jpg',
    alt: 'Italienisches Frühstück mit Cornetti',
  },
  {
    image: '/images/instagram-3.jpg',
    alt: 'Pasta und mediterrane Zutaten',
  },
  {
    image: '/images/instagram-4.jpg',
    alt: 'Cremiges Gelato aus der Gelateria-Linie',
  },
  {
    image: '/images/instagram-5.jpg',
    alt: 'Süße Klassiker aus der Pasticceria',
  },
];

export const LEGAL_LINKS = [
  { label: 'Technische Datenblätter (TDB) erhalten', href: '/tdb' },
  { label: 'Datenschutzerklärung', href: '/datenschutz' },
  { label: 'Barrierefreiheitserklärung', href: '/barrierefreiheit' },
  { label: 'Versandrichtlinie', href: '/versand' },
  { label: 'Allgemeine Geschäftsbedingungen', href: '/agb' },
  { label: 'Rückerstattungsrichtlinie', href: '/rueckerstattung' },
];

export const CONTACT = {
  email: 'info@sicitalia.eu',
  name: 'Carmelo Marotta',
  role: 'Geschäftsführer & Gründer',
  address: 'Beckerfelder Str. 96, 47269 Duisburg',
  phone: '0800 SNACK-IT / 0800 762 2548',
  whatsapp: '0049-178 35 72 191',
  whatsappLink: 'https://wa.me/491783572191',
  instagram: 'https://www.instagram.com/sicitalia/',
  facebook: 'https://www.facebook.com/sicitalia/',
  youtubeVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  quote:
    '„Als Italiener in Deutschland kenne ich das Gefühl – den echten Süden vermissen. Genau deshalb haben wir Sicitalia gegründet: Damit Du Deinen Gästen echte Genussmomente schenken kannst."',
};

export const TRUST_STATS = [
  { value: '100%', label: 'Italienische Qualität' },
  { value: 'NRW', label: 'Standort & Herz' },
  { value: 'DE-weit', label: 'Lieferung' },
];

export const HIGHLIGHTS = [
  { emoji: '🥐', title: 'Cornetti & Babà', desc: 'Frisch, knusprig, authentisch' },
  { emoji: '🍕', title: 'La Perfetta', desc: 'Pizza in Minuten auf der Karte' },
  { emoji: '🍨', title: 'Gelateria', desc: 'Premium-Eis für Deine Theke' },
  { emoji: '🫔', title: 'Cannoli', desc: 'Sizilianische Klassiker' },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    title: 'Außendienstmitarbeiter/in Gastronomie (m/w/d)',
    location: 'NRW – Schwerpunkt Rhein-Ruhr',
    type: 'Vollzeit',
    start: 'Ab sofort',
    description:
      'Du bringst italienischen Genuss direkt zu Gastronomen und Händlern – mit Beratung, die überzeugt und Beziehungen, die bleiben.',
    tasks: [
      'Betreuung und Ausbau des bestehenden Kundenstamms in der Gastronomie',
      'Präsentation unseres Sortiments vor Ort und auf Messen',
      'Enge Zusammenarbeit mit dem Innendienst und der Logistik',
    ],
    profile: [
      'Erfahrung im Lebensmittel- oder Gastronomie-Außendienst',
      'Leidenschaft für italienische Produkte und gutes Essen',
      'Reisebereitschaft in NRW und angrenzenden Regionen',
    ],
  },
  {
    title: 'Lagerist/in & Kommissionierung (m/w/d)',
    location: 'Duisburg',
    type: 'Vollzeit',
    start: 'Ab sofort',
    description:
      'In unserem Lager in Duisburg sorgst du dafür, dass Cornetti, Cannoli und La Perfetta pünktlich bei unseren Kunden ankommen.',
    tasks: [
      'Warenannahme, Kontrolle und Einlagerung',
      'Kommissionierung und Versandvorbereitung',
      'Mitarbeit bei Inventur und Qualitätssicherung',
    ],
    profile: [
      'Erfahrung im Lager oder in der Logistik von Vorteil',
      'Sorgfältige und zuverlässige Arbeitsweise',
      'Teamfähigkeit und körperliche Belastbarkeit',
    ],
  },
  {
    title: 'Marketing & Social Media (m/w/d)',
    location: 'Duisburg / Hybrid',
    type: 'Teilzeit (20–30 Std.)',
    start: 'Nach Vereinbarung',
    description:
      'Du erzählst die Geschichte von Sicitalia – auf Instagram, in Newslettern und auf unserer Website. Authentisch, appetitlich, nah am Produkt.',
    tasks: [
      'Planung und Umsetzung von Social-Media-Inhalten',
      'Unterstützung bei Newsletter, Website und Kampagnen',
      'Enge Abstimmung mit Geschäftsführung und Außendienst',
    ],
    profile: [
      'Erfahrung in Social Media, Content oder Marketing',
      'Gespür für Food, Gastronomie und visuelle Storytelling',
      'Sicher in Deutsch; Italienisch ist ein Plus',
    ],
  },
];
