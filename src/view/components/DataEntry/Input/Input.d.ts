export interface CustomGenericFieldProps {
  name?: string;
  size?: 'small' | 'middle' | 'large';
  label?: string;
  error?: string;
  status?: 'error' | 'warning';
  children?: React.Element;
  antdSizes?: boolean;
  info?: string;
}
