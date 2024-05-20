import { Typography } from 'antd';

import { Form, Button } from '@components';

import { useLoginController } from './useLoginController';

import './styles.scss';

export function Login() {
  const { translate, methods, handleSubmit } = useLoginController();

  return (
    <div id='login-container'>
      <Typography.Title level={3}>{translate('title')}</Typography.Title>

      <Form methods={methods} onSubmit={handleSubmit}>
        <Form.Input
          name='username'
          label={translate('username-label')}
          placeholder={translate('username-placeholder')}
          antdSizes
        />

        <Form.Password
          name='password'
          label={translate('password-label')}
          placeholder={translate('password-placeholder')}
          antdSizes
        />

        <Button
          type='primary'
          htmlType='submit'
          size='large'
        >
          {translate('submit')}
        </Button>
      </Form>
    </div>
  );
}
