import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Building2, Wrench, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';

const SERVICE_ICONS: Record<string, typeof Building2> = {
  'porta-cabins': Building2,
  'consumables-tools': Wrench,
  safety: ShieldCheck,
};

export function ServicesPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.servicesTitle;
  }, [t.meta.servicesTitle]);

  return (
    <>
      <PageBanner
        title={t.servicesPage.bannerTitle}
        subtitle={t.servicesPage.bannerSubtitle}
        breadcrumbs={[
          { label: t.breadcrumbs.home, to: '/' },
          { label: t.breadcrumbs.services },
        ]}
        backgroundImage="/images/hero/service-portacabin.jpg"
        backgroundAlt={t.services[0].imageAlt}
      />

      {/* Intro Band */}
      <section className="py-16 lg:py-20 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
              {t.servicesPage.introKicker}
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-4"
              style={{ textWrap: 'balance' }}
            >
              {t.servicesPage.introHeading}
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              {t.servicesPage.introDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Division Showcase Rows */}
      <section className="py-16 lg:py-24 bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {t.services.map((service, index) => {
            const Icon = SERVICE_ICONS[service.slug] ?? Building2;
            const imageFirstOnDesktop = index % 2 === 1;

            return (
              <article
                key={service.slug}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                <div
                  className={`lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between ${
                    imageFirstOnDesktop ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#25874D]/10 text-[#25874D] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-[#25874D] tabular-nums">
                        {t.servicesPage.divisionLabel} {service.number}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#242424] tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-500 mb-4">{service.tagline}</p>
                    <p className="text-base text-neutral-600 leading-relaxed mb-6">
                      {service.detailedIntro}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 mb-8">
                      {service.capabilities.slice(0, 8).map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <Check
                            className="w-4 h-4 text-[#25874D] mt-0.5 shrink-0"
                            strokeWidth={2.5}
                          />
                          <span className="text-sm text-[#242424] leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-3">
                    <Link
                      to={service.route}
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <span>{t.servicesPage.viewServiceDetails}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Link>
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.formOptionValue)}`}
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#242424] bg-[#F4F6F5] hover:bg-neutral-200/70 border border-neutral-200 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <span>{t.servicesPage.requestQuoteFor}</span>
                    </Link>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 min-h-[280px] lg:min-h-[430px] bg-neutral-100 ${
                    imageFirstOnDesktop ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
