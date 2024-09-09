import { useEffect } from 'react';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { notification } from 'antd';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { User } from '@entities/User';

import { httpClient } from '@services/httpClient';

interface GetUserResponse {
  user: User;
}

async function getUserService(id: string) {
  const { data } = await httpClient.get<GetUserResponse>(`/user/${id}`);
  return data.user;
}

export const getUserQueryKey = ['user'];

export function useGetUserQuery(
  id: string,
  options?: Omit<UseQueryOptions<User, unknown>, 'queryKey' | 'queryFn'>,
) {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'queries.user.get',
  });

  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: getUserQueryKey.concat(id),
    queryFn: async () =>  await getUserService(id),
    ...options,
  });

  useEffect(() => {
    if (isError) {
      notification.error({
        message: translate('error-message'),
        description: translate('error-description'),
      });
    }
  }, [isError, translate]);

  return {
    data,
    isSuccess,
    isLoading,
    isError,
    refetch,
  };
}
