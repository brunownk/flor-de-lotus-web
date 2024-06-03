import { AgGridReact } from 'ag-grid-react';
import { Spin } from 'antd';

import { DataGridProps } from './DataGrid';

import { Switch } from '@components/DataEntry';
import { DateCell, EmptyMessage, ItemCell } from './components';

import { useDataGridController } from './useDataGridController';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import './styles.scss';

export function DataGrid({
  rowData,
  rowCount,
  isLoading,
  pagination = true,
  paginationPageSize = 8,
  rowModelType = 'clientSide',
  paginationPageSizeSelector = [8, 15, 30],
  ...props
}: DataGridProps) {
  const {
    dense,
    locale,
    themeClass,
    localeText,
    memorizedData,
    mountPaginationPageSizeSelector,
    setDense,
  } = useDataGridController({
    rowData,
    rowCount,
    paginationPageSizeSelector
  });

  return (
    <div className={`ag-grid ${themeClass}`}>
      <Spin className='ag-grid-spin' spinning={isLoading}>
        <AgGridReact
          key={`ag-grid-${locale}`}
          localeText={localeText}
          rowData={memorizedData}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={mountPaginationPageSizeSelector}
          cacheBlockSize={paginationPageSize}
          rowModelType={rowModelType}
          domLayout='autoHeight'
          rowHeight={dense ? 48 : 68}
          headerHeight={dense ? 42 : 58}
          suppressLoadingOverlay
          noRowsOverlayComponent={() => <EmptyMessage />}
          {...props}
        />

        <Switch
          className='ag-grid-dense-switch'
          label='Dense'
          checked={dense}
          onChange={setDense}
        />
      </Spin>
    </div>
  );
}

DataGrid.ItemCell = ItemCell;

DataGrid.DateCell = DateCell;

