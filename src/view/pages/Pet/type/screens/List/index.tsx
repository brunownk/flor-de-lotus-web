import { Link } from "react-router-dom";

import { Table, Page } from "@components";

import { PetListFilter } from "./components/Filter";
import { useListPetTypeController } from "./useListPetTypeController";

export function ListPetType() {
  const {
    data,
    filters,
    columnDefs,
    isListLoading,
    translate,
    translateRoute,
    navigate,
    updateFilters,
    clearFilters,
  } = useListPetTypeController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        onCreate={() => navigate('/pet-type/create')}
        onFilter={updateFilters}
        onClearFilter={clearFilters}
        filterContent={PetListFilter}
        initialFilters={filters}
        suppressGoBack
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: translateRoute('list') }
        ]}
      />

      <Table
        dataSource={data?.nodes}
        dataCount={data?.totalCount}
        loading={isListLoading}
        columns={columnDefs}
        currentPage={filters?.page}
        defaultPageSize={filters?.pageSize}
        onPageChange={(page, pageSize) => updateFilters({ page, pageSize })}
      />
    </Page>
  )
}
