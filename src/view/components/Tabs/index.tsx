import { Tabs as AntdTabs, TabsProps } from 'antd';

import './styles.scss';

export function Tabs(props: TabsProps) {
  return (
    <AntdTabs {...props} />
  )
}
