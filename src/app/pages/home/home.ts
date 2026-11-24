import { AfterViewInit, Component, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubeEmbed } from '../../components/youtube-embed/youtube-embed';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogReader } from '../../components/catalog-reader/catalog-reader';
import { GermanyNetwork } from '../../components/germany-network/germany-network';
import { KeywordTypewriter } from '../../components/keyword-typewriter/keyword-typewriter';
import { VideoCallBooking } from '../../components/video-call-booking/video-call-booking';
import { WineSelect } from '../../components/wine-select/wine-select';
import { CountUpDirective } from '../../directives/count-up.directive';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {
  HERO_KEYWORDS,
  B2B_BENEFITS,
  CONTACT,
  DOWNLOADS,
  HOME_STATS,
  IMAGES,
  KING_PRODUCTS,
  PIZZELLA,
  SUPPLY_STEPS,
  TARGET_GROUPS,
} from '../../data/site-content';
import { PORTFOLIO_PRODUCTS } from '../../data/portfolio-catalog';
import { AuthFailure, AuthService, Profile, authErrorMessage } from '../../services/auth.service';
import { ProductInterestService } from '../../services/product-interest.service';
import { ScrollNavService } from '../../services/scroll-nav.service';
import { WhatsappChooserService } from '../../services/whatsapp-chooser.service';

const FRAGMENT_SCROLL: Record<string, ScrollLogicalPosition> = {
  sortiment: 'start',
  geschaeftsfuehrer: 'start',
  'ueber-uns': 'start',
};

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    RouterLink,
    KeywordTypewriter,
    YoutubeEmbed,
    ScrollRevealDirective,
    CountUpDirective,
    GermanyNetwork,
    CatalogReader,
    VideoCallBooking,
    WineSelect,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly scrollNav = inject(ScrollNavService);
  private readonly interest = inject(ProductInterestService);
  private readonly whatsapp = inject(WhatsappChooserService);
  private readonly auth = inject(AuthService);
  readonly demo = this.auth.demo;

  readonly contact = CONTACT;
  readonly downloads = DOWNLOADS;
  readonly images = IMAGES;
  readonly heroKeywords = HERO_KEYWORDS;
  readonly kings = KING_PRODUCTS;
  readonly previewProducts = PORTFOLIO_PRODUCTS.slice(0, 10);
  readonly pizzella = PIZZELLA;
  readonly b2bBenefits = B2B_BENEFITS;
  readonly stats = HOME_STATS;
  readonly supplySteps = SUPPLY_STEPS;
  readonly targetGroups = TARGET_GROUPS;
  readonly introPoints = [
    'Fertig zum Servieren – in wenigen Minuten auf dem Teller',
    'Weniger Verschwendung, mehr Kontrolle über deine Kosten',
    'Mehr Effizienz – mit demselben Team',
    'Echter italienischer Geschmack, der jedes Mal gleich schmeckt',
    'Schneller Service und glücklichere Gäste',
  ];
  readonly timeline = [
    {
      year: '2009',
      title: 'Der Anfang',
      before:
        'Sicitalia gibt es seit 2009 und hat bis heute tausende Kunden beliefert. Als einer der erfolgreichsten Lieferanten Süditaliens in Deutschland bieten wir hochwertige Spezialitäten, die speziell für Gastronomiebetriebe, Bäckereien, Cafés und Eisdielen konzipiert sind, die ',
      emphasis: 'authentische und original italienische Produkte',
      after: ' anbieten möchten.',
    },
    {
      year: 'Seither',
      title: 'La dolce Vita',
      before:
        'Dieser Ausdruck steht für Gelassenheit und die Fähigkeit, den Moment nach getaner Arbeit zu genießen. Mit Produkten von Sicitalia liefern wir als gebürtige ItalienerInnen die Genussmomente, nach denen wir uns lange Zeit in Deutschland gesehnt haben – und fördern die italienische Snack- und Konditoreikultur auf ein neues Level.',
      emphasis: '',
      after: '',
    },
    {
      year: 'Heute',
      title: 'Unsere Mission',
      before:
        'Selbst in der kleinsten Küche können unsere Produkte schnell zubereitet werden. Ganz ohne Fachwissen, ohne Schwund und mit präziser Kalkulationsgrundlage für den Gastronomen – und das in einer immer gleichbleibenden Qualität.',
      emphasis: '',
      after: '',
    },
  ];
  readonly pizzellaIndex = DOWNLOADS.findIndex((item) => item.file === PIZZELLA.catalogFile);
  readonly selectedProducts = this.interest.selectedProducts;
  readonly positions = [
    'Inhaber/Geschäftsführer',
    'Mitinhaber',
    'Chefkoch/Verantwortlicher Bestellungen (Küchenteam)',
    'Einkäufer/Disponent',
    'Assistenz Geschäftsleitung',
    'Finanzbuchhaltung',
  ];
  readonly businessTypes = [
    'Café-Bar',
    'Eisdiele',
    'Konditorei',
    'Restaurant',
    'Feinkost',
    'Hotel',
    'Sonstiges',
  ];
  readonly legalForms = [
    'Personengesellschaft / Einzelunternehmer',
    'GmbH',
    'Sonstige (Bitte im Firmennamen eintragen)',
  ];
  readonly deliveryStarts = ['Sofort', 'In 1–2 Wochen', 'Im nächsten Monat', 'Noch offen'];
  readonly formSteps = [
    { id: 'betrieb', label: 'Betrieb' },
    { id: 'adresse', label: 'Adresse' },
    { id: 'kontakt', label: 'Kontakt' },
    { id: 'abschluss', label: 'Abschluss' },
  ];

  readonly scrollProgress = signal(0);

  activeCatalogIndex: number | null = null;
  firstName = '';
  lastName = '';
  position = '';
  company = '';
  businessType = '';
  legalForm = '';
  street = '';
  houseNumber = '';
  zip = '';
  city = '';
  email = '';
  billingEmail = '';
  phone = '';
  phoneAlt = '';
  contactEmail = false;
  contactLandline = false;
  contactMobile = false;
  contactWhatsapp = false;
  vatId = '';
  deliveryStart = '';
  productInterest = '';
  differentDelivery = false;
  deliveryStreet = '';
  deliveryHouseNumber = '';
  deliveryZip = '';
  deliveryCity = '';
  differentBilling = false;
  billingStreet = '';
  billingHouseNumber = '';
  billingZip = '';
  billingCity = '';
  password = '';
  passwordRepeat = '';
  showPassword = false;
  consent = false;
  submitted = false;
  submitting = false;
  submitError = '';
  formStep = 0;

  readonly minPasswordLength = 10;

  get passwordValid(): boolean {
    return this.password.length >= this.minPasswordLength;
  }

  get passwordsMatch(): boolean {
    return this.password === this.passwordRepeat;
  }

  get emailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
  }

  get contactChosen(): boolean {
    return this.contactEmail || this.contactLandline || this.contactMobile || this.contactWhatsapp;
  }

  get progressPercent(): number {
    return (this.formStep / (this.formSteps.length - 1)) * 100;
  }

  isStepValid(step = this.formStep): boolean {
    const deliveryReady =
      !this.differentDelivery ||
      !!(this.deliveryStreet.trim() && this.deliveryHouseNumber.trim() && this.deliveryZip.trim() && this.deliveryCity.trim());
    const billingReady =
      !this.differentBilling ||
      !!(this.billingStreet.trim() && this.billingHouseNumber.trim() && this.billingZip.trim() && this.billingCity.trim());

    if (step === 0) {
      return !!(
        this.firstName.trim() &&
        this.lastName.trim() &&
        this.position &&
        this.company.trim() &&
        this.businessType &&
        this.legalForm
      );
    }
    if (step === 1) {
      return !!(this.street.trim() && this.houseNumber.trim() && this.zip.trim() && this.city.trim() && deliveryReady && billingReady);
    }
    if (step === 2) {
      return !!(
        this.emailValid &&
        this.passwordValid &&
        this.passwordsMatch &&
        this.billingEmail.trim() &&
        this.phone.trim() &&
        this.contactChosen
      );
    }
    return !!(this.vatId.trim() && this.consent);
  }

  canOpenStep(index: number): boolean {
    if (index <= this.formStep) {
      return true;
    }
    for (let i = 0; i < index; i++) {
      if (!this.isStepValid(i)) {
        return false;
      }
    }
    return true;
  }

  goToStep(index: number): void {
    if (!this.canOpenStep(index) || index === this.formStep) {
      return;
    }
    this.formStep = index;
    this.scrollFormIntoView();
  }

  nextStep(): void {
    if (this.formStep >= this.formSteps.length - 1 || !this.isStepValid()) {
      return;
    }
    this.formStep++;
    this.scrollFormIntoView();
  }

  prevStep(): void {
    if (this.formStep === 0) {
      return;
    }
    this.formStep--;
    this.scrollFormIntoView();
  }

  private scrollFormIntoView(): void {
    requestAnimationFrame(() => {
      document.getElementById('b2b-stepper')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  get formReady(): boolean {
    return this.formSteps.every((_, index) => this.isStepValid(index));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
  }

  openCatalog(index: number): void {
    this.activeCatalogIndex = index;
  }

  openWhatsapp(): void {
    this.whatsapp.show();
  }

  async submitRegistration(): Promise<void> {
    if (!this.formReady || this.submitting) {
      return;
    }
    this.submitting = true;
    this.submitError = '';

    const profile: Profile = {
      position: this.position,
      businessType: this.businessType,
      legalForm: this.legalForm,
      street: this.street,
      houseNumber: this.houseNumber,
      zip: this.zip,
      city: this.city,
      billingEmail: this.billingEmail,
      phone: this.phone,
      phoneAlt: this.phoneAlt,
      vatId: this.vatId,
      deliveryStart: this.deliveryStart,
      productInterest: this.productInterest,
      contactVia: [
        this.contactEmail ? 'E-Mail' : '',
        this.contactLandline ? 'Festnetz' : '',
        this.contactMobile ? 'Handy' : '',
        this.contactWhatsapp ? 'WhatsApp' : '',
      ].filter(Boolean),
    };
    if (this.differentDelivery) {
      Object.assign(profile, {
        deliveryStreet: this.deliveryStreet,
        deliveryHouseNumber: this.deliveryHouseNumber,
        deliveryZip: this.deliveryZip,
        deliveryCity: this.deliveryCity,
      });
    }
    if (this.differentBilling) {
      Object.assign(profile, {
        billingStreet: this.billingStreet,
        billingHouseNumber: this.billingHouseNumber,
        billingZip: this.billingZip,
        billingCity: this.billingCity,
      });
    }

    try {
      await this.auth.register({
        email: this.email.trim(),
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
        consent: true,
        profile,
      });
      this.password = '';
      this.passwordRepeat = '';
      this.submitted = true;
      this.interest.clear();
    } catch (error) {
      this.submitError = authErrorMessage(error instanceof AuthFailure ? error.code : 'server_error');
    } finally {
      this.submitting = false;
    }
  }

  ngAfterViewInit(): void {
    const inquiry = this.interest.buildInquiryText();
    if (inquiry) {
      this.productInterest = inquiry;
    }

    this.route.fragment.subscribe((fragment) => {
      if (!fragment) {
        return;
      }

      requestAnimationFrame(() => {
        this.scrollNav.scrollTo(fragment, FRAGMENT_SCROLL[fragment] ?? 'start');
      });
    });
  }

  scrollTo(event: Event, fragment: string): void {
    event.preventDefault();
    this.scrollNav.goHomeAndScroll(fragment, FRAGMENT_SCROLL[fragment] ?? 'start');
  }
}
