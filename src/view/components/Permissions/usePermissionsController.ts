import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { TabsProps } from "antd";

import { I18_DEFAULT_NS } from "@config/app-keys";

import { Permissions } from "@entities/Permissions";
import { useFormContext } from "react-hook-form";

interface PermissionsControllerProps {
  permissions?: Permissions;
}

export function usePermissionsController({ permissions = {} }: PermissionsControllerProps) {
  const [selectedModule, setSelectedModule] = useState<string>('');

  const { setValue } = useFormContext();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'permissions',
  })

  const { t: translateForm } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'forms.role',
  });

  const tabItems: TabsProps['items'] = useMemo(
    () => {
      return Object.keys(permissions)?.map((module) => ({
        key: module,
        label: translate(`${module}.title` as any),
      })) as any;
    },
    [translate, permissions],
  );

  const submodules = useMemo(() => {
    if (!permissions || !selectedModule) return [];

    return Object.keys(permissions[selectedModule ?? Object.keys(permissions)[0]]);
  }, [permissions, selectedModule]);

  function toggleAllSubmodulePermissions(submodule: string, value: boolean) {
    const allPermissions = Object.values(permissions[selectedModule][submodule]);

    allPermissions.forEach((permission) => (
      setValue(`permissions.${permission.id}`, value)
    ));
  }

  useEffect(() => {
    if (permissions && !selectedModule) {
      setSelectedModule(Object.keys(permissions)[0]);
    };
  }, [permissions])

  return {
    tabItems,
    translate,
    translateForm,
    selectedModule,
    submodules,
    setSelectedModule,
    toggleAllSubmodulePermissions,
  }
}
