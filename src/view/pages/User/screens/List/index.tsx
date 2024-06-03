import { Link } from "react-router-dom";

import { DataGrid, Page } from "@components";

import { useListUserController } from "./useListUserController";
import { UserListFilter } from "./components/Filter";

export function ListUser() {
  const {
    data,
    filters,
    columnDefs,
    isLoading,
    translate,
    translateRoute,
    navigate,
    updateFilters,
    clearFilters,
  } = useListUserController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        onCreate={() => navigate('/user/create')}
        onFilter={updateFilters}
        onClearFilter={clearFilters}
        filterContent={UserListFilter}
        initialFilters={filters}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('dashboard')}</Link> },
          { title: translateRoute('list') }
        ]}
      />

      <DataGrid
        rowData={data?.nodes}
        rowCount={data?.totalCount}
        isLoading={isLoading}
        columnDefs={columnDefs}
      />
    </Page>
  )
}
