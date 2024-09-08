import { ThemeConfig } from 'antd';

export const antdComponents: ThemeConfig['components'] = {
  Menu: {
    fontSize: 14,
    iconSize: 22,
  },
  Modal: {
    colorBgMask: 'rgba(22, 28, 36, 0.8)',
    borderRadiusLG: 16,
  },
  Card: {
    colorBorderSecondary: 'transparent',
  },
  Input: {
    sizeLG: 60,
  },
  Button: {
    controlHeight: 36,
    paddingContentHorizontal: 13,
    paddingContentVertical: 6,
    fontWeight: 700,
    borderRadius: 8,
  },
  Table: {
    lineType: 'dashed',
  },
};
