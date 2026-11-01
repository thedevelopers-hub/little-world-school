import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_IMAGES } from '../config/schoolConfig';
import {
  Sparkles,
  Monitor,
  Gamepad2,
  BookOpen,
  Palette,
  Video,
  Droplet,
  Bus,
  HeartPulse,
} from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const { t } = useI18n();

  const facilityIcons = [
    Monitor,
    Gamepad2,
    BookOpen,
    Palette,
    Video,
    Droplet,
    Bus,
    HeartPulse,
  ];

  return (
    <section id="facilities" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.facilities.badge}</span>
          </div>
          <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight">
            {t.facilities.title}
          </h2>
          <p className="fluid-body text-slate-700 font-normal">
            {t.facilities.subtitle}
          </p>
        </div>

        {/* Facilities Grid with 8 High-Quality Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.facilities.items.map((facility, index) => {
            const Icon = facilityIcons[index % facilityIcons.length];
            const photo =
              SCHOOL_IMAGES.facilities[index % SCHOOL_IMAGES.facilities.length]?.image;

            return (
              <div
                key={index}
                className="bg-[#FAF7F0] hover:bg-amber-50/70 border border-amber-200/80 hover:border-amber-300 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group min-w-0"
              >
                {/* Photo Top with Soft Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-amber-100">
                  <img
                    src={photo}
                    alt={`${facility.title} facility at Little World School campus Ambivli`}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 right-3 text-[11px] font-black text-amber-950 bg-white/95 px-3 py-1 rounded-full shadow-xs">
                    {facility.tag}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-amber-900 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2">
                      {facility.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-amber-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-700">
                    <span>Neptune Swarajya Campus</span>
                    <span className="text-emerald-700 font-bold">Verified Child Safe</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
