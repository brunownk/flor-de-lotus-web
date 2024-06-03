import { Flex, Typography } from "antd";

import { Avatar, Space } from "@components";

interface IItemCellProps {
  avatar?: string;
  value?: string;
  description?: string;
  suppressAvatar?: boolean;
}

export function ItemCell({ avatar, value, description, suppressAvatar }: IItemCellProps) {
  return (
    <Space direction="horizontal" align="start" size={16}>
      {!suppressAvatar && <Avatar src={avatar} name={value} size={42} />}

      <Flex vertical>
        <Typography.Text>{value}</Typography.Text>

        {description && (
          <Typography.Text type="secondary">
            {description}
          </Typography.Text>
        )}
      </Flex>
    </Space>
  )
}
