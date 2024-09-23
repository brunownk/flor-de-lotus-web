import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { httpClient } from "../../httpClient";
import { getPetTypesQueryKey } from "../queries";

export interface DeletePetInput {
  id: string,
}

async function deletePetTypeService(input: DeletePetInput) {
  await httpClient.delete<void>(`/animal-types/${input.id}`);
}

export function useDeletePetTypeMutation(
  options?: Omit<UseMutationOptions<void, unknown, DeletePetInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: DeletePetInput) => deletePetTypeService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: getPetTypesQueryKey,
        refetchType: 'all',
      });
    }
  }, [isSuccess, queryClient])

  return {
    mutate,
    isPending,
  }
}
