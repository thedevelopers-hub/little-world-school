import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG, SCHOOL_CLASSES, DEVELOPER_CONFIG } from '../config/schoolConfig';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  GraduationCap,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenSitemap: () => void;
  onOpenInquiry: (defaultClass?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenSitemap,
  onOpenInquiry,
}) => {
  const { t, getLocalizedClassName, createWhatsAppUrl } = useI18n();

  const whatsappGeneralUrl = createWhatsAppUrl({ topic: 'general' });

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          {/* Col 1: School Identity & Address */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-amber-600/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-black text-white tracking-tight truncate">
                  {SCHOOL_CONFIG.officialName}
                </h3>
                <p className="text-xs text-amber-400 font-semibold truncate">
                  Neptune Swarajya, Ambivli (West), Thane
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              {t.footer.tagline}
            </p>

            {/* Official Postal Address Box */}
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed break-words font-medium">
                  {SCHOOL_CONFIG.officialAddress}
                </span>
              </div>
              <p className="text-[11px] text-amber-300/90 pl-6 break-words font-semibold">
                {t.contact.landmarkLabel}: {SCHOOL_CONFIG.landmark}
              </p>
            </div>

            {/* Trilingual language switcher in footer */}
            <div className="pt-1">
              <LanguageSwitcher variant="mobile-inline" />
            </div>
          </div>

          {/* Col 2: Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider text-amber-400">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.classes}
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.facilities}
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.admissions}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider text-amber-400">
              {t.footer.programs}
            </h4>
            <ul className="space-y-2 text-xs">
              {SCHOOL_CLASSES.map((cls) => {
                const name = getLocalizedClassName(cls.id);
                return (
                  <li key={cls.id}>
                    <button
                      type="button"
                      onClick={() => onOpenInquiry(cls.id)}
                      className="text-left hover:text-amber-400 transition-colors py-1 inline-flex items-center gap-1.5 cursor-pointer text-slate-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none rounded"
                    >
                      <span>{name}</span>
                      <span className="text-[10px] text-slate-400">({cls.ageRange})</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: WhatsApp Admissions Desk */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider text-emerald-400">
              WhatsApp Admissions
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with our admissions coordinator for fee structure, brochure, and campus walkthrough appointments.
            </p>

            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Little World School Admissions on WhatsApp"
              className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-2xl transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-900/40 cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Office: {SCHOOL_CONFIG.officeHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Fast WhatsApp Response Time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accessibility Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            {t.footer.copyright} • {t.footer.rightsReserved}
          </p>

          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-amber-400 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none rounded"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenSitemap}
              className="hover:text-amber-400 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none rounded"
            >
              {t.footer.sitemapLabel}
            </button>
            <span>•</span>
            <a
              href={SCHOOL_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open school campus on Google Maps"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none rounded"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* VICTORIX Developer Credit Section - Premium Animated Branding */}
        <div className="mt-10 pt-7 border-t border-slate-800/80">
          <div className="rounded-2xl bg-gradient-to-r from-slate-950 via-purple-950/40 to-slate-950 border border-purple-900/40 p-4 sm:p-5 shadow-xl shadow-purple-950/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
              {/* Left / Center branding text lockup (Silver & Purple Typography) */}
              <div className="flex flex-col gap-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1.5 text-xs text-slate-300">
                  <span className="text-slate-300 font-medium tracking-wide">
                    Website Designed &amp; Developed By
                  </span>
                  <span className="text-purple-400/50 hidden sm:inline" aria-hidden="true">•</span>
                  <span className="text-slate-100 font-extrabold tracking-wider text-xs sm:text-sm">
                    VICKY
                  </span>
                  <span className="text-purple-400/50 hidden sm:inline" aria-hidden="true">•</span>
                  {/* Stylish animated VICTORIX brand text with purple glow & shimmer */}
                  <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-lg bg-purple-950/90 border border-purple-500/50 animate-victorix-glow shadow-md">
                    <span className="animate-victorix-shimmer font-black tracking-widest text-xs uppercase select-none">
                      VICTORIX
                    </span>
                  </span>
                  <span className="text-purple-400/50 hidden sm:inline" aria-hidden="true">•</span>
                  <span className="text-slate-300 font-medium text-xs">
                    Website Designer &amp; Developer
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2 pt-0.5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-purple-300/80">
                    A VICTORIX Creation
                  </span>
                </div>
              </div>

              {/* Right: WhatsApp CTA Button with soft pulsing glow */}
              <div className="shrink-0 w-full sm:w-auto flex justify-center">
                <a
                  href={DEVELOPER_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Developer on WhatsApp"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-purple-950/90 border border-purple-500/60 hover:border-purple-400 animate-victorix-pulse hover:animate-none hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 active:scale-95 cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
                >
                  <MessageSquare className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="tracking-wide">Contact Developer on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
