import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { Flex, TableProps } from "antd";

import { Pet } from "@entities/Pet";

import { I18_DEFAULT_NS } from "@config/app-keys"

import {
  PetBreedsListFilters,
  useDeletePetBreedMutation,
  useListPetBreedsQuery
} from "@services/pet-breed";

import { useFilters } from "@hooks/useFilters";

import { Actions, Table } from "@components";

export function useListPetBreedController() {
  const navigate = useNavigate();

  const { filters, updateFilters, clearFilters } = useFilters<PetBreedsListFilters>({
    page: 1,
    pageSize: 8,
    withDeleted: false,
  });

  const {
    mutate,
    isPending: isDeletePending,
  } = useDeletePetBreedMutation();

  const { data, isLoading } = useListPetBreedsQuery(filters!);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-breeds.list"
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
          avatar={record?.avatar_url}
          value={record?.name}
          description={record?.type}
        />
      ),
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
