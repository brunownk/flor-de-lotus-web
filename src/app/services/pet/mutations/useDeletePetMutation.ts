import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { httpClient } from "../../httpClient";
import { listPetsQueryKey } from "../queries";

export interface DeletePetInput {
  id: string,
}

async function deletePetService(input: DeletePetInput) {
  await httpClient.delete<void>(`/pets/${input.id}`);
}

export function useDeletePetMutation(
  options?: Omit<UseMutationOptions<void, unknown, DeletePetInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: DeletePetInput) => deletePetService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listPetsQueryKey,
        refetchType: 'all',
      });
    }
  }, [isSuccess, queryClient])

  return {
    mutate,
    isPending,
  }
}
