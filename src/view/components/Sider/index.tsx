import { Menu, MenuProps } from "antd";
import SiderAnt from "antd/es/layout/Sider";

import collapseLogo from "@assets/images/collapse-logo.png";
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
    openKeys,
    selectedKeys,
    isCollapse,
    translatedRoutes,
    defaultSelectedKey,
    defaultOpenKeys,
    setOpenKeys,
    navigate,
  } = useSiderController(items);

  return (
    <SiderAnt
      id="sider"
      width={SIDER_WIDTH}
      collapsedWidth={SIDER_COLLAPSED_WIDTH}
      collapsed={isCollapse}
      trigger={null}
      collapsible
    >
      <div id={`logo-container${isCollapse ? '-collapse' : ''}`}>
        <img src={isCollapse ? collapseLogo : logo} alt="FLOR DE LOTUS" />
      </div>

      <Menu
        id="sider-menu"
        mode={mode}
        items={translatedRoutes}
        defaultSelectedKeys={defaultSelectedKey}
        defaultOpenKeys={defaultOpenKeys}
        onSelect={({ key }) => navigate(key)}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
      />
    </SiderAnt>
  );
}
