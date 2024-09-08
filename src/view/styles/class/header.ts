import {
  VERTICAL_HEADER_HEIGHT,
  HORIZONTAL_HEADER_HEIGHT,
  SIDER_COLLAPSED_WIDTH,
  SIDER_WIDTH,
} from '@config/app-keys';

export const headerClass = {
  vertical: {
    left: `${SIDER_WIDTH}px`,
    width: `calc(100% - ${SIDER_WIDTH}px)`,
    height: VERTICAL_HEADER_HEIGHT,
  },
  verticalCollapse: {
    left: `${SIDER_COLLAPSED_WIDTH}px`,
    width: `calc(100% - ${SIDER_COLLAPSED_WIDTH}px)`,
    height: VERTICAL_HEADER_HEIGHT,
  },
  horizontal: {
    width: '100%',
    height: HORIZONTAL_HEADER_HEIGHT,
  },
};
