import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReactProps } from "ag-grid-react";
import { useTranslation } from "react-i18next"
import { message, notification } from "antd";

import { User } from "@entities/User";

import { I18_DEFAULT_NS } from "@config/app-keys"
import { ICellRendererParams } from "@ag-grid-community/core";

import {
  DeleteUserInput,
  UserListFilters,
  useDeleteUserMutation,
} from "@services/user";
import { useFilters } from "@hooks/useFilters";

import { Actions, DataGrid } from "@components";
import { mockData } from "./data.mock";

export function useListUserController() {
  const navigate = useNavigate();

  const {
    filters,
    updateFilters,
    clearFilters
  } = useFilters<UserListFilters>();

  const {
    mutate,
    isPending: isDeletePending,
  } = useDeleteUserMutation();

  // const { data, isLoading, isError } = useListUsersQuery(filters);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.users.list"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const handleDelete = useCallback(async (data: DeleteUserInput) => {
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
      headerName: translate('name'),
      flex: 2,
      cellRenderer: ({ data }: ICellRendererParams<User>) => (
        <DataGrid.ItemCell
          avatar={data?.avatar_url}
          value={data?.name}
          description={data?.email}
        />
      ),
    },
    {
      headerName: translate('username'),
      field: 'username',
      flex: 1,
    },
    {
      headerName: translate('created-at'),
      field: 'createdAt',
      flex: 1,
      cellRenderer: ({ data }: ICellRendererParams<User>) => (
        <DataGrid.DateCell value={data?.createdAt} />
      )
    },
    {
      cellRenderer: Actions,
      cellRendererParams: ({ data }: ICellRendererParams<User>) => ({
        options: {
          onEdit: () => navigate(`/user/${data?.id}/edit`),
          onDelete: () => handleDelete({ id: data?.id as string }),
        }
      }),
      width: 80,
      cellStyle: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }
  ] as AgGridReactProps<User>['columnDefs'], [translate, handleDelete, navigate])

  /* useEffect(() => {
    if (isError) {
      notification.error({
        message: translate('error-fetching-message'),
        description: translate('error-fetching-description'),
      })
    }
  }, [isError, translate])*/

  return {
    data: {
      nodes: mockData,
      totalCount: mockData.length,
    },
    filters,
    columnDefs,
    isLoading: false,
    translate,
    translateRoute,
    isDeletePending,
    handleDelete,
    updateFilters,
    clearFilters,
    navigate,
  }
}
