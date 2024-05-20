import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

export interface IPageContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  size?: 'default' | 'larger' | 'fullwidth';
  children: ReactElement[] | ReactElement;
}

export interface IPageHeaderProps {
  title: string | (() => string) | ReactNode;
  breadcrumb?: BreadcrumbItemType[];
}
