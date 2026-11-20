import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Factory,
  Truck,
  ShieldCheck,
  SlidersHorizontal,
  Clock,
  Layers,
  Compass,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ResilientImage } from '../components/ResilientImage';

const SERVICE_ICONS: Record<string, typeof Building2> = {
  'porta-cabins': Building2,
  'factory-services': Factory,
  logistics: Truck,
  safety: ShieldCheck,
};

const STRENGTH_ICONS: Record<string, typeof ShieldCheck> = {
  quality: ShieldCheck,
  customization: SlidersHorizontal,
  reliability: Clock,
  comprehensive: Layers,
};

export function HomePage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.homeTitle;
  }, [t.meta.homeTitle]);

  const featuredGalleryIds = [
    'gal-office-1',
    'gal-multi-1',
    'gal-factory-2',
    'gal-logistics-1',
  ];
  const featuredGallery = t.gallery.items.filter((item) =>
    featuredGalleryIds.includes(item.id)
  );
  const featuredProjects = t.projects.items.slice(0, 3);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#1B1B1B] text-white overflow-hidden">
        <div className="relative min-h-[580px] lg:min-h-[650px] flex items-center">
          <div className="absolute inset-0">
            <ResilientImage
              src="/images/hero/hero-crane.jpg"
              alt={t.services[0].imageAlt}
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#141414]/92 via-[#191919]/78 to-[#191919]/35 rtl:bg-gradient-to-l"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#141414]/85 via-transparent to-[#141414]/30"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-26">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/images/brand/logo-white.png"
                  alt={t.brand.logoAlt}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
                <div className="h-12 w-px bg-white/25 hidden sm:block" aria-hidden="true" />
                <div className="hidden sm:block text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <span className="block font-semibold text-white">{t.brand.country}</span>
                  <span>{t.brand.heroSubline}</span>
                </div>
              </div>

              <h1
                className="font-display font-bold tracking-tight text-white leading-[1.1] mb-6"
                style={{
                  fontSize: 'clamp(2.25rem, 4.3vw, 3.8rem)',
                  textWrap: 'balance',
                }}
              >
                {t.home.heroHeadlineStart}{' '}
                <span className="text-[#39B66A]">{t.home.heroHeadlineAccent}</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl mb-10">
                {t.home.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>{t.home.exploreServices}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>{t.home.requestQuote}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Key Figures Strip */}
        <div className="relative z-10 bg-[#242424] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-white/10">
              {t.metrics.map((metric) => (
                <div key={metric.label} className="py-6 sm:px-6 first:sm:ps-0 last:sm:pe-0">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#39B66A] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">{metric.label}</div>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION SNAPSHOT */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.home.aboutKicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-5"
                style={{ textWrap: 'balance' }}
              >
                {t.home.aboutHeading}
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-6">
                {t.about.overviewText}
              </p>

              <div className="bg-[#F4F6F5] rounded-xl p-5 border border-neutral-200/80 mb-7">
                <div className="flex items-center gap-2.5 mb-2">
                  <Compass className="w-5 h-5 text-[#25874D] shrink-0" />
                  <h3 className="font-display text-base font-bold text-[#242424]">
                    {t.about.visionTitle}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">{t.about.visionText}</p>
              </div>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#25874D] hover:underline"
                >
                  <span>{t.home.readMoreAbout}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[320px] lg:min-h-[430px] rounded-2xl overflow-hidden border border-neutral-200 bg-[#F4F6F5]">
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

      {/* 3. CORE SERVICES OVERVIEW */}
      <section className="py-20 lg:py-24 bg-[#F4F6F5] border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.home.servicesKicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                {t.home.servicesHeading}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#25874D] hover:underline whitespace-nowrap shrink-0"
            >
              <span>{t.home.viewAllServices}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {t.services.map((service) => {
              const Icon = SERVICE_ICONS[service.slug] ?? Building2;
              return (
                <Link
                  key={service.slug}
                  to={service.route}
                  className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#25874D]/60 transition-colors"
                >
                  <div>
                    <div className="aspect-[16/10] bg-neutral-100 overflow-hidden">
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-[#F4F6F5] text-[#25874D] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-neutral-400 tabular-nums">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#242424] group-hover:text-[#25874D] transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#25874D]">
                    <span>{t.home.exploreDivision}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS & OPERATIONS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.home.featuredGalleryKicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                {t.home.featuredGalleryHeading}
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#25874D] hover:underline whitespace-nowrap shrink-0"
            >
              <span>{t.home.viewFullGallery}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGallery.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-[#25874D]/60 transition-colors"
              >
                <div className="aspect-[4/3] bg-[#F4F6F5] overflow-hidden">
                  <ResilientImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs font-medium text-[#25874D] mb-1">
                    {item.categoryLabel}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#242424] group-hover:text-[#25874D] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE NEW MAVERICK GROUP */}
      <section className="py-20 lg:py-24 bg-[#242424] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wide text-[#39B66A] mb-3">
                  {t.home.whyKicker}
                </div>
                <h2
                  className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15] mb-5"
                  style={{ textWrap: 'balance' }}
                >
                  {t.home.whyHeading}
                </h2>
                <p className="text-base text-neutral-300 leading-relaxed mb-8">
                  {t.home.whyDescription}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-72 bg-[#1B1B1B]">
                <ResilientImage
                  src="/images/hero/site-cabin.jpg"
                  alt={t.whyChoose.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.whyChoose.items.map((item, idx) => {
                const Icon = STRENGTH_ICONS[item.id] ?? ShieldCheck;
                return (
                  <div
                    key={item.id}
                    className="bg-[#2D2D2D] border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#39B66A]/15 text-[#39B66A] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold text-neutral-400 tabular-nums">
                          0{idx + 1}.
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RECENT PROJECTS PREVIEW */}
      <section className="py-20 lg:py-24 bg-[#F4F6F5] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.home.projectsKicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                {t.home.projectsHeading}
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#25874D] hover:underline whitespace-nowrap shrink-0"
            >
              <span>{t.home.viewAllProjects}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to="/projects"
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-[#25874D]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <ResilientImage
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                      <span className="font-semibold text-[#25874D] tabular-nums">
                        {project.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#242424] group-hover:text-[#25874D] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRUSTED PARTNERS STRIP */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.home.partnersKicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                {t.home.partnersHeading}
              </h2>
            </div>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#25874D] hover:underline whitespace-nowrap shrink-0"
            >
              <span>{t.home.viewAllPartners}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {t.partners.items.map((partner) => (
              <div
                key={partner.id}
                className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col items-center justify-between text-center"
              >
                <div className="w-full h-24 flex items-center justify-center mb-3">
                  <ResilientImage
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-xs font-semibold text-[#242424]">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CONTACT CTA */}
      <section className="py-16 lg:py-20 bg-[#242424] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2
              className="font-display text-2xl sm:text-3xl font-bold text-white mb-3"
              style={{ textWrap: 'balance' }}
            >
              {t.home.ctaHeading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {t.home.ctaDescription}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>{t.home.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>{t.home.ctaSecondary}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
