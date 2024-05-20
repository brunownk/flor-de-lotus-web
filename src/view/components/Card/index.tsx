import { Card as AntdCard, CardProps } from "antd";

import './styles.scss';

export function Card({ children, ...rest }: CardProps) {
  return (
    <AntdCard {...rest}>
      {children}
    </AntdCard>
  )
}
