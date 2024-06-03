import { AgGridReactProps } from "ag-grid-react";

export interface DataGridProps extends AgGridReactProps {
  rowCount?: number;
  isLoading?: boolean;
}
