import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';
import { LightboxModal, type LightboxImage } from '../components/LightboxModal';

export function ProjectsPage() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = t.meta.projectsTitle;
  }, [t.meta.projectsTitle]);

  const lightboxItems: LightboxImage[] = t.projects.items.map((proj) => ({
    image: proj.image,
    alt: proj.alt,
    title: proj.title,
    category: `${t.projects.projectLabel} ${proj.number} · ${proj.category}`,
    subtitle: proj.description,
  }));

  return (
    <>
      <PageBanner
        title={t.projects.bannerTitle}
        subtitle={t.projects.bannerSubtitle}
        breadcrumbs={[
          { label: t.breadcrumbs.home, to: '/' },
          { label: t.breadcrumbs.projects },
        ]}
        backgroundImage="/images/projects/project-4-two-storey-complex.jpg"
        backgroundAlt={t.projects.items[3].alt}
      />

      <section className="py-16 lg:py-24 bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.projects.kicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                {t.projects.heading}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
              {t.projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {t.projects.items.map((project, idx) => (
              <article
                key={project.id}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#25874D]/60 transition-colors"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`${t.projects.viewProjectLabel}: ${project.title}`}
                    className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden block cursor-pointer"
                  >
                    <ResilientImage
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#242424]/90 text-white text-xs font-medium">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{t.projects.viewProjectLabel}</span>
                      </span>
                    </div>
                  </button>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                      <span className="font-semibold text-[#25874D] tabular-nums">
                        {project.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#242424] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-neutral-100">
                      <div className="text-xs font-semibold text-neutral-500 mb-2">
                        {t.projects.highlightsLabel}
                      </div>
                      <ul className="space-y-1.5">
                        {project.highlights.map((hl) => (
                          <li key={hl} className="flex items-start gap-2 text-xs text-[#242424]">
                            <Check
                              className="w-3.5 h-3.5 text-[#25874D] mt-0.5 shrink-0"
                              strokeWidth={2.5}
                            />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#242424] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.projects.ctaHeading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {t.projects.ctaDescription}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <span>{t.projects.ctaButton}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
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
