import { Button as AntdButton } from 'antd';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';

import { FaFilter } from 'react-icons/fa';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { IButtonProps } from './Button';

import './styles.scss';

export function Button({
  type = 'primary',
  danger = false,
  customStyle = true,
  customSize = 'default',
  children,
  ...rest
}: IButtonProps) {
  return (
    <AntdButton
      className={`${!danger && customStyle ? 'custom-button' : ''} ${
        customStyle ? customSize : ''
      }`}
      danger={danger}
      type={type}
      {...rest}
    >
      {children}
    </AntdButton>
  );
}

Button.Create = function ButtonCreate(props: IButtonProps) {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'components.button',
  });

  return (
    <Button type="primary" icon={<PlusOutlined />} {...props}>
      {translate('create')}
    </Button>
  );
};

Button.Filter = function ButtonFilter(props: IButtonProps) {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'components.button',
  });

  return (
    <Button type="primary" icon={<FaFilter />} {...props}>
      {translate('filter')}
    </Button>
  );
};
