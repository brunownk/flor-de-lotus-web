import { Flex, Popover, Typography } from "antd";

import { HEADER_CONTENT_GAP, HEADER_HEIGHT } from "@config/app-keys";

import { useStretchScreen } from "@hooks/useStretchScreen";
import { Button, Breadcrumb } from "@components"

import { IPageContainerProps, IPageHeaderProps } from "./Page";

import './styles.scss'
import { createElement } from "react";

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

Page.Header = function PageHeader({
  title,
  breadcrumb,
  headerButtons,
  filterContent,
  initialFilters,
  onFilter,
  onCreate,
  onClearFilter,
}: IPageHeaderProps) {
  return (
    <Flex id="page-header" align="center" justify="space-between">
      <div>
        <Typography.Title level={3} >
          {title}
        </Typography.Title>

        <Breadcrumb items={breadcrumb} />
      </div>

      <Flex gap={16}>
        {headerButtons}

        {!headerButtons && (
          <>
            {onFilter && (
              <Popover
                trigger="click"
                placement="bottom"
                content={createElement(filterContent, {
                  updateFilters: onFilter,
                  clearFilters: onClearFilter,
                  initialFilters,
                })}
              >
                <Button.Filter />
              </Popover>
            )}

            {onCreate && (
              <Button.Create onClick={onCreate} />
            )}
          </>
        )}
      </Flex>
    </Flex>

  )
}
