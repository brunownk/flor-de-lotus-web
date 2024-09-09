import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";

export function usePetTypeGeneralController() {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'forms.pet-type'
  });

  return {
    translate,
  }
}
