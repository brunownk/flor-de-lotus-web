import { CustomRouteObject } from "@type/custom-route-object";

export function getAllRoutesPath(routes: CustomRouteObject[]) {
  const getPathsRecursive = (routes: CustomRouteObject[]): { path: string, id: string }[] => {
    return routes.flatMap(route => {
      if (route.path && route.path !== "*") {
        return [
          { path: route.path as string, id: route.id as string},
           ...(route.children ? getPathsRecursive(route.children) : [])
        ];

      } else if (route.children) {
        return getPathsRecursive(route.children);

      } else {
        return [];
      }
    });
  };

  const paths = getPathsRecursive(routes);

  paths.sort((a, b) => a.id.localeCompare(b.id));

  return paths;
}
