import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG, SCHOOL_CLASSES } from '../config/schoolConfig';
import {
  X,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  ArrowRight,
  ShieldCheck,
  Baby,
  Smile,
  BookOpen,
  GraduationCap,
} from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClass?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultClass = 'nursery',
}) => {
  const { t, language, getLocalizedClassName } = useI18n();

  const [selectedClass, setSelectedClass] = useState(defaultClass);
  const [topic, setTopic] = useState<'class' | 'general' | 'fees' | 'transport' | 'location'>('class');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const localizedClass = getLocalizedClassName(selectedClass);

  let messageText = '';
  switch (topic) {
    case 'class':
      messageText = t.whatsapp.classTemplate.replace('{class}', localizedClass);
      break;
    case 'fees':
      messageText = t.whatsapp.feesTemplate.replace('{class}', localizedClass);
      break;
    case 'location':
      messageText = t.whatsapp.locationTemplate;
      break;
    case 'transport':
      messageText = t.whatsapp.transportTemplate;
      break;
    case 'general':
    default:
      messageText = t.whatsapp.generalTemplate;
      break;
  }

  const handleOpenWhatsApp = () => {
    const url = `https://wa.me/${SCHOOL_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const copyText = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="bg-white rounded-3xl border border-emerald-300 max-w-lg w-full p-5 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 truncate">
                WhatsApp Admission Connect
              </h3>
              <p className="text-[11px] text-emerald-700 font-bold">
                {SCHOOL_CONFIG.officialName} • Ambivli (West)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl cursor-pointer shrink-0 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Choose Target Class */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            1. Select Class / Age Group:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SCHOOL_CLASSES.map((cls) => {
              const Icon = getClassIcon(cls.id);
              const isSelected = selectedClass === cls.id;
              const name = getLocalizedClassName(cls.id);
              return (
                <button
                  key={cls.id}
                  type="button"
                  onClick={() => {
                    setSelectedClass(cls.id);
                    if (topic !== 'class' && topic !== 'fees') {
                      setTopic('class');
                    }
                  }}
                  className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-white border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-600' : 'text-slate-500'}`} />
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">
                      {cls.ageRange}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 mt-1.5 truncate">
                    {name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Choose Topic */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            2. Choose Inquiry Topic:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'class', label: 'Class Admission' },
              { id: 'fees', label: 'Fee Structure' },
              { id: 'transport', label: 'Van / Bus Routes' },
              { id: 'location', label: 'Campus Tour' },
              { id: 'general', label: 'General Info' },
            ].map((tItem) => (
              <button
                key={tItem.id}
                type="button"
                onClick={() => setTopic(tItem.id as any)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  topic === tItem.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tItem.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Message Preview */}
        <div className="space-y-1.5 bg-[#FAF7F0] p-3.5 rounded-2xl border border-amber-200">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600">
            <span>Pre-filled WhatsApp Message:</span>
            <button
              type="button"
              onClick={copyText}
              className="text-[11px] font-bold text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="p-3 bg-white rounded-xl border border-amber-200/80 text-xs text-slate-800 leading-relaxed font-sans">
            <p className="whitespace-pre-line">{messageText}</p>
          </div>
        </div>

        {/* Single Primary Action: Launch WhatsApp */}
        <div className="space-y-2.5 pt-1">
          <button
            type="button"
            onClick={handleOpenWhatsApp}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer min-h-[48px]"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Open WhatsApp to Inquire</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1 text-emerald-700">
              <Clock className="w-3.5 h-3.5" />
              <span>Responds in &lt; 15 mins</span>
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Counselor Connect</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
