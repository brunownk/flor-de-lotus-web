import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { useStretchScreen } from '@hooks/useStretchScreen';

import { Toggle } from '@components/DataEntry';

import './styles.scss';

export function StretchToggle() {
  const { isStretched, toggleStretch } = useStretchScreen();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.configs',
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
  );
}
