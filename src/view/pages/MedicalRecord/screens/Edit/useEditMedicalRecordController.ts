import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { useGetUserQuery, useUpdateUserMutation } from "@services/user/management";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  editUserValidationSchema,
  EditUserFormData
} from "@validations/user/edit-user";

export function useEditMedicalRecordController() {
  const { medicalRecordId } = useParams<{ medicalRecordId: string }>();
  const navigate = useNavigate();

  const { data, isError, isSuccess, refetch } = useGetUserQuery(medicalRecordId as string, {
    enabled: !!medicalRecordId,
  });

  const { mutate, isPending } = useUpdateUserMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.medical-records.edit"
  })

  const { t: translateUserForm } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "forms.medical-records"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const methods = useForm<EditUserFormData>({
    resolver: zodResolver(editUserValidationSchema),
  });

  const {
    reset,
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const payload = { id: medicalRecordId as string, ...data }

    mutate(payload, {
      onSuccess: () => {
        message.open({
          type: 'success',
          content: translateUserForm('update-success-message'),
        });

        refetch();
      },
      onError: () => notification.error({
        message: translateUserForm('update-error-message'),
        description: translateUserForm('update-error-description'),
      })
    });
  })

  useEffect(() => {
    if (isSuccess) {
      reset(data)
    }
  }, [isSuccess, data, reset])

  useEffect(() => {
    if (isError) {
      notification.error({
        message: translate("get-error-message"),
        description: translate("get-error-description"),
      });

      navigate("/users");
    }
  }, [isError, navigate, translate])

  return {
    methods,
    translate,
    translateRoute,
    isLoading: isPending,
    userName: data?.name,
    handleSubmit,
  }
}
