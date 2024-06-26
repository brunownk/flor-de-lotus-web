import { BsDot } from "react-icons/bs";
import { CustomRouteObject } from "@type/custom-route-object";
import { ItemType } from "@type/menu-item";

const formatItem = (route: CustomRouteObject) => {
  let childrenData: ItemType[] = [];

  if (route.children) {
    childrenData = route.children.flatMap((child) => formatItem(child)) as ItemType[];
  }

  const getLabel = (routeId: string) => {
    if (routeId.endsWith('-list')) {
      return 'list';

    } else if (routeId.endsWith('-edit')) {
      return 'edit';

    } else if (routeId.endsWith('-create')) {
      return 'create';

    } else {
      return routeId;
    }
  };

  const item: ItemType = {
    key: route.path ?? (route.id as string),
    label: getLabel(route.id as string),
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

const extractRouteRecursive = (route: CustomRouteObject): CustomRouteObject[] => {
  if (route.id && route.sider) {
    const children = route.children
      ? route.children.flatMap((child) => extractRouteRecursive(child))
      : [];

    return [{ ...route, children }] as any;
  }

  if (route.children) {
    return route.children.flatMap((child) => extractRouteRecursive(child));
  }

  return [];
};

export function mountMenuRouteObject(routes: CustomRouteObject[]): (ItemType | undefined)[] {
  const filteredRoutes = routes.flatMap((route) => extractRouteRecursive(route));
  return filteredRoutes.flatMap((route) => formatItem(route));
}
