import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";
import { User } from "@entities/User";

import { ListResponse } from "@type/list-response";
import { Pagination } from '@type/pagination';
import { useTranslation } from "react-i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";
import { useEffect, useState } from 'react';
import { notification } from "antd";



export interface UserListFilters extends Pagination {
  search?: string;
  withDeleted?: boolean;
}

async function listUsersService(filters?: UserListFilters) {
  const { data } = await httpClient.get<ListResponse<User>>('/user/', { params: filters });
  return data;
}

interface useListUsersQueryProps {
  filters?: UserListFilters;
  options?: Omit<
    UseQueryOptions<ListResponse<User>, unknown>,
    'queryKey' | 'queryFn'
  >;
}


export const listUsersQueryKey = ['users', 'list'];

export function useListUsersQuery({
  filters,
  options,
}: useListUsersQueryProps) {
  const [memorizedData, setMemorizedData] = useState<ListResponse<User>>();

  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: listUsersQueryKey.concat(JSON.stringify(filters)),
    queryFn: async () => listUsersService(filters),
    ...options,
  });

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'queries.user.list',
  });

  useEffect(() => {
    if (isSuccess && data) {
      setMemorizedData(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      notification.error({
        message: translate('error-message'),
        description: translate('error-description'),
      });
    }
  }, [isError, translate]);

  return {
    data: memorizedData,
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
}
