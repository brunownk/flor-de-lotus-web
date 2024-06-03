import { Flex, Typography } from "antd";

import { Space } from "@components";

import format from "@utils/format";

import './styles.scss';

interface IDateCellProps {
  value?: string | number | Date;
}

export function DateCell({ value }: IDateCellProps) {
  return (
    <Space direction="horizontal" align="start" size={16}>
      {value && (
        <Flex vertical gap={2}>
          <Typography.Text>
            {format(new Date(value), 'dd MMM yyyy')}
          </Typography.Text>

          <Typography.Text className="date-cell-hours" type="secondary">
            {format(new Date(value), 'p')}
          </Typography.Text>
        </Flex>
      )}
    </Space>
  )
}
