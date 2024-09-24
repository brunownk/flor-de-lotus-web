import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";

import { User } from "@entities/User";

import { getUserQueryKey, listUsersQueryKey } from "../queries";

interface UpdateUserInput {
  id: string;
  name: string;
  username: string;
}

interface UpdateUserResponse {
  user: User;
}

async function updateUserService(input: UpdateUserInput) {
  const { data } = await httpClient.put<UpdateUserResponse>(`/user`, input);
  return data;
}

export function useUpdateUserMutation(
  options?: Omit<UseMutationOptions<UpdateUserResponse, unknown, UpdateUserInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateUserService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: listUsersQueryKey,
        refetchType: 'all',
      });

      queryClient.invalidateQueries({
        queryKey: getUserQueryKey,
        refetchType: 'active',
      });
    },
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
