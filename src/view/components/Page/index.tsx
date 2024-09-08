import { createElement } from 'react';
import { Flex, Popover, Typography } from 'antd';

import { pageContentClass } from '@styles/class/page-content';

import { useStretchScreen } from '@hooks/useStretchScreen';
import { useMenu } from '@hooks/useMenu';

import { Button, Breadcrumb, Space, GoBack } from '@components';
import { IPageContainerProps, IPageHeaderProps } from './Page';

import './styles.scss';

export function Page({
  children,
  size = 'default',
  style,
  className: classNameProp,
  ...rest
}: IPageContainerProps) {
  const { isStretched } = useStretchScreen();
  const { menuMode } = useMenu();

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
  };
  return (
    <div
      id="page-container"
      className={generateClassName()}
      style={{ ...style, ...pageContentClass[menuMode] }}
      {...rest}
    >
      {children}
    </div>
  );
}

Page.Header = function PageHeader({
  title,
  breadcrumb,
  goBackTo,
  headerButtons,
  filterContent,
  initialFilters,
  suppressGoBack,
  onFilter,
  onCreate,
  onClearFilter,
}: IPageHeaderProps) {
  return (
    <Flex id="page-header" align="center" justify="space-between">
      <div>
        <Flex gap={4}>
          {!suppressGoBack && <GoBack to={goBackTo} />}

          <Space>
            <Typography.Title level={3}>{title}</Typography.Title>

            <Breadcrumb items={breadcrumb} />
          </Space>
        </Flex>
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
              <Button.Create
                onClick={onCreate}
              />
            )}
          </>
        )}
      </Flex>
    </Flex>
  );
};
