import { useMenu } from '@hooks/useMenu';
import { useTheme } from '@hooks/useTheme';

import whiteLogo from '@assets/images/logo-white.png';
import blueLogo from '@assets/images/logo-blue.png';

const logo = {
  dark: whiteLogo,
  light: blueLogo,
};

export function useHeaderController() {
  const { theme } = useTheme();
  const { isCollapsed } = useMenu();

  return {
    logo: logo[theme],
    isCollapsed,
  };
}
