/**
 * Supported Languages for Little World School
 */
export type SupportedLanguage = 'en' | 'mr' | 'hi';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  nativeName: string;
  flagHint?: string;
}

export interface ClassTranslation {
  name: string;
  age: string;
  desc: string;
  points: string[];
}

export interface FacilityItemTranslation {
  title: string;
  desc: string;
  tag: string;
}

export interface GalleryItemTranslation {
  id: string;
  title: string;
  desc: string;
  category: 'campus' | 'activities' | 'celebrations' | 'sports';
}

export interface FaqItemTranslation {
  q: string;
  a: string;
}

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    keywords: string;
  };
  nav: {
    home: string;
    about: string;
    classes: string;
    facilities: string;
    admissions: string;
    gallery: string;
    faq: string;
    contact: string;
    enquireNow: string;
  };
  languageSwitcher: {
    label: string;
    currentLanguageAnnouncement: string;
    ariaLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaAdmissions: string;
    ctaExplore: string;
    ctaWhatsapp: string;
    ctaCall?: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
    highlightAmbivli: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    principalQuote: string;
    principalRole: string;
    pillarsTitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  classes: {
    badge: string;
    title: string;
    subtitle: string;
    ageGroup: string;
    curriculum: string;
    keyActivities: string;
    enquireClass: string;
    admissionOpen: string;
    pg: ClassTranslation;
    nursery: ClassTranslation;
    jkg: ClassTranslation;
    skg: ClassTranslation;
    grade1_12: ClassTranslation;
  };
  facilities: {
    badge: string;
    title: string;
    subtitle: string;
    items: FacilityItemTranslation[];
  };
  admissions: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    startWhatsappAdmission: string;
    docReqTitle: string;
    docReqSubtitle: string;
    docs: string[];
    criteriaTitle: string;
    criteriaSubtitle: string;
    fastResponseBadge?: string;
    chooseClassTitle?: string;
    chooseClassSubtitle?: string;
    formTitle?: string;
    formSubtitle?: string;
    openGoogleForm?: string;
    googleFormNotice?: string;
    parentName?: string;
    childName?: string;
    childDob?: string;
    selectClass?: string;
    selectClassPlaceholder?: string;
    phone?: string;
    email?: string;
    locality?: string;
    notes?: string;
    notesPlaceholder?: string;
    submitBtn?: string;
    sendViaWhatsapp?: string;
    orDirectForm?: string;
    successTitle?: string;
    successMessage?: string;
    referenceIdLabel?: string;
    copyReference?: string;
    referenceCopied?: string;
    closeBtn?: string;
    validation?: {
      parentNameRequired: string;
      childNameRequired: string;
      phoneRequired: string;
      phoneInvalid: string;
      classRequired: string;
    };
  };
  whatsapp: {
    title: string;
    subtitle: string;
    generalTemplate: string;
    classTemplate: string;
    locationTemplate: string;
    feesTemplate: string;
    transportTemplate: string;
    previewLabel: string;
    sendButton: string;
    chatHelp: string;
    customInquiryNotice: string;
    selectTopicLabel: string;
    topicGeneral: string;
    topicClass: string;
    topicLocation: string;
    topicFees: string;
    topicTransport: string;
    directDeskBadge?: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterCampus: string;
    filterActivities: string;
    filterCelebrations: string;
    filterSports: string;
    items: GalleryItemTranslation[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    landmarkLabel: string;
    getDirections: string;
    phoneLabel: string;
    emailLabel: string;
    officeHoursLabel: string;
    timingsLabel: string;
    copyAddress: string;
    addressCopied: string;
    whatsappVisit?: string;
    callNow?: string;
    sendEmail?: string;
    quickHelp: string;
    quickHelpDesc: string;
    visitNotice: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: FaqItemTranslation[];
  };
  footer: {
    tagline: string;
    quickLinks: string;
    programs: string;
    contactInfo: string;
    copyright: string;
    privacyPolicy: string;
    sitemapLabel: string;
    rightsReserved: string;
    madeWithCare: string;
    schoolTimingsSummary: string;
    devCredit?: string;
    devCreditSub?: string;
  };
  privacyModal: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    close: string;
  };
  sitemapModal: {
    title: string;
    desc: string;
    languagesTitle: string;
    routesTitle: string;
    close: string;
  };
  system: {
    pageNotFound: string;
    backToHome: string;
  };
}
