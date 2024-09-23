import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { PetType } from "@entities/PetType";
import { ListResponse } from "@type/list-response";
import { Pagination } from "@type/pagination";

export interface PetTypesListFilters extends Pagination {
  search?: string;
  withDeleted?: boolean;
}

async function listPetTypesService(filters: PetTypesListFilters) {
  const { data } = await httpClient.get<ListResponse<PetType>>('/animal-types', { params: filters });
  return data;
}

export const listPetTypesQueryKey = ['pet-types', 'list'];

export function useListPetTypesQuery(
  filters: PetTypesListFilters,
  options?: Omit<UseQueryOptions<ListResponse<PetType>, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: listPetTypesQueryKey.concat(JSON.stringify(filters)),
    queryFn: async () => listPetTypesService(filters),
    ...options,
  });

  return {
    data,
    isSuccess,
    isLoading,
    isError,
    refetch,
  }
}
