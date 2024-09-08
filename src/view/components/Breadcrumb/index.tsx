import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { BsDot } from 'react-icons/bs';

import { IBreadcrumbProps } from './Breadcrumb';

import './styles.scss';

export function Breadcrumb(props: IBreadcrumbProps) {
  return (
    <AntdBreadcrumb
      className="breadcrumb"
      separator={<BsDot size={18} />}
      {...props}
    />
  );
}
