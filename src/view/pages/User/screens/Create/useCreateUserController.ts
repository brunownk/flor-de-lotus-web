import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next"

import { I18_DEFAULT_NS } from "@config/app-keys"

import { useCreateUserMutation } from "@services/user/management";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createUserValidationSchema,
  CreateUserFormData
} from "@validations/user/create-user";

export function useCreateUserController() {
  const navigate = useNavigate();

  const { mutate, isPending } = useCreateUserMutation();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.users.create"
  })

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "routes"
  })

  const methods = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserValidationSchema),
  });

  const { handleSubmit: hookFormHandleSubmit } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    mutate(data, {
      onSuccess: ({ id }) => {
        navigate(`/user/${id}/edit`);
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
