import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";

import { listUsersQueryKey } from "../queries";

export interface DeleteUserInput {
  id: string,
}

async function deleteUserService(input: DeleteUserInput) {
  await httpClient.delete<void>(`/user/${input.id}`);
}

export function useDeleteUserMutation(
  options?: Omit<UseMutationOptions<void, unknown, DeleteUserInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: DeleteUserInput) => deleteUserService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listUsersQueryKey,
        refetchType: 'all',
      });
    }
  }, [isSuccess, queryClient])

  return {
    mutate,
    isPending,
  }
}
