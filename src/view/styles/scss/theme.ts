import { table, header, menu, card } from './components';

export const lightTheme: { [key: string]: string } = {
  loginBgColor:
    'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88))',
  ...table.light,
  ...header.light,
  ...menu.light,
  ...card.light,
};

export const darkTheme: { [key: string]: string } = {
  loginBgColor:
    'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94))',
  ...table.dark,
  ...header.dark,
  ...menu.dark,
  ...card.dark,
};
