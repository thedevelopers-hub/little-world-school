import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import {
  SupportedLanguage,
  TranslationSchema,
  SUPPORTED_LANGUAGES,
  getInitialLanguage,
  getTranslations,
  isValidLanguage,
  STORAGE_KEY,
} from './index';
import { SCHOOL_CONFIG, SCHOOL_CLASSES, SCHOOL_IMAGES } from '../config/schoolConfig';

interface I18nContextType {
  language: SupportedLanguage;
  t: TranslationSchema;
  setLanguage: (lang: SupportedLanguage, pushUrl?: boolean) => void;
  getLocalizedClassName: (classId: string) => string;
  createWhatsAppUrl: (options?: { topic?: string; classId?: string; customMessage?: string }) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => getInitialLanguage());

  const t = useMemo(() => getTranslations(language), [language]);

  // Synchronize document language, meta tags, schema.org, and hreflang
  const updateDocumentMetadata = useCallback((lang: SupportedLanguage, bundle: TranslationSchema, targetPathOverride?: string) => {
    if (typeof document === 'undefined') return;

    const langCode = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://little-world-school.vercel.app';
    const currentPath = targetPathOverride !== undefined 
      ? targetPathOverride 
      : (typeof window !== 'undefined' ? window.location.pathname.replace(/^\/|\/$/g, '') : '');

    // 1. Update HTML lang attribute
    document.documentElement.lang = langCode;

    // 2. Update page title
    document.title = bundle.meta.title;

    // 3. Update meta description and keywords
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', bundle.meta.description);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && bundle.meta.keywords) {
      metaKeywords.setAttribute('content', bundle.meta.keywords);
    }

    // 4. Update Canonical URL (Strictly self-referencing)
    let canonicalHref = `${origin}/`;
    if (currentPath === 'en') {
      canonicalHref = `${origin}/en`;
    } else if (currentPath === 'mr') {
      canonicalHref = `${origin}/mr`;
    } else if (currentPath === 'hi') {
      canonicalHref = `${origin}/hi`;
    } else {
      canonicalHref = `${origin}/`;
    }

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalHref;

    // 5. Update OpenGraph & Twitter tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', bundle.meta.ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', bundle.meta.ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalHref);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'mr' ? 'mr_IN' : lang === 'hi' ? 'hi_IN' : 'en_IN');

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', bundle.meta.ogTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', bundle.meta.ogDescription);

    // 6. Update Schema.org JSON-LD graph in place (No duplicates)
    let scriptTag = document.getElementById('school-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'school-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const localizedSchemaGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['School', 'EducationalOrganization', 'Organization'],
          '@id': `${origin}/#school`,
          name: SCHOOL_CONFIG.officialName,
          alternateName:
            lang === 'mr'
              ? ['लिटल वर्ल्ड स्कूल', 'लिटल वर्ल्ड स्कूल अंबिवली']
              : lang === 'hi'
              ? ['लिटिल वर्ल्ड स्कूल', 'लिटिल वर्ल्ड स्कूल अंबिवली']
              : ['Little World School', 'Little World School Ambivli'],
          url: canonicalHref,
          logo: `${origin}/favicon.svg`,
          image: SCHOOL_IMAGES.heroMain,
          description: bundle.meta.description,
          telephone: SCHOOL_CONFIG.phoneCall,
          email: SCHOOL_CONFIG.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Neptune Swarajya, Swarajya Road, Village Ambivli (West), Taluka Kalyan',
            addressLocality: 'Ambivli',
            addressRegion: 'Maharashtra',
            postalCode: '421102',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: SCHOOL_CONFIG.geo.latitude,
            longitude: SCHOOL_CONFIG.geo.longitude,
          },
          hasMap: SCHOOL_CONFIG.googleMapsUrl,
          priceRange: '₹₹',
          inLanguage: ['en-IN', 'mr-IN', 'hi-IN'],
          sameAs: [`https://wa.me/${SCHOOL_CONFIG.whatsappNumber}`],
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Ambivli' },
            { '@type': 'AdministrativeArea', name: 'Kalyan' },
            { '@type': 'AdministrativeArea', name: 'Thane' },
            { '@type': 'AdministrativeArea', name: 'Titwala' },
            { '@type': 'AdministrativeArea', name: 'Shahad' },
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '08:30',
              closes: '16:30',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${origin}/#website`,
          name: SCHOOL_CONFIG.officialName,
          url: `${origin}/`,
          inLanguage: ['en-IN', 'mr-IN', 'hi-IN'],
          publisher: {
            '@id': `${origin}/#school`,
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${origin}/#webpage`,
          url: canonicalHref,
          name: bundle.meta.title,
          description: bundle.meta.description,
          isPartOf: {
            '@id': `${origin}/#website`,
          },
          about: {
            '@id': `${origin}/#school`,
          },
          inLanguage: langCode,
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${origin}/#breadcrumbs`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${origin}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Classes & Programs',
              item: `${origin}/#classes`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Admissions',
              item: `${origin}/#admissions`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Contact & Location',
              item: `${origin}/#contact`,
            },
          ],
        },
      ],
    };

    scriptTag.textContent = JSON.stringify(localizedSchemaGraph, null, 2);
  }, []);

  // Language setter with persistence and smooth URL sync
  const setLanguage = useCallback(
    (newLang: SupportedLanguage, pushUrl: boolean = true) => {
      setLanguageState(newLang);

      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // localStorage not available
      }

      const bundle = getTranslations(newLang);

      if (pushUrl && typeof window !== 'undefined') {
        const hash = window.location.hash || '';
        const currentPath = window.location.pathname;
        const targetPath = `/${newLang}`;
        if (currentPath !== targetPath) {
          window.history.pushState({ lang: newLang }, '', `${targetPath}${hash}`);
        }
      }

      updateDocumentMetadata(newLang, bundle, newLang);
    },
    [updateDocumentMetadata]
  );

  // Initial sync on mount and back/forward browser navigation support
  useEffect(() => {
    const bundle = getTranslations(language);
    updateDocumentMetadata(language, bundle);

    const handlePopState = () => {
      const detected = getInitialLanguage();
      if (detected !== language) {
        setLanguage(detected, false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language, updateDocumentMetadata, setLanguage]);

  // Localized class name helper
  const getLocalizedClassName = useCallback(
    (classId: string): string => {
      switch (classId) {
        case 'pg':
          return t.classes.pg.name;
        case 'nursery':
          return t.classes.nursery.name;
        case 'jkg':
          return t.classes.jkg.name;
        case 'skg':
          return t.classes.skg.name;
        case 'grade1_12':
          return t.classes.grade1_12.name;
        default:
          return classId;
      }
    },
    [t]
  );

  // Generate localized WhatsApp URL using current language templates
  const createWhatsAppUrl = useCallback(
    (options?: { topic?: string; classId?: string; customMessage?: string }) => {
      let rawText = '';

      if (options?.customMessage) {
        rawText = options.customMessage;
      } else {
        const topic = options?.topic || 'general';
        const targetClass = options?.classId || 'nursery';
        const localizedClassName = getLocalizedClassName(targetClass);

        switch (topic) {
          case 'class':
            rawText = t.whatsapp.classTemplate.replace('{class}', localizedClassName);
            break;
          case 'location':
            rawText = t.whatsapp.locationTemplate;
            break;
          case 'fees':
            rawText = t.whatsapp.feesTemplate.replace('{class}', localizedClassName);
            break;
          case 'transport':
            rawText = t.whatsapp.transportTemplate;
            break;
          case 'general':
          default:
            rawText = t.whatsapp.generalTemplate;
            break;
        }
      }

      const encoded = encodeURIComponent(rawText);
      return `https://wa.me/${SCHOOL_CONFIG.whatsappNumber}?text=${encoded}`;
    },
    [t, getLocalizedClassName]
  );

  return (
    <I18nContext.Provider
      value={{
        language,
        t,
        setLanguage,
        getLocalizedClassName,
        createWhatsAppUrl,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
