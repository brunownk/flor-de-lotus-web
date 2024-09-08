import { useContext } from 'react';
import { MenuContext } from '@contexts/MenuContext';

export function useMenu() {
  return useContext(MenuContext);
}
