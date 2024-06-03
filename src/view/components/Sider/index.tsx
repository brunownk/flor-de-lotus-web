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
    openKeys,
    selectedKeys,
    translatedRoutes,
    navigate,
    setOpenKeys,
    setSelectedKeys
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
        <img src={logo} alt="OLA" />
      </div>

      <Menu
        id="sider-menu"
        mode={mode}
        items={translatedRoutes}
        openKeys={isCollapse ? undefined : openKeys}
        onOpenChange={setOpenKeys}
        selectedKeys={selectedKeys}
        onSelect={({ key }) => {
          setSelectedKeys([key]);
          navigate(key);
        }}
      />
    </SiderAnt>
  );
}
