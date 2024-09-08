import { Typography } from 'antd';

import NotFoundIcon from '@assets/icons/not-found.svg?react';

import { Button, Page } from '@components';

import { useNotFoundController } from './useNotFoundController';

import './styles.scss';

export function NotFound() {
  const { translate, handleGoHome } = useNotFoundController();

  return (
    <Page size="default" className="not-found-container">
      <Typography.Title level={2}>{translate('title')}</Typography.Title>

      <div className="description-container">
        <Typography.Text>{translate('description')}</Typography.Text>
      </div>

      <NotFoundIcon />

      <Button customSize="large" onClick={handleGoHome}>
        {translate('home-button')}
      </Button>
    </Page>
  );
}
