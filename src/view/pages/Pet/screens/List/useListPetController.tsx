import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReactProps } from "ag-grid-react";
import { useTranslation } from "react-i18next"
import { message, notification } from "antd";

import { Pet } from "@entities/Pet";

import { I18_DEFAULT_NS } from "@config/app-keys"
import { ICellRendererParams } from "@ag-grid-community/core";

import {
  DeletePetInput,
  PetListFilters,
  useDeletePetMutation,
} from "@services/pet";
import { useFilters } from "@hooks/useFilters";

import { Actions, DataGrid } from "@components";
import { mockPetData } from "./data.mock";

export function useListPetController() {
  const navigate = useNavigate();

  const {
    filters,
    updateFilters,
    clearFilters
  } = useFilters<PetListFilters>();

  const {
    mutate,
    isPending: isDeletePending,
  } = useDeletePetMutation();

  // const { data, isLoading, isError } = useListPetsQuery(filters);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pets.list"
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
      headerName: translate('name'),
      flex: 2,
      cellRenderer: ({ data }: ICellRendererParams<Pet>) => (
        <DataGrid.ItemCell
          avatar={data?.avatar_url}
          value={data?.name}
          description={data?.type}
        />
      ),
    },
    {
      headerName: translate('breed'),
      field: 'breed',
      flex: 1,
    },
    {
      headerName: translate('owner'),
      field: 'owner',
      cellRenderer: ({ data }: ICellRendererParams<Pet>) => (
        <DataGrid.ItemCell
          suppressAvatar
          value={data?.owner}
          description={data?.ownerEmail}
        />
      ),
      flex: 2,
    },
    {
      headerName: translate('created-at'),
      field: 'createdAt',
      flex: 1,
      cellRenderer: ({ data }: ICellRendererParams<Pet>) => (
        <DataGrid.DateCell value={data?.createdAt} />
      )
    },
    {
      cellRenderer: Actions,
      cellRendererParams: ({ data }: ICellRendererParams<Pet>) => ({
        options: {
          onEdit: () => navigate(`/pet/${data?.id}/edit`),
          onDelete: () => handleDelete({ id: data?.id as string }),
        }
      }),
      width: 80,
      cellStyle: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }
  ] as AgGridReactProps<Pet>['columnDefs'], [translate, handleDelete, navigate])

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
      nodes: mockPetData,
      totalCount: mockPetData.length,
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
