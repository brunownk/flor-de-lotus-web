import { Typography } from "antd"

const { Text } = Typography;

import './styles.scss'

interface IItemProps {
  label: string;
  pathParts: string[];
  onClick: () => void;
}

export function Item({ label, pathParts, onClick: handleClick }: IItemProps) {
  return (
    <button className="search-page-item" onClick={handleClick}>
      <Text className="search-page-item-label">{label}</Text>
      <Text className="search-page-item-path" type="secondary">
        {pathParts.map((part, index) => (
          index % 2 === 0 ? (
            part
          ) : (
            <span key={index} className="highlighted">{part}</span>
          )
        ))}
      </Text>
    </button>
  )
}
