import { ReactNode, createContext, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale as AntdLocale } from 'antd/es/locale';

import enUS from 'antd/locale/en_US';
import esES from 'antd/locale/es_ES';
import ptBR from 'antd/locale/pt_BR';

import { Locale } from '@type/locales';

interface ILocaleContextValue {
  changeLocale: (locale: Locale) => void;
  locale: Locale;
  antdLocale: AntdLocale;
}

export const LocaleContext = createContext<ILocaleContextValue>(
  {} as ILocaleContextValue,
);

interface LocaleProviderProps {
  children?: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const { i18n } = useTranslation();

  const [locale, setLocale] = useState(i18n.language as Locale);

  const changeLocale = useCallback(
    (lang: Locale) => {
      i18n.changeLanguage(lang);
      setLocale(lang);
    },
    [i18n],
  );

  function langAntd() {
    if (locale === 'br') {
      return ptBR;
    }

    if (locale === 'en') {
      return enUS;
    }

    return esES;
  }

  return (
    <LocaleContext.Provider
      value={{
        changeLocale,
        locale,
        antdLocale: langAntd(),
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
