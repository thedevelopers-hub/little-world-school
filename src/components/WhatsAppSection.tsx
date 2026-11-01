import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG, SCHOOL_CLASSES } from '../config/schoolConfig';
import {
  MessageSquare,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const WhatsAppSection: React.FC = () => {
  const { t, language, getLocalizedClassName } = useI18n();

  const [topic, setTopic] = useState<'class' | 'general' | 'location' | 'fees' | 'transport'>('class');
  const [classId, setClassId] = useState<string>('nursery');
  const [copied, setCopied] = useState(false);

  // Compute live message preview
  const localizedClassName = getLocalizedClassName(classId);

  let messageText = '';
  switch (topic) {
    case 'class':
      messageText = t.whatsapp.classTemplate.replace('{class}', localizedClassName);
      break;
    case 'location':
      messageText = t.whatsapp.locationTemplate;
      break;
    case 'fees':
      messageText = t.whatsapp.feesTemplate.replace('{class}', localizedClassName);
      break;
    case 'transport':
      messageText = t.whatsapp.transportTemplate;
      break;
    case 'general':
    default:
      messageText = t.whatsapp.generalTemplate;
      break;
  }

  const whatsappHref = `https://wa.me/${SCHOOL_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  const copyText = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topics = [
    { id: 'class', label: t.whatsapp.topicClass },
    { id: 'general', label: t.whatsapp.topicGeneral },
    { id: 'fees', label: t.whatsapp.topicFees },
    { id: 'transport', label: t.whatsapp.topicTransport },
    { id: 'location', label: t.whatsapp.topicLocation },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-50/70 via-amber-50/40 to-emerald-50/60 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-emerald-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.whatsapp.directDeskBadge || 'Dedicated Parent Admissions Desk'}</span>
              </div>

              <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight leading-tight">
                {t.whatsapp.title}
              </h2>

              <p className="fluid-body text-slate-700 font-normal leading-relaxed">
                {t.whatsapp.subtitle}
              </p>

              {/* Topic Selector */}
              <div className="space-y-2.5 pt-1">
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                  {t.whatsapp.selectTopicLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTopic(item.id as any)}
                      className={`px-3.5 py-2 text-xs font-bold rounded-2xl transition-all cursor-pointer min-h-[38px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
                        topic === item.id
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100 border border-emerald-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Class Selector when class-related topic is active */}
              {(topic === 'class' || topic === 'fees') && (
                <div className="space-y-2 pt-1 animate-in fade-in duration-200">
                  <label className="block text-xs font-bold text-slate-700">
                    Target Class / Program:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SCHOOL_CLASSES.map((cls) => {
                      const locName = getLocalizedClassName(cls.id);
                      return (
                        <button
                          key={cls.id}
                          type="button"
                          onClick={() => setClassId(cls.id)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                            classId === cls.id
                              ? 'bg-amber-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                          }`}
                        >
                          {locName}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Trust Reassurance Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Responds in &lt; 15 mins (School Hours)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Official School Line</span>
                </div>
              </div>
            </div>

            {/* Right Interactive WhatsApp Message Preview & Send Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-emerald-500/10 via-amber-50/40 to-emerald-500/15 rounded-3xl p-5 sm:p-7 border border-emerald-200 space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {SCHOOL_CONFIG.officialName}
                    </h4>
                    <p className="text-[10px] text-emerald-800 font-bold">
                      Official WhatsApp Admissions Desk
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-extrabold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-full">
                  Online
                </span>
              </div>

              {/* Chat Bubble Preview */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-800 block">
                  {t.whatsapp.previewLabel}
                </span>

                <div className="p-4 sm:p-5 bg-white rounded-2xl rounded-tl-xs border border-emerald-200 shadow-sm text-slate-800 text-xs sm:text-sm leading-relaxed relative font-sans">
                  <p className="whitespace-pre-line">{messageText}</p>
                  <span className="text-[10px] text-slate-600 block text-right mt-2 font-mono">
                    Direct • Click to Send
                  </span>
                </div>
              </div>

              {/* Send Button & Copy Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send admissions inquiry on WhatsApp"
                  className="flex-1 py-3.5 sm:py-4 px-5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer min-h-[48px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <span>{t.whatsapp.sendButton}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={copyText}
                  aria-label="Copy message text to clipboard"
                  className="py-3 px-4 bg-white hover:bg-emerald-50 text-slate-800 border border-emerald-300 font-bold text-xs sm:text-sm rounded-2xl transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-700 text-center font-medium">
                {t.whatsapp.chatHelp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
