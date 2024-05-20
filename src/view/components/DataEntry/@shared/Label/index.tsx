import { ILabelProps } from "./Label";

import "./styles.scss";

export function Label({ size = 'medium', children, ...rest }: ILabelProps) {
  return (
    <span {...rest} className={`label label-${size}`}>
      {children}
    </span>
  )
}
