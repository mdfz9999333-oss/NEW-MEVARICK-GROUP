import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';

export function PartnersPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.partnersTitle;
  }, [t.meta.partnersTitle]);

  const corporatePartners = t.partners.items.slice(0, 5);
  const publicSectorPartners = t.partners.items.slice(5);

  return (
    <>
      <PageBanner
        title={t.partners.bannerTitle}
        subtitle={t.partners.bannerSubtitle}
        breadcrumbs={[
          { label: t.breadcrumbs.home, to: '/' },
          { label: t.breadcrumbs.partners },
        ]}
        backgroundImage="/images/hero/containers-yard.jpg"
        backgroundAlt={t.partners.heading}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
              {t.partners.kicker}
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-4"
              style={{ textWrap: 'balance' }}
            >
              {t.partners.heading}
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              {t.partners.description}
            </p>
          </div>

          {/* Contracting & Industrial Partners */}
          <div className="mb-14">
            <h3 className="font-display text-lg font-bold text-[#242424] pb-3 border-b border-neutral-200 mb-6">
              {t.partners.corporateSectorLabel}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {corporatePartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col items-center justify-between text-center hover:border-[#25874D]/50 transition-colors"
                >
                  <div className="w-full h-28 flex items-center justify-center mb-4">
                    <ResilientImage
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="pt-3 border-t border-neutral-100 w-full">
                    <div className="text-sm font-semibold text-[#242424]">{partner.name}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{partner.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government & Public Sector Entities */}
          <div>
            <h3 className="font-display text-lg font-bold text-[#242424] pb-3 border-b border-neutral-200 mb-6">
              {t.partners.publicSectorLabel}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {publicSectorPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-[#F4F6F5] border border-neutral-200/80 rounded-xl p-6 flex flex-col items-center justify-between text-center hover:border-[#25874D]/50 transition-colors"
                >
                  <div className="w-full h-32 bg-white rounded-lg border border-neutral-200/60 p-4 flex items-center justify-center mb-4">
                    <ResilientImage
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-sm font-semibold text-[#242424]">{partner.name}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{partner.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#242424] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.partners.ctaHeading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {t.partners.ctaDescription}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <span>{t.partners.ctaButton}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
