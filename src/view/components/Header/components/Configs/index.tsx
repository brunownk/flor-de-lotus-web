import { useState } from "react";
import { Button, Drawer } from "antd";
import { useTranslation } from "react-i18next";

import SettingIcon from "@assets/icons/setting.svg?react";
import MoonIcon from "@assets/icons/ic_moon.svg?react";
import SunIcon from "@assets/icons/ic_sun.svg?react";

import { I18_DEFAULT_NS } from "@config/app-keys";

import { useTheme } from "@hooks/useTheme";

import { Toggle, Space } from "@components";
import { StretchToggle } from "./StretchToggle";

import './styles.scss';

export function Configs() {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.configs'
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
        width={280}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Space size={24}>
          <Toggle.Group
            label={translate('theme')}
            initialValue={theme}
            onClick={toggleTheme}
            options={[
              { value: 'light', label: <SunIcon /> },
              { value: 'dark', label: <MoonIcon /> },
            ]}
          />

          <StretchToggle />
        </Space>

      </Drawer>
    </>
  )
}
