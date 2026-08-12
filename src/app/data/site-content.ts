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

export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  detailImage?: string;
  highlights?: string[];
}

export interface CatalogProduct {
  id: string;
  categoryId: string;
  seriesId?: string;
  line?: string;
  name: string;
  tagline?: string;
  coverImage: string;
  gallery: string[];
  variants?: ProductVariant[];
  description: string;
  features?: string[];
  readyToServe?: boolean;
}

export interface ProductSeries {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  coverImage: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  coverImage: string;
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
  dolceVitaMonoRange: '/images/dolce-vita-mono-cannoli-range.png',
  cannoloRicottaDetail: '/images/cannolo-ricotta-detail.png',
  cannoloPistacchioDetail: '/images/cannolo-pistacchio-detail.png',
  sfogliatellaDetail: '/images/sfogliatella-napolitana-detail.png',
  dolceVitaMonoBabaMaritozzo: '/images/dolce-vita-mono-baba-maritozzo-range.png',
  dolceVitaMonoSfogliatellaFrolla: '/images/dolce-vita-mono-sfogliatella-frolla-range.png',
  dolceVitaMonoCassatinaSacher: '/images/dolce-vita-mono-cassatina-sacher-range.png',
  dolceVitaMonoPasticciottoTortino: '/images/dolce-vita-mono-pasticciotto-tortino-range.png',
  glutenfreieLineRange: '/images/glutenfreie-line-range.png',
  frittoMistoHero: '/images/fritto-misto-napoli-hero.png',
  frittoMistoSpecialties: '/images/fritto-misto-specialties.png',
} as const;

export const HERO_KEYWORDS = [
  'La Perfetta Pizzabasen',
  'Cannoli Siciliani',
  'Cornetti & Babà',
  'Premium Gelato',
  'Arancini Classici',
  'Italienisches Streetfood',
  'Pasticceria di Qualità',
  'Lieferung deutschlandweit',
];

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

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'pasticceria',
    name: 'Pasticceria & Dolce',
    description:
      'Servierfertige Feinkost aus Sizilien – perfekt für Cafés, Bistros und Dessertkarten in der Gastronomie.',
    coverImage: IMAGES.dolceVitaMonoRange,
  },
  {
    id: 'la-perfetta',
    name: 'La Perfetta Pizzabasen',
    description: 'Authentische Pizzabasen – schnell belegt, perfekt gebacken, sofort auf der Karte.',
    coverImage: IMAGES.laPerfetta,
  },
  {
    id: 'gelateria',
    name: 'Gelateria',
    description: 'Premium-Eis und Dessertbegleiter für Eisdielen, Cafés und Feinkosttheken.',
    coverImage: '/images/produkt-gelateria.jpg',
  },
  {
    id: 'fritto-misto',
    name: 'Fritto Misto',
    description:
      'Neapolitanische Frittier-Spezialitäten – der Geschmack der Tradition, in wenigen Minuten servierbereit für Gastronomie, Bistros und Cafés.',
    coverImage: IMAGES.frittoMistoHero,
  },
  {
    id: 'streetfood',
    name: 'Streetfood & Salato',
    description: 'Arancini, Snacks und warme Klassiker für Gastro, Bistros und Events.',
    coverImage: '/images/produkt-arancini.jpg',
  },
];

export const PRODUCT_SERIES: ProductSeries[] = [
  {
    id: 'dolce-vita-mono',
    categoryId: 'pasticceria',
    name: 'Dolce Vita Mono',
    description:
      'Servierfertige Mono-Portionen aus der italienischen Pasticceria – perfekt portioniert für Cafés, Bistros und Dessertkarten in der Gastronomie.',
    coverImage: IMAGES.dolceVitaMonoRange,
  },
  {
    id: 'glutenfreie-line',
    categoryId: 'pasticceria',
    name: 'Glutenfreie Line',
    description:
      'Glutenfreie Dessert-Mono-Portionen für Gastronomie und Cafés – servierfertig, hochwertig und ideal für Gäste mit besonderen Ernährungsbedürfnissen.',
    coverImage: IMAGES.glutenfreieLineRange,
  },
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'dolce-vita-mono-cannoli',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Cannolo Siciliano',
    tagline: 'Zwei Varianten · Original aus Sizilien',
    coverImage: IMAGES.dolceVitaMonoRange,
    gallery: [
      IMAGES.dolceVitaMonoRange,
      IMAGES.cannoloRicottaDetail,
      IMAGES.cannoloPistacchioDetail,
    ],
    variants: [
      {
        id: 'cannolo-ricotta',
        name: 'Cannolo Siciliano alla Ricotta',
        image: IMAGES.cannoloRicottaDetail,
        detailImage: IMAGES.cannoloRicottaDetail,
        highlights: ['Ricotta-Creme', 'Kandierte Orangenstückchen', 'Knusprige Cannolo-Hülle'],
      },
      {
        id: 'cannolo-pistacchio',
        name: 'Cannolo Siciliano al Pistacchio',
        image: IMAGES.cannoloPistacchioDetail,
        detailImage: IMAGES.cannoloPistacchioDetail,
        highlights: ['Pistazien-Ricottacreme', 'Gehackte Pistazien', 'Knusprige Cannolo-Hülle'],
      },
    ],
    description:
      'Knusprige Hülle, cremige Füllung, servierfertig portioniert – ideal für Cafés, Bistros und Dessertkarten. Wähle Ricotta oder Pistacchio und überzeuge deine Gäste mit echtem sizilianischem Cannolo-Genuss.',
    features: ['Mono-Portion servierfertig', 'Zwei Geschmacksvarianten', 'Frisch & original'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-sfogliatella',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Sfogliatella Napoletana',
    tagline: 'Hauchdünn · Knusprig · Cremig gefüllt',
    coverImage: IMAGES.sfogliatellaDetail,
    gallery: [IMAGES.sfogliatellaDetail, IMAGES.dolceVitaMonoSfogliatellaFrolla],
    description:
      'Die klassische neapolitanische Sfogliatella mit hauchdünnen, knusprigen Blättern und cremiger Ricotta-Grieß-Füllung – goldbraun gebacken und servierfertig für deine Theke.',
    features: ['Knusprige Blätterteig-Schichten', 'Cremige Ricotta-Grieß-Füllung', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-frolla-grande',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Frolla Grande',
    tagline: 'Mürbeteig · Cremige Füllung · Fruchtig',
    coverImage: IMAGES.dolceVitaMonoSfogliatellaFrolla,
    gallery: [IMAGES.dolceVitaMonoSfogliatellaFrolla, IMAGES.sfogliatellaDetail],
    description:
      'Großzügige Mürbeteig-Spezialität mit cremiger Füllung und kandierten Fruchtstücken – ein süßer Klassiker für Café, Bistros und Dessertangebote.',
    features: ['Buttrig-mürber Teig', 'Cremige Füllung', 'Servierfertig portioniert'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-baba',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Babà Napoletano',
    tagline: 'Weich · Aromatisch · Mit Kirsch',
    coverImage: IMAGES.dolceVitaMonoBabaMaritozzo,
    gallery: [IMAGES.dolceVitaMonoBabaMaritozzo],
    description:
      'Der neapolitanische Klassiker: weicher, aromatischer Babà mit cremiger Füllung und Kirsch – servierfertig und perfekt für die Gastronomie.',
    features: ['Traditionelles Rezept', 'Cremige Füllung', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-maritozzo',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Maritozzo con Panna',
    tagline: 'Weiches Brioche · Frische Sahne',
    coverImage: IMAGES.dolceVitaMonoBabaMaritozzo,
    gallery: [IMAGES.dolceVitaMonoBabaMaritozzo],
    description:
      'Weiches Brioche-Brötchen mit frischer Sahne – ein römischer Frühstücks- und Dessertklassiker, servierfertig für Cafés und Bistros.',
    features: ['Weicher Brioche-Teig', 'Frische Sahne', 'Ideal fürs Frühstück & Café'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-cassatina',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Cassatina Monoporzione',
    tagline: 'Sizilianisch · Marzipan · Kandierte Früchte',
    coverImage: IMAGES.dolceVitaMonoCassatinaSacher,
    gallery: [IMAGES.dolceVitaMonoCassatinaSacher],
    description:
      'Die kleine sizilianische Cassata in Mono-Portion: grünes Marzipan, cremige Füllung und kandierte Früchte – ein echter Klassiker für Dessertkarten.',
    features: ['Sizilianische Spezialität', 'Marzipanüberzug', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-sacher',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Mono Sacher',
    tagline: 'Dunkle Schokolade · Cremige Füllung',
    coverImage: IMAGES.dolceVitaMonoCassatinaSacher,
    gallery: [IMAGES.dolceVitaMonoCassatinaSacher],
    description:
      'Kompakte Sacher-Torte in Mono-Portion mit glänzender Schokoladenglasur und cremiger Füllung – elegant und servierfertig für Cafés und Bistros.',
    features: ['Intensive Schokolade', 'Cremige Füllung', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-pasticciotto',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Pasticciotto Leccese Crema',
    tagline: 'Apulien · Cremig · Mit Amarena-Kirsche',
    coverImage: IMAGES.dolceVitaMonoPasticciottoTortino,
    gallery: [IMAGES.dolceVitaMonoPasticciottoTortino],
    description:
      'Der apulische Klassiker aus Lecce: goldener Mürbeteig mit cremiger Vanillecreme und Amarena-Kirsche – servierfertig für deine Gastronomie.',
    features: ['Apulische Spezialität', 'Cremige Vanillecreme', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'dolce-vita-mono-tortino-frutta-secca',
    categoryId: 'pasticceria',
    seriesId: 'dolce-vita-mono',
    name: 'Tortino Frutta Secca',
    tagline: 'Nussmix · Karamell · Mürbeteig',
    coverImage: IMAGES.dolceVitaMonoPasticciottoTortino,
    gallery: [IMAGES.dolceVitaMonoPasticciottoTortino],
    description:
      'Runder Mürbeteig-Tortino mit glasiertem Nussmix aus Mandeln, Walnüssen und Haselnüssen – reichhaltig, aromatisch und servierfertig.',
    features: ['Gehaltvoller Nussmix', 'Karamellglasur', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'glutenfreie-line-tiramisu',
    categoryId: 'pasticceria',
    seriesId: 'glutenfreie-line',
    name: 'Tiramisu Laktosefrei',
    tagline: 'Glutenfrei · Laktosefrei · Cremig',
    coverImage: IMAGES.glutenfreieLineRange,
    gallery: [IMAGES.glutenfreieLineRange],
    description:
      'Klassisches Tiramisu in Mono-Portion – glutenfrei und laktosefrei, mit cremigen Schichten und Kakaonote. Servierfertig für Cafés, Bistros und Dessertkarten.',
    features: ['Glutenfrei', 'Laktosefrei', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'glutenfreie-line-yogurt-frutti',
    categoryId: 'pasticceria',
    seriesId: 'glutenfreie-line',
    name: 'Yogurt Frutti di Bosco',
    tagline: 'Glutenfrei · Beerig · Frisch',
    coverImage: IMAGES.glutenfreieLineRange,
    gallery: [IMAGES.glutenfreieLineRange],
    description:
      'Leichte Joghurt-Creme mit Waldfrüchten auf glutenfreiem Boden – fruchtig, elegant und servierfertig für deine Gastronomie.',
    features: ['Glutenfrei', 'Mit Waldfrüchten', 'Mono-Portion servierfertig'],
    readyToServe: true,
  },
  {
    id: 'la-perfetta-basen',
    categoryId: 'la-perfetta',
    line: 'La Perfetta',
    name: 'Premium Pizzabasen',
    tagline: 'Pizza in Minuten auf der Karte',
    coverImage: IMAGES.laPerfetta,
    gallery: [IMAGES.laPerfetta, '/images/produkt-pizzabasen.jpg', '/images/instagram-1.jpg'],
    description:
      'Vorgebackene Premium-Pizzabasen für Gastronomie und Bistros – schnell belegt, perfekt gebacken, authentischer Geschmack ohne großen Aufwand.',
    features: ['Zeitersparnis in der Küche', 'Konstante Qualität', 'Flexibel belegbar'],
    readyToServe: true,
  },
  {
    id: 'gelateria-line',
    categoryId: 'gelateria',
    line: 'Gelateria Sicitalia',
    name: 'Premium Gelato & Desserts',
    tagline: 'Cremig · Intensiv · Für Eisdielen & Cafés',
    coverImage: '/images/produkt-gelateria.jpg',
    gallery: ['/images/produkt-gelateria.jpg', '/images/instagram-4.jpg'],
    description:
      'Premium-Eisprodukte und Dessertbegleiter für Eisdielen, Cafés und Feinkosthandel – italienische Qualität für deine Theke.',
    features: ['Sortimentsvielfalt', 'Gastro-tauglich', 'Italienische Rezeptur'],
    readyToServe: true,
  },
  {
    id: 'fritto-misto-kroketten-mozzarella',
    categoryId: 'fritto-misto',
    name: 'Kroketten mit Mozzarella',
    tagline: 'Knusprig · Cremig · Napoli',
    coverImage: IMAGES.frittoMistoSpecialties,
    gallery: [IMAGES.frittoMistoSpecialties, IMAGES.frittoMistoHero],
    description:
      'Goldbraune Kroketten mit geschmolzenem Mozzarella – knusprig außen, cremig innen. Teil unseres Fritto Misto Napoli Sortiments für warme Küche und Snackangebote.',
    features: ['2 × 2500 g pro Karton', '18 Min. bei 210 °C', 'Tiefgekühlt'],
    readyToServe: true,
  },
  {
    id: 'fritto-misto-4-kaese',
    categoryId: 'fritto-misto',
    name: '4 Käse',
    tagline: 'Cremig · Intensiv · Gebacken',
    coverImage: IMAGES.frittoMistoSpecialties,
    gallery: [IMAGES.frittoMistoSpecialties, IMAGES.frittoMistoHero],
    description:
      'Runde Frittier-Spezialität mit cremiger Vier-Käse-Füllung – reichhaltig, aromatisch und in wenigen Minuten servierbereit.',
    features: ['2 × 2500 g pro Karton', '18 Min. bei 210 °C', 'Tiefgekühlt'],
    readyToServe: true,
  },
  {
    id: 'fritto-misto-spaghetti-omelett',
    categoryId: 'fritto-misto',
    name: 'Spaghetti-Omelett',
    tagline: 'Originell · Herzhaft · Neapolitanisch',
    coverImage: IMAGES.frittoMistoSpecialties,
    gallery: [IMAGES.frittoMistoSpecialties, IMAGES.frittoMistoHero],
    description:
      'Frittiertes Spaghetti-Omelett in halbmondförmiger Form – ein echter Neapolitaner Klassiker für Bistros, Cafés und warme Snackkarten.',
    features: ['2 × 2500 g pro Karton', '18 Min. bei 210 °C', 'Tiefgekühlt'],
    readyToServe: true,
  },
  {
    id: 'fritto-misto-arancino-sauce',
    categoryId: 'fritto-misto',
    name: 'Arancino mit Sauce',
    tagline: 'Ragù · Erbsen · Knusprig',
    coverImage: IMAGES.frittoMistoSpecialties,
    gallery: [IMAGES.frittoMistoSpecialties, IMAGES.frittoMistoHero],
    description:
      'Klassischer Arancino mit herzhafter Sauce, Ragù und Erbsen – knusprig paniert und perfekt für die Gastronomie portionierbar.',
    features: ['2 × 2500 g pro Karton', '18 Min. bei 210 °C', 'Tiefgekühlt'],
    readyToServe: true,
  },
  {
    id: 'fritto-misto-calzone-ricotta-schinken',
    categoryId: 'fritto-misto',
    name: 'Calzone mit Ricotta & Schinken',
    tagline: 'Herzhaft · Gefüllt · Frittiert',
    coverImage: IMAGES.frittoMistoSpecialties,
    gallery: [IMAGES.frittoMistoSpecialties, IMAGES.frittoMistoHero],
    description:
      'Kleines frittiertes Calzone mit Ricotta und Schinken – herzhaft, aromatisch und schnell auf den Tisch gebracht.',
    features: ['2 × 2500 g pro Karton', '18 Min. bei 210 °C', 'Tiefgekühlt'],
    readyToServe: true,
  },
  {
    id: 'arancini-siciliani',
    categoryId: 'streetfood',
    line: 'Salato Siciliano',
    name: 'Arancini Siciliani',
    tagline: 'Knusprig · Aromatisch · Streetfood-Klassiker',
    coverImage: '/images/produkt-arancini.jpg',
    gallery: ['/images/produkt-arancini.jpg', IMAGES.arancino],
    description:
      'Traditionelle sicilianische Reisbällchen – knusprig außen, aromatisch innen. Perfekt für Bistros, Snackbars und warme Küche.',
    features: ['Warm servierbar', 'Beliebter Snack', 'Authentisch sizilianisch'],
    readyToServe: true,
  },
  {
    id: 'streetfood-classics',
    categoryId: 'streetfood',
    line: 'Streetfood',
    name: 'Italienische Streetfood-Klassiker',
    tagline: 'Für Foodtrucks, Bistros & Events',
    coverImage: '/images/produkt-streetfood.jpg',
    gallery: ['/images/produkt-streetfood.jpg', '/images/instagram-3.jpg'],
    description:
      'Italienische Streetfood-Klassiker für Foodtrucks, Bistros und Events – originell, schnell servierbar und perfekt für deine Gäste.',
    features: ['Event-tauglich', 'Schnelle Ausgabe', 'Süditalien im Snack'],
    readyToServe: true,
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
