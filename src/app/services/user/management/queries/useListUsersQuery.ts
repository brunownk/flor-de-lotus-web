import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { User } from "@entities/User";

import { ListResponse } from "@type/list-response";
import { Pagination } from '@type/pagination';

export interface UserListFilters extends Pagination {
  search?: string;
  withDeleted?: boolean;
}

async function listUsersService(filters: UserListFilters) {
  const { data } = await httpClient.get<ListResponse<User>>('/users/', { params: filters });
  return data;
}

export const listUsersQueryKey = ['users', 'list'];

export function useListUsersQuery(
  filters: UserListFilters,
  options?: Omit<UseQueryOptions<ListResponse<User>, unknown>, 'queryKey' | 'queryFn'>
) {
  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: listUsersQueryKey.concat(JSON.stringify(filters)),
    queryFn: async () => listUsersService(filters),
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
