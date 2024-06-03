import { ThemeConfig } from "antd/lib";

export const antdLightTheme: ThemeConfig['token'] = {
  fontFamily: 'Public Sans, sans-serif',
  colorText: '#161c24',
  colorPrimaryBg: '#6694FF20',
  colorPrimary: '#484f91',
  colorBgBase: '#f3f3f3',
  colorBorder: 'rgba(145, 158, 171, 0.2)',
  colorTextSecondary: 'rgb(145, 158, 171)',
  colorTextDescription: 'rgb(145, 158, 171)',
  colorBgElevated: 'rgb(255, 255, 255)',
}

export const antdDarkTheme: ThemeConfig['token'] = {
  fontFamily: 'Public Sans, sans-serif',
  colorText: "#ffffff",
  colorBgBase: '#161c24',
  colorPrimary: "#ffffff",
  colorPrimaryBg: '#6694FF10',
  colorBorder: 'rgba(145, 158, 171, 0.2)',
  colorTextSecondary: 'rgb(145, 158, 171)',
  colorTextDescription: 'rgb(99, 115, 129)',
  colorBgElevated: 'rgb(33, 43, 54)',
}
