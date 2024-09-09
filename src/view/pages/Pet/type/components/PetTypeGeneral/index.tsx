import { Col, Row } from "antd";
import { Button, Form, Card } from "@components";

import { PetTypeGeneralProps } from "./PetTypeGeneral";

import { usePetTypeGeneralController } from "./usePetTypeGeneralController";

import './styles.scss';

export function PetTypeGeneral({
  edit,
  methods,
  isLoading,
  onSubmit: handleSubmit,
}: PetTypeGeneralProps) {
  const { translate } = usePetTypeGeneralController();

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
