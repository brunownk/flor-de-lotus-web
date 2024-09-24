import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { message, notification } from "antd";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { zodResolver } from "@hookform/resolvers/zod";

import {
  editPetValidationSchema,
  EditPetFormData
} from "@validations/pet/edit-pet";
import { useGetPetBreedQuery, useUpdatePetBreedMutation } from "@services/pet-breed";

export function useEditPetBreedController() {
  const { petBreedId } = useParams<{ petBreedId: string }>();
  const navigate = useNavigate();

  const { data, isError, isSuccess, refetch } = useGetPetBreedQuery(petBreedId as string, {
    enabled: !!petBreedId,
  });

  const { mutate, isPending } = useUpdatePetBreedMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pets.edit"
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
    const payload = { id: petBreedId as string, ...data }

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
