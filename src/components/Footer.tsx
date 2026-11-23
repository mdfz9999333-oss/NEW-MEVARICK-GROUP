import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#242424] text-neutral-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column with Original White Logo */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/images/brand/logo-white.png"
                alt={t.brand.logoAlt}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white mb-4">
              {t.footer.companyHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-[#39B66A] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-400 hover:text-[#39B66A] transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-neutral-400 hover:text-[#39B66A] transition-colors"
                >
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-neutral-400 hover:text-[#39B66A] transition-colors"
                >
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-neutral-400 hover:text-[#39B66A] transition-colors"
                >
                  {t.nav.partners}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-400 hover:text-[#39B66A] transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white mb-4">
              {t.footer.servicesHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-neutral-400 hover:text-[#39B66A] transition-colors"
                >
                  {t.nav.allServices}
                </Link>
              </li>
              {t.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.route}
                    className="text-neutral-400 hover:text-[#39B66A] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white mb-4">
              {t.footer.contactHeading}
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2.5 text-neutral-300 hover:text-[#39B66A] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#39B66A] mt-0.5 shrink-0" />
                <span dir="ltr">{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#39B66A] mt-0.5 shrink-0" />
                <address className="not-italic leading-relaxed">
                  {t.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div>{t.footer.country}</div>
        </div>
      </div>
    </footer>
  );
}
