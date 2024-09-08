import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { Pet } from "@entities/Pet";
import { ListResponse } from "@type/list-response";
import { Pagination } from "@type/pagination";

export interface PetListFilters extends Pagination {
  search?: string;
  withDeleted?: boolean;
}

async function listPetsService(filters: PetListFilters) {
  const { data } = await httpClient.get<ListResponse<Pet>>('/pets/', { params: filters });
  return data;
}

export const listPetsQueryKey = ['pets', 'list'];

export function useListPetsQuery(
  filters: PetListFilters,
  options?: Omit<UseQueryOptions<ListResponse<Pet>, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: listPetsQueryKey.concat(JSON.stringify(filters)),
    queryFn: async () => listPetsService(filters),
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
