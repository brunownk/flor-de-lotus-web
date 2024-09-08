import { Col, Row, Typography } from "antd";
import { MdLockReset, MdChecklist } from "react-icons/md";

import { Button, Card, Form, Tabs } from "@components";

import { usePermissionsController } from "./usePermissionsController";

import { PermissionsProps } from "./Permissions";

import './styles.scss';

export function Permissions({ options = {}, disabled }: PermissionsProps) {
  const {
    tabItems,
    translate,
    translateForm,
    selectedModule,
    submodules,
    setSelectedModule,
    toggleAllSubmodulePermissions
  } = usePermissionsController({ permissions: options });

  return (
    <Col flex="100%">
      <Typography.Title level={4}>
        {translateForm('permissions-section')}
      </Typography.Title>

      <Tabs defaultActiveKey="1" items={tabItems} onChange={setSelectedModule} />

      <Row gutter={[24, 24]}>
        {submodules && submodules?.map((submodule) => {
          return (
            <Col
              key={submodule}
              xs={{ flex: '100%'}}
              md={{ flex: '50%'}}
              xl={{ flex: '33.33%'}}
              xxl={{ flex: '25%'}}
            >
              <Card
                id="role-card"
                title={translate(`${selectedModule}.${submodule}.title` as any) as any}
              >
                {!disabled && (
                  <div className="permission-buttons">
                    <Button
                      danger
                      type="text"
                      size="small"
                      shape="circle"
                      icon={<MdLockReset size={20} />}
                      onClick={() => toggleAllSubmodulePermissions(submodule, false)}
                    />

                    <Button
                      type="text"
                      size="small"
                      shape="circle"
                      color="success"
                      icon={<MdChecklist size={20} />}
                      onClick={() => toggleAllSubmodulePermissions(submodule, true)}
                    />
                  </div>
                )}

                <Row gutter={[24, 24]}>
                  {Object.entries(
                    options[selectedModule][submodule]).map(([action, permission]) => (
                      <Col xs={{ flex: '100%' }}>
                        <Form.Switch
                          key={action}
                          name={`permissions.${permission.id}`}
                          label={translate(`${selectedModule}.${submodule}.${action}` as any) as any}
                          disabled={disabled}
                        />
                      </Col>
                    ))
                  }
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Col>
  )
}
