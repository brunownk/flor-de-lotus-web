import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { Pet } from "@entities/Pet";

import { httpClient } from "../../httpClient";
import { listPetsQueryKey } from "../queries";

interface CreatePetInput {
  name: string;
  email: string;
  petname: string;
  password: string;
}

interface CreateMeResponse {
  pet: Pet;
}

async function createPetService(input: CreatePetInput) {
  const { data } = await httpClient.post<CreateMeResponse>('/pets/', input);
  return data;
}

export function useCreatePetMutation(
  options?: Omit<UseMutationOptions<CreateMeResponse, unknown, CreatePetInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: CreatePetInput) => createPetService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listPetsQueryKey,
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
