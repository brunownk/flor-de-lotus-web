import { Link } from "react-router-dom";

import { DataGrid, Page } from "@components";

import { useListPetController } from "./useListPetController";
import { PetListFilter } from "./components/Filter";

export function ListPet() {
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
  } = useListPetController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        onCreate={() => navigate('/pet/create')}
        onFilter={updateFilters}
        onClearFilter={clearFilters}
        filterContent={PetListFilter}
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
