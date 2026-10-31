import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="fluid-body text-slate-600 font-normal">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 sm:space-y-3.5">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-btn-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-amber-50/60 border-amber-300 shadow-xs'
                    : 'bg-white border-amber-200 hover:border-amber-300'
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full text-left p-3.5 sm:p-5 md:p-6 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-500 rounded-2xl min-h-[48px]"
                >
                  <span className="font-bold text-xs xs:text-sm sm:text-base text-slate-900 leading-snug break-words pr-1">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 ${
                      isOpen
                        ? 'bg-amber-600 text-white rotate-180'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-3.5 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-amber-200/60 pt-3 animate-in fade-in duration-150"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
