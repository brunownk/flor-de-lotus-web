import { SwitchProps as AntdSwitchProps } from 'antd';

export interface SwitchProps extends AntdSwitchProps {
  label?: string;
  onChange?: (value: boolean) => any;
}
