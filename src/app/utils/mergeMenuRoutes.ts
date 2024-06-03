import { CustomRouteObject } from "@type/custom-route-object";
import { ItemType } from "@type/menu-item";

function findItemById(id: string, items: CustomRouteObject[]): CustomRouteObject | undefined {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }

    if (item.children) {
      const found = findItemById(id, item.children);
      if (found) return found;
    }
  }

  return undefined;
}

function insertRouteBasedOnParentId(routes: ItemType[]) {
  const newRoutes: ItemType[] = [];

  routes.forEach(route => {
    if (route.parentId === undefined) {
      return newRoutes.push(route);
    }

    const parent = findItemById(route.parentId, routes);

    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(route);
    }
  });

  return newRoutes;
}

function arrangeBasedOnPosition(routes: ItemType[]) {
  // Move items into the array at the specified position
  routes.forEach(route => {
    if (route?.position !== undefined) {
      const existingIndex = routes.findIndex(r => r === route);

      if (existingIndex !== -1) {
        routes.splice(existingIndex, 1); // Remove existing entry
      }

      routes.splice(route.position, 0, route); // Insert at new position
    }

    if (route.children?.length) {
      route.children = arrangeBasedOnPosition(route.children);
    }
  });

  return routes;
}

function groupRoutes(routes: ItemType[]) {
  const hasOthers = routes.some(route => !route.group);

  const groupedRoutes = routes.reduce((acc, route) => {
    const findedGroup = acc.find((item: ItemType) => item.key === route.group);

    if (route.group && !findedGroup) {
      const group = {
        key: route.group,
        label: route.group,
        type: "group",
        children: [route],
      } as ItemType;

      acc.unshift(group);

    } else if (route.group && findedGroup) {
      findedGroup.children?.push(route);

    } else if (!route.group) {
      let others = acc.find((item: ItemType) => item.key === "others");

      if (!others) {
        others = {
          key: "others",
          label: "others",
          type: "group",
          children: [],
        } as ItemType;

        acc.push(others as any);
      }

      others?.children?.push(route);
    }

    return acc;
  }, [] as ItemType[]);

  if (hasOthers) {
    groupedRoutes.push({
      key: "others",
      label: "others",
      type: "group",
      children: groupedRoutes.find(item => item.key === "others")?.children || [],
    });
  }

  return groupedRoutes;
}

export function mergeMenuRoutes(
  appRoutes: ItemType[],
): ItemType[] {
  const mergedRoutes = insertRouteBasedOnParentId(appRoutes);
  const arrangedRoutes = arrangeBasedOnPosition(mergedRoutes);

  return groupRoutes(arrangedRoutes);
}
