import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CLASSES, SchoolClassItem } from '../config/schoolConfig';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight,
  GraduationCap,
  Baby,
  Smile,
  BookOpen,
  Star,
} from 'lucide-react';

interface ClassesSectionProps {
  onOpenInquiry: (defaultClass?: string) => void;
}

export const ClassesSection: React.FC<ClassesSectionProps> = ({ onOpenInquiry }) => {
  const { t, createWhatsAppUrl } = useI18n();
  const [selectedClassId, setSelectedClassId] = useState<string>('nursery');

  const getClassData = (id: string) => {
    switch (id) {
      case 'pg':
        return { ...t.classes.pg, icon: Baby };
      case 'nursery':
        return { ...t.classes.nursery, icon: Smile };
      case 'jkg':
        return { ...t.classes.jkg, icon: BookOpen };
      case 'skg':
        return { ...t.classes.skg, icon: Sparkles };
      case 'grade1_12':
      default:
        return { ...t.classes.grade1_12, icon: GraduationCap };
    }
  };

  const selectedClassConfig = SCHOOL_CLASSES.find((c) => c.id === selectedClassId) || SCHOOL_CLASSES[1];
  const activeClassData = getClassData(selectedClassId);
  const ActiveIcon = activeClassData.icon;

  const activeWhatsAppUrl = createWhatsAppUrl({ topic: 'class', classId: selectedClassId });

  return (
    <section id="classes" className="py-14 sm:py-20 lg:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.classes.badge}</span>
          </div>
          <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight">
            {t.classes.title}
          </h2>
          <p className="fluid-body text-slate-600 font-normal">
            {t.classes.subtitle}
          </p>
        </div>

        {/* Class Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {SCHOOL_CLASSES.map((cls) => {
            const data = getClassData(cls.id);
            const isSelected = selectedClassId === cls.id;
            const Icon = data.icon;
            return (
              <button
                key={cls.id}
                type="button"
                onClick={() => setSelectedClassId(cls.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer min-h-[44px] ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-200/90 shadow-xs'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-200' : 'text-amber-600'}`} />
                <span className="whitespace-nowrap">{data.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Class Showcase Card */}
        <div className="bg-white rounded-3xl border border-amber-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 p-5 xs:p-7 sm:p-9 lg:p-11 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>
                    {t.classes.ageGroup}: {activeClassData.age}
                  </span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <span>{activeClassData.name}</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {activeClassData.desc}
                </p>
              </div>

              {/* Learning Highlights List */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-900">
                  {t.classes.keyActivities}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeClassData.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-amber-50/50 p-3 rounded-2xl border border-amber-100/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dedicated WhatsApp CTA for this specific class */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={activeWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-sm sm:text-base font-extrabold rounded-2xl shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer min-h-[48px] group"
                >
                  <MessageSquare className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span>Enquire for {activeClassData.name} on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Class Photo & Enrollment Information */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-amber-100 border-4 border-white shadow-xl group">
                <img
                  src={selectedClassConfig.image}
                  alt={`${activeClassData.name} learning environment at Little World School`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-amber-300 block">
                    {activeClassData.name}
                  </span>
                  <span className="text-xs text-white/90">
                    Age eligibility: {activeClassData.age}
                  </span>
                </div>
              </div>

              {/* Admission Info Box */}
              <div className="p-4 sm:p-5 bg-gradient-to-br from-amber-50 to-orange-50/70 rounded-2xl border border-amber-200/90 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between font-bold text-slate-900 pb-2 border-b border-amber-200/60">
                  <span className="text-amber-900">Campus:</span>
                  <span>Neptune Swarajya, Ambivli (W)</span>
                </div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span className="text-amber-900">Curriculum:</span>
                  <span>Play-Based & Integrated State/CBSE</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  * Admissions are offered on a rolling first-come basis. Inquire early to secure your child's seat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Grid of all 5 classes */}
        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {SCHOOL_CLASSES.map((cls) => {
            const cData = getClassData(cls.id);
            const isCurrent = selectedClassId === cls.id;
            return (
              <div
                key={cls.id}
                onClick={() => setSelectedClassId(cls.id)}
                className={`p-4 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-amber-100/90 border-amber-400 shadow-md scale-[1.02]'
                    : 'bg-white border-amber-200 hover:border-amber-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="font-extrabold text-sm text-slate-900 flex items-center justify-between gap-1">
                    <span className="truncate">{cData.name}</span>
                  </div>
                  <span className="inline-block text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full mt-1">
                    {cData.age}
                  </span>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {cData.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Chat on WhatsApp</span>
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
