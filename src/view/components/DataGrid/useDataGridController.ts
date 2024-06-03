import { useMemo, useState } from "react";

import { useTheme } from "@hooks/useTheme";
import { useLocale } from "@hooks/useLocale";

import { DataGridProps } from "./DataGrid";
import { useTableDensity } from "@hooks/useTableDensity";

export function useDataGridController({
  rowData,
  rowCount,
  paginationPageSizeSelector
}: DataGridProps) {
  const { isDensified } = useTableDensity();

  const [dense, setDense] = useState(isDensified ?? false);

  const memorizedData = useMemo(() => {
    if (rowData) {
      return rowData;
    }

    return [];
  }, [rowData]);

  const { theme } = useTheme();
  const { agGridLocale, locale } = useLocale();

  const themeClass = useMemo(() => (
    theme === 'dark' ? 'ag-theme-quartz-dark' : 'ag-theme-quartz'
  ), [theme]);

  const mountPaginationPageSizeSelector = useMemo(() => {
    if (typeof paginationPageSizeSelector !== 'boolean') {
      if (rowCount && rowCount > 100) {
        return paginationPageSizeSelector?.concat([rowCount]);
      }

      return paginationPageSizeSelector;
    }
  } , [rowCount, paginationPageSizeSelector]);

  return {
    dense,
    locale,
    themeClass,
    localeText: agGridLocale,
    memorizedData,
    mountPaginationPageSizeSelector,
    setDense,
  }
}
