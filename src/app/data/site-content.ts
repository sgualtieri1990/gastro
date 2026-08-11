export interface NavItem {
  path: string;
  label: string;
  external?: boolean;
}

export interface DownloadItem {
  title: string;
  file: string;
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

export const DOWNLOADS: DownloadItem[] = [
  { title: 'Präsentation Sicitalia', file: 'praesentation-sicitalia.pdf' },
  { title: 'Bindi-Katalog', file: 'bindi-katalog.pdf' },
  { title: 'Pizzella Katalog', file: 'pizzella-katalog.pdf' },
  { title: 'Bindi Artikelliste Gelantine', file: 'bindi-gelantine.pdf' },
  { title: 'Bindi Artikelliste Alkoholfrei', file: 'bindi-alkoholfrei.pdf' },
];

export const PRODUCTS: ProductItem[] = [
  {
    title: 'La Perfetta Premium Pizzabasen',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
    description: 'Authentische vorgebackene Pizzabasen – schnell belegt, perfekt gebacken.',
  },
  {
    title: 'Pasticceria Konditorei',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    description: 'Exquisite Backwaren und Desserts für Ihre Konditorei.',
  },
  {
    title: 'Arancini Siciliani',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
    description: 'Traditionelle sicilianische Reisbällchen – knusprig und aromatisch.',
  },
  {
    title: 'Streetfood',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    description: 'Italienische Streetfood-Klassiker für Foodtrucks und Events.',
  },
  {
    title: 'Gelateria Eisdiele',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    description: 'Premium-Eisprodukte für Ihre Eisdiele.',
  },
  {
    title: 'Cannoli Siciliani',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&q=80',
    description: 'Original sicilianische Cannoli – knusprig, cremig, unvergleichlich.',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80',
    alt: 'Pinza – vielseitiges Produkt für Ihr Lokal',
  },
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    alt: 'Sicitalia – Ihr Partner für Wachstum',
  },
  {
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80',
    alt: 'Wie gut kennst du Sicitalia?',
  },
  {
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
    alt: 'Die neue Eis-Linie',
  },
  {
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80',
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
  address: 'Beckerfelder Str. 96, 47269 Duisburg',
  phone: '0800 SNACK-IT / 0800 762 2548',
  whatsapp: '0049-178 35 72 191',
  whatsappLink: 'https://wa.me/491783572191',
  instagram: 'https://www.instagram.com/sicitalia/',
  facebook: 'https://www.facebook.com/sicitalia/',
  youtubeVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
};
