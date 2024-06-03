import { Flex, Typography } from "antd";

import { Avatar, Space } from "@components";

interface IItemCellProps {
  avatar?: string;
  value?: string;
  description?: string;
}

export function ItemCell({ avatar, value, description }: IItemCellProps) {
  return (
    <Space direction="horizontal" align="start" size={16}>
      <Avatar src={avatar} name={value} size={42} />

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
