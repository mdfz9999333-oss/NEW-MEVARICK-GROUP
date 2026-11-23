import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navLinkClass = (path: string) =>
    `transition-colors whitespace-nowrap shrink-0 py-1 text-[13px] xl:text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25874D] ${
      isActive(path)
        ? 'text-[#25874D] font-semibold'
        : 'text-[#242424]/80 hover:text-[#25874D]'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full max-w-full overflow-x-clip bg-white/95 backdrop-blur-md border-b border-neutral-200/80">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 xl:px-8 h-16 flex items-center justify-between gap-2 sm:gap-3 xl:gap-6">
        {/* Zone 1: Original New Maverick Group Logo Lockup */}
        <Link
          to="/"
          className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 shrink sm:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25874D] rounded-sm"
        >
          <img
            src="/images/brand/logo-mark-dark.png"
            alt={t.brand.logoAlt}
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain shrink-0"
          />
          <span className="font-display text-[11px] sm:text-sm xl:text-base font-bold tracking-tight text-[#242424] whitespace-nowrap truncate">
            {t.brand.wordmark}
          </span>
        </Link>

        {/* Zone 2: Desktop Multi-Page Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6"
        >
          <Link to="/" className={navLinkClass('/')}>
            {t.nav.home}
          </Link>

          <Link to="/about" className={navLinkClass('/about')}>
            {t.nav.about}
          </Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link to="/services" className={navLinkClass('/services')}>
                {t.nav.services}
              </Link>
              <button
                type="button"
                aria-label={t.nav.servicesLabel}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`p-1 rounded transition-colors cursor-pointer ${
                  isActive('/services')
                    ? 'text-[#25874D]'
                    : 'text-[#242424]/70 hover:text-[#25874D]'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    servicesOpen ? 'rotate-180 text-[#25874D]' : ''
                  }`}
                />
              </button>
            </div>

            {servicesOpen && (
              <div className="absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 top-full pt-2 w-[560px]">
                <div className="bg-white border border-neutral-200 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-2">
                  {t.services.map((service) => (
                    <Link
                      key={service.slug}
                      to={service.route}
                      className={`text-start p-3 rounded-lg transition-colors group focus-visible:outline-2 focus-visible:outline-[#25874D] ${
                        location.pathname === service.route
                          ? 'bg-[#F4F6F5] border border-[#25874D]/30'
                          : 'hover:bg-[#F4F6F5]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-[#25874D] tabular-nums">
                          {service.number}.
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#25874D] rtl:rotate-180 transition-all" />
                      </div>
                      <div className="text-sm font-semibold text-[#242424] group-hover:text-[#25874D] transition-colors">
                        {service.title}
                      </div>
                      <p className="text-xs text-neutral-600 line-clamp-2 mt-0.5 leading-relaxed">
                        {service.tagline}
                      </p>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 mt-1 border-t border-neutral-100 flex items-center justify-between px-2">
                    <span className="text-xs text-neutral-500">
                      {t.nav.servicesSubtitle}
                    </span>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-[#25874D] hover:underline whitespace-nowrap"
                    >
                      {t.nav.allServices}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/gallery" className={navLinkClass('/gallery')}>
            {t.nav.gallery}
          </Link>
          <Link to="/projects" className={navLinkClass('/projects')}>
            {t.nav.projects}
          </Link>
          <Link to="/partners" className={navLinkClass('/partners')}>
            {t.nav.partners}
          </Link>
          <Link to="/contact" className={navLinkClass('/contact')}>
            {t.nav.contact}
          </Link>
        </nav>

        {/* Zone 3: Language Switcher (EN | العربية) + Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div
            role="group"
            aria-label="Language Switcher"
            className="inline-flex items-center bg-[#F4F6F5] border border-neutral-200 rounded-lg p-0.5 text-[11px] sm:text-xs font-semibold shrink-0"
          >
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#242424] text-white'
                  : 'text-neutral-600 hover:text-[#242424]'
              }`}
            >
              EN
            </button>
            <span className="text-neutral-300 px-0.5 select-none" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
              className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'ar'
                  ? 'bg-[#242424] text-white'
                  : 'text-neutral-600 hover:text-[#242424]'
              }`}
            >
              العربية
            </button>
          </div>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25874D]"
          >
            {t.nav.requestQuote}
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-[#242424] hover:bg-[#F4F6F5] transition-colors shrink-0 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-4 py-4 space-y-1.5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Link
            to="/"
            className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
              location.pathname === '/'
                ? 'bg-[#F4F6F5] text-[#25874D] font-semibold'
                : 'text-[#242424] hover:bg-[#F4F6F5]'
            }`}
          >
            {t.nav.home}
          </Link>

          <Link
            to="/about"
            className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
              isActive('/about')
                ? 'bg-[#F4F6F5] text-[#25874D] font-semibold'
                : 'text-[#242424] hover:bg-[#F4F6F5]'
            }`}
          >
            {t.nav.about}
          </Link>

          <div className="px-3 py-2">
            <Link
              to="/services"
              className={`block text-sm font-semibold mb-2 ${
                location.pathname === '/services' ? 'text-[#25874D]' : 'text-neutral-500'
              }`}
            >
              {t.nav.allServices}
            </Link>
            <div className="space-y-1 ps-3 border-s border-neutral-200">
              {t.services.map((service) => (
                <Link
                  key={service.slug}
                  to={service.route}
                  className={`block px-3 py-2 text-sm font-medium rounded-md ${
                    location.pathname === service.route
                      ? 'bg-[#F4F6F5] text-[#25874D] font-semibold'
                      : 'text-[#242424] hover:bg-[#F4F6F5] hover:text-[#25874D]'
                  }`}
                >
                  {service.number}. {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/gallery"
            className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
              isActive('/gallery')
                ? 'bg-[#F4F6F5] text-[#25874D] font-semibold'
                : 'text-[#242424] hover:bg-[#F4F6F5]'
            }`}
          >
            {t.nav.gallery}
          </Link>
          <Link
            to="/projects"
            className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
              isActive('/projects')
                ? 'bg-[#F4F6F5] text-[#25874D] font-semibold'
                : 'text-[#242424] hover:bg-[#F4F6F5]'
            }`}
          >
            {t.nav.projects}
          </Link>
          <Link
            to="/partners"
            className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
              isActive('/partners')
                ? 'bg-[#F4F6F5] text-[#25874D] font-semibold'
                : 'text-[#242424] hover:bg-[#F4F6F5]'
            }`}
          >
            {t.nav.partners}
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
              isActive('/contact')
                ? 'bg-[#F4F6F5] text-[#25874D] font-semibold'
                : 'text-[#242424] hover:bg-[#F4F6F5]'
            }`}
          >
            {t.nav.contact}
          </Link>

          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors"
            >
              {t.nav.requestQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
