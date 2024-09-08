import { Link } from "react-router-dom";

import { Table, Page } from "@components";

import { useListUserController } from "./useListUserController";
import { UserListFilter } from "./components/Filter";

export function ListUser() {
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
        suppressGoBack
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: translateRoute('list') },
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
