import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, TranslationDictionary } from './types';
import { en } from './en';
import { ar } from './ar';

interface LanguageContextValue {
  lang: Language;
  isRtl: boolean;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationDictionary;
}

const STORAGE_KEY = 'new_maverick_lang';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const dictionaries: Record<Language, TranslationDictionary> = {
  en,
  ar,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    isRtl: lang === 'ar',
    setLang,
    toggleLang,
    t: dictionaries[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
