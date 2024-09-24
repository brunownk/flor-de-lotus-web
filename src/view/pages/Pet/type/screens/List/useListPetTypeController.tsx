import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { Flex, notification, TableProps, Tag } from "antd";

import { Pet } from "@entities/Pet";

import { I18_DEFAULT_NS } from "@config/app-keys"


import {
  PetTypesListFilters,
  useDeletePetTypeMutation,
  useListPetTypesQuery
} from "@services/pet-type";

import { useFilters } from "@hooks/useFilters";

import { Actions, Table } from "@components";

export function useListPetTypeController() {
  const navigate = useNavigate();

  const { filters, updateFilters, clearFilters } = useFilters<PetTypesListFilters>({
    page: 1,
    pageSize: 8,
    withDeleted: false,
  });

  const {
    mutate,
    isPending: isDeletePending,
  } = useDeletePetTypeMutation();

  const { data, isLoading, isError } = useListPetTypesQuery(filters!);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-types.list"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const columnDefs = useMemo(() => [
    {
      title: translate('name'),
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Table.ItemCell
          value={record?.name}
        />
      ),
    },
    {
      title: translate('status'),
      dataIndex: 'deletedAt',
      key: 'deletedAt',
      align: 'center',
      render: (deletedAt) => (
        <Tag color={deletedAt ? 'error' : 'success'}>
          {translate(deletedAt ? 'deleted' : 'active')}
        </Tag>
      ),
      width: 120,
    },
    {
      title: translate('created-at'),
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => <Table.DateCell value={createdAt} />,
    },
    {
      dataIndex: 'id',
      render: (id, record) => (
        <Flex justify="center">
          <Actions
            options={{
              onEdit: () => navigate(`/user/${id}/edit`),
              onDelete: () => mutate({ id: id as string }),
              deleted: !!record?.deletedAt,
            }}
          />
        </Flex>
      ),
      width: 80,
    }
  ] as TableProps<Pet>['columns'], [translate, mutate, navigate])

  useEffect(() => {
    if (isError) {
      notification.error({
        message: translate('error-fetching-message'),
        description: translate('error-fetching-description'),
      })
    }
  }, [isError, translate])

  return {
    data: {
      nodes: data?.content,
      totalCount: data?.totalElements,
    },
    filters,
    columnDefs,
    isListLoading: isLoading,
    translate,
    translateRoute,
    isDeletePending,
    updateFilters,
    clearFilters,
    navigate,
  }
}
