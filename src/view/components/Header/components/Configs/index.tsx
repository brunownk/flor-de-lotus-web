import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { useTranslation } from 'react-i18next';

import SettingIcon from '@assets/icons/setting.svg?react';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { Space } from '@components';
import {
  StretchToggle,
  DensityToggle,
  FullScreenToggle,
  LayoutToggle,
  ThemeToggle,
} from './components';

import './styles.scss';

export function Configs() {
  const [open, setOpen] = useState(false);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.configs',
  });

  return (
    <>
      <Button
        className="settings-dropdown-button"
        type="text"
        shape="circle"
        onClick={() => setOpen(true)}
      >
        <SettingIcon />
      </Button>

      <Drawer
        title={translate('title')}
        placement="right"
        closable={false}
        width={300}
        onClose={() => setOpen(false)}
        open={open}
        footer={<FullScreenToggle />}
      >
        <Space size={30}>
          <ThemeToggle />
          <DensityToggle />
          <LayoutToggle />
          <StretchToggle />
        </Space>
      </Drawer>
    </>
  );
}
