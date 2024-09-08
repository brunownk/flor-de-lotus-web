import { useTranslation } from 'react-i18next';

import MoonIcon from '@assets/icons/ic_moon.svg?react';
import SunIcon from '@assets/icons/ic_sun.svg?react';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { useTheme } from '@hooks/useTheme';

import { Toggle } from '@components/DataEntry';

import './styles.scss';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.configs',
  });

  return (
    <div className="theme-toggle-container">
      <Toggle.Group
        label={translate('theme')}
        labelSize="small"
        initialValue={theme}
        onClick={toggleTheme}
        options={[
          { value: 'light', label: <SunIcon /> },
          { value: 'dark', label: <MoonIcon /> },
        ]}
      />
    </div>
  );
}
