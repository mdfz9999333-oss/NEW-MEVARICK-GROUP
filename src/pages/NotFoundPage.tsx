import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-[#F4F6F5]">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-5xl font-display font-bold text-[#25874D] mb-4 tabular-nums">
          404
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#242424] mb-3">
          {t.notFound.title}
        </h1>
        <p className="text-base text-neutral-600 mb-8 leading-relaxed">
          {t.notFound.description}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors"
        >
          <span>{t.notFound.backHome}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
