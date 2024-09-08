import { Menu as AntdMenu } from 'antd';

import { IMenuProps } from './Menu';

import { useMenuController } from './useMenuController';

import './styles.scss';

export function Menu({ items, mode }: IMenuProps) {
  const {
    openKeys,
    selectedKeys,
    translatedRoutes,
    navigate,
    setOpenKeys,
    setSelectedKeys,
  } = useMenuController(items);

  return (
    <AntdMenu
      id="menu"
      mode={mode}
      items={translatedRoutes}
      openKeys={mode === 'horizontal' ? undefined : openKeys}
      onOpenChange={setOpenKeys}
      selectedKeys={selectedKeys}
      onSelect={({ key }) => {
        setSelectedKeys([key]);
        navigate(key);
      }}
    />
  );
}
