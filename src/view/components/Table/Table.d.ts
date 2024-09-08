import { TableProps as AntdTableProps } from 'antd';

export interface TableProps extends AntdTableProps {
  dataCount?: number;
  currentPage?: number;
  defaultPageSize?: number;
  pageSizeOptions?: string[];
  onPageChange?: (page: number, pageSize?: number) => void;
}
