import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { User } from "@entities/User";

import { httpClient } from "../../httpClient";
import { listUsersQueryKey } from "../queries";

interface UpdateUserInput {
  id: string;
  name: string;
  username: string;
}

interface UpdateUserResponse {
  user: User;
}

async function updateUserService({ id, ...input}: UpdateUserInput) {
  const { data } = await httpClient.put<UpdateUserResponse>(`/users/${id}`, input);
  return data;
}

export function useUpdateUserMutation(
  options?: Omit<UseMutationOptions<UpdateUserResponse, unknown, UpdateUserInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: UpdateUserInput) => updateUserService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listUsersQueryKey,
        refetchType: 'active',
        exact: true,
      });
    }
  }, [isSuccess, queryClient])

  return {
    mutate,
    isPending,
  }
}
