import { Col, Row } from "antd";
import { Button, Form, Card } from "@components";

import { PetGeneralProps } from "./PetGeneral";

import { usePetGeneralController } from "./usePetGeneralController";

import './styles.scss';

export function PetGeneral({
  edit,
  editingOtherPet,
  methods,
  isLoading,
  onSubmit: handleSubmit,
}: PetGeneralProps) {
  const { translate } = usePetGeneralController();

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
                  name="type"
                  label={translate('type-label')}
                  disabled={edit && !editingOtherPet}
                  placeholder={translate('type-placeholder')}
                />
              </Col>

              <Col flex={1}>
                <Form.Input
                  name="breed"
                  label={translate('breed-label')}
                  placeholder={translate('breed-placeholder')}
                />
              </Col>


              <Col flex="100%">
                <Form.Input
                  name="owner"
                  label={translate('owner-label')}
                  placeholder={translate('owner-placeholder')}
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
