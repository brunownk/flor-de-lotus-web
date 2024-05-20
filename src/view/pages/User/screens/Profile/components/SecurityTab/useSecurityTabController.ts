import { message, notification } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  UpdateMePasswordFormData,
  updateMePasswordValidationSchema,
} from "@validations/user/update-me-password";

import { useUpdateMePasswordMutation } from "@services/user";

export function useSecurityTabController() {
  const { mutate, isPending } = useUpdateMePasswordMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'forms.user'
  });

  const methods = useForm<UpdateMePasswordFormData>({
    resolver: zodResolver(updateMePasswordValidationSchema)
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
          content: translate('update-password-success-message'),
        });
      },
      onError: () => notification.error({
        message: translate('update-password-error-message'),
        description: translate('update-password-error-description'),
      })
    });
  })

  return {
    methods,
    translate,
    isLoading: isPending,
    handleSubmit,
  }
}
