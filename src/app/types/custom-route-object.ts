import { RouteObject } from "react-router-dom";

export type CustomRouteObject = RouteObject & {
  icon?: React.ReactNode;
  group?: string;
  groupPosition?: number;
  children?: CustomRouteObject[];
  position?: number;
  disabled?: boolean;
  isChildren?: boolean;
  parentId?: string;
  sider?: boolean;
}
