import { Col, Row } from "antd";
import { Button, Form, Card } from "@components";

import { useSecurityTabController } from "./useSecurityTabController";

export function SecurityTab() {
  const {
    methods,
    translate,
    isLoading,
    handleSubmit,
   } = useSecurityTabController();

  return (
    <Form onSubmit={handleSubmit} methods={methods}>
      <Card id="account-card">
        <Row gutter={[ 24, 24 ]}>
          <Col flex="100%">
            <Form.Password
              name="oldPassword"
              label={translate('old-password-label')}
              placeholder={translate('old-password-placeholder')}
            />
          </Col>

          <Col flex="100%">
            <Form.Password
              name="password"
              label={translate('new-password-label')}
              info={translate('password-min-length', { min: 6 })}
              placeholder={translate('new-password-placeholder')}
            />
          </Col>

          <Col flex="100%">
            <Form.Password
              name="passwordConfirmation"
              label={translate('confirm-password-label')}
              placeholder={translate('confirm-password-placeholder')}
            />
          </Col>
        </Row>

        <Button htmlType='submit' loading={isLoading}>
          {translate('edit-button')}
        </Button>
      </Card>
    </Form>
  );
}
