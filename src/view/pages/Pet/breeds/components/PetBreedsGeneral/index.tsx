import { Col, Row } from "antd";
import { Button, Form, Card } from "@components";

import { PetBreedGeneralProps } from "./PetBreedGeneral";

import { usePetBreedGeneralController } from "./usePetBreedGeneralController";

import './styles.scss';

export function PetBreedGeneral({
  edit,
  methods,
  isLoading,
  onSubmit: handleSubmit,
}: PetBreedGeneralProps) {
  const { petTypes, translate } = usePetBreedGeneralController();

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
                <Form.Select
                  name="animalTypeId"
                  label={translate('type-label')}
                  placeholder={translate('type-placeholder')}
                  options={petTypes}
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
