import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";

export function usePetGeneralController() {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'forms.pet'
  });

  return {
    translate,
  }
}
