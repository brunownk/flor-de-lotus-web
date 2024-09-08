import { Button } from 'antd';
import { Outlet } from 'react-router-dom';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { privateLayoutClass } from '@styles/class/private-layout';

import { useMenu } from '@hooks/useMenu';

import { privateRoutes } from '@routes/app-routes';

import { mountMenuRouteObject } from '@utils/mount-menu-route-object';

import { Header, Sider } from '@components';

import './styles.scss';

export function PrivateLayout() {
  const { isCollapsed, isVerticalMenu, menuMode, toggleMenuMode } = useMenu();

  const menuRoutes = mountMenuRouteObject(privateRoutes);

  return (
    <>
      <Header items={menuRoutes} />

      {isVerticalMenu && (
        <>
          <Sider items={menuRoutes} />

          <Button
            id="collapse-button"
            type="default"
            icon={isCollapsed ? <RightOutlined /> : <LeftOutlined />}
            style={privateLayoutClass.collapseButton[menuMode]}
            onClick={() => {
              toggleMenuMode(isCollapsed ? 'vertical' : 'verticalCollapse');
            }}
          />
        </>
      )}

      <div id="page-content" style={privateLayoutClass.pageContent[menuMode]}>
        <Outlet />
      </div>
    </>
  );
}
