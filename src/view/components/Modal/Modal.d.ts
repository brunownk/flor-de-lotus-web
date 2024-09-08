import { ModalFuncProps } from 'antd';

export interface IModalProps extends ModalFuncProps {
  children: React.ReactNode;
}

export interface IConfirmModalProps extends Omit<IModalProps, 'children'> {
  onConfirm?: () => void;
  onClose?: () => void;
}
