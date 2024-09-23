import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { Flex, message, notification, TableProps } from "antd";

import { Pet } from "@entities/Pet";

import { I18_DEFAULT_NS } from "@config/app-keys"

import {
  DeletePetInput,
  PetListFilters,
  useDeletePetMutation,
} from "@services/pet";

import { useFilters } from "@hooks/useFilters";

import { Actions, Table } from "@components";
import { useListPetTypesQuery } from "@services/pet-type";

export function useListPetTypeController() {
  const navigate = useNavigate();

  const { filters, updateFilters, clearFilters } = useFilters<PetListFilters>({});

  const {
    mutate,
    isPending: isDeletePending,
  } = useDeletePetMutation();

  const { data, isLoading, isError } = useListPetTypesQuery({});

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-types.list"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const handleDelete = useCallback(async (data: DeletePetInput) => {
    mutate(data, {
      onSuccess: () => {
        message.open({
          type: 'success',
          content: translate('delete-success'),
        });
      },
      onError: () => notification.error({
        message: translate('delete-error-message'),
        description: translate('delete-error-description'),
      })
    });
  }, [mutate, translate])

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
              onDelete: () => handleDelete({ id: id as string }),
              deleted: !!record?.deletedAt,
            }}
          />
        </Flex>
      ),
      width: 80,
    }
  ] as TableProps<Pet>['columns'], [translate, handleDelete, navigate])

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
    handleDelete,
    updateFilters,
    clearFilters,
    navigate,
  }
}
