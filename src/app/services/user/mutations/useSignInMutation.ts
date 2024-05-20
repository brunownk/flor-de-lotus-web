import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { httpClient } from "../../httpClient";
import { User } from "@entities/User";

interface SignInInput {
  username: string,
  password: string,
}

interface SignInResponse {
  accessToken: string;
  user: User;
}

async function signinService(input: SignInInput) {
  const { data } = await httpClient.post<SignInResponse>('/users/signIn', input);
  return data;
}

export function useSignInMutation(
  options?: Omit<UseMutationOptions<SignInResponse, unknown, SignInInput>, 'mutationFn'>
) {
  const { mutate, isPending } = useMutation({
    mutationFn: async (input: SignInInput) => signinService(input),
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
