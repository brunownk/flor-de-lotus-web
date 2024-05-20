import { Space as AntdSpace, SpaceProps } from "antd";

export function Space({
  direction = 'vertical',
  size = 8,
  style,
  children,
  ...rest
}: SpaceProps) {
  return (
    <AntdSpace
      direction={direction}
      size={size}
      style={{ width: '100%', ...style }}
      {...rest}
    >
      {children}
    </AntdSpace>
  )
}
