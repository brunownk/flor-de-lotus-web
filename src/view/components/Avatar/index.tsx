import { Avatar as AntdAvatar } from 'antd';

import { getStringInitials } from '@utils/get-string-initials';
import { CustomAvatarProps } from './Avatar';

export function Avatar({ name, size = 32, ...rest }: CustomAvatarProps) {
  return (
    <AntdAvatar size={size} {...rest}>
      <p style={{ fontSize: size / 2.5 }}>{name && getStringInitials(name)}</p>
    </AntdAvatar>
  );
}
