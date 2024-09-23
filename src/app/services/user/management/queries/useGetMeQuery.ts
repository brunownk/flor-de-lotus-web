import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { User } from "@entities/User";


async function getMeService() {
  const { data } = await httpClient.get<User>('/user/me');
  return data;
}

export const getMeQueryKey = ['users', 'me'];

export function useGetMeQuery(
  options?: Omit<UseQueryOptions<User, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: getMeQueryKey,
    queryFn: async () => getMeService(),
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
