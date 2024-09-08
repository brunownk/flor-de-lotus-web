import { Outlet } from 'react-router-dom';
import { Typography } from 'antd';

import ilustration from '@assets/images/ilustration1.png';
import logoWhite from '@assets/images/logo-white.png';
import logoBlue from '@assets/images/logo-blue.png';

import { useTheme } from '@hooks/useTheme';

import './styles.scss';
import { useTranslation } from 'react-i18next';
import { I18_DEFAULT_NS } from '@config/app-keys';

const { Title } = Typography;

const logo = {
  dark: logoWhite,
  light: logoBlue,
};

export function PublicLayout() {
  const { theme } = useTheme();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.public',
  });

  return (
    <div id="public-layout-container">
      <img src={logo[theme]} alt="" id="public-layout-logo" />

      <div id="left-content">
        <Title>{translate('welcome-back')}</Title>
        <div id="ilustration-container">
          <img src={ilustration} alt="" />
        </div>
      </div>

      <div id="right-content">
        <Outlet />
      </div>
    </div>
  );
}
