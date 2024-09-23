import { Col, Row } from "antd";
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
        <Col xs={{ flex: '100%' }}>
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
