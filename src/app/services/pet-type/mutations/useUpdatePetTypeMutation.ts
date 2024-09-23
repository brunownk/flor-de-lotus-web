import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { PetType } from "@entities/PetType";

import { httpClient } from "../../httpClient";
import { listPetTypesQueryKey } from "../queries";

interface UpdatePetTypeInput {
  id: string;
  name: string;
}

async function updatePetTypeService(input: UpdatePetTypeInput) {
  const { data } = await httpClient.put<PetType>(`/animal-types`, input);
  return data;
}

export function useUpdatePetTypeMutation(
  options?: Omit<UseMutationOptions<PetType, unknown, UpdatePetTypeInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: UpdatePetTypeInput) => updatePetTypeService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listPetTypesQueryKey,
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
