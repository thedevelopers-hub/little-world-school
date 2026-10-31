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
import { SCHOOL_CONFIG, SCHOOL_CLASSES } from '../config/schoolConfig';

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
  const updateDocumentMetadata = useCallback((lang: SupportedLanguage, bundle: TranslationSchema) => {
    if (typeof document === 'undefined') return;

    // 1. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 2. Update page title
    document.title = bundle.meta.title;

    // 3. Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', bundle.meta.description);
    }

    // 4. Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', bundle.meta.ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', bundle.meta.ogDescription);

    // 5. Update or inject Canonical & Alternate hreflangs
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = `${origin}/${lang}`;

    // 6. Update Schema.org JSON-LD
    let scriptTag = document.getElementById('school-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'school-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schoolSchema = {
      '@context': 'https://schema.org',
      '@type': 'School',
      name: SCHOOL_CONFIG.officialName,
      alternateName:
        lang === 'mr' ? 'लिटल वर्ल्ड स्कूल' : lang === 'hi' ? 'लिटिल वर्ल्ड स्कूल' : 'Little World School',
      url: `${origin}/${lang}`,
      logo: `${origin}/favicon.ico`,
      description: bundle.meta.description,
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
      telephone: SCHOOL_CONFIG.phoneCall,
      email: SCHOOL_CONFIG.email,
      inLanguage: [lang, 'en', 'mr', 'hi'],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:30',
          closes: '16:30',
        },
      ],
    };

    scriptTag.textContent = JSON.stringify(schoolSchema, null, 2);
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
      updateDocumentMetadata(newLang, bundle);

      if (pushUrl && typeof window !== 'undefined') {
        const hash = window.location.hash || '';
        const currentPath = window.location.pathname;
        const targetPath = `/${newLang}`;
        if (currentPath !== targetPath) {
          window.history.pushState({ lang: newLang }, '', `${targetPath}${hash}`);
        }
      }
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
