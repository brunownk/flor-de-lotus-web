import { useId, useState } from "react"
import { Flex } from "antd";

import { IToggleGroupProps, IToggleProps, ToggleValue } from "./Toggle";

import { Label } from "..";

import './styles.scss';

const sizes = {
  small: '56px',
  medium: '80px',
  large: '104px',
}

export function Toggle({
  group,
  label,
  size = 'medium',
  selected: groupSelected = false,
  children,
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
  }

  return (
    <div className="toggle-container">
      {(label && !group) && (
        <Label size="small">{label}</Label>
      )}

      <button
        key={uniqueId}
        className={`toggle-item ${selected ? 'active' : ''}`}
        style={{ height: sizes[size] }}
        onClick={handleToggle}
      >
        {children}
      </button>
    </div>
  )
}

Toggle.Group = function Group({
  label,
  options,
  initialValue,
  size = 'medium',
  onClick,
}: IToggleGroupProps) {
  const [selected, setSelected] = useState<ToggleValue | null>(initialValue);

  function handleToggle(value: ToggleValue) {
    setSelected(value);

    if (onClick) {
      onClick(value);
    }
  }

  return (
    <div className="toggle-container">
      {label && (
        <Label size="small">{label}</Label>
      )}

      <Flex gap={16}>
        {options.map((option, index) => (
          <Toggle
            key={`${index}-${new Date().getTime()}`}
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
  )
}
