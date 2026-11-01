import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_CONFIG } from '../config/schoolConfig';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl border border-amber-300 max-w-xl w-full p-4 xs:p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-4 sm:space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 id="privacy-modal-title" className="text-sm xs:text-base sm:text-lg font-bold text-slate-900 truncate">
              {t.privacyModal.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close privacy policy dialog"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
          <p>{t.privacyModal.p1}</p>
          <p>{t.privacyModal.p2}</p>
          <p>{t.privacyModal.p3}</p>
          <p>{t.privacyModal.p4}</p>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 font-medium">
            <p className="font-bold">{SCHOOL_CONFIG.officialName}</p>
            <p className="text-xs text-slate-700 mt-0.5 break-words font-medium">{SCHOOL_CONFIG.officialAddress}</p>
            <p className="text-xs text-slate-700 mt-0.5 font-medium">Email: {SCHOOL_CONFIG.email}</p>
          </div>
        </div>

        <div className="pt-2 text-right">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close privacy dialog"
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {t.privacyModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
