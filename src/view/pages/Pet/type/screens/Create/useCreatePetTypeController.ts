import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { zodResolver } from "@hookform/resolvers/zod";

import { useCreatePetTypeMutation } from "@services/pet-type";
import { CreatePetTypeFormData, createPetTypeValidationSchema } from "@validations/pet-type";
import { useAuth } from "@hooks/useAuth";

export function useCreatePetTypeController() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { mutate, isPending } = useCreatePetTypeMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.pet-types.create"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const methods = useForm<CreatePetTypeFormData>({
    resolver: zodResolver(createPetTypeValidationSchema),
  });

  const {
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    mutate({ ...data, createdById: user!.id }, {
      onSuccess: ({ id }) => {
        navigate(`/pet-type/${id}/edit`);
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
