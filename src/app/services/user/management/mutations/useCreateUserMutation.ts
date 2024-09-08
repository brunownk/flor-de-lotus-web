import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { User } from "@entities/User";

import { httpClient } from "@services/httpClient";

import { listUsersQueryKey } from "../queries";

interface CreateUserInput {
  name: string;
  email: string;
  username: string;
  password: string;
}

interface CreateMeResponse {
  user: User;
}

async function createUserService(input: CreateUserInput) {
  const { data } = await httpClient.post<CreateMeResponse>('/users/', input);
  return data;
}

export function useCreateUserMutation(
  options?: Omit<UseMutationOptions<CreateMeResponse, unknown, CreateUserInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: CreateUserInput) => createUserService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listUsersQueryKey,
        refetchType: 'all',
        exact: true,
      });
    }
  }, [isSuccess, queryClient])

  return {
    mutate,
    isPending,
  }
}
