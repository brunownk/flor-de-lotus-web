import { Dropdown } from 'antd';
import { BsThreeDotsVertical, BsThreeDots } from 'react-icons/bs';

import { Button, ConfirmDeleteModal } from '@components';
import { IActionsProps } from './Actions';

import { useActionsController } from './useActionsController';

import './styles.scss';

export function Actions({
  options,
  placement = 'bottomRight',
  direction = 'vertical',
  ...rest
}: IActionsProps) {
  const { items, modalDeleteRef, handleDelete } = useActionsController(options);

  return (
    <>
      <Dropdown
        trigger={['click']}
        rootClassName="actions-dropdown"
        placement={placement}
        menu={{ items }}
        {...rest}
      >
        <Button className="locales-button" type="text" shape="circle">
          {direction === 'vertical' ? <BsThreeDotsVertical /> : <BsThreeDots />}
        </Button>
      </Dropdown>

      <ConfirmDeleteModal
        ref={modalDeleteRef}
        onConfirm={handleDelete}
        onClose={() => modalDeleteRef.current?.close()}
      />
    </>
  );
}
