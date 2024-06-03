import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";

import { Modal as AntdModal } from "antd";

import { IModalProps } from "./Modal";

export interface IModalRef {
  open: () => void;
  close: () => void;
}

const disableComponents = {
  title: null,
  footer: null,
  closeIcon: null
}

export const Modal = forwardRef((
  { styles, children, ...rest }: IModalProps,
  ref:  ForwardedRef<IModalRef>
) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }))

  return (
    <AntdModal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      styles={{
        ...styles,
        content: {
          padding: 24,
          ...styles?.content,
        }
      }}
      {...disableComponents}
      {...rest}
    >
      {children}
    </AntdModal>
  )
});
