import { useMemo, useRef } from 'react';
import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { I18_DEFAULT_NS } from '@config/app-keys';

import TrashIcon from '@assets/icons/trash-icon.svg?react';
import EditIcon from '@assets/icons/edit-icon.svg?react';
import EyeIcon from '@assets/icons/eye-icon.svg?react';

import { IModalRef } from '@components';

import { IActionsProps } from './Actions';

export function useActionsController(options: IActionsProps['options']) {
  const modalDeleteRef = useRef<IModalRef>(null);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'actions',
  });

  const items = useMemo(() => {
    const {
      onEdit,
      onDelete,
      onView,
      deleted
    } = options;

    const actions: MenuProps['items'] = [];

    if (onView) {
      actions.push({
        key: 'view',
        label: translate('view'),
        icon: <EyeIcon />,
        onClick: onView,
      });
    }

    if (onEdit) {
      actions.push({
        key: 'edit',
        label: translate('edit'),
        icon: <EditIcon />,
        onClick: onEdit,
      });
    }

    if (onDelete) {
      actions.push({
        key: 'delete',
        label: translate('delete'),
        className: 'danger',
        icon: <TrashIcon />,
        disabled: deleted,
        onClick: () => modalDeleteRef.current?.open(),
      });
    }

    return actions;
  }, [options, translate]);

  async function handleDelete() {
    await options.onDelete();
    modalDeleteRef.current?.close();
  }

  return {
    items,
    handleDelete,
    modalDeleteRef,
  };
}
