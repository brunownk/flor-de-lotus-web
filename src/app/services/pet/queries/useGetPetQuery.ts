import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { Pet } from "@entities/Pet";

interface GetPetResponse {
  pet: Pet;
}

async function getPetService(id: string) {
  const { data } = await httpClient.get<GetPetResponse>(`/pets/${id}`);
  return data.pet;
}

export const getPetQueryKey = ['pet'];

export function useGetPetQuery(
  id: string,
  options?: Omit<UseQueryOptions<Pet, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: getPetQueryKey.concat(id),
    queryFn: async () => getPetService(id),
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
