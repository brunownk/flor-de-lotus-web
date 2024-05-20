export type ToggleValue = string | number | boolean;

export interface IToggleOption {
  value: ToggleValue;
  label: string | JSX.Element;
}

export interface ICommunToggleProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface IToggleGroupProps extends ICommunToggleProps {
  initialValue: ToggleValue | null;
  options: IToggleOption[];
  onClick?: (value: any) => any;
}

export interface IToggleProps extends ICommunToggleProps {
  group?: boolean;
  selected?: boolean;
  children: string | ReactNode;
  onClick?: (value: boolean) => any;
}
