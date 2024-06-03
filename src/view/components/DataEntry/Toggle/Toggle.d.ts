export type ToggleValue = string | number | boolean;

export interface IToggleOption {
  value: ToggleValue;
  label: string | JSX.Element;
}

export interface ICommunToggleProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  labelSize?: 'small' | 'medium' | 'large';
}

export interface IToggleGroupProps extends ICommunToggleProps {
  value?: ToggleValue;
  initialValue?: ToggleValue;
  options?: IToggleOption[];
  onClick?: (value: any) => any;
  onChange?: (value: any) => any;
}

export interface IToggleProps extends ICommunToggleProps {
  group?: boolean;
  selected?: boolean;
  children?: string | ReactNode;
  onClick?: (value: boolean) => any;
  onChange?: (value: boolean) => any;
}
