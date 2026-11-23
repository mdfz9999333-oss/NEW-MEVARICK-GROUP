import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../i18n/LanguageContext';
import { PageBanner } from '../components/PageBanner';

interface FormState {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectDetails: string;
}

interface FormErrors {
  name?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  serviceRequired?: string;
  projectDetails?: string;
}

export function ContactPage() {
  const { t, lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get('service') ?? '';

  const [form, setForm] = useState<FormState>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: t.contact.serviceOptions[0],
    projectDetails: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<FormState | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = t.meta.contactTitle;
  }, [t.meta.contactTitle]);

  useEffect(() => {
    if (queryService) {
      const matched = t.contact.serviceOptions.find((opt) =>
        opt.toLowerCase().includes(queryService.toLowerCase())
      );
      setForm((prev) => ({
        ...prev,
        serviceRequired: matched ?? t.contact.serviceOptions[0],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        serviceRequired: t.contact.serviceOptions.includes(prev.serviceRequired)
          ? prev.serviceRequired
          : t.contact.serviceOptions[0],
      }));
    }
  }, [queryService, lang, t.contact.serviceOptions]);

  const validate = (data: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      next.name = t.contact.errors.name;
    }
    if (!data.companyName.trim() || data.companyName.trim().length < 2) {
      next.companyName = t.contact.errors.company;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email.trim())) {
      next.email = t.contact.errors.email;
    }
    if (data.phone.trim()) {
      const digitsOnly = data.phone.replace(/[^\d]/g, '');
      if (digitsOnly.length < 8) {
        next.phone = t.contact.errors.phone;
      }
    }
    if (!data.serviceRequired.trim()) {
      next.serviceRequired = t.contact.errors.service;
    }
    if (!data.projectDetails.trim() || data.projectDetails.trim().length < 15) {
      next.projectDetails = t.contact.errors.details;
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedPayload({ ...form });
      setCopied(false);
    }
  };

  const buildSummaryText = (payload: FormState) =>
    [
      t.contact.confirmation.summaryHeader,
      `${t.contact.confirmation.nameLabel} ${payload.name}`,
      `${t.contact.confirmation.companyLabel} ${payload.companyName}`,
      `${t.contact.confirmation.emailLabel} ${payload.email}`,
      ...(payload.phone.trim()
        ? [`${t.contact.confirmation.phoneLabel} ${payload.phone.trim()}`]
        : []),
      `${t.contact.confirmation.serviceLabel} ${payload.serviceRequired}`,
      '',
      t.contact.confirmation.detailsLabel,
      payload.projectDetails,
    ].join('\n');

  const buildMailtoHref = (payload: FormState) => {
    const subject = encodeURIComponent(
      `${t.contact.confirmation.emailSubjectPrefix} ${payload.serviceRequired} — ${payload.companyName}`
    );
    const body = encodeURIComponent(buildSummaryText(payload));
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = async () => {
    if (!submittedPayload) return;
    try {
      await navigator.clipboard.writeText(buildSummaryText(submittedPayload));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setSubmittedPayload(null);
    setForm({
      name: '',
      companyName: '',
      email: '',
      phone: '',
      serviceRequired: t.contact.serviceOptions[0],
      projectDetails: '',
    });
    setErrors({});
  };

  return (
    <>
      <PageBanner
        title={t.contact.bannerTitle}
        subtitle={t.contact.bannerSubtitle}
        breadcrumbs={[
          { label: t.breadcrumbs.home, to: '/' },
          { label: t.breadcrumbs.contact },
        ]}
        backgroundImage="/images/hero/modular-lounge.jpg"
        backgroundAlt={t.contact.bannerTitle}
      />

      <section className="py-16 lg:py-24 bg-[#F4F6F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Direct Contact Details */}
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold tracking-wide text-[#25874D] mb-2">
                {t.contact.kicker}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-5"
                style={{ textWrap: 'balance' }}
              >
                {t.contact.heading}
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-8">
                {t.contact.description}
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-xl hover:border-[#25874D] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25874D]/10 text-[#25874D] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-neutral-500">
                      {t.contact.emailCardLabel}
                    </div>
                    <div
                      dir="ltr"
                      className="text-sm sm:text-base font-bold text-[#242424] group-hover:text-[#25874D] transition-colors break-all mt-0.5 text-start"
                    >
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#25874D]/10 text-[#25874D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-neutral-500">
                      {t.contact.addressCardLabel}
                    </div>
                    <address className="not-italic text-sm text-[#242424] leading-relaxed mt-0.5">
                      {t.contact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#242424] hover:bg-[#171717] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.contact.emailSalesBtn}</span>
                </a>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 lg:p-10">
                {submittedPayload ? (
                  <div>
                    <div className="flex items-start gap-3 mb-6">
                      <CheckCircle2 className="w-7 h-7 text-[#25874D] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-display text-xl font-bold text-[#242424]">
                          {t.contact.confirmation.title}
                        </h3>
                        <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                          {t.contact.confirmation.noticePrefix}{' '}
                          <span dir="ltr" className="font-semibold text-[#242424]">
                            {COMPANY_INFO.email}
                          </span>{' '}
                          {t.contact.confirmation.noticeSuffix}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#F4F6F5] border border-neutral-200 rounded-xl p-5 mb-6 text-sm text-[#242424] space-y-2">
                      <div>
                        <span className="text-neutral-500">
                          {t.contact.confirmation.nameLabel}
                        </span>{' '}
                        <span className="font-semibold">{submittedPayload.name}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">
                          {t.contact.confirmation.companyLabel}
                        </span>{' '}
                        <span className="font-semibold">{submittedPayload.companyName}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">
                          {t.contact.confirmation.emailLabel}
                        </span>{' '}
                        <span dir="ltr" className="font-semibold">
                          {submittedPayload.email}
                        </span>
                      </div>
                      {submittedPayload.phone.trim() && (
                        <div>
                          <span className="text-neutral-500">
                            {t.contact.confirmation.phoneLabel}
                          </span>{' '}
                          <span dir="ltr" className="font-semibold tabular-nums">
                            {submittedPayload.phone}
                          </span>
                        </div>
                      )}
                      <div>
                        <span className="text-neutral-500">
                          {t.contact.confirmation.serviceLabel}
                        </span>{' '}
                        <span className="font-semibold">{submittedPayload.serviceRequired}</span>
                      </div>
                      <div className="pt-2 border-t border-neutral-200">
                        <span className="text-neutral-500 block mb-1">
                          {t.contact.confirmation.detailsLabel}
                        </span>
                        <p className="text-neutral-700 whitespace-pre-line">
                          {submittedPayload.projectDetails}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={buildMailtoHref(submittedPayload)}
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t.contact.confirmation.emailAppBtn}</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#242424] bg-[#F4F6F5] hover:bg-neutral-200/70 border border-neutral-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#25874D]" />
                            <span>{t.contact.confirmation.copiedBtn}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>{t.contact.confirmation.copyBtn}</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-3 text-sm font-medium text-neutral-600 hover:text-[#242424] cursor-pointer"
                      >
                        {t.contact.confirmation.resetBtn}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-7">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#242424]">
                        {t.contact.formTitle}
                      </h3>
                      <p className="text-sm text-neutral-600 mt-1">{t.contact.formSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label
                          htmlFor="quote-name"
                          className="block text-xs font-semibold text-[#242424] mb-1.5"
                        >
                          {t.contact.fields.nameLabel}
                        </label>
                        <input
                          id="quote-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder={t.contact.fields.namePlaceholder}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#242424] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#25874D]/20 focus:border-[#25874D] ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="quote-company"
                          className="block text-xs font-semibold text-[#242424] mb-1.5"
                        >
                          {t.contact.fields.companyLabel}
                        </label>
                        <input
                          id="quote-company"
                          type="text"
                          value={form.companyName}
                          onChange={(e) => {
                            setForm({ ...form, companyName: e.target.value });
                            if (errors.companyName)
                              setErrors({ ...errors, companyName: undefined });
                          }}
                          placeholder={t.contact.fields.companyPlaceholder}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#242424] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#25874D]/20 focus:border-[#25874D] ${
                            errors.companyName ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.companyName && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.companyName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="quote-email"
                          className="block text-xs font-semibold text-[#242424] mb-1.5"
                        >
                          {t.contact.fields.emailLabel}
                        </label>
                        <input
                          id="quote-email"
                          type="email"
                          dir="ltr"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder={t.contact.fields.emailPlaceholder}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#242424] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#25874D]/20 focus:border-[#25874D] ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block text-xs font-semibold text-[#242424] mb-1.5"
                        >
                          {t.contact.fields.phoneLabel}
                        </label>
                        <input
                          id="quote-phone"
                          type="tel"
                          dir="ltr"
                          value={form.phone}
                          onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder={t.contact.fields.phonePlaceholder}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#242424] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#25874D]/20 focus:border-[#25874D] ${
                            errors.phone ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="quote-service"
                        className="block text-xs font-semibold text-[#242424] mb-1.5"
                      >
                        {t.contact.fields.serviceLabel}
                      </label>
                      <select
                        id="quote-service"
                        value={form.serviceRequired}
                        onChange={(e) => {
                          setForm({ ...form, serviceRequired: e.target.value });
                          if (errors.serviceRequired) {
                            setErrors({ ...errors, serviceRequired: undefined });
                          }
                        }}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#25874D]/20 focus:border-[#25874D]"
                      >
                        {t.contact.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="quote-details"
                        className="block text-xs font-semibold text-[#242424] mb-1.5"
                      >
                        {t.contact.fields.detailsLabel}
                      </label>
                      <textarea
                        id="quote-details"
                        rows={4}
                        value={form.projectDetails}
                        onChange={(e) => {
                          setForm({ ...form, projectDetails: e.target.value });
                          if (errors.projectDetails) {
                            setErrors({ ...errors, projectDetails: undefined });
                          }
                        }}
                        placeholder={t.contact.fields.detailsPlaceholder}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#242424] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#25874D]/20 focus:border-[#25874D] ${
                          errors.projectDetails ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.projectDetails && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.projectDetails}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#25874D] hover:bg-[#1E703F] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <Send className="w-4 h-4 rtl:rotate-180" />
                        <span>{t.contact.submitButton}</span>
                      </button>
                      <span className="text-xs text-neutral-500">
                        {t.contact.directInquiriesNote}{' '}
                        <span dir="ltr" className="font-medium">
                          {COMPANY_INFO.email}
                        </span>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
