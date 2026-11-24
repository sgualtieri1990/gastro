export interface NavItem {
  path: string;
  label: string;
  external?: boolean;
  fragment?: string;
  scrollBlock?: ScrollLogicalPosition;
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

export interface InstagramReel {
  id: string;
  episode: number;
  title: string;
  subtitle?: string;
  thumbnail: string;
  reelUrl: string;
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
  gelateria: '/images/gelateria-gelati.jpg',
} as const;

export const HERO_KEYWORDS = [
  'Import, Lager und Distribution aus einer Hand',
  'B2B-Lieferant für Gastronomie & Handel',
  'Erster Lieferant deutschlandweit für Arancini, Cannoli und Cornetti',
];

export interface KingProduct {
  id: string;
  rank: string;
  name: string;
  tagline: string;
  description: string;
  image?: string;
  emoji: string;
  delivered: number;
  facts: string[];
}

/** Unsere Bestseller – Hauptprodukte der Startseite */
export const KING_PRODUCTS: KingProduct[] = [
  {
    id: 'cornetti',
    rank: 'I',
    name: 'Cornetti',
    tagline: 'Der Star am Morgen',
    description:
      'Buttrig, luftig, goldbraun – italienische Cornetti, die Dein Frühstück und Deine Café-Theke zum Highlight machen.',
    image: '/images/king-cornetto.png',
    emoji: '🥐',
    delivered: 10000,
    facts: ['Fertig in Minuten', 'Gefüllt & klassisch', 'Top-Marge am Morgen'],
  },
  {
    id: 'cannoli',
    rank: 'II',
    name: 'Cannoli',
    tagline: 'Das Original aus Sizilien',
    description:
      'Knusprige Hülle, cremige Ricotta- oder Pistazienfüllung – der sizilianische Dessert-Klassiker, servierfertig für Deine Karte.',
    image: '/images/king-cannolo.png',
    emoji: '🇮🇹',
    delivered: 12000,
    facts: ['Ricotta & Pistacchio', 'Servierfertig', 'Dessert-Bestseller'],
  },
  {
    id: 'arancini',
    rank: 'III',
    name: 'Arancini',
    tagline: 'Streetfood-Legende',
    description:
      'Knusprig paniert, herzhaft gefüllt mit Ragù und Erbsen – die sizilianische Reisspezialität für Bistro, Snackbar und warme Küche.',
    image: '/images/king-arancino.png',
    emoji: '🍙',
    delivered: 8500,
    facts: ['18 Min. bei 210 °C', 'Tiefgekühlt lieferbar', 'Snack-Bestseller'],
  },
];

/** Exklusiver Partner – Pizzella */
export const PIZZELLA = {
  name: 'Pizzella',
  badge: 'Das Pizzella-System',
  title: 'Ein einzigartiges Produkt',
  description:
    'Pizzella wird nach strengsten handwerklichen Regeln hergestellt, wobei nur ausgewählte Mehle und hochwertige Zutaten verwendet werden.',
  image: '/images/pizzella-bereich.png',
  catalogFile: 'pizzella-katalog.pdf',
  benefits: [
    'Handgefertigte Zubereitung',
    'Langsame, natürliche Teigführung',
    'Weniger als 0,2 % Hefe',
    'Feines Steinbacken',
    'Natürliches Gefrierverfahren',
    'Ohne Zusatz von Konservierungsstoffen',
  ],
};

/** Vorteile für B2B-Kunden – Fokus: digitaler Katalog mit Preisliste */
export const B2B_BENEFITS = [
  {
    title: 'Digitaler Katalog',
    desc: 'Alle Produkte mit Bildern, Gebinden & Zubereitung – jederzeit auf dem Handy.',
  },
  {
    title: 'Exklusive Preisliste',
    desc: 'Deine Konditionen auf einen Blick – nur für registrierte Kunden.',
  },
  {
    title: 'Lieferung deutschlandweit',
    desc: 'Tiefgekühlt und zuverlässig – direkt zu Deinem Betrieb.',
  },
  {
    title: 'Neuheiten zuerst',
    desc: 'Neue Produkte, Aktionen & Pizzella-Exklusives vor allen anderen.',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Sicitalia' },
  { path: '/', label: 'Bestseller', fragment: 'bestseller' },
  { path: '/', label: 'Lieferung', fragment: 'liefernetz' },
  { path: '/', label: 'Kunde werden', fragment: 'kunde-werden' },
  { path: '/produktportfolio', label: 'Portfolio' },
  { path: '/', label: 'Geschichte', fragment: 'ueber-uns' },
  { path: '/', label: 'Pizzella', fragment: 'pizzella' },
  { path: '/', label: 'Termin vereinbaren', fragment: 'video-call' },
];

/** Navigation links links vom Logo */
export const NAV_LEFT: NavItem[] = [
  { path: '/', label: 'Sicitalia' },
  { path: '/', label: 'Bestseller', fragment: 'bestseller' },
  { path: '/', label: 'Lieferung', fragment: 'liefernetz' },
  { path: '/', label: 'Kunde werden', fragment: 'kunde-werden' },
];

/** Navigation links rechts vom Logo */
export const NAV_RIGHT: NavItem[] = [
  { path: '/produktportfolio', label: 'Portfolio' },
  { path: '/', label: 'Geschichte', fragment: 'ueber-uns' },
  { path: '/', label: 'Pizzella', fragment: 'pizzella' },
  { path: '/', label: 'Termin vereinbaren', fragment: 'video-call' },
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
    title: 'Bindi Artikelliste Gelatine',
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
    title: 'Pasticceria Konditorei',
    image: '/images/produkt-pasticceria.jpg',
    description: 'Exquisite Backwaren und Desserts für Ihre Konditorei.',
  },
  {
    title: 'Arancini Siciliani',
    image: '/images/produkt-arancini.jpg',
    description: 'Traditionelle sizilianische Reisbällchen – knusprig und aromatisch.',
  },
  {
    title: 'Streetfood',
    image: '/images/produkt-streetfood.jpg',
    description: 'Italienische Streetfood-Klassiker für Foodtrucks und Events.',
  },
  {
    title: 'Gelateria Eisdiele',
    image: IMAGES.gelateria,
    description: 'Premium-Eisprodukte für Ihre Eisdiele.',
  },
  {
    title: 'Cannoli Siciliani',
    image: '/images/produkt-cannoli.jpg',
    description: 'Original sizilianische Cannoli – knusprig, cremig, unvergleichlich.',
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
    id: 'gelateria',
    name: 'Gelateria',
    description: 'Premium-Eis und Dessertbegleiter für Eisdielen, Cafés und Feinkosttheken.',
    coverImage: IMAGES.gelateria,
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
    id: 'gelateria-line',
    categoryId: 'gelateria',
    line: 'Gelateria Sicitalia',
    name: 'Premium Gelato & Desserts',
    tagline: 'Cremig · Intensiv · Für Eisdielen & Cafés',
    coverImage: IMAGES.gelateria,
    gallery: [IMAGES.gelateria],
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
      'Traditionelle sizilianische Reisbällchen – knusprig außen, aromatisch innen. Perfekt für Bistros, Snackbars und warme Küche.',
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

export const INSTAGRAM_REEL_SERIES = 'DIY Pasticceria';

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'folge-1',
    episode: 1,
    title: 'Qualität am Teig',
    subtitle: 'Carmelo prüft jede Charge – authentisch, luftig, servierfertig.',
    thumbnail: '/images/instagram-reel-folge-1.jpg',
    reelUrl: 'https://www.instagram.com/sicitalia/reels/',
    alt: 'Instagram Reel Folge 1 – Teigqualität',
  },
  {
    id: 'folge-2',
    episode: 2,
    title: 'Behind the Scenes – Zutaten & Handwerk',
    subtitle: 'Ein Blick in die Produktion: echte Zutaten, echte italienische Handarbeit.',
    thumbnail: '/images/instagram-reel-folge-2.jpg',
    reelUrl: 'https://www.instagram.com/sicitalia/reels/',
    alt: 'Instagram Reel Folge 2 – Zutaten und Handwerk',
  },
  {
    id: 'folge-3',
    episode: 3,
    title: 'In der Produktion – Küche & Team',
    subtitle: 'Wo Sicitalia-Qualität entsteht – hinter den Kulissen in der Küche.',
    thumbnail: '/images/instagram-reel-folge-3.jpg',
    reelUrl: 'https://www.instagram.com/sicitalia/reels/',
    alt: 'Instagram Reel Folge 3 – Küche und Team',
  },
  {
    id: 'folge-4',
    episode: 4,
    title: 'Pasticceria – Süße Highlights',
    subtitle: 'Dessert-Klassiker und süße Momente für deine Gäste.',
    thumbnail: '/images/instagram-reel-folge-4.jpg',
    reelUrl: 'https://www.instagram.com/sicitalia/reels/',
    alt: 'Instagram Reel Folge 4 – Pasticceria Highlights',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    image: '/images/instagram-1.jpg',
    alt: 'Frische Pizza für deine Karte',
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
  street: 'Beckerfelder Str. 96',
  zipCity: '47269 Duisburg',
  phone: '+49 178 357 2191',
  phoneHref: 'tel:+491783572191',
  whatsapp: '+49 178 357 2191',
  whatsappLink: 'https://wa.me/491783572191',
  instagram: 'https://www.instagram.com/sicitalia/',
  facebook: 'https://www.facebook.com/sicitalia/',
  youtubeVideo: 'https://www.youtube-nocookie.com/embed/2tfmFIvD4Ls',
  quote:
    '„Als Italiener in Deutschland kenne ich das Gefühl – den echten Süden vermissen. Genau deshalb haben wir Sicitalia gegründet: Damit Du Deinen Gästen echte Genussmomente schenken kannst."',
};

/** Kennzahlen auf der Startseite (animiert hochgezählt) */
export const HOME_STATS = [
  { value: 2009, prefix: 'seit ', suffix: '', label: 'Erfolgreich am Markt' },
  { value: 1000, prefix: '', suffix: '+', label: 'Gastronomie- & Handelskunden' },
  { value: 16, prefix: '', suffix: '', label: 'Bundesländer beliefert' },
  { value: 100, prefix: '', suffix: '%', label: 'Original italienisch' },
];

/** Lieferkette – vom Süden bis in Deinen Betrieb */
export const SUPPLY_STEPS = [
  {
    step: '01',
    title: 'Import',
    desc: 'Direkt von ausgewählten Manufakturen aus Sizilien, Kampanien und ganz Süditalien.',
  },
  {
    step: '02',
    title: 'Lager',
    desc: 'Tiefgekühlt gelagert in Duisburg – lückenlose Kühlkette, jederzeit lieferbereit.',
  },
  {
    step: '03',
    title: 'Distribution',
    desc: 'Zuverlässig und tiefgekühlt deutschlandweit – direkt zu Deinem Betrieb.',
  },
];

/** Zielgruppen – für wen Sicitalia liefert */
export const TARGET_GROUPS = [
  {
    title: 'Gastronomie',
    desc: 'Restaurants, Pizzerien & Bistros – servierfertig in Minuten.',
    image: '/images/instagram-1.jpg',
  },
  {
    title: 'Bäckereien',
    desc: 'Cornetti & Pasticceria für die Theke am Morgen.',
    image: IMAGES.cornetti,
  },
  {
    title: 'Cafés & Bars',
    desc: 'Dolci & Snacks, die zum Espresso gehören.',
    image: '/images/produkt-cannoli.jpg',
  },
  {
    title: 'Eisdielen',
    desc: 'Premium Gelato & Desserts für die Saison.',
    image: IMAGES.gelateria,
  },
  {
    title: 'Handel',
    desc: 'Feinkost & Lebensmittelhandel mit echten Spezialitäten.',
    image: '/images/produkt-pizzabasen.jpg',
  },
];

/** Städte für die Liefernetz-Karte (Längen-/Breitengrad) */
export const NETWORK_HUB = { name: 'Duisburg', lon: 6.76, lat: 51.43 };

export const NETWORK_CITIES = [
  { name: 'Hamburg', lon: 10.0, lat: 53.55 },
  { name: 'Bremen', lon: 8.8, lat: 53.08 },
  { name: 'Berlin', lon: 13.4, lat: 52.52 },
  { name: 'Hannover', lon: 9.73, lat: 52.37 },
  { name: 'Leipzig', lon: 12.37, lat: 51.34 },
  { name: 'Dresden', lon: 13.74, lat: 51.05 },
  { name: 'Köln', lon: 6.96, lat: 50.94 },
  { name: 'Frankfurt', lon: 8.68, lat: 50.11 },
  { name: 'Nürnberg', lon: 11.08, lat: 49.45 },
  { name: 'Stuttgart', lon: 9.18, lat: 48.78 },
  { name: 'München', lon: 11.58, lat: 48.14 },
];

export const TRUST_STATS = [
  { value: '100%', label: 'Italienische Qualität' },
  { value: 'NRW', label: 'Standort & Herz' },
  { value: 'DE-weit', label: 'Lieferung' },
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
      'In unserem Lager in Duisburg sorgst du dafür, dass Cornetti, Cannoli und Arancini pünktlich bei unseren Kunden ankommen.',
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
      'Gespür für Food, Gastronomie und visuelles Storytelling',
      'Sicher in Deutsch; Italienisch ist ein Plus',
    ],
  },
];
