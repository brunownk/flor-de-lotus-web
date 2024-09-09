import { useEffect } from 'react';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { notification } from 'antd';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { User } from '@entities/User';

import { httpClient } from '@services/httpClient';

interface GetMeResponse {
  user: User;
}

async function getMeService() {
  const { data } = await httpClient.get<GetMeResponse>('/users/me');
  return data.user;
}

export const getMeQueryKey = ['users', 'me'];

export function useGetMeQuery(
  options?: Omit<UseQueryOptions<User, unknown>, 'queryKey' | 'queryFn'>,
) {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'queries.user.get-me',
  });

  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: getMeQueryKey,
    queryFn: async () => getMeService(),
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
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
}
