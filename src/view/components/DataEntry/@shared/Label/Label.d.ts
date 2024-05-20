export interface ILabelProps extends Ombit<React.HTMLAttributes<HTMLSpanElement>, 'className'>{
  size?: 'small' | 'medium' | 'large';
  children?: string;
}
