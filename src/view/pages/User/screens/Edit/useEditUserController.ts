import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { useUpdateUserMutation } from "@services/user/mutations";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  editUserValidationSchema,
  EditUserFormData
} from "@validations/user/edit-user";

export function useEditUserController() {
  const { mutate, isPending } = useUpdateUserMutation();

  const { id } = useParams();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.users.edit"
  })

  const { t: translateUserForm } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "forms.user"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const methods = useForm<EditUserFormData>({
    resolver: zodResolver(editUserValidationSchema),
  });

  const {
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const payload = { id: id as string, ...data }

    mutate(payload, {
      onSuccess: () => {
        message.open({
          type: 'success',
          content: translateUserForm('update-success-message'),
        });
      },
      onError: () => notification.error({
        message: translateUserForm('update-error-message'),
        description: translateUserForm('update-error-description'),
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
