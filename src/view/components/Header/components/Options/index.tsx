import { cloneElement } from "react";
import { Divider, Dropdown, Space, Typography } from "antd";

import { Avatar } from "@components/Avatar";
import { useOptionsController } from "./useOptionsController";

import './styles.scss'

export function Options() {
  const { translate, user, items, signout } = useOptionsController();

  return (
    <Dropdown
      className="options-dropdown"
      placement="bottomLeft"
      trigger={["click"]}
      arrow
      menu={{ items }}
      dropdownRender={(menu) => (
        <div>
          <Space
            className="options-dropdown-user-info"
            direction="vertical"
            size={1}
          >
            <Typography.Text style={{ textTransform: 'capitalize' }}>
              {user?.name}
            </Typography.Text>

            <Typography.Text type="secondary">
              {user?.email}
            </Typography.Text>
          </Space>

          <Divider dashed style={{ margin: 0 }} />

          {cloneElement(menu as React.ReactElement)}

          <Divider dashed style={{ margin: 0 }} />

          <ul className="ant-dropdown-menu">
            <li
              className="ant-dropdown-menu-item"
              onClick={signout}
            >
              <span className="ant-dropdown-menu-title-content-danger">
                {translate('logout')}
              </span>
            </li>
          </ul>
        </div>
      )}
    >
      <div className="options-dropdown-avatar-container">
        <Avatar name={user?.name} />
      </div>
    </Dropdown>
  )
}
