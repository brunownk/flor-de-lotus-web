import { useMemo } from "react";
import { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { I18_DEFAULT_NS } from "@config/app-keys";
import { useAuth } from "@hooks/useAuth";

export function useOptionsController() {
  const { user, signout } = useAuth();

  const { t: translate } = useTranslation(I18_DEFAULT_NS,{
    keyPrefix: 'layouts.private.header.section'
  });

  const items: MenuProps['items'] = useMemo(() => [
    {
      key: '1',
      label: (
        <Link to="/account">
          {translate('settings')}
        </Link>
      ),
    }
  ], [translate])

  return {
    translate,
    user,
    items,
    signout
  }
}
