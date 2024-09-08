import { ILabelProps } from './Label';

import './styles.scss';

export function Label({
  size = 'medium',
  children,
  className,
  ...rest
}: ILabelProps) {
  return (
    <span {...rest} className={`label label-${size} ${className}`.trim()}>
      {children}
    </span>
  );
}
