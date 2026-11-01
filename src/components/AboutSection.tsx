import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG, SCHOOL_IMAGES } from '../config/schoolConfig';
import {
  Heart,
  Target,
  Sparkles,
  BookOpen,
  Palette,
  Atom,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Smile,
  MapPin,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useI18n();

  const pillars = [
    {
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc,
      icon: BookOpen,
      bg: 'bg-amber-50/80',
      border: 'border-amber-200',
      badgeBg: 'bg-amber-100 text-amber-800',
      iconColor: 'text-amber-700',
    },
    {
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc,
      icon: Palette,
      bg: 'bg-rose-50/80',
      border: 'border-rose-200',
      badgeBg: 'bg-rose-100 text-rose-800',
      iconColor: 'text-rose-700',
    },
    {
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc,
      icon: Atom,
      bg: 'bg-sky-50/80',
      border: 'border-sky-200',
      badgeBg: 'bg-sky-100 text-sky-800',
      iconColor: 'text-sky-700',
    },
    {
      title: t.about.pillar4Title,
      desc: t.about.pillar4Desc,
      icon: ShieldCheck,
      bg: 'bg-emerald-50/80',
      border: 'border-emerald-200',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      iconColor: 'text-emerald-700',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight">
            {t.about.title}
          </h2>
          <p className="fluid-body text-slate-700 font-normal">
            {t.about.subtitle}
          </p>
        </div>

        {/* Storytelling Grid: Text & Leadership Vision + Classroom Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Text & Heritage */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              {t.about.storyTitle}
            </h3>

            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm md:text-base">
              {t.about.storyP1}
            </p>

            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm md:text-base">
              {t.about.storyP2}
            </p>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-3xl bg-amber-50/70 border border-amber-200/90 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-amber-700" />
                  </div>
                  <span>{t.about.visionTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-3xl bg-emerald-50/70 border border-emerald-200/90 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span>{t.about.missionTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
            </div>

            {/* Campus Highlight Pill */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Neptune Swarajya Campus:</strong> Peaceful, traffic-free, and pollution-safe gated community in Ambivli (West).
              </span>
            </div>
          </div>

          {/* Right Visuals & Leadership Quote */}
          <div className="lg:col-span-5 space-y-4">
            {/* Visual Classroom Photograph */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-amber-100 aspect-[4/3]">
              <img
                src={SCHOOL_IMAGES.aboutStory}
                alt="Teacher interacting warmly with young children at Little World School Ambivli"
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-bold text-amber-300">Caring Educators</p>
                <p className="text-xs sm:text-sm font-semibold text-white/95">
                  Fostering curiosity, empathy, and joy every single day.
                </p>
              </div>
            </div>

            {/* Principal / Leadership Quote Box */}
            <div className="relative p-5 sm:p-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl shadow-lg space-y-3">
              <Quote className="w-8 h-8 text-amber-200/60" />
              <blockquote className="text-xs sm:text-sm md:text-base font-medium italic leading-relaxed text-amber-50">
                {t.about.principalQuote}
              </blockquote>
              <div className="pt-2 border-t border-amber-400/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">
                    {t.about.principalRole}
                  </p>
                  <p className="text-[10px] text-amber-200">
                    Little World School • Ambivli
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] bg-white/20 px-2.5 py-1 rounded-full text-white font-semibold">
                  <Smile className="w-3.5 h-3.5 text-amber-200" />
                  <span>Est. {SCHOOL_CONFIG.establishedYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Pillars of Growth: Soft Pastel Cards with Organic Shapes */}
        <div className="pt-4 sm:pt-8 border-t border-slate-100">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900">
              {t.about.pillarsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              Our holistic pedagogical approach for every learner's cognitive and emotional well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`${pillar.bg} border ${pillar.border} rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group min-w-0`}
                >
                  <div className="space-y-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>

                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-black/5 flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Holistic Pedagogy</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
