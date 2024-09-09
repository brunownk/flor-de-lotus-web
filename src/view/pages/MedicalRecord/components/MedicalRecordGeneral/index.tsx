import { Col, Row } from "antd";
import { Button, Form, Card } from "@components";

import { MedicalRecordGeneralProps } from "./MedicalRecordGeneral";

import { useMedicalRecordGeneralController } from "./useMedicalRecordGeneralController";

import './styles.scss';

export function MedicalRecordGeneral({
  methods,
  isLoading,
  edit,
  onSubmit: handleSubmit,
}: MedicalRecordGeneralProps) {
  const { translate } = useMedicalRecordGeneralController();

  return (
    <Form onSubmit={handleSubmit} methods={methods}>
      <Row gutter={[ 24, 24 ]}>
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
