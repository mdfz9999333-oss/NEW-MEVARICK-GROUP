import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = '/images/hero/containers-yard.jpg',
  backgroundAlt = '',
}: PageBannerProps) {
  return (
    <section className="relative bg-[#1B1B1B] text-white overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <ResilientImage
          src={backgroundImage}
          alt={backgroundAlt}
          loading="eager"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#141414]/95 via-[#1B1B1B]/85 to-[#1B1B1B]/70 rtl:bg-gradient-to-l"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-neutral-300">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={`${crumb.label}-${idx}`} className="flex items-center gap-1.5">
                  {idx > 0 && (
                    <ChevronRight
                      className="w-3.5 h-3.5 text-neutral-500 rtl:rotate-180 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  {crumb.to && !isLast ? (
                    <Link
                      to={crumb.to}
                      className="hover:text-[#39B66A] transition-colors whitespace-nowrap"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? 'page' : undefined}
                      className="text-[#39B66A] font-medium whitespace-nowrap"
                    >
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1
          className="font-display font-bold tracking-tight text-white leading-[1.12] max-w-3xl mb-4"
          style={{
            fontSize: 'clamp(2rem, 3.6vw, 3.1rem)',
            textWrap: 'balance',
          }}
        >
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
