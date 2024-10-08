import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { Flex, TableProps, Tag } from "antd";

import { User } from "@entities/User";

import { I18_DEFAULT_NS } from "@config/app-keys"

import {
  UserListFilters,
  useDeleteUserMutation,
  useListUsersQuery,
} from "@services/user/management";
import { useFilters } from "@hooks/useFilters";

import { Actions, Table } from "@components";

export function useListUserController() {
  const navigate = useNavigate();

  const { filters, updateFilters, clearFilters } = useFilters<UserListFilters>({
    page: 1,
    pageSize: 8,
    withDeleted: false,
  });

  const {
    mutate: handleDelete,
    isPending: isDeletePending
  } = useDeleteUserMutation();

  const { data, isLoading } = useListUsersQuery(filters!);


  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.users.list"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const columnDefs = useMemo(() => [
    {
      title: translate('name'),
      key: 'name',
      render: (_, record) => (
        <Table.ItemCell
          value={record.name}
          description={record.email}
          suppressAvatar={false}
        />
      ),
    },
    {
      title: translate('username'),
      dataIndex: 'username',
      key: 'username',
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
              onDelete: () => handleDelete({ id: id as string }),
              deleted: !!record?.deletedAt,
            }}
          />
        </Flex>
      ),
      width: 80,
    }
  ] as TableProps<User>['columns'], [translate, handleDelete, navigate])

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
