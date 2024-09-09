import { Link } from "react-router-dom";

import { Table, Page } from "@components";

import { PetBreedListFilter } from "./components/Filter";
import { useListPetBreedController } from "./useListPetBreedController";

export function ListPetBreed() {
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
  } = useListPetBreedController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        onCreate={() => navigate('/pet-breed/create')}
        onFilter={updateFilters}
        onClearFilter={clearFilters}
        filterContent={PetBreedListFilter}
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
