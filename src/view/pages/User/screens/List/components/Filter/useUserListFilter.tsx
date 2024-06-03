import { isEqual } from "lodash";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";

import { FilterProps } from "./Filter";

export function useUserListFilter({
  initialFilters,
  updateFilters,
  clearFilters
}: FilterProps) {
  const { t: translateFilter } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "pages.users.list"
  });

  const { t: translateButton } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: "components.button"
  });

  const defaultValues = {
    withDeleted: true,
    search: '',
  }

  const methods = useForm({ defaultValues: initialFilters || defaultValues });

  const {
    reset,
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    if (isEqual(data, defaultValues)) {
      return clearFilters();
    }

    updateFilters(data)
  })

  const handleReset = () => {
    reset(defaultValues);
    clearFilters()
  }

  return {
    methods,
    translateFilter,
    translateButton,
    handleSubmit,
    handleReset,
  }
}
