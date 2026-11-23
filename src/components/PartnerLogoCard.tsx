import type { TranslatedPartner } from '../i18n/types';
import { ResilientImage } from './ResilientImage';

interface PartnerLogoCardProps {
  partner: TranslatedPartner;
  variant?: 'compact' | 'detailed';
  jointVentureLabel?: string;
}

export function PartnerLogoCard({
  partner,
  variant = 'compact',
  jointVentureLabel,
}: PartnerLogoCardProps) {
  const isDetailed = variant === 'detailed';
  const isPublic = Boolean(partner.isPublicSector);
  const hasSecondaryLogo = Boolean(partner.secondaryLogo);

  const cardSurfaceClass =
    isDetailed && isPublic
      ? 'bg-[#F4F6F5] border border-neutral-200/80 rounded-xl p-6 flex flex-col items-center justify-between text-center hover:border-[#25874D]/50 transition-colors'
      : `bg-white border border-neutral-200 rounded-xl ${
          isDetailed ? 'p-6' : 'p-5'
        } flex flex-col items-center justify-between text-center hover:border-[#25874D]/50 transition-colors`;

  const logoAreaClass =
    isDetailed && isPublic
      ? 'w-full h-32 bg-white rounded-lg border border-neutral-200/60 p-4 flex items-center justify-center mb-4'
      : isDetailed
      ? 'w-full h-28 bg-white rounded-lg p-2 flex items-center justify-center mb-4'
      : 'w-full h-24 bg-white rounded-lg p-1.5 flex items-center justify-center mb-3';

  return (
    <div className={cardSurfaceClass}>
      <div className={logoAreaClass}>
        {hasSecondaryLogo && partner.secondaryLogo ? (
          <div className="w-full h-full flex items-center justify-center gap-3">
            <div className="flex-1 h-full flex items-center justify-center min-w-0">
              <ResilientImage
                src={partner.logo}
                alt="China Harbour Engineering Company (CHEC)"
                fallbackVariant="logo"
                className="max-h-16 sm:max-h-20 max-w-full object-contain"
              />
            </div>
            <div className="h-10 w-px bg-neutral-200 shrink-0" aria-hidden="true" />
            <div className="flex-1 h-full flex items-center justify-center min-w-0">
              <ResilientImage
                src={partner.secondaryLogo}
                alt={partner.secondaryName ?? 'AL-AYUNI'}
                fallbackVariant="logo"
                className="max-h-16 sm:max-h-20 max-w-full object-contain"
              />
            </div>
          </div>
        ) : (
          <ResilientImage
            src={partner.logo}
            alt={partner.name}
            fallbackVariant="logo"
            className="max-h-full max-w-full object-contain"
          />
        )}
      </div>

      {isDetailed ? (
        <div
          className={
            isPublic ? 'w-full' : 'pt-3 border-t border-neutral-100 w-full'
          }
        >
          <div className="text-sm font-semibold text-[#242424] leading-snug">
            {partner.name}
          </div>
          <div className="text-xs text-neutral-500 mt-0.5">
            {partner.isJointVenture && jointVentureLabel
              ? `${jointVentureLabel} · ${partner.sector}`
              : partner.sector}
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="text-xs font-semibold text-[#242424] leading-snug">
            {partner.name}
          </div>
        </div>
      )}
    </div>
  );
}
