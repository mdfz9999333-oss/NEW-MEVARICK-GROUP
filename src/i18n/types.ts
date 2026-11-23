export type Language = 'en' | 'ar';

export type ServiceSlug = 'porta-cabins' | 'consumables-tools' | 'safety';

export type GalleryCategoryKey =
  | 'all'
  | 'office-cabins'
  | 'multi-storey-cabins'
  | 'mobile-containers'
  | 'security-cabins'
  | 'jack-leg-cabins'
  | 'portable-toilets'
  | 'factory-gallery'
  | 'trading-gallery'
  | 'consumables-tools';

export interface TranslatedService {
  slug: ServiceSlug;
  route: `/services/${ServiceSlug}`;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  detailedIntro: string;
  heroImage: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  specifications: { label: string; value: string }[];
  relatedGalleryCategories: Exclude<GalleryCategoryKey, 'all'>[];
  formOptionValue: string;
}

export interface TranslatedGalleryItem {
  id: string;
  title: string;
  categoryKey: Exclude<GalleryCategoryKey, 'all'>;
  categoryLabel: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface TranslatedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export interface TranslatedPartner {
  id: string;
  name: string;
  sector: string;
  logo: string;
  secondaryLogo?: string;
  secondaryName?: string;
  isPublicSector?: boolean;
  isJointVenture?: boolean;
}

export interface TranslationDictionary {
  meta: {
    siteTitle: string;
    homeTitle: string;
    aboutTitle: string;
    servicesTitle: string;
    galleryTitle: string;
    projectsTitle: string;
    partnersTitle: string;
    contactTitle: string;
  };
  brand: {
    wordmark: string;
    tagline: string;
    country: string;
    heroSubline: string;
    logoAlt: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    allServices: string;
    gallery: string;
    projects: string;
    partners: string;
    contact: string;
    requestQuote: string;
    servicesSubtitle: string;
    openMenu: string;
    closeMenu: string;
    servicesLabel: string;
  };
  breadcrumbs: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    projects: string;
    partners: string;
    contact: string;
  };
  home: {
    heroHeadlineStart: string;
    heroHeadlineAccent: string;
    heroDescription: string;
    exploreServices: string;
    requestQuote: string;
    aboutKicker: string;
    aboutHeading: string;
    readMoreAbout: string;
    servicesKicker: string;
    servicesHeading: string;
    viewAllServices: string;
    exploreDivision: string;
    featuredGalleryKicker: string;
    featuredGalleryHeading: string;
    viewFullGallery: string;
    whyKicker: string;
    whyHeading: string;
    whyDescription: string;
    projectsKicker: string;
    projectsHeading: string;
    viewAllProjects: string;
    partnersKicker: string;
    partnersHeading: string;
    viewAllPartners: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  metrics: {
    value: string;
    label: string;
    context: string;
  }[];
  about: {
    bannerTitle: string;
    bannerSubtitle: string;
    overviewKicker: string;
    overviewHeading: string;
    overviewText: string;
    visionTitle: string;
    visionText: string;
    imageAlt: string;
    pillarsHeading: string;
    ctaHeading: string;
    ctaText: string;
    ctaExploreServices: string;
    ctaContactUs: string;
  };
  whyChoose: {
    kicker: string;
    heading: string;
    description: string;
    imageAlt: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  servicesPage: {
    bannerTitle: string;
    bannerSubtitle: string;
    introKicker: string;
    introHeading: string;
    introDescription: string;
    capabilitiesHeading: string;
    specificationsHeading: string;
    relatedGalleryHeading: string;
    otherDivisionsHeading: string;
    viewServiceDetails: string;
    requestQuoteFor: string;
    divisionLabel: string;
  };
  services: TranslatedService[];
  gallery: {
    bannerTitle: string;
    bannerSubtitle: string;
    kicker: string;
    heading: string;
    showingLabel: string;
    itemSingular: string;
    itemPlural: string;
    enlargeLabel: string;
    closeModalLabel: string;
    prevLabel: string;
    nextLabel: string;
    categories: { key: GalleryCategoryKey; label: string }[];
    items: TranslatedGalleryItem[];
  };
  projects: {
    bannerTitle: string;
    bannerSubtitle: string;
    kicker: string;
    heading: string;
    description: string;
    viewProjectLabel: string;
    closeModalLabel: string;
    projectLabel: string;
    highlightsLabel: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaButton: string;
    items: TranslatedProject[];
  };
  partners: {
    bannerTitle: string;
    bannerSubtitle: string;
    kicker: string;
    heading: string;
    description: string;
    publicSectorLabel: string;
    corporateSectorLabel: string;
    jointVentureBadge: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaButton: string;
    items: TranslatedPartner[];
  };
  contact: {
    bannerTitle: string;
    bannerSubtitle: string;
    kicker: string;
    heading: string;
    description: string;
    emailCardLabel: string;
    addressCardLabel: string;
    emailSalesBtn: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      detailsLabel: string;
      detailsPlaceholder: string;
    };
    errors: {
      name: string;
      company: string;
      email: string;
      phone: string;
      service: string;
      details: string;
    };
    submitButton: string;
    directInquiriesNote: string;
    confirmation: {
      title: string;
      noticePrefix: string;
      noticeSuffix: string;
      nameLabel: string;
      companyLabel: string;
      emailLabel: string;
      phoneLabel: string;
      serviceLabel: string;
      detailsLabel: string;
      emailAppBtn: string;
      copyBtn: string;
      copiedBtn: string;
      resetBtn: string;
      emailSubjectPrefix: string;
      summaryHeader: string;
    };
    serviceOptions: string[];
    addressLines: string[];
  };
  footer: {
    description: string;
    companyHeading: string;
    servicesHeading: string;
    contactHeading: string;
    copyright: string;
    country: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
}
