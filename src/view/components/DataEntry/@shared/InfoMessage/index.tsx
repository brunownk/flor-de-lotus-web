import { Flex } from "antd";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { IInfoMessageProps } from "./InfoMessage";

import './styles.scss';

export function InfoMessage({ children }: IInfoMessageProps) {
  return (
    <Flex id="info-message-container" gap={6} align="center">
      <IoIosInformationCircleOutline size={18} />
      <span>{children}</span>
    </Flex>
  )
}
