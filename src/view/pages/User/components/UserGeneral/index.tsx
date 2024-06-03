import { Col, Row, Typography } from "antd";
import { Button, Form, Card } from "@components";

import { UserGeneralProps } from "./UserGeneral";

import { useUserGeneralController } from "./useUserGeneralController";

import './styles.scss';

export function UserGeneral({
  edit,
  editingOtherUser,
  methods,
  isLoading,
  onSubmit: handleSubmit,
}: UserGeneralProps) {
  const { translate } = useUserGeneralController();

  return (
    <Form onSubmit={handleSubmit} methods={methods}>
      <Row gutter={[ 24, 24 ]}>
        <Col xs={{ flex: '100%' }} lg={{ flex: '35%'}}>
          <Card id="user-avatar-card">
            <Form.UploadSingleFile name="file" maxSizeInMb={3} />

            <Typography.Text>
              {translate('file-allowed-types', { types: '*.jpeg, *.png' })}
              <br />
              {translate('file-max-size', { size: 3 })}
            </Typography.Text>
          </Card>
        </Col>

        <Col xs={{ flex: '100%' }} lg={{ flex: '65%'}}>
          <Card id="account-card">
            <Row gutter={[ 16, 16 ]}>
              <Col flex="100%">
                <Form.Input
                  name="name"
                  label={translate('name-label')}
                  placeholder={translate('name-placeholder')}
                />
              </Col>

              <Col flex={1}>
                <Form.Input
                  name="email"
                  label={translate('email-label')}
                  disabled={edit && !editingOtherUser}
                  placeholder={translate('email-placeholder')}
                />
              </Col>

              <Col flex={1}>
                <Form.Input
                  name="username"
                  label={translate('username-label')}
                  placeholder={translate('username-placeholder')}
                />
              </Col>

              {!edit && (
                <Col flex={1}>
                  <Form.Password
                    name="password"
                    label={translate('password-label')}
                    placeholder={translate('password-placeholder')}
                    info={translate('password-min-length', { min: 6 })}
                  />
                </Col>
              )}
            </Row>

            <Button htmlType='submit' loading={isLoading}>
              {translate(`${edit ? 'edit' : 'create'}-button`)}
            </Button>
          </Card>
        </Col>
      </Row>
    </Form>
  );
}
