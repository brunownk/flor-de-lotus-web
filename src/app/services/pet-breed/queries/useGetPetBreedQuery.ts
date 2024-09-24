import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { PetBreed } from "@entities/PetBreed";

async function getPetBreedService(id: string) {
  const { data } = await httpClient.get<PetBreed>(`/animal-breeds/${id}`);
  return data;
}

export const getPetBreedsQueryKey = ['pey-breeds'];

export function useGetPetBreedQuery(
  id: string,
  options?: Omit<UseQueryOptions<PetBreed, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: getPetBreedsQueryKey.concat(id),
    queryFn: async () => getPetBreedService(id),
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
