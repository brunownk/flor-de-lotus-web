import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { Modal as AntdModal, Flex, Typography } from 'antd';

import { Button, Space } from '@components';
import { IConfirmModalProps, IModalProps } from './Modal';

export interface IModalRef {
  open: () => void;
  close: () => void;
}

const disableComponents = {
  title: null,
  footer: null,
  closeIcon: null,
};

export const Modal = forwardRef(
  (
    { styles, children, ...rest }: IModalProps,
    ref: ForwardedRef<IModalRef>,
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    return (
      <AntdModal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        styles={{
          ...styles,
          content: {
            padding: 24,
            ...styles?.content,
          },
        }}
        {...disableComponents}
        {...rest}
      >
        {children}
      </AntdModal>
    );
  },
);

export const ConfirmDeleteModal = forwardRef(
  (
    { onConfirm, onClose }: IConfirmModalProps,
    ref: ForwardedRef<IModalRef>,
  ) => {
    const { t: translate } = useTranslation(I18_DEFAULT_NS, {
      keyPrefix: 'actions',
    });

    return (
      <Modal ref={ref} centered>
        <Space size={24}>
          <Space size={16}>
            <Typography.Title level={4}>{translate('delete')}</Typography.Title>
            <Typography.Text>
              {translate('delete-confirm-description')}
            </Typography.Text>
          </Space>

          <Flex justify="flex-end" gap={16}>
            <Button danger onClick={onConfirm}>
              {translate('delete')}
            </Button>

            <Button type="default" onClick={onClose}>
              {translate('cancel')}
            </Button>
          </Flex>
        </Space>
      </Modal>
    );
  },
);
