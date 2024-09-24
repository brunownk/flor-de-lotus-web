import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";
import { useListPetTypesQuery } from "@services/pet-type";

export function usePetBreedGeneralController() {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'forms.pet-breed'
  });

  const { data } = useListPetTypesQuery({ page: 1, pageSize: 100 });

  return {
    petTypes: data?.content.map((item) => ({
      label: item.name,
      value: item.id,
    })),
    translate,
  }
}
