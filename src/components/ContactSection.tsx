import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG } from '../config/schoolConfig';
import {
  MapPin,
  Navigation,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Building2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Mail,
  Compass,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, createWhatsAppUrl } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyPostalAddress = () => {
    navigator.clipboard.writeText(
      `${SCHOOL_CONFIG.officialName}, ${SCHOOL_CONFIG.officialAddress}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappVisitUrl = createWhatsAppUrl({ topic: 'location' });

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="fluid-body text-slate-700 font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Official Address & Details */}
          <div className="lg:col-span-7 bg-[#FAF7F0] border border-amber-200/90 rounded-3xl p-6 sm:p-9 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* School Name & Campus */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-600/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {SCHOOL_CONFIG.officialName}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 font-bold mt-0.5">
                    Ambivli Campus • Neptune Swarajya Gated Community
                  </p>
                </div>
              </div>

              {/* Localized Address Block */}
              <div className="space-y-3 bg-white p-5 rounded-2xl border border-amber-200/90 shadow-xs">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-1">
                    {t.contact.addressLabel}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed font-sans break-words">
                    {SCHOOL_CONFIG.officialAddress}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-600 block">
                      {t.contact.landmarkLabel}:
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-amber-900">
                      {SCHOOL_CONFIG.landmark}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={copyPostalAddress}
                    aria-label="Copy official postal address to clipboard"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-xl transition-colors cursor-pointer shrink-0 min-h-[38px] focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? t.contact.addressCopied : t.contact.copyAddress}</span>
                  </button>
                </div>
              </div>

              {/* Campus Hours Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Office Hours */}
                <div className="p-4 bg-white rounded-2xl border border-amber-200/90 space-y-1">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    {t.contact.officeHoursLabel}
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                    {SCHOOL_CONFIG.officeHours}
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium">Admissions & Counseling</p>
                </div>

                {/* School Timings */}
                <div className="p-4 bg-white rounded-2xl border border-amber-200/90 space-y-1">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    {t.contact.timingsLabel}
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                    {SCHOOL_CONFIG.prePrimaryTimings} (Pre-Primary)
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium">
                    {SCHOOL_CONFIG.primaryTimings} (Primary/Sec)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp & Google Maps Actions */}
            <div className="pt-4 border-t border-amber-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappVisitUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book campus visit on WhatsApp"
                className="flex-1 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 min-h-[46px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>{t.contact.whatsappVisit || 'Book Campus Visit on WhatsApp'}</span>
              </a>

              <a
                href={SCHOOL_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to Little World School in Google Maps"
                className="py-3.5 px-5 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-2 min-h-[46px] focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>{t.contact.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-200 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Preview Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
                  Campus Navigation
                </span>
                <span className="px-3 py-1 text-xs font-extrabold bg-amber-200/80 text-amber-950 rounded-full">
                  Ambivli (West)
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                {SCHOOL_CONFIG.officialName} Campus
              </h3>

              {/* Map Preview Graphic */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-300 bg-white shadow-inner p-4 text-center space-y-3">
                <div className="h-44 sm:h-48 bg-gradient-to-br from-amber-100 via-emerald-50 to-amber-50 rounded-xl flex flex-col items-center justify-center p-4 border border-amber-200 relative">
                  <div className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 animate-bounce shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <p className="font-black text-slate-900 text-sm mt-3">
                    Neptune Swarajya, Ambivli (W)
                  </p>
                  <p className="text-xs text-slate-700">
                    Just 5 min walk / auto from Ambivli Railway Station
                  </p>
                </div>

                <div className="text-left text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900">
                    🚉 Distance: ~1 km from Ambivli Station
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Direct access via Swarajya Road. Easy connectivity from Shahad, Titwala, and Kalyan.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/95 border border-amber-200 rounded-2xl text-xs text-slate-700 space-y-1.5">
                <p className="font-extrabold text-amber-950">
                  {t.contact.quickHelp}
                </p>
                <p className="leading-relaxed">
                  {t.contact.quickHelpDesc}
                </p>
              </div>
            </div>

            <a
              href={SCHOOL_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Little World School campus location in Google Maps app"
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center justify-center gap-2 min-h-[46px] focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <Compass className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
