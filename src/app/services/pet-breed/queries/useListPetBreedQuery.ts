import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { PetBreed } from "@entities/PetBreed";
import { ListResponse } from "@type/list-response";
import { Pagination } from "@type/pagination";

export interface PetBreedsListFilters extends Pagination {
  search?: string;
  withDeleted?: boolean;
}

async function listPetBreedsService(filters: PetBreedsListFilters) {
  const { data } = await httpClient.get<ListResponse<PetBreed>>('/animal-breeds', { params: filters });
  return data;
}

export const listPetBreedsQueryKey = ['pet-breeds', 'list'];

export function useListPetBreedsQuery(
  filters: PetBreedsListFilters,
  options?: Omit<UseQueryOptions<ListResponse<PetBreed>, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: listPetBreedsQueryKey.concat(JSON.stringify(filters)),
    queryFn: async () => listPetBreedsService(filters),
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
