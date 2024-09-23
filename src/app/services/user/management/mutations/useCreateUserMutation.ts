import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { User } from "@entities/User";

import { httpClient } from "@services/httpClient";

import { listUsersQueryKey } from "../queries";
import { message, notification } from "antd";
import { I18_DEFAULT_NS } from "@config/app-keys";
import { useTranslation } from "react-i18next";

interface CreateUserInput {
  name: string;
  email: string;
  username: string;
  password: string;
}

async function createUserService(input: CreateUserInput) {
  const { data } = await httpClient.post<User>('/user', input);
  return data;
}

export function useCreateUserMutation(
  options?: Omit<UseMutationOptions<User, unknown, CreateUserInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.users.create"
  })

  const { mutate, isPending } = useMutation({
    mutationFn: createUserService,
    onSuccess: () => {
      message.open({
        type: 'success',
        content: translate('create-success-message'),
      });

      queryClient.invalidateQueries({
        queryKey: listUsersQueryKey,
        refetchType: 'all',
        exact: true,
      });
    },
    onError: () => {
      notification.error({
        message: translate('create-error-message'),
        description: translate('create-error-description'),
      })
    },
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
