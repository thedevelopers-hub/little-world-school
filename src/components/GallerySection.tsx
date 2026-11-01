import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SCHOOL_IMAGES } from '../config/schoolConfig';
import { Camera, School, Trophy, Award, BookOpen, X, Sparkles, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<'all' | 'campus' | 'activities' | 'celebrations' | 'sports'>('all');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: t.gallery.filterAll },
    { id: 'activities', label: t.gallery.filterActivities },
    { id: 'campus', label: t.gallery.filterCampus },
    { id: 'celebrations', label: t.gallery.filterCelebrations },
    { id: 'sports', label: t.gallery.filterSports },
  ];

  const filteredItems =
    filter === 'all'
      ? t.gallery.items
      : t.gallery.items.filter((item) => item.category === filter);

  const getGalleryImage = (index: number) => {
    return (
      SCHOOL_IMAGES.gallery[index % SCHOOL_IMAGES.gallery.length]?.image ||
      SCHOOL_IMAGES.heroMain
    );
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="fluid-section-title font-extrabold text-slate-900 tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="fluid-body text-slate-700 font-normal">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div role="tablist" aria-label="Gallery category filters" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              aria-label={`Filter gallery by ${f.label}`}
              onClick={() => setFilter(f.id as any)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-extrabold rounded-2xl transition-all cursor-pointer min-h-[42px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                filter === f.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-amber-100/70 border border-amber-200/90 shadow-xs'
              }`}
            >
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid with Real Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const photoUrl = getGalleryImage(idx);

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${item.title}`}
                onClick={() => setActivePhoto(photoUrl)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePhoto(photoUrl);
                  }
                }}
                className="bg-white rounded-3xl border border-amber-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-amber-100">
                  <img
                    src={photoUrl}
                    alt={`${item.title} at Little World School Ambivli`}
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to enlarge</span>
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider text-amber-950 bg-white/95 px-2.5 py-1 rounded-full shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Caption */}
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo preview"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Close enlarged photo"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhoto}
              alt="Enlarged gallery view - Little World School Ambivli"
              width={1200}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
