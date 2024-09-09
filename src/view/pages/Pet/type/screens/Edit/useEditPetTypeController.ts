import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { useUpdatePetMutation } from "@services/pet";
import { useGetPetQuery } from "@services/pet";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  editPetValidationSchema,
  EditPetFormData
} from "@validations/pet/edit-pet";

export function useEditPetTypeController() {
  const { petTypeId } = useParams<{ petTypeId: string }>();
  const navigate = useNavigate();

  const { data, isError, isSuccess, refetch } = useGetPetQuery(petTypeId as string, {
    enabled: !!petTypeId,
  });

  const { mutate, isPending } = useUpdatePetMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-types.edit"
  })

  const { t: translatePetForm } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "forms.pet"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const methods = useForm<EditPetFormData>({
    resolver: zodResolver(editPetValidationSchema),
  });

  const {
    reset,
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const payload = { id: petTypeId as string, ...data }

    mutate(payload, {
      onSuccess: () => {
        message.open({
          type: 'success',
          content: translatePetForm('update-success-message'),
        });

        refetch();
      },
      onError: () => notification.error({
        message: translatePetForm('update-error-message'),
        description: translatePetForm('update-error-description'),
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

      navigate("/pets");
    }
  }, [isError, navigate, translate])

  return {
    methods,
    translate,
    translateRoute,
    isLoading: isPending,
    petName: data?.name,
    handleSubmit,
  }
}
