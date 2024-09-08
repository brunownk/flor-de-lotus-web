import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import whiteLogo from '@assets/images/logo-white.png';
import blueLogo from '@assets/images/logo-blue.png';
import collapsedLogo from '@assets/images/collapse-logo.png';

import { useMenu } from '@hooks/useMenu';
import { useTheme } from '@hooks/useTheme';

const logo = {
  dark: whiteLogo,
  light: blueLogo,
};

export function useSiderController() {
  const navigate = useNavigate();

  const { theme } = useTheme();
  const { isCollapsed } = useMenu();

  const handleGoHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return {
    logo: isCollapsed ? collapsedLogo : logo[theme],
    isCollapsed,
    handleGoHome,
  };
}
