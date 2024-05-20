import { Typography } from "antd";

import { HEADER_CONTENT_GAP, HEADER_HEIGHT } from "@config/app-keys";

import { useStretchScreen } from "@hooks/useStretchScreen";
import { Breadcrumb } from "@components/Breadcrumb";

import { IPageContainerProps, IPageHeaderProps } from "./Page";

import './styles.scss'

export function Page({
  children,
  size = 'default',
  style,
  className: classNameProp,
  ...rest
}: IPageContainerProps) {
  const { isStretched } = useStretchScreen();

  const generateClassName = () => {
    let className = classNameProp || '';

    if (size === 'fullwidth') {
      className += ' fullwidth';

    } else if (size === 'larger') {
      className += ' larger';

    } else {
      className += ' default';
    }

    if (isStretched) {
      className += ' stretched';
    }

    return className.trim();
  }

  return (
    <div
      id="page-container"
      className={generateClassName()}
      style={{
        ...style,
        paddingBottom: HEADER_HEIGHT + HEADER_CONTENT_GAP
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

Page.Header = function PageHeader({ title, breadcrumb }: IPageHeaderProps) {
  return (
    <div id="page-header">
      <Typography.Title level={3} >
        {title}
      </Typography.Title>

      <Breadcrumb items={breadcrumb} />
    </div>
  )
}
