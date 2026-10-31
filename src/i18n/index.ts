import enTranslations from './locales/en.json';
import mrTranslations from './locales/mr.json';
import hiTranslations from './locales/hi.json';
import { SupportedLanguage, TranslationSchema, LanguageOption } from './types';

export * from './types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English' },
  { code: 'mr', label: 'Marathi', nativeName: 'मराठी' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी' },
];

export const TRANSLATIONS: Record<SupportedLanguage, TranslationSchema> = {
  en: enTranslations as unknown as TranslationSchema,
  mr: mrTranslations as unknown as TranslationSchema,
  hi: hiTranslations as unknown as TranslationSchema,
};

export const STORAGE_KEY = 'lws_language';

/**
 * Validates and safely parses language code
 */
export function isValidLanguage(val: unknown): val is SupportedLanguage {
  return typeof val === 'string' && (val === 'en' || val === 'mr' || val === 'hi');
}

/**
 * Detect language from URL pathname (e.g. /mr or /hi or /en),
 * then from localStorage, defaulting to 'en'
 */
export function getInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';

  try {
    // 1. Check pathname first for direct URL crawlability (/mr, /hi, /en)
    const path = window.location.pathname.toLowerCase();
    const firstSegment = path.split('/')[1];
    if (isValidLanguage(firstSegment)) {
      return firstSegment;
    }

    // 2. Check localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isValidLanguage(saved)) {
      return saved;
    }
  } catch {
    // Storage access disabled or private browsing
  }

  return 'en';
}

/**
 * Returns translation bundle for given language
 */
export function getTranslations(lang: SupportedLanguage): TranslationSchema {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
