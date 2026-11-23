import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  Maximize2,
  Building2,
  Factory,
  Wrench,
  ShieldCheck,
} from 'lucide-react';
import type { ServiceSlug } from '../i18n/types';
import { useLanguage } from '../i18n/LanguageContext';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';
import { LightboxModal, type LightboxImage } from '../components/LightboxModal';

const SERVICE_ICONS: Record<ServiceSlug, typeof Building2> = {
  'porta-cabins': Building2,
  'factory-services': Factory,
  'consumables-tools': Wrench,
  safety: ShieldCheck,
};

interface ServiceDetailPageProps {
  slug: ServiceSlug;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const service = t.services.find((s) => s.slug === slug) ?? t.services[0];
  const otherServices = t.services.filter((s) => s.slug !== service.slug);
  const Icon = SERVICE_ICONS[service.slug] ?? Building2;

  const relatedGallery = t.gallery.items.filter((item) =>
    service.relatedGalleryCategories.includes(item.categoryKey)
  );

  const lightboxItems: LightboxImage[] = relatedGallery.map((item) => ({
    image: item.image,
    alt: item.alt,
    title: item.title,
    category: item.categoryLabel,
    subtitle: item.subtitle,
  }));

  useEffect(() => {
    document.title = `${service.title} | ${t.meta.siteTitle}`;
    setLightboxIndex(null);
  }, [service.title, t.meta.siteTitle, slug]);

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: t.breadcrumbs.home, to: '/' },
          { label: t.breadcrumbs.services, to: '/services' },
          { label: service.shortTitle },
        ]}
        backgroundImage={service.heroImage}
        backgroundAlt={service.imageAlt}
      />

      {/* Primary Overview + Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25874D]/10 text-[#25874D] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-[#25874D] tabular-nums">
                    {t.servicesPage.divisionLabel} {service.number}
                  </span>
                </div>

                <h2
                  className="font-display text-2xl sm:text-3xl font-bold text-[#242424] tracking-tight mb-4"
                  style={{ textWrap: 'balance' }}
                >
                  {service.title}
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mb-8">
                  {service.detailedIntro}
                </p>

                <h3 className="font-display text-lg font-bold text-[#242424] mb-4">
                  {t.servicesPage.capabilitiesHeading}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#25874D] mt-1 shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-[#242424] leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex flex-wrap gap-3">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.formOptionValue)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>{t.servicesPage.requestQuoteFor}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#242424] bg-[#F4F6F5] hover:bg-neutral-200/70 border border-neutral-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>{t.home.viewFullGallery}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[320px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-neutral-200 bg-[#F4F6F5]">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Operational Specifications Grid */}
          <div className="mt-14 pt-12 border-t border-neutral-200">
            <h3 className="font-display text-lg font-bold text-[#242424] mb-6">
              {t.servicesPage.specificationsHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-[#F4F6F5] border border-neutral-200/80 rounded-xl p-5"
                >
                  <div className="text-xs font-semibold text-[#25874D] mb-1.5">
                    {spec.label}
                  </div>
                  <div className="text-sm font-medium text-[#242424] leading-relaxed">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Gallery for this Service */}
      {relatedGallery.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F4F6F5] border-y border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
                {t.servicesPage.relatedGalleryHeading}
              </h2>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25874D] hover:underline whitespace-nowrap"
              >
                <span>{t.home.viewFullGallery}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGallery.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="group text-start bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-[#25874D]/60 transition-colors cursor-pointer"
                >
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
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
                    <h3 className="font-display text-base font-bold text-[#242424]">
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
      )}

      {/* Cross-Navigation to Other 3 Service Divisions */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#242424] mb-8">
            {t.servicesPage.otherDivisionsHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => {
              const OtherIcon = SERVICE_ICONS[other.slug] ?? Building2;
              return (
                <Link
                  key={other.slug}
                  to={other.route}
                  className="group bg-[#F4F6F5] border border-neutral-200/80 rounded-xl p-6 hover:border-[#25874D]/60 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-white text-[#25874D] border border-neutral-200 flex items-center justify-center">
                        <OtherIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-400 tabular-nums">
                        {other.number}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#242424] group-hover:text-[#25874D] transition-colors mb-2">
                      {other.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {other.tagline}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25874D]">
                    <span>{t.servicesPage.viewServiceDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </div>
                </Link>
              );
            })}
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
