import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { User } from "@entities/User";

import { httpClient } from "@services/httpClient";

interface UpdateMeInput {
  name: string,
  username: string,
}

interface UpdateMeResponse {
  user: User;
}

async function updateMeService(input: UpdateMeInput) {
  const { data } = await httpClient.put<UpdateMeResponse>('/user/me', input);
  return data;
}

export function useUpdateMeMutation(
  options?: Omit<UseMutationOptions<UpdateMeResponse, unknown, UpdateMeInput>, 'mutationFn'>
) {
  const { mutate, isPending } = useMutation({
    mutationFn: async (input: UpdateMeInput) => updateMeService(input),
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
