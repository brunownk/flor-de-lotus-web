import { BsDot } from "react-icons/bs";

import { CustomRouteObject } from "@type/custom-route-object";
import { ItemType } from "@type/menu-item";

const formatItem = (route: CustomRouteObject) => {
  let childrenData: ItemType[] = [];

  if (route.children) {
    childrenData = route.children.flatMap((child) => formatItem(child)) as ItemType[];
  }

  const item: ItemType = {
    key: route.path ?? route.id as string,
    label: route.id as string,
    icon: route.icon ?? <BsDot />,
    disabled: !!route.disabled,
  };

  if (route.group) {
    Object.assign(item, { group: route.group });
  }

  if (route.parentId) {
    Object.assign(item, { parentId: route.parentId });
  }

  if (route.position) {
    Object.assign(item, { position: route.position });
  }

  if (childrenData?.length) {
    Object.assign(item, { children: childrenData.flat() });
  }

  return [item];
};

const extractRouteRecursive = (route: CustomRouteObject): CustomRouteObject | undefined => {
  if (route.id && route.sider) {
    return route;
  }

  if (route.children) {
    for (const child of route.children) {
      return extractRouteRecursive(child);
    }
  }

  return undefined;
};

export function mountMenuRouteObject(routes: CustomRouteObject[]): ItemType[] {
  const filteredRoutes = routes.reduce((acc, route) => {
    const extractedRoute = extractRouteRecursive(route);

    if (extractedRoute) {
      acc.push(extractedRoute);
    }

    return acc;
  }, [] as CustomRouteObject[]);

  return filteredRoutes.flatMap((route) => formatItem(route));
}
