import { Flex, Typography } from 'antd';

import { IDensityTypes } from '@contexts/TableDensityContext';

import { useTableDensity } from '@hooks/useTableDensity';

import { Avatar, Space } from '@components';

import { IItemCellProps } from './ItemCell';

import './styles.scss';

export function ItemCell({
  avatar,
  value,
  description,
  suppressAvatar = true,
}: IItemCellProps) {
  const { density } = useTableDensity();
  const isDense = (['small', 'middle'] as IDensityTypes[]).includes(density);

  return (
    <Space
      direction="horizontal"
      align={isDense ? 'center' : 'start'}
      size={isDense ? 12 : 16}
    >
      {!suppressAvatar && (
        <Avatar src={avatar} name={value} size={isDense ? 36 : 42} />
      )}

      <Flex className="item-cell-container" vertical>
        <Typography.Text className="item-cell-value">{value}</Typography.Text>

        {description && (
          <Typography.Text className="item-cell-description" type="secondary">
            {description}
          </Typography.Text>
        )}
      </Flex>
    </Space>
  );
}
