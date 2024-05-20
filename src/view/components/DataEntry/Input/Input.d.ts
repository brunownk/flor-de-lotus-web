export interface CustomGenericFieldProps {
  name?: string;
  size?: 'small' | 'middle' | 'large';
  label?: string;
  error?: string;
  children?: React.Element;
  antdSizes?: boolean;
  info?: string;
}
