import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG, SCHOOL_IMAGES } from '../config/schoolConfig';
import {
  Sparkles,
  MessageSquare,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Star,
} from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (defaultClass?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const { t, createWhatsAppUrl } = useI18n();

  const whatsappGeneralUrl = createWhatsAppUrl({ topic: 'general' });

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label, icon: GraduationCap, color: 'text-amber-700 bg-amber-100' },
    { value: t.hero.stat2Value, label: t.hero.stat2Label, icon: Users, color: 'text-emerald-700 bg-emerald-100' },
    { value: t.hero.stat3Value, label: t.hero.stat3Label, icon: CheckCircle2, color: 'text-sky-700 bg-sky-100' },
    { value: t.hero.stat4Value, label: t.hero.stat4Label, icon: MapPin, color: 'text-purple-700 bg-purple-100' },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F0] to-[#FFFDF9]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            {/* Main Headline - Fluid Typography */}
            <h1 className="fluid-hero-title font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              {t.hero.title}
            </h1>

            {/* Supporting Subtitle */}
            <p className="fluid-body text-slate-700 max-w-2xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Verified Location Banner */}
            <div className="inline-flex flex-wrap items-center gap-2 p-2.5 sm:p-3 bg-white/95 border border-amber-200/90 rounded-2xl text-xs sm:text-sm text-slate-800 font-medium shadow-xs max-w-full">
              <span className="flex items-center gap-1.5 font-bold text-amber-800">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t.hero.highlightAmbivli}</span>
              </span>
              <span className="text-amber-300 hidden sm:inline">•</span>
              <span className="text-slate-600 text-[11px] sm:text-xs">{SCHOOL_CONFIG.landmark}</span>
            </div>

            {/* Primary Action Buttons - WhatsApp Admissions Central */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* WhatsApp Admission CTA with pulsing indicator */}
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire about Admissions on WhatsApp"
                className="group relative px-6 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-sm sm:text-base font-extrabold rounded-2xl shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3 min-h-[48px] cursor-pointer"
              >
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <MessageSquare className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                <span>{t.hero.ctaAdmissions}</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary: Explore Classes / Programs */}
              <a
                href="#classes"
                className="px-5 py-3.5 sm:py-4 bg-white hover:bg-amber-50 active:scale-[0.98] text-slate-800 border border-amber-200 text-sm sm:text-base font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xs min-h-[48px]"
              >
                <span>{t.hero.ctaExplore}</span>
              </a>

              {/* Google Maps Directions */}
              <a
                href={SCHOOL_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-amber-900 hover:text-amber-700 hover:underline flex items-center justify-center gap-1.5 shrink-0 min-h-[44px]"
              >
                <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t.contact.getDirections}</span>
              </a>
            </div>

            {/* Reassurance trust points for parents */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] sm:text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>CCTV Monitored Safe Campus</span>
              </div>
              <div className="flex items-center gap-1.5 bg-amber-50 text-amber-950 px-2.5 py-1 rounded-full border border-amber-200">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>English Medium with Multilingual Care</span>
              </div>
              <div className="flex items-center gap-1.5 bg-sky-50 text-sky-950 px-2.5 py-1 rounded-full border border-sky-200">
                <Star className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Direct Counselor WhatsApp Line</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column: High-Quality Joyful Preschool Photography */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Organic Soft Pastel Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-300 via-rose-200 to-emerald-200 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-white shadow-2xl">
                {/* Hero Photo */}
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-amber-100">
                  <img
                    src={SCHOOL_IMAGES.heroMain}
                    alt="Happy children learning and building together at Little World School"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />


                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs sm:text-sm font-bold text-amber-200">
                      Little World School • Ambivli (West)
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/90 line-clamp-1">
                      Nurturing young minds through curiosity, warmth & holistic care.
                    </p>
                  </div>
                </div>

                {/* Micro-Features Bar Under Photo */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 pb-2 border-b border-amber-100">
                    <span className="flex items-center gap-1.5 text-amber-900">
                      <GraduationCap className="w-4 h-4 text-amber-600" />
                      Playgroup to Grade 12
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      Seats Available
                    </span>
                  </div>

                  {/* 1-Tap Quick WhatsApp Inquiry Button */}
                  <button
                    type="button"
                    onClick={() => onOpenInquiry('nursery')}
                    className="w-full py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Quick Class Inquiry via WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Floating Floating Pill: 15:1 Ratio */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white rounded-2xl p-3 shadow-xl border border-amber-200 flex items-center gap-2.5 z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">15:1 Student Ratio</p>
                  <p className="text-[10px] text-slate-500 font-medium">Individual Attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Highlights Strip */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-amber-200/60 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-amber-200/70 shadow-xs transition-all flex items-center gap-3 min-w-0"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-base sm:text-xl font-black text-slate-900 truncate tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium truncate">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
