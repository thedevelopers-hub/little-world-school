import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG, SCHOOL_CLASSES } from '../config/schoolConfig';
import {
  Sparkles,
  CheckCircle2,
  FileText,
  MessageSquare,
  ArrowRight,
  Calendar,
  Check,
  ShieldCheck,
  Clock,
  MapPin,
  Heart,
  Baby,
  Smile,
  BookOpen,
  GraduationCap,
} from 'lucide-react';

interface AdmissionsSectionProps {
  preselectedClass?: string;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  preselectedClass = 'nursery',
}) => {
  const { t, createWhatsAppUrl, getLocalizedClassName } = useI18n();

  const [activeClassId, setActiveClassId] = useState<string>(preselectedClass);

  const steps = [
    {
      num: '01',
      title: t.admissions.step1Title,
      desc: t.admissions.step1Desc,
      icon: MessageSquare,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      num: '02',
      title: t.admissions.step2Title,
      desc: t.admissions.step2Desc,
      icon: MapPin,
      color: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      num: '03',
      title: t.admissions.step3Title,
      desc: t.admissions.step3Desc,
      icon: FileText,
      color: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
      num: '04',
      title: t.admissions.step4Title,
      desc: t.admissions.step4Desc,
      icon: Heart,
      color: 'bg-rose-100 text-rose-800 border-rose-300',
    },
  ];

  const getClassIcon = (id: string) => {
    switch (id) {
      case 'pg':
        return Baby;
      case 'nursery':
        return Smile;
      case 'jkg':
        return BookOpen;
      case 'skg':
        return Sparkles;
      case 'grade1_12':
      default:
        return GraduationCap;
    }
  };

  const activeWhatsAppUrl = createWhatsAppUrl({ topic: 'class', classId: activeClassId });
  const activeClassName = getLocalizedClassName(activeClassId);

  return (
    <section id="admissions" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight">
            {t.admissions.title}
          </h2>
          <p className="fluid-body text-slate-700 font-normal">
            {t.admissions.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-full text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{t.admissions.fastResponseBadge || 'Average WhatsApp response time: under 15 minutes during school hours.'}</span>
          </div>
        </div>

        {/* 4-Step Illustrated Admission Journey */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14 sm:mb-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F0] border border-amber-200/90 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all relative flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-600 tracking-tight">
                      {step.num}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-xs ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-200/50 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Hassle-Free & Transparent</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Class Selector & Instant WhatsApp Launch Box */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden mb-14 sm:mb-20">
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Instant Admission Desk</span>
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              {t.admissions.chooseClassTitle || 'Choose a Class to Enquire on WhatsApp'}
            </h3>

            <p className="text-sm sm:text-base text-amber-100 max-w-2xl mx-auto leading-relaxed">
              {t.admissions.chooseClassSubtitle || 'Select your child’s class below to send a customized, pre-filled WhatsApp inquiry directly to our principal & admissions coordinator.'}
            </p>

            {/* Class Selection Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
              {SCHOOL_CLASSES.map((cls) => {
                const Icon = getClassIcon(cls.id);
                const isSelected = activeClassId === cls.id;
                const locName = getLocalizedClassName(cls.id);
                return (
                  <button
                    key={cls.id}
                    type="button"
                    onClick={() => setActiveClassId(cls.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
                      isSelected
                        ? 'bg-white text-slate-900 shadow-lg scale-105 ring-2 ring-white'
                        : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{locName}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-amber-100 text-amber-900' : 'bg-black/20 text-white'}`}>
                      {cls.ageRange}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Launch WhatsApp Button for Selected Class */}
            <div className="pt-4 flex flex-col items-center gap-3">
              <a
                href={activeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire for ${activeClassName} admission on WhatsApp`}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white text-base sm:text-lg font-black rounded-2xl shadow-xl shadow-black/20 hover:shadow-2xl transition-all flex items-center justify-center gap-3 group cursor-pointer min-h-[52px] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <MessageSquare className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
                <span>Enquire for {activeClassName} on WhatsApp</span>
                <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-xs text-amber-100/90 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Zero spam guarantee. Direct connection with Little World School counselors.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Documentation Checklist & Age Guidelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Required Documents */}
          <div className="lg:col-span-7 bg-[#FAF7F0] border border-amber-200/90 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                  {t.admissions.docReqTitle}
                </h4>
                <p className="text-xs text-slate-700 font-medium">
                  {t.admissions.docReqSubtitle}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {t.admissions.docs.map((doc, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-2xl border border-amber-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Age Guidelines & Timings Box */}
          <div className="lg:col-span-5 bg-white border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                  {t.admissions.criteriaTitle}
                </h4>
                <p className="text-xs text-slate-700 font-medium">
                  {t.admissions.criteriaSubtitle}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              {SCHOOL_CLASSES.map((cls) => {
                const locName = getLocalizedClassName(cls.id);
                return (
                  <div
                    key={cls.id}
                    className="flex items-center justify-between p-3 bg-[#FAF7F0] rounded-2xl border border-amber-100 text-xs sm:text-sm"
                  >
                    <span className="font-bold text-slate-900">{locName}</span>
                    <span className="font-extrabold text-amber-900 bg-white px-2.5 py-1 rounded-xl border border-amber-200">
                      {cls.ageRange}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Direct WhatsApp Prompt */}
            <div className="pt-2">
              <a
                href={createWhatsAppUrl({ topic: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask an age eligibility question on WhatsApp"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Have an age eligibility question? Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
