import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { zodResolver } from "@hookform/resolvers/zod";

import {
  createPetBreedValidationSchema,
  CreatePetBreedFormData
} from "@validations/pet-breed/create-pet-breed";
import { useCreatePetBreedMutation } from "@services/pet-breed";
import { useAuth } from "@hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function useCreatePetBreedController() {
  const { user } = useAuth();

  const navigate = useNavigate();

  const { mutate, isPending } = useCreatePetBreedMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-breeds.create"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const methods = useForm<CreatePetBreedFormData>({
    resolver: zodResolver(createPetBreedValidationSchema),
  });

  const {
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    mutate({
      createdById: user?.id as string,
      ...data,
    }, {
      onSuccess: ({ id }) => {
        navigate(`/pet-breed/${id}/edit`)
      },
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
