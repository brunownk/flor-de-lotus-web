import { ReactNode, createContext, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { Locale } from "@type/locales";

interface ILocaleContextValue {
  changeLocale: (locale: Locale) => void;
  locale: Locale;
}

export const LocaleContext = createContext<ILocaleContextValue>({} as ILocaleContextValue);

interface LocaleProviderProps {
  children?: ReactNode;
}

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
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}
