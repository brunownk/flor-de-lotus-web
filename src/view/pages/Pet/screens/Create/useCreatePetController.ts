import { useForm } from "react-hook-form";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { useCreatePetMutation } from "@services/pet";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createPetValidationSchema,
  CreatePetFormData
} from "@validations/pet/create-pet";

export function useCreatePetController() {
  const { mutate, isPending } = useCreatePetMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pets.create"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const methods = useForm<CreatePetFormData>({
    resolver: zodResolver(createPetValidationSchema),
  });

  const {
    reset,
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        message.open({
          type: 'success',
          content: translate('create-success-message'),
        });
      },
      onError: () => notification.error({
        message: translate('create-error-message'),
        description: translate('create-error-description'),
      })
    });
  })

  return {
    methods,
    translate,
    translateRoute,
    isLoading: isPending,
    handleSubmit,
  }
}
