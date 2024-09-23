import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { PetType } from "@entities/PetType";

async function getPetTypeService(id: string) {
  const { data } = await httpClient.get<PetType>(`/animal-types/${id}`);
  return data;
}

export const getPetTypesQueryKey = ['pey-types'];

export function useGetPetTypeQuery(
  id: string,
  options?: Omit<UseQueryOptions<PetType, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: getPetTypesQueryKey.concat(id),
    queryFn: async () => getPetTypeService(id),
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
