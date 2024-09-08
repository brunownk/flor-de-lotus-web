import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useTranslateRoutesName } from '@hooks/useTranslateRoutesName';
import { getDefaultKeysForPath } from '@utils/get-menu-key-for-path';

import { useMenu } from '@hooks/useMenu';
import { IMenuProps } from './Menu';

export function useMenuController(items: IMenuProps['items']) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const { isCollapsed } = useMenu();

  const navigate = useNavigate();
  const location = useLocation();

  const { translatedRoutes } = useTranslateRoutesName('label', items);

  useEffect(() => {
    const { defaultOpenKeys, defaultSelectedKey } = getDefaultKeysForPath(
      items,
      location.pathname,
    );

    setOpenKeys(defaultOpenKeys || []);
    setSelectedKeys(defaultSelectedKey || []);
  }, [location.pathname, items]);

  return {
    openKeys: isCollapsed ? undefined : openKeys,
    selectedKeys,
    translatedRoutes,
    navigate,
    setOpenKeys,
    setSelectedKeys,
  };
}
