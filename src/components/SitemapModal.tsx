import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n';
import { X, Network, ExternalLink, Globe, FileCode } from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose }) => {
  const { t, language, setLanguage } = useI18n();

  if (!isOpen) return null;

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const languageRoutes = SUPPORTED_LANGUAGES.map((lang) => ({
    code: lang.code,
    name: lang.nativeName,
    label: lang.label,
    url: `${origin}/${lang.code}`,
    hreflang: lang.code,
  }));

  const pageSections = [
    { id: '#home', title: t.nav.home },
    { id: '#about', title: t.nav.about },
    { id: '#classes', title: t.nav.classes },
    { id: '#facilities', title: t.nav.facilities },
    { id: '#admissions', title: t.nav.admissions },
    { id: '#gallery', title: t.nav.gallery },
    { id: '#faq', title: t.nav.faq },
    { id: '#contact', title: t.nav.contact },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sitemap-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl border border-amber-300 max-w-2xl w-full p-4 xs:p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Network className="w-5 h-5" />
            </div>
            <h3 id="sitemap-modal-title" className="text-sm xs:text-base sm:text-lg font-bold text-slate-900 truncate">
              {t.sitemapModal.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {t.sitemapModal.desc}
        </p>

        {/* Crawlable Language URLs */}
        <div className="space-y-2.5 sm:space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-amber-900">
            <Globe className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{t.sitemapModal.languagesTitle}</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {languageRoutes.map((r) => {
              const isCurrent = language === r.code;
              return (
                <div
                  key={r.code}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all ${
                    isCurrent
                      ? 'bg-amber-100/90 border-amber-400'
                      : 'bg-slate-50 border-slate-200 hover:bg-amber-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-extrabold text-xs sm:text-sm text-slate-900">
                      {r.name}
                    </span>
                    <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-600 shrink-0">
                      hreflang="{r.hreflang}"
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{r.label}</p>
                  <a
                    href={`/${r.code}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setLanguage(r.code as SupportedLanguage);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:underline mt-2 min-h-[30px]"
                  >
                    <span>/{r.code}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Major Section Anchors in current language */}
        <div className="space-y-2.5 sm:space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-amber-900">
            {t.sitemapModal.routesTitle} ({language.toUpperCase()})
          </h4>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {pageSections.map((sec) => (
              <a
                key={sec.id}
                href={sec.id}
                onClick={() => onClose()}
                className="p-2 sm:p-2.5 bg-slate-50 hover:bg-amber-100/60 rounded-xl border border-slate-200 font-semibold text-slate-800 flex items-center justify-between gap-1 min-h-[36px]"
              >
                <span className="truncate">{sec.title}</span>
                <span className="text-[10px] text-slate-400 font-mono shrink-0">{sec.id}</span>
              </a>
            ))}
          </div>
        </div>

        {/* XML Sitemap Snippet */}
        <div className="p-3.5 sm:p-4 bg-slate-900 text-slate-200 rounded-2xl space-y-2 text-xs font-mono max-w-full overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
            <span className="flex items-center gap-1.5">
              <FileCode className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>sitemap.xml (Alternate Hreflangs)</span>
            </span>
            <span className="text-[10px] text-emerald-400">Indexed</span>
          </div>
          <pre className="text-[11px] overflow-x-auto text-emerald-300 p-1">
{`<url>
  <loc>${origin || 'https://littleworldschool.edu.in'}/</loc>
  <xhtml:link rel="alternate" hreflang="en" href="${origin || 'https://littleworldschool.edu.in'}/en" />
  <xhtml:link rel="alternate" hreflang="mr" href="${origin || 'https://littleworldschool.edu.in'}/mr" />
  <xhtml:link rel="alternate" hreflang="hi" href="${origin || 'https://littleworldschool.edu.in'}/hi" />
  <xhtml:link rel="alternate" hreflang="x-default" href="${origin || 'https://littleworldschool.edu.in'}/en" />
</url>`}
          </pre>
        </div>

        <div className="pt-2 text-right">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
          >
            {t.sitemapModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
