import { Button as AntdButton, ButtonProps } from 'antd';

import './styles.scss';

export function Button({
  children,
  type = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <AntdButton className='button' type={type} {...rest}>
      {children}
    </AntdButton>
  )
}
