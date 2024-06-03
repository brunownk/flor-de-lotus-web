import { useTranslation } from "react-i18next";
import { Dropdown, Flex, Typography } from "antd";
import { MenuProps } from "antd/lib";

import { Locale } from "@type/locales";
import { useLocale } from "@hooks/useLocale";
import { I18_DEFAULT_NS } from "@config/app-keys";

import brFlag from "@assets/flags/br-flag.png";
import usFlag from "@assets/flags/us-flag.png";
import pyFlag from "@assets/flags/py-flag.png";

import { Button } from "@components/Button";

const { Text } = Typography;

import './styles.scss';

const flags = {
  br: brFlag,
  en: usFlag,
  es: pyFlag,
}

interface ICustomMenuItemProps {
  flagKey: Locale;
  flagIcon: string;
}

function CustomMenuItem({ flagKey, flagIcon }: ICustomMenuItemProps) {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.locales'
  });

  return (
    <Flex align="center" gap={16}>
      <img className="locale-img-item" src={flagIcon} />
      <Text>{translate(flagKey)}</Text>
    </Flex>
  )
}

const items: MenuProps['items'] = [
  {
    key: 'es',
    label: <CustomMenuItem flagKey="es" flagIcon={flags.es} />,
  },
  {
    key: 'br',
    label: <CustomMenuItem flagKey="br" flagIcon={flags.br} />,
    onClick: (e) => console.log(e),
  },
  {
    key: 'en',
    label: <CustomMenuItem flagKey="en" flagIcon={flags.en} />,
  },
];

export function Locales() {
  const { locale, changeLocale } = useLocale();

  return (
    <Dropdown
      arrow
      placement="bottomRight"
      trigger={['click']}
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: [locale],
        onSelect: (item) => changeLocale(item.key as Locale),
      }}
    >
      <Button
        className="locales-button"
        type="text"
        shape="circle"
      >
        <img src={flags[locale]} />
      </Button>
    </Dropdown>
  )
}
