import { useTranslation } from 'react-i18next';
import { MdTableRows } from 'react-icons/md';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { useTableDensity } from '@hooks/useTableDensity';

import { Toggle } from '@components/DataEntry';

export function DensityToggle() {
  const { density, toggleDensity } = useTableDensity();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.configs',
  });

  return (
    <Toggle.Group
      label={translate('tables-density')}
      labelSize="small"
      size="small"
      initialValue={density}
      onClick={toggleDensity}
      options={[
        { value: 'small', label: <MdTableRows size={20} /> },
        { value: 'middle', label: <MdTableRows size={26} /> },
        { value: 'larger', label: <MdTableRows size={32} /> },
      ]}
    />
  );
}
