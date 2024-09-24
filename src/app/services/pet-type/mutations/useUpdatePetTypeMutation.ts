import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { PetType } from "@entities/PetType";

import { httpClient } from "../../httpClient";
import { listPetTypesQueryKey } from "../queries";
import { getPetQueryKey } from "@services/pet/queries";

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

  const { mutate, isPending } = useMutation({
    mutationFn: updatePetTypeService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: listPetTypesQueryKey,
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
