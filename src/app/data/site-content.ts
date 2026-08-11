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

/** Zentrale Bild-Assets aus den Original-Screenshots */
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
} as const;

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Willkommen' },
  { path: '/gastrogeraete', label: 'Gastrogeräte' },
  { path: '/ueber-uns', label: 'Über uns' },
  { path: '/produkte', label: 'Produkte' },
  { path: '/la-perfetta', label: 'La Perfetta' },
  { path: '/termin', label: 'Termin buchen' },
  { path: '/kunde-werden', label: 'Kunde werden' },
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
  { path: 'https://www.instagram.com/sicitalia/', label: 'Instagram', external: true },
];

export const DOWNLOADS: DownloadItem[] = [
  {
    title: 'Präsentation Sicitalia',
    file: 'praesentation-sicitalia.pdf',
    image: IMAGES.downloadsMenu,
  },
  { title: 'Bindi-Katalog', file: 'bindi-katalog.pdf', image: IMAGES.downloadsMenu },
  { title: 'Pizzella Katalog', file: 'pizzella-katalog.pdf', image: IMAGES.downloadsMenu },
  {
    title: 'Bindi Artikelliste Gelantine',
    file: 'bindi-gelantine.pdf',
    image: IMAGES.downloadsMenu,
  },
  {
    title: 'Bindi Artikelliste Alkoholfrei',
    file: 'bindi-alkoholfrei.pdf',
    image: IMAGES.downloadsMenu,
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
    alt: 'Pinza – vielseitiges Produkt für Ihr Lokal',
  },
  {
    image: '/images/instagram-2.jpg',
    alt: 'Sicitalia – Ihr Partner für Wachstum',
  },
  {
    image: '/images/instagram-3.jpg',
    alt: 'Wie gut kennst du Sicitalia?',
  },
  {
    image: '/images/instagram-4.jpg',
    alt: 'Die neue Eis-Linie',
  },
  {
    image: '/images/instagram-5.jpg',
    alt: 'Linea Pasticcera – Dolce Vita zum Selbermachen',
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
