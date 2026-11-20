import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Quote,
  ShieldCheck,
  SlidersHorizontal,
  Clock,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';

const STRENGTH_ICONS: Record<string, typeof ShieldCheck> = {
  quality: ShieldCheck,
  customization: SlidersHorizontal,
  reliability: Clock,
  comprehensive: Layers,
};

export function AboutPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.aboutTitle;
  }, [t.meta.aboutTitle]);

  return (
    <>
      <PageBanner
        title={t.about.bannerTitle}
        subtitle={t.about.bannerSubtitle}
        breadcrumbs={[
          { label: t.breadcrumbs.home, to: '/' },
          { label: t.breadcrumbs.about },
        ]}
        backgroundImage="/images/hero/welcome-cabin.jpg"
        backgroundAlt={t.about.imageAlt}
      />

      {/* Company Overview & Vision 2030 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-3">
                {t.about.overviewKicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-6"
                style={{ textWrap: 'balance' }}
              >
                {t.about.overviewHeading}
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-8">
                {t.about.overviewText}
              </p>

              <div className="bg-[#F4F6F5] rounded-2xl p-6 sm:p-7 border border-neutral-200/80">
                <div className="flex items-center gap-2.5 mb-3">
                  <Compass className="w-5 h-5 text-[#25874D] shrink-0" />
                  <h3 className="font-display text-lg font-bold text-[#242424]">
                    {t.about.visionTitle}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[340px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-neutral-200 bg-[#F4F6F5]">
                <ResilientImage
                  src="/images/hero/welcome-cabin.jpg"
                  alt={t.about.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 lg:py-24 bg-[#F4F6F5] border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
              {t.about.leadershipKicker}
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight mb-3"
              style={{ textWrap: 'balance' }}
            >
              {t.about.leadershipHeading}
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              {t.about.leadershipSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.leaders.map((leader) => (
              <article
                key={leader.id}
                className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-32 h-36 sm:w-40 sm:h-48 rounded-xl overflow-hidden shrink-0 border border-neutral-200 bg-[#F4F6F5]">
                  <ResilientImage
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Quote className="w-6 h-6 text-[#39B66A] mb-3" aria-hidden="true" />
                  <blockquote className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed mb-5">
                    “{leader.quote}”
                  </blockquote>
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="font-display text-lg font-bold text-[#242424]">
                      {leader.name}
                    </div>
                    <div className="text-xs font-semibold text-[#25874D] mt-0.5">
                      {leader.role} · {t.about.companySuffix}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Pillars */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
              {t.whyChoose.kicker}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424] tracking-tight">
              {t.about.pillarsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyChoose.items.map((item, idx) => {
              const Icon = STRENGTH_ICONS[item.id] ?? ShieldCheck;
              return (
                <div
                  key={item.id}
                  className="bg-[#F4F6F5] border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#25874D] border border-neutral-200 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-400 tabular-nums">
                        0{idx + 1}.
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#242424] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#242424] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.about.ctaHeading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {t.about.ctaText}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>{t.about.ctaExploreServices}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>{t.about.ctaContactUs}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
