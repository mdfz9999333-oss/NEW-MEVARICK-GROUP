import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackVariant?: 'photo' | 'logo';
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  fallbackVariant = 'photo',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallbackVariant === 'logo') {
      return (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full flex items-center justify-center bg-white text-[#242424] px-3 py-2 text-center"
        >
          <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-[#242424]/80 line-clamp-2">
            {alt}
          </span>
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-[#F4F6F5] text-[#242424]/60 p-6 text-center"
      >
        <Building2 className="w-8 h-8 mb-2 text-[#39B66A]" strokeWidth={1.5} />
        <span className="text-xs font-medium text-[#242424]/70 line-clamp-2 max-w-[180px]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
