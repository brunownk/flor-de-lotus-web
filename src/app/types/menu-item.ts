import { MenuProps } from "antd";

export type ItemType =  Required<MenuProps>['items'][number] & {
  key: string;
  group?: string;
  position?: number;
  groupPosition?: number;
  parentId?: string;
  children?: ItemType[];
  type?: "group";
}
