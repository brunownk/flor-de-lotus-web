import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";

export function useProfileController() {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'pages.account'
  });

  const { t: translateRoute } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'routes'
  });

  return {
    translate,
    translateRoute,
  }
}
