import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'antd';
import { Header as HeaderAnt } from 'antd/es/layout/layout';

import whiteLogo from '@assets/images/logo-white.png';
import blueLogo from '@assets/images/logo-blue.png';

import { useMenu } from '@hooks/useMenu';
import { useTheme } from '@hooks/useTheme';

import { headerClass } from '@styles/class/header';

import { Menu } from '@components/Menu';
import { IMenuProps } from '@components/Menu/Menu';

import { Options } from './components/Options';
import { Configs } from './components/Configs';
import { Locales } from './components/Locales';
import { SearchPage } from './components/SearchPage';

import './styles.scss';

type IHeaderProps = Omit<IMenuProps, 'mode'>;

const logo = {
  dark: whiteLogo,
  light: blueLogo,
};

export function Header(props: IHeaderProps) {
  const navigate = useNavigate();

  const { theme } = useTheme();
  const { isVerticalMenu, menuMode } = useMenu();

  const handleGoHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <HeaderAnt
      className={isVerticalMenu ? 'vertical' : ''}
      style={headerClass[menuMode]}
    >
      <div className="header-content">
        <div className="left-header-content">
          {!isVerticalMenu && (
            <img src={logo[theme]} alt="OLA" onClick={handleGoHome} />
          )}

          <SearchPage />
        </div>

        <Flex align="center" gap={16}>
          <Locales />
          <Configs />
          <Options />
        </Flex>
      </div>

      {!isVerticalMenu && (
        <div className="header-nav">
          <Menu mode="horizontal" {...props} />
        </div>
      )}
    </HeaderAnt>
  );
}
