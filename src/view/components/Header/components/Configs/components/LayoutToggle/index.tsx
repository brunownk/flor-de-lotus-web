import { useTranslation } from 'react-i18next';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { Toggle } from '@components/DataEntry';
import { useMenu } from '@hooks/useMenu';
import { VerticalLayout, HorizontalLayout } from './components';

export function LayoutToggle() {
  const { menuMode, toggleMenuMode } = useMenu();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.configs',
  });

  return (
    <Toggle.Group
      key={menuMode}
      label={translate('layout')}
      labelSize="small"
      size="small"
      initialValue={menuMode}
      onClick={toggleMenuMode}
      options={[
        { value: 'vertical', label: <VerticalLayout /> },
        { value: 'horizontal', label: <HorizontalLayout /> },
        { value: 'verticalCollapse', label: <VerticalLayout collapse /> },
      ]}
    />
  );
}
