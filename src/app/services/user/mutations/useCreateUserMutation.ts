import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { httpClient } from "../../httpClient";
import { User } from "@entities/User";

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
  const { data } = await httpClient.post<CreateMeResponse>('/users', input);
  return data;
}

export function useCreateUserMutation(
  options?: Omit<UseMutationOptions<CreateMeResponse, unknown, CreateUserInput>, 'mutationFn'>
) {
  const { mutate, isPending } = useMutation({
    mutationFn: async (input: CreateUserInput) => createUserService(input),
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
