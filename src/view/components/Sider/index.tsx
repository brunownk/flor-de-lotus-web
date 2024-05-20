import { Menu, MenuProps } from "antd";
import SiderAnt from "antd/es/layout/Sider";

import { ItemType } from "@type/menu-item";
import { SIDER_COLLAPSED_WIDTH, SIDER_WIDTH } from "@config/app-keys";

import { useSiderController } from "./useSiderController";

import './styles.scss'

interface ISiderProps extends MenuProps {
  items: ItemType[];
}

export function Sider({ mode = 'inline', items = [] }: ISiderProps) {
  const {
    logo,
    isCollapse,
    translatedRoutes,
    defaultSelectedKey,
    defaultOpenKeys,
    navigate,
  } = useSiderController(items);

  return (
    <SiderAnt
      id="sider"
      width={SIDER_WIDTH}
      collapsedWidth={SIDER_COLLAPSED_WIDTH}
      trigger={null}
      collapsible
      collapsed={isCollapse}
    >
      <div id={`logo-container${isCollapse ? '-collapse' : ''}`}>
        <img src={logo} alt="FLOR DE LOTUS" />
      </div>

      <Menu
        id="sider-menu"
        mode={mode}
        items={translatedRoutes}
        defaultSelectedKeys={defaultSelectedKey}
        defaultOpenKeys={defaultOpenKeys}
        onSelect={({ key }) => navigate(key)}
      />
    </SiderAnt>
  );
}
