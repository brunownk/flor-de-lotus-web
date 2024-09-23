import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { User } from "@entities/User";


async function getUserService(id: string) {
  const { data } = await httpClient.get<User>(`/user/${id}`);
  return data;
}

export const getUserQueryKey = ['user'];

export function useGetUserQuery(
  id: string,
  options?: Omit<UseQueryOptions<User, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: getUserQueryKey.concat(id),
    queryFn: async () => getUserService(id),
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
