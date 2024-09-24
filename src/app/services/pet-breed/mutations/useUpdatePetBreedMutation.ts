import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { PetBreed } from "@entities/PetBreed";

import { httpClient } from "../../httpClient";
import { listPetBreedsQueryKey } from "../queries";
import { getPetQueryKey } from "@services/pet/queries";

interface UpdatePetBreedInput {
  id: string;
  name: string;
}

async function updatePetBreedService(input: UpdatePetBreedInput) {
  const { data } = await httpClient.put<PetBreed>(`/animal-breeds`, input);
  return data;
}

export function useUpdatePetBreedMutation(
  options?: Omit<UseMutationOptions<PetBreed, unknown, UpdatePetBreedInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePetBreedService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: listPetBreedsQueryKey,
        refetchType: 'all',
      });

      queryClient.invalidateQueries({
        queryKey: getPetQueryKey,
        refetchType: 'active',
      });
    },
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
