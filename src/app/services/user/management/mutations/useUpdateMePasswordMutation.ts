import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { httpClient } from "@services/httpClient";

interface UpdateMePasswordInput {
  oldPassword: string,
  password: string,
  passwordConfirmation: string,
}

async function updateMePasswordService(input: UpdateMePasswordInput) {
  const { data } = await httpClient.patch<void>('/users/me/update-password', input);
  return data;
}

export function useUpdateMePasswordMutation(
  options?: Omit<UseMutationOptions<void, unknown, UpdateMePasswordInput>, 'mutationFn'>
) {
  const { mutate, isPending } = useMutation({
    mutationFn: async (input: UpdateMePasswordInput) => updateMePasswordService(input),
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
