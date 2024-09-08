import { Flex } from 'antd';
import { IoCloseCircleOutline } from 'react-icons/io5';

import { IErrorMessageProps } from './ErrroMessage';

import './styles.scss';

export function ErrorMessage({ children }: IErrorMessageProps) {
  return (
    <Flex id="error-message-container" gap={6} align="flex-start">
      <IoCloseCircleOutline size={18} />
      <span>{children}</span>
    </Flex>
  );
}
