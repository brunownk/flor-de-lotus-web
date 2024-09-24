
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { httpClient } from "../../httpClient";
import { getPetBreedsQueryKey, listPetBreedsQueryKey } from "../queries";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";

export interface DeletePetBreedInput {
  id: string,
}

async function deletePetBreedService(input: DeletePetBreedInput) {
  await httpClient.delete<void>(`/animal-breeds/${input.id}`);
}

export function useDeletePetBreedMutation(
  options?: Omit<UseMutationOptions<void, unknown, DeletePetBreedInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-breeds.list"
  })

  const { mutate, isPending } = useMutation({
    mutationFn: deletePetBreedService,
    onSuccess: () => {
      message.open({
        type: 'success',
        content: translate('delete-success'),
      });

      queryClient.invalidateQueries({
        queryKey: listPetBreedsQueryKey,
        refetchType: 'all',
      });

      queryClient.invalidateQueries({
        queryKey: getPetBreedsQueryKey,
        refetchType: 'all',
      });
    },
    onError: () => {
      notification.error({
        message: translate('delete-error-message'),
        description: translate('delete-error-description'),
      })
    },
    ...options,
  });

  return {
    mutate,
    isPending,
  }
}
