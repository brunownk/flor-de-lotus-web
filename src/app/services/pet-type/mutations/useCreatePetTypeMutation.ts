import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { PetType } from "@entities/PetType";

import { httpClient } from "../../httpClient";
import { listPetTypesQueryKey } from "../queries";

interface CreatePetTypeInput {
  name: string;
  createdById: string;
}

async function createPetTypeService(input: CreatePetTypeInput) {
  const { data } = await httpClient.post<PetType>('/animal-types', input);
  return data;
}

export function useCreatePetTypeMutation(
  options?: Omit<UseMutationOptions<PetType, unknown, CreatePetTypeInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: CreatePetTypeInput) => createPetTypeService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listPetTypesQueryKey,
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
