
import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { httpClient } from "../../httpClient";
import { getPetTypesQueryKey, listPetTypesQueryKey } from "../queries";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";

export interface DeletePetTypeInput {
  id: string,
}

async function deletePetTypeService(input: DeletePetTypeInput) {
  await httpClient.delete<void>(`/animal-types/${input.id}`);
}

export function useDeletePetTypeMutation(
  options?: Omit<UseMutationOptions<void, unknown, DeletePetTypeInput>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-types.list"
  })

  const { mutate, isPending } = useMutation({
    mutationFn: deletePetTypeService,
    onSuccess: () => {
      message.open({
        type: 'success',
        content: translate('delete-success'),
      });

      queryClient.invalidateQueries({
        queryKey: listPetTypesQueryKey,
        refetchType: 'all',
      });

      queryClient.invalidateQueries({
        queryKey: getPetTypesQueryKey,
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
