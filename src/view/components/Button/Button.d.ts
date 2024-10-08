import { ButtonProps } from 'antd';

export interface IButtonProps extends ButtonProps {
  customStyle?: boolean;
  customSize?: 'default' | 'small' | 'large';
}
