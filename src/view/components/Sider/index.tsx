import SiderAnt from 'antd/es/layout/Sider';

import { SIDER_COLLAPSED_WIDTH, SIDER_WIDTH } from '@config/app-keys';

import { Menu } from '@components/Menu';
import { IMenuProps } from '@components/Menu/Menu';

import { useSiderController } from './useSiderController';

import './styles.scss';

type ISiderProps = Omit<IMenuProps, 'mode'>;

export function Sider(props: ISiderProps) {
  const { logo, isCollapsed, handleGoHome } = useSiderController();

  return (
    <SiderAnt
      id="sider"
      width={SIDER_WIDTH}
      collapsedWidth={SIDER_COLLAPSED_WIDTH}
      trigger={null}
      collapsible
      collapsed={isCollapsed}
    >
      <div id={`logo-container${isCollapsed ? '-collapse' : ''}`}>
        <img src={logo} alt="OLA" onClick={handleGoHome} />
      </div>

      <Menu mode="inline" {...props} />
    </SiderAnt>
  );
}
