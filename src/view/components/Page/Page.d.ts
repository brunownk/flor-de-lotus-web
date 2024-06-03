import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { FilterValue } from "@type/filter-value";

export interface IPageContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  size?: 'default' | 'larger' | 'fullwidth';
  children: ReactElement[] | ReactElement;
}

export interface IPageHeaderProps {
  title: string | (() => string) | ReactNode;
  breadcrumb?: BreadcrumbItemType[];
  headerButtons?: ReactElement[] | ReactElement;
  filterContent?: ReactElement;
  initialFilters?: FilterValue;
  onFilter?: (value: T) => void;
  onCreate?: () => void;
  onClearFilter?: () => void;
}
