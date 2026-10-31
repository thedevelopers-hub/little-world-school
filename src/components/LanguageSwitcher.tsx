import React, { useRef, useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'header' | 'mobile-dropdown' | 'mobile-inline' | 'footer';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { language, setLanguage, t } = useI18n();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dropdownOpen]);

  const handleSelectLanguage = (code: SupportedLanguage) => {
    setLanguage(code);
    setDropdownOpen(false);
  };

  // Keyboard navigation for radio group
  const handleKeyNavigation = (
    e: React.KeyboardEvent,
    currentIndex: number,
    total: number
  ) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % total;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + total) % total;
    } else {
      return;
    }
    const nextLang = SUPPORTED_LANGUAGES[nextIndex].code;
    setLanguage(nextLang);
  };

  // 1. Desktop Header Segmented Selector
  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <div
          role="radiogroup"
          aria-label={t.languageSwitcher.ariaLabel}
          className="inline-flex items-center p-1 bg-amber-50/80 border border-amber-200/90 rounded-full shadow-xs backdrop-blur-xs"
        >
          <div className="flex items-center pl-2 pr-1 text-amber-700" aria-hidden="true">
            <Globe className="w-3.5 h-3.5" />
          </div>

          {SUPPORTED_LANGUAGES.map((lang, index) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleSelectLanguage(lang.code)}
                onKeyDown={(e) => handleKeyNavigation(e, index, SUPPORTED_LANGUAGES.length)}
                className={`relative px-3 py-1 text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-xs font-bold scale-[1.02]'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-100/70'
                }`}
                title={`Switch language to ${lang.label}`}
              >
                {lang.nativeName}
                {isSelected && (
                  <span className="sr-only"> (Selected language)</span>
                )}
              </button>
            );
          })}
        </div>
        <span className="sr-only" aria-live="polite">
          {t.languageSwitcher.currentLanguageAnnouncement}
        </span>
      </div>
    );
  }

  // 2. Mobile Dropdown (Header Top Bar or compact space)
  if (variant === 'mobile-dropdown') {
    const currentLangObj =
      SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

    return (
      <div ref={dropdownRef} className={`relative inline-block ${className}`}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label={t.languageSwitcher.ariaLabel}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-amber-950 bg-amber-100/80 border border-amber-300 rounded-lg hover:bg-amber-200/70 focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition-colors"
        >
          <Globe className="w-3.5 h-3.5 text-amber-700" />
          <span>{currentLangObj.nativeName}</span>
          <ChevronDown
            className={`w-3 h-3 text-amber-800 transition-transform duration-200 ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {dropdownOpen && (
          <div
            role="listbox"
            aria-label={t.languageSwitcher.ariaLabel}
            className="absolute right-0 mt-1.5 w-36 bg-white rounded-xl shadow-lg border border-amber-200 py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="px-3 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
              {t.languageSwitcher.label}
            </div>
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-amber-50 text-amber-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-medium">{lang.nativeName}</span>
                    <span className="text-[10px] text-slate-500">({lang.label})</span>
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-600" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // 3. Mobile Inline Segmented Row (inside drawer or footer)
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-amber-600" />
          {t.languageSwitcher.label}
        </label>
        <span className="text-[11px] text-amber-700 font-medium">
          {language === 'mr' ? 'मराठी निवडले आहे' : language === 'hi' ? 'हिन्दी चुनी गई है' : 'English selected'}
        </span>
      </div>

      <div
        role="radiogroup"
        aria-label={t.languageSwitcher.ariaLabel}
        className="grid grid-cols-3 gap-1.5 p-1 bg-amber-50 border border-amber-200 rounded-xl"
      >
        {SUPPORTED_LANGUAGES.map((lang, index) => {
          const isSelected = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelectLanguage(lang.code)}
              onKeyDown={(e) => handleKeyNavigation(e, index, SUPPORTED_LANGUAGES.length)}
              className={`py-2 px-1 text-center text-xs font-semibold rounded-lg transition-all ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-xs font-bold'
                  : 'text-slate-700 hover:bg-amber-100/60'
              }`}
            >
              <div>{lang.nativeName}</div>
              <div
                className={`text-[10px] ${
                  isSelected ? 'text-amber-100' : 'text-slate-500'
                }`}
              >
                {lang.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
