import { useTranslation } from 'react-i18next';
import { Table as AntdTable, Flex, Pagination } from 'antd';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { useTableDensity } from '@hooks/useTableDensity';

import { TableProps } from './Table';

import { DateCell, ItemCell } from './components';

import './styles.scss';

export function Table({
  children,
  dataSource,
  dataCount,
  currentPage,
  defaultPageSize = 8,
  pageSizeOptions = ['8', '15', '30', '50', '100'],
  onPageChange,
  ...rest
}: TableProps) {
  const { density } = useTableDensity();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'components.data-grid',
  });

  return (
    <AntdTable
      dataSource={dataSource}
      rowKey={(record) => record?.id}
      size={density}
      scroll={{ x: 1150 }}
      pagination={false}
      bordered
      footer={() => (
        <Flex align="center" justify="flex-end">
          <Pagination
            key={`pagination-${currentPage}`}
            simple
            total={dataCount}
            totalBoundaryShowSizeChanger={defaultPageSize}
            showTotal={(total, range) =>
              translate('show-total-pages', {
                from: range[0],
                to: range[1],
                total,
              })
            }
            pageSizeOptions={pageSizeOptions}
            defaultCurrent={currentPage}
            defaultPageSize={defaultPageSize}
            onChange={onPageChange}
          />
        </Flex>
      )}
      {...rest}
    >
      {children}
    </AntdTable>
  );
}

Table.ItemCell = ItemCell;

Table.DateCell = DateCell;
