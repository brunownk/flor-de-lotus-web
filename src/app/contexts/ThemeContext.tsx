import React, { createContext, useCallback, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

import { ThemeEnum, ThemePreferenceEnum } from '@type/theme';

import { localStorageKeys } from '@config/local-storage-keys';

import { useThemeDetector } from '@hooks/useThemeDetector';

import { antdComponents } from '@styles/antd/components';
import { antdDarkTheme, antdLightTheme } from '@styles/antd/theme';
import { useLocale } from '@hooks/useLocale';

interface IThemeContextValue {
  theme: ThemeEnum;
  toggleTheme: (value: ThemePreferenceEnum) => void;
}

export const ThemeContext = createContext<IThemeContextValue>(
  {} as IThemeContextValue,
);

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { defaultAlgorithm, darkAlgorithm } = antdTheme;

  const systemTheme = useThemeDetector();

  const { antdLocale } = useLocale();

  const setThemeMode = useCallback(
    (theme: ThemePreferenceEnum) => {
      if (!theme || theme === 'system') return systemTheme;

      return theme;
    },
    [systemTheme],
  );

  const [theme, setTheme] = useState<ThemeEnum>(() => {
    const themePreference = localStorage.getItem(
      localStorageKeys.THEME_MODE,
    ) as ThemePreferenceEnum;
    return setThemeMode(themePreference);
  });

  const handlerToggleTheme = useCallback(
    (value: ThemePreferenceEnum) => {
      const theme = setThemeMode(value);

      localStorage.setItem(localStorageKeys.THEME_MODE, theme);
      setTheme(theme);
    },
    [setThemeMode],
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: handlerToggleTheme,
      }}
    >
      <ConfigProvider
        locale={antdLocale}
        theme={{
          token: theme === 'dark' ? antdDarkTheme : antdLightTheme,
          components: antdComponents,
          algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
