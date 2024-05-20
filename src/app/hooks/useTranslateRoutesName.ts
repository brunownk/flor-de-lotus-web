import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { I18_DEFAULT_NS } from "@config/app-keys";

export function useTranslateRoutesName(key: string, routes: any[]) {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, { keyPrefix: 'routes' });

  const recursivelyUpdateRoutesName = useCallback((array: any) => {
    const newArray = array.map((item: any) => {
      const newItem: any = { ...item };

      if (newItem?.[key]) {
        newItem[key] = translate(newItem[key]);
      }

      if (newItem.children && Array.isArray(newItem.children)) {
        newItem.children = recursivelyUpdateRoutesName(newItem.children);
      }

      return newItem;
    });

    return newArray;
  }, [key, translate]);

  const translatedRoutes = useMemo(() => {
    return recursivelyUpdateRoutesName(routes);
  }, [routes, recursivelyUpdateRoutesName]);

  return {
    translatedRoutes,
    recursivelyUpdateRoutesName,
  }
}
