import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SCHOOL_CONFIG } from '../config/schoolConfig';
import { Menu, X, MessageSquare, MapPin, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: (defaultClass?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const { t, language, createWhatsAppUrl } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open on very small viewports
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#classes', label: t.nav.classes },
    { href: '#facilities', label: t.nav.facilities },
    { href: '#admissions', label: t.nav.admissions },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Localized address label for header
  const getHeaderAddress = () => {
    if (language === 'mr' || language === 'hi') {
      return {
        prefix: 'नेपच्यून स्वराज्य, ',
        locality: 'अंबिवली (पश्चिम)',
      };
    }
    return {
      prefix: 'Neptune Swarajya, ',
      locality: 'Ambivli (W)',
    };
  };

  const address = getHeaderAddress();
  const defaultWhatsAppUrl = createWhatsAppUrl({ topic: 'general' });

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-amber-200/70 shadow-xs">
      {/* Top Notification Bar - WhatsApp Admissions Hotline Priority */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 text-amber-100 text-[11px] sm:text-xs font-medium">
            <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
            <span className="truncate">
              {SCHOOL_CONFIG.landmark} | Neptune Swarajya, Ambivli (W)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold shrink-0">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-200 hover:text-white font-bold transition-colors"
              aria-label="Admissions WhatsApp Helpline"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap">
                <span className="hidden md:inline">Admissions WhatsApp: </span>
                <span className="md:hidden">Admissions: </span>
                {SCHOOL_CONFIG.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4 lg:gap-6">
          {/* Brand Container: Logo + School Name + Address */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-hidden focus:ring-2 focus:ring-amber-500 rounded-2xl p-1 -ml-1 transition-all shrink-0 min-w-0 select-none"
            aria-label="Little World School Homepage"
          >
            {/* School Logo with Fluid Sizing */}
            <div className="relative shrink-0 flex items-center justify-center">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-600 flex items-center justify-center text-white shadow-sm shadow-amber-600/25 ring-1 ring-amber-400/40 group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 xl:w-6.5 xl:h-6.5 text-white shrink-0" />
              </div>
            </div>

            {/* School Brand Text Lockup */}
            <div className="flex flex-col justify-center min-w-0 text-left">
              <div className="flex flex-col xl:flex-row xl:items-baseline xl:gap-1.5 leading-tight tracking-tight">
                <span className="font-extrabold text-slate-900 text-[15px] xs:text-[17px] sm:text-lg md:text-[19px] xl:text-[20px] 2xl:text-[21px] whitespace-nowrap">
                  Little World
                </span>
                <span className="font-extrabold text-slate-900 text-[15px] xs:text-[17px] sm:text-lg md:text-[19px] xl:text-[20px] 2xl:text-[21px] whitespace-nowrap">
                  School
                </span>
              </div>

              {/* Localized Compact Address with Pin */}
              <div className="flex items-center gap-1 text-[10px] xs:text-[11px] sm:text-xs font-semibold text-amber-900/90 mt-0.5 sm:mt-1 whitespace-nowrap">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-600 shrink-0" />
                <span className="hidden sm:inline">
                  {address.prefix}
                </span>
                <span>
                  {address.locality}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center justify-center space-x-0.5 2xl:space-x-1 flex-1 mx-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-2.5 2xl:px-3 py-2 text-xs 2xl:text-sm font-bold text-slate-700 hover:text-amber-800 hover:bg-amber-100/60 rounded-xl transition-colors whitespace-nowrap select-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area (Desktop): Segmented Language Switcher */}
          <div className="hidden xl:flex items-center shrink-0">
            <LanguageSwitcher variant="header" />
          </div>

          {/* Right Action Area (Tablet / Mobile): Compact Dropdown + Hamburger */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <LanguageSwitcher variant="mobile-dropdown" />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-slate-700 hover:text-amber-800 hover:bg-amber-100/60 rounded-xl transition-colors focus:outline-hidden focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-amber-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {/* Mobile Segmented Language Switcher inside Drawer */}
          <div className="mb-4 pb-4 border-b border-slate-100">
            <LanguageSwitcher variant="mobile-inline" />
          </div>

          <nav className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-amber-800 hover:bg-amber-50 rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry?.();
              }}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-2xl text-center shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>{t.nav.enquireNow}</span>
            </button>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs rounded-xl flex items-center justify-center gap-2 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {SCHOOL_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
