import { Switch as AntdSwitch, Flex } from 'antd';

import { Label } from '../@shared';

import { SwitchProps } from './Switch';

import './styles.scss';

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <Flex gap={8} align="center" className={className}>
      <AntdSwitch {...props} />
      {label && <Label className="switch-label">{label}</Label>}
    </Flex>
  );
}
