import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { useLanguage } from '../i18n/LanguageContext';

export interface LightboxImage {
  image: string;
  alt: string;
  title: string;
  category: string;
  subtitle: string;
}

interface LightboxModalProps {
  items: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  const { t, isRtl } = useLanguage();

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const delta = isRtl ? 1 : -1;
        onChangeIndex((activeIndex + delta + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        const delta = isRtl ? -1 : 1;
        onChangeIndex((activeIndex + delta + items.length) % items.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, items.length, isRtl, onChangeIndex, onClose]);

  if (activeIndex === null || !items[activeIndex]) return null;

  const activeItem = items[activeIndex];

  const handlePrev = () => {
    onChangeIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onChangeIndex((activeIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#1C1C1C] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <div className="text-xs font-medium text-[#39B66A] tabular-nums">
              {activeItem.category} · {activeIndex + 1} / {items.length}
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-white">
              {activeItem.title}
            </h3>
          </div>
          <button
            type="button"
            aria-label={t.gallery.closeModalLabel}
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-black flex items-center justify-center max-h-[70vh] min-h-[300px]">
          <ResilientImage
            src={activeItem.image}
            alt={activeItem.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />

          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label={t.gallery.prevLabel}
                onClick={handlePrev}
                className="absolute start-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>
              <button
                type="button"
                aria-label={t.gallery.nextLabel}
                onClick={handleNext}
                className="absolute end-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </>
          )}
        </div>

        <div className="px-5 py-4 bg-[#242424] text-sm text-neutral-300">
          {activeItem.subtitle}
        </div>
      </div>
    </div>
  );
}
