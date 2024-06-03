import { Dropdown, Flex, Typography } from "antd";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";

import { IActionsProps } from "./Actions";

import { Button, Modal, Space } from "@components";

import { useActionsController } from "./useActionsController";

import './styles.scss';

export function Actions({
  options,
  placement = "bottomRight",
  direction = 'vertical',
  ...rest
}: IActionsProps) {
  const { items, translate, modalDeleteRef } = useActionsController(options);

  return (
    <>
     <Dropdown
        rootClassName="actions-dropdown"
        placement={placement}
        menu={{ items }}
        {...rest}
      >
        <Button
          className="locales-button"
          type="text"
          shape="circle"
        >
          { direction === 'vertical' ? <BsThreeDotsVertical /> : <BsThreeDots />}
        </Button>
      </Dropdown>

      <Modal
        ref={modalDeleteRef}
        centered
      >
        <Space size={24}>
          <Space size={16}>
            <Typography.Title level={4}>{translate('delete')}</Typography.Title>
            <Typography.Text>{translate('delete-confirm-description')}</Typography.Text>
          </Space>


          <Flex justify="flex-end" gap={16}>
            <Button danger onClick={options.onDelete}>
              {translate('delete')}
            </Button>

            <Button type="default" onClick={() => modalDeleteRef.current?.close()}>
              {translate('cancel')}
            </Button>
          </Flex>
        </Space>
      </Modal>
    </>
  )
}
