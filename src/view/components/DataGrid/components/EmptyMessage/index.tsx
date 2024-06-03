import { useTranslation } from "react-i18next";
import { Empty } from "antd";

import { I18_DEFAULT_NS } from "@config/app-keys";

import './styles.scss';

export function EmptyMessage() {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'components.data-grid'
  });

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={translate('no-data')}
    />
  );
}
