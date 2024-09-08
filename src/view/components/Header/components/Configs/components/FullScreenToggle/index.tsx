import { Flex } from 'antd';

import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import { Toggle } from '@components';

import { useFullScreenToggle } from './useFullScreenToggle';

import './styles.scss';

export function FullScreenToggle() {
  const { translate, isFullscreen, toggleFullscreen } = useFullScreenToggle();

  return (
    <Toggle
      key={`fullscreen-toggle-${String(isFullscreen)}`}
      size="small"
      selected={isFullscreen}
      onClick={toggleFullscreen}
    >
      <Flex align="center" gap={8}>
        {isFullscreen ? (
          <MdFullscreenExit size={26} />
        ) : (
          <MdFullscreen size={26} />
        )}

        <p className="fullscreen-toggle-text">{translate('fullscreen')}</p>
      </Flex>
    </Toggle>
  );
}
