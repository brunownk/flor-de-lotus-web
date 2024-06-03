import { ReactNode, createContext, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { AG_GRID_LOCALE_BR } from 'public/locales/br/ag-grid-br';
import { AG_GRID_LOCALE_ES } from 'public/locales/es/ag-grid-es';
import { AG_GRID_LOCALE_EN } from 'public/locales/en/ag-grid-en';

import { Locale } from "@type/locales";

interface ILocaleContextValue {
  changeLocale: (locale: Locale) => void;
  locale: Locale;
  agGridLocale: Record<string, string>;
}

export const LocaleContext = createContext<ILocaleContextValue>({} as ILocaleContextValue);

interface LocaleProviderProps {
  children?: ReactNode;
}

const agGridLocales = {
  br: AG_GRID_LOCALE_BR,
  en: AG_GRID_LOCALE_EN,
  es: AG_GRID_LOCALE_ES
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const { i18n } = useTranslation();

  const [locale, setLocale] = useState(i18n.language as Locale);

  const changeLocale = useCallback((lang: Locale) => {
    i18n.changeLanguage(lang);
    setLocale(lang);
  }, [i18n])

  return (
    <LocaleContext.Provider
      value={{
        changeLocale,
        locale,
        agGridLocale: agGridLocales[locale],
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}
