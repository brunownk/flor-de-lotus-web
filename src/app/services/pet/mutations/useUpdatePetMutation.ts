import { useEffect } from "react";
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { Pet } from "@entities/Pet";

import { httpClient } from "../../httpClient";
import { listPetsQueryKey } from "../queries";

interface UpdatePetInput {
  id: string;
  name: string;
  petname: string;
}

interface UpdatePetResponse {
  pet: Pet;
}

async function updatePetService({ id, ...input}: UpdatePetInput) {
  const { data } = await httpClient.put<UpdatePetResponse>(`/pets/${id}`, input);
  return data;
}

export function useUpdatePetMutation(
  options?: Omit<UseMutationOptions<UpdatePetResponse, unknown, UpdatePetInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (input: UpdatePetInput) => updatePetService(input),
    ...options,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: listPetsQueryKey,
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
