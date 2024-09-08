import { useEffect, useId, useState } from 'react';
import { Flex } from 'antd';

import { IToggleGroupProps, IToggleProps, ToggleValue } from './Toggle';

import { Label } from '..';

import './styles.scss';

const sizes = {
  small: '64px',
  medium: '80px',
  large: '104px',
};

export function Toggle({
  group,
  label,
  size = 'medium',
  labelSize = 'medium',
  selected: groupSelected = false,
  children,
  onChange,
  onClick,
}: IToggleProps) {
  const [isSelected, setIsSelected] = useState(groupSelected);

  const uniqueId = useId();

  const selected = group ? groupSelected : isSelected;

  function handleToggle() {
    setIsSelected(!isSelected);

    if (onClick) {
      onClick(!isSelected);
    }

    if (onChange) {
      onChange(!isSelected);
    }
  }

  return (
    <div className="toggle-container">
      {label && !group && <Label size={labelSize}>{label}</Label>}

      <button
        key={uniqueId}
        type="button"
        className={`toggle-item ${selected ? 'active' : ''}`}
        style={{ height: sizes[size] }}
        onClick={handleToggle}
      >
        {children}
      </button>
    </div>
  );
}

Toggle.Group = function Group({
  label,
  value,
  options,
  initialValue,
  size = 'medium',
  labelSize = 'medium',
  onClick,
  onChange,
}: IToggleGroupProps) {
  const [selected, setSelected] = useState(initialValue ?? value);

  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  function handleToggle(value: ToggleValue) {
    setSelected(value);

    if (onClick) {
      onClick(value);
    }

    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div className="toggle-container">
      {label && <Label size={labelSize}>{label}</Label>}

      <Flex gap={16}>
        {options?.map((option, index) => (
          <Toggle
            key={`option-${String(index)}`}
            group
            size={size}
            onClick={() => handleToggle(option.value)}
            selected={option.value === selected}
          >
            {option.label}
          </Toggle>
        ))}
      </Flex>
    </div>
  );
};
