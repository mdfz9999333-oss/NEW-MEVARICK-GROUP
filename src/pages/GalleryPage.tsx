import { useState, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';
import type { GalleryCategoryKey } from '../i18n/types';
import { useLanguage } from '../i18n/LanguageContext';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';
import { LightboxModal, type LightboxImage } from '../components/LightboxModal';

export function GalleryPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategoryKey>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = t.meta.galleryTitle;
  }, [t.meta.galleryTitle]);

  const filteredItems =
    selectedCategory === 'all'
      ? t.gallery.items
      : t.gallery.items.filter((item) => item.categoryKey === selectedCategory);

  const lightboxItems: LightboxImage[] = filteredItems.map((item) => ({
    image: item.image,
    alt: item.alt,
    title: item.title,
    category: item.categoryLabel,
    subtitle: item.subtitle,
  }));

  return (
    <>
      <PageBanner
        title={t.gallery.bannerTitle}
        subtitle={t.gallery.bannerSubtitle}
        breadcrumbs={[
          { label: t.breadcrumbs.home, to: '/' },
          { label: t.breadcrumbs.gallery },
        ]}
        backgroundImage="/images/gallery/office-cabins.jpg"
        backgroundAlt={t.gallery.items[0].alt}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.gallery.kicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                {t.gallery.heading}
              </h2>
            </div>
            <div className="text-sm text-neutral-500 tabular-nums">
              {t.gallery.showingLabel} {filteredItems.length}{' '}
              {filteredItems.length === 1 ? t.gallery.itemSingular : t.gallery.itemPlural}
            </div>
          </div>

          {/* Interactive 10-Category Filter Bar */}
          <div
            role="tablist"
            aria-label={t.gallery.kicker}
            className="flex flex-wrap gap-1.5 p-1.5 bg-[#F4F6F5] border border-neutral-200/80 rounded-xl mb-10"
          >
            {t.gallery.categories.map((category) => {
              const isActive = category.key === selectedCategory;
              return (
                <button
                  key={category.key}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedCategory(category.key);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#242424] shadow-sm border border-neutral-200/80'
                      : 'text-neutral-600 hover:text-[#242424]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* 4:3 Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group text-start bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-[#25874D]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25874D]"
              >
                <div className="relative aspect-[4/3] bg-[#F4F6F5] overflow-hidden">
                  <ResilientImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#242424]/90 text-white text-xs font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{t.gallery.enlargeLabel}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs font-medium text-[#25874D] mb-1">
                    {item.categoryLabel}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#242424] group-hover:text-[#25874D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        items={lightboxItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </>
  );
}
