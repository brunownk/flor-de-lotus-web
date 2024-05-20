import { message, notification } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@hooks/useAuth";

import { EditUserFormData, editUserValidationSchema } from "@validations/user";
import { useUpdateMeMutation } from "@services/user";

export function useGeneralTabController() {
  const { user, refetch } = useAuth();
  const { mutate, isPending } = useUpdateMeMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'forms.user'
  });

  const methods = useForm<EditUserFormData>({
    resolver: zodResolver(editUserValidationSchema),
    defaultValues: user,
  });

  const {
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    mutate(data, {
      onSuccess: () => {
        refetch();
        message.open({
          type: 'success',
          content: translate('update-success-message'),
        });
      },
      onError: () => notification.error({
        message: translate('update-error-message'),
        description: translate('update-error-description'),
      })
    });
  })

  return {
    methods,
    isLoading: isPending,
    handleSubmit,
  }
}
