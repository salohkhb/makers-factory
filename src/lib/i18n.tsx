import React, { createContext, useContext, useEffect, useState } from 'react';
import ar from '../messages/ar.json';
import en from '../messages/en.json';
import fr from '../messages/fr.json';
import { Language } from '../types';

const messages: Record<Language, unknown> = { en, fr, ar };

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function lookup(lang: Language, key: string): string | undefined {
  let current: unknown = messages[lang];
  for (const part of key.split('.')) {
    if (typeof current !== 'object' || current === null) return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem('makers_lang');
    if (stored === 'fr' || stored === 'ar' || stored === 'en') return stored;
  } catch {
    // Storage can be blocked; the default language still works.
  }
  return 'fr';
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('makers_lang', lang);
    } catch {
      // Keep the choice for this visit only.
    }
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => lookup(language, key) ?? lookup('fr', key) ?? key;

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within an I18nProvider');
  return context;
};
