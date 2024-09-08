import { localStorageKeys } from '@config/local-storage-keys';
import { useCallback, useState, createContext } from 'react';

export type MenuMode = 'horizontal' | 'vertical' | 'verticalCollapse';

interface IMenuContextValue {
  menuMode: MenuMode;
  isCollapsed: boolean;
  isVerticalMenu: boolean;
  toggleMenuMode: (value: MenuMode) => void;
}

export const MenuContext = createContext({} as IMenuContextValue);

interface IMenuProviderProps {
  children?: React.ReactNode;
}

export function MenuProvider({ children }: IMenuProviderProps) {
  const [menuMode, setMenuMode] = useState<MenuMode>(() => {
    const mode = localStorage.getItem(localStorageKeys.MENU_MODE);
    return (mode as MenuMode) ?? 'vertical';
  });

  const toggleMenuMode = useCallback((value: MenuMode) => {
    localStorage.setItem(localStorageKeys.MENU_MODE, value);
    setMenuMode(value);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menuMode,
        isCollapsed: menuMode === 'verticalCollapse',
        isVerticalMenu: ['vertical', 'verticalCollapse'].includes(menuMode),
        toggleMenuMode,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
