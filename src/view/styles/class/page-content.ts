import {
  VERTICAL_HEADER_HEIGHT,
  VERTICAL_HEADER_CONTENT_GAP,
  HORIZONTAL_HEADER_HEIGHT,
} from '@config/app-keys';

export const pageContentClass = {
  vertical: {
    paddingBottom: VERTICAL_HEADER_HEIGHT + VERTICAL_HEADER_CONTENT_GAP,
  },
  verticalCollapse: {
    paddingBottom: VERTICAL_HEADER_HEIGHT + VERTICAL_HEADER_CONTENT_GAP,
  },
  horizontal: {
    paddingBottom: HORIZONTAL_HEADER_HEIGHT * 2,
  },
};
