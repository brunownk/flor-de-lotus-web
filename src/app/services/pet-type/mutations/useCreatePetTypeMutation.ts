import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";

import { PetType } from "@entities/PetType";

import { httpClient } from "../../httpClient";
import { listPetTypesQueryKey } from "../queries";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";

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

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-types.create"
  })

  const { mutate, isPending } = useMutation({
    mutationFn: createPetTypeService,
    onSuccess: () => {
      message.open({
        type: 'success',
        content: translate('create-success-message'),
      });

      queryClient.invalidateQueries({
        queryKey: listPetTypesQueryKey,
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
