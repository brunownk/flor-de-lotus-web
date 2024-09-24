import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { PetBreed } from "@entities/PetBreed";

import { httpClient } from "../../httpClient";
import { listPetBreedsQueryKey } from "../queries";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";

interface CreatePetBreedInput {
  name: string;
  animalTypeId: number;
  createdById: string;
}

async function createPetBreedService(input: CreatePetBreedInput) {
  const { data } = await httpClient.post<PetBreed>('/animal-breeds', input);
  return data;
}

export function useCreatePetBreedMutation(
  options?: Omit<UseMutationOptions<PetBreed, unknown, CreatePetBreedInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-breeds.create"
  })

  const { mutate, isPending } = useMutation({
    mutationFn: createPetBreedService,
    onSuccess: () => {
      message.open({
        type: 'success',
        content: translate('create-success-message'),
      });

      queryClient.invalidateQueries({
        queryKey: listPetBreedsQueryKey,
        refetchType: 'all',
      });
    },
    onError: () => {
      notification.error({
        message: translate('create-error-message'),
        description: translate('create-error-description'),
      });
    },
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
