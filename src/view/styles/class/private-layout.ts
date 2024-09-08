import {
  VERTICAL_HEADER_CONTENT_GAP,
  VERTICAL_HEADER_HEIGHT,
  SIDER_COLLAPSED_WIDTH,
  SIDER_WIDTH,
  HORIZONTAL_HEADER_HEIGHT,
  HORIZONTAL_HEADER_CONTENT_GAP,
} from '@config/app-keys';

export const privateLayoutClass = {
  pageContent: {
    vertical: {
      maxWidth: `calc(100% - ${SIDER_WIDTH}px)`,
      marginLeft: `${SIDER_WIDTH}px`,
      paddingTop: VERTICAL_HEADER_HEIGHT + VERTICAL_HEADER_CONTENT_GAP,
    },
    verticalCollapse: {
      maxWidth: `calc(100% - ${SIDER_COLLAPSED_WIDTH}px)`,
      marginLeft: `${SIDER_COLLAPSED_WIDTH}px`,
      paddingTop: VERTICAL_HEADER_HEIGHT + VERTICAL_HEADER_CONTENT_GAP,
    },
    horizontal: {
      paddingTop:
        HORIZONTAL_HEADER_HEIGHT * 2 + HORIZONTAL_HEADER_CONTENT_GAP * 2,
    },
  },
  collapseButton: {
    vertical: {
      top: VERTICAL_HEADER_HEIGHT / 2,
      left: SIDER_WIDTH - 26 / 2,
    },
    verticalCollapse: {
      top: VERTICAL_HEADER_HEIGHT / 2 - 26 / 2,
      left: SIDER_COLLAPSED_WIDTH - 26 / 2,
    },
    horizontal: {},
  },
};
