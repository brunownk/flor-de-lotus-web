import React, { createContext, useCallback, useState } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";

import enUS from 'antd/locale/en_US';
import esES from 'antd/locale/es_ES';
import ptBR from 'antd/locale/pt_BR';

import { ThemeEnum, ThemePreferenceEnum } from "@type/theme";

import { localStorageKeys } from "@config/local-storage-keys";

import { useThemeDetector } from "@hooks/useThemeDetector";

import { antdComponents } from "@styles/antd/components";
import { antdDarkTheme, antdLightTheme } from "@styles/antd/theme";

interface IThemeContextValue {
  theme: ThemeEnum;
  toggleTheme: (value: ThemePreferenceEnum) => void;
}

export const ThemeContext = createContext<IThemeContextValue>({} as IThemeContextValue);

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { defaultAlgorithm, darkAlgorithm,  } = antdTheme;

  const systemTheme = useThemeDetector();

  const language = localStorage.getItem('i18nextLng');

  const setThemeMode = useCallback((theme: ThemePreferenceEnum) => {
    if (!theme || theme === 'system') return systemTheme

    return theme
  }, [systemTheme])

  const [theme, setTheme] = useState<ThemeEnum>(() => {
    const themePreference = localStorage.getItem(localStorageKeys.THEME_MODE) as ThemePreferenceEnum;
    return setThemeMode(themePreference);
  });

  const handlerToggleTheme = useCallback((value: ThemePreferenceEnum) => {
    const theme = setThemeMode(value);

    localStorage.setItem(localStorageKeys.THEME_MODE, theme);

    setTheme(theme);
  }, [setThemeMode]);

  function langAntd() {
    if (language === 'br') {
      return ptBR
    }

    if (language === 'en') {
      return enUS
    }

    return esES
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: handlerToggleTheme,
      }}
    >
      <ConfigProvider
        locale={langAntd()}
        theme={{
          token: theme === 'dark' ? antdDarkTheme : antdLightTheme,
          components: antdComponents,
          algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
