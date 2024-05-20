import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { User } from "@entities/User";
import { httpClient } from "../../httpClient";

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
  const { mutate, isPending } = useMutation({
    mutationFn: async (input: UpdateUserInput) => updateUserService(input),
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
