import { Flex, Typography } from 'antd';

import { Space } from '@components';

import format from '@utils/format';

import { IDateCellProps } from './DateCell';

import './styles.scss';

export function DateCell({ value }: IDateCellProps) {
  return (
    <Space direction="horizontal" align="start" size={16}>
      {value && (
        <Flex className="date-cell-container" vertical gap={2}>
          <Typography.Text className="date-cell-date">
            {format(new Date(value), 'dd MMM yyyy')}
          </Typography.Text>

          <Typography.Text className="date-cell-hours" type="secondary">
            {format(new Date(value), 'p')}
          </Typography.Text>
        </Flex>
      )}
    </Space>
  );
}
