import { Typography } from 'antd';

import './styles.scss';

const { Text } = Typography;

interface IItemProps {
  label: string;
  pathParts: string[];
  onClick: () => void;
}

export function Item({ label, pathParts, onClick: handleClick }: IItemProps) {
  return (
    <button type="button" className="search-page-item" onClick={handleClick}>
      <Text className="search-page-item-label">{label}</Text>
      <Text className="search-page-item-path" type="secondary">
        {pathParts.map((part, index) =>
          index % 2 === 0 ? (
            part
          ) : (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index} className="highlighted">
              {part}
            </span>
          ),
        )}
      </Text>
    </button>
  );
}
