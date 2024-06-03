import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Toggle } from "@components/DataEntry";
import { useStretchScreen } from "@hooks/useStretchScreen";

import "./styles.scss";
import { useTranslation } from "react-i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";

export function StretchToggle() {
  const { isStretched, toggleStretch } = useStretchScreen();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.configs'
  });

  const contentClassName = `stretch-toggle-content ${isStretched ? 'stretched' : ''}`;

  return (
    <Toggle
      label={translate('stretch')}
      labelSize="small"
      selected={isStretched}
      onClick={toggleStretch}
    >
      <div className={contentClassName}>
        {isStretched ? <FaChevronLeft /> : <FaChevronRight />}
        <div className="stretch-toggle-line" />
        {isStretched ? <FaChevronRight /> : <FaChevronLeft />}
      </div>
    </Toggle>
  )
}
