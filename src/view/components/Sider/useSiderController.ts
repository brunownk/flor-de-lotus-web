import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ItemType } from "@type/menu-item";

import { useSider } from "@hooks/useSider";
import { useTheme } from "@hooks/useTheme";
import { useTranslateRoutesName } from "@hooks/useTranslateRoutesName";

import { getDefaultKeysForPath } from "@utils/get-menu-key-for-path";

import whiteLogo from "@assets/images/logo-white.png";
import blueLogo from "@assets/images/logo-blue.png";

const logo = {
  dark: whiteLogo,
  light: blueLogo,
}

export function useSiderController(items: ItemType[]) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  const { theme } = useTheme();
  const { isCollapse } = useSider();
  const { translatedRoutes } = useTranslateRoutesName('label', items)

  const {
    defaultOpenKeys,
    defaultSelectedKey
  } = getDefaultKeysForPath(items, location.pathname)

  useEffect(() => {
    const {
      defaultOpenKeys,
      defaultSelectedKey
    } = getDefaultKeysForPath(items, location.pathname);

    setOpenKeys(defaultOpenKeys || []);
    setSelectedKeys(defaultSelectedKey || []);
  }, [location.pathname, items]);

  return {
    logo: logo[theme],
    openKeys,
    selectedKeys,
    isCollapse,
    translatedRoutes,
    defaultOpenKeys,
    defaultSelectedKey,
    setOpenKeys,
    navigate,
  }
}
