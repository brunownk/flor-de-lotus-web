import React, { useMemo } from 'react';
import { theme } from 'antd';
import { includes, isNumber, isString, kebabCase } from 'lodash';

import { useTheme } from '@hooks/useTheme';

import { darkTheme, lightTheme } from './scss/theme';

type TokenValue = string | number;

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function saveToken(value: TokenValue, tokenName: string) {
  const isPrivateField = tokenName.startsWith('_');

  if (isPrivateField) return;

  const variableName = `--${kebabCase(tokenName)}`;

  if (isString(value)) {
    document.documentElement.style.setProperty(variableName, value);
  }

  if (isNumber(value)) {
    const propertyValue = isPureNumberProperty(tokenName) ? value : `${value}px`;
    document.documentElement.style.setProperty(variableName, String(propertyValue));
  }
}

const isPureNumberProperty = (tokenName: string) =>
  includes(tokenName, 'zIndex') ||
  includes(tokenName, 'Weight') ||
  includes(tokenName, 'motion') ||
  includes(tokenName, 'opacity') ||
  includes(tokenName, 'lineHeight');

export const CssTokenBridge = () => {
  const { token } = theme.useToken();
  const { theme: themeMode } = useTheme();

  const colors = useMemo(() => {
    return Object.assign({}, token, themes[themeMode]);
  }, [themeMode, token]);

  React.useLayoutEffect(() => {
    Object.entries(colors).forEach(([tokenName, value]) => {
      saveToken(value, tokenName);
    });
  }, [colors]);

  return null;
};
