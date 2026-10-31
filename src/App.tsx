/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { I18nProvider, useI18n } from './i18n/I18nContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ClassesSection } from './components/ClassesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { SitemapModal } from './components/SitemapModal';
import { InquiryModal } from './components/InquiryModal';
import { MessageSquare, ArrowUp, AlertTriangle, Sparkles } from 'lucide-react';

const MainApp: React.FC = () => {
  const { t, language, createWhatsAppUrl } = useI18n();

  // Modals state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryClass, setInquiryClass] = useState<string>('nursery');
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [is404, setIs404] = useState(false);

  // Check path for 404
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      if (path && path !== 'en' && path !== 'mr' && path !== 'hi') {
        setIs404(true);
      }
    }
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openInquiry = (defaultClass?: string) => {
    if (defaultClass) setInquiryClass(defaultClass);
    setInquiryModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (is404) {
    return (
      <div className="min-h-screen bg-amber-50/50 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
          <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          {t.system.pageNotFound}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6 font-sans">
          The requested page could not be found. Please return to the Little World School homepage.
        </p>
        <button
          type="button"
          onClick={() => {
            setIs404(false);
            if (typeof window !== 'undefined') {
              window.history.pushState(null, '', `/${language}`);
            }
          }}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer min-h-[44px]"
        >
          {t.system.backToHome}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-slate-800 w-full overflow-x-clip selection:bg-amber-200 selection:text-amber-900">
      {/* Header with Navigation and Segmented Language Switcher */}
      <Navbar onOpenInquiry={openInquiry} />

      {/* Main Content Sections with Fluid Container Widths */}
      <main className="flex-1 w-full min-w-0 max-w-full">
        <Hero onOpenInquiry={openInquiry} />
        <AboutSection />
        <ClassesSection onOpenInquiry={openInquiry} />
        <FacilitiesSection />
        <AdmissionsSection preselectedClass={inquiryClass} />
        <WhatsAppSection />
        <GallerySection />
        <ContactSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenSitemap={() => setSitemapModalOpen(true)}
        onOpenInquiry={openInquiry}
      />

      {/* Floating Action Elements */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white/95 text-slate-700 hover:text-amber-800 border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Beautiful Floating WhatsApp Button with Pulse & Tooltip Bubble */}
        <div className="relative group pointer-events-auto">
          {/* Tooltip bubble on hover for desktop */}
          <div className="absolute right-0 bottom-full mb-2 hidden md:group-hover:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-bottom-1">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chat with Admissions Desk on WhatsApp</span>
          </div>

          <a
            href={createWhatsAppUrl({ topic: 'general' })}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Little World School Admissions on WhatsApp"
            className="p-3.5 sm:px-5 sm:py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-black text-xs sm:text-sm rounded-full sm:rounded-2xl shadow-xl shadow-emerald-700/40 hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer min-h-[48px] min-w-[48px] justify-center"
          >
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <MessageSquare className="w-5 h-5 text-white shrink-0" />
            <span className="hidden sm:inline font-extrabold tracking-wide">
              WhatsApp Admissions
            </span>
          </a>
        </div>
      </div>

      {/* Popups & Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultClass={inquiryClass}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <SitemapModal
        isOpen={sitemapModalOpen}
        onClose={() => setSitemapModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <I18nProvider>
      <MainApp />
    </I18nProvider>
  );
}
