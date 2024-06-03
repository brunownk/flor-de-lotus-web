import { DropDownProps } from "antd"

type Options = {
  onEdit?: MenuClickEventHandler<MenuInfo>,
  onDelete?: MenuClickEventHandler<MenuInfo>,
  onView?: MenuClickEventHandler<MenuInfo>
}

export interface IActionsProps extends DropDownProps {
  direction: 'vertical' | 'horizontal',
  options: Options
}
