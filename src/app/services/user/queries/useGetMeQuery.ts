import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { User } from "@entities/User";

interface GetMeResponse {
  user: User;
}

async function getMeService() {
  const { data } = await httpClient.get<GetMeResponse>('/users/me');
  return data.user;
}

export function useGetMeQuery(
  options?: Omit<UseQueryOptions<User, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: ['users', 'me'],
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
