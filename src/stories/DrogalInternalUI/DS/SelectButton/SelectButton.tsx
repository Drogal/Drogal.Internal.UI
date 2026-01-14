import React from 'react';

import './selectButton.css';

export interface SelectButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the selectButton be? */
  size?: 'small' | 'medium' | 'large';
  /** SelectButton contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const SelectButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: SelectButtonProps) => {
  const mode = primary ? 'storybook-selectButton--primary' : 'storybook-selectButton--secondary';
  return (
    <button
      type="button"
      className={['storybook-selectButton', `storybook-selectButton--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
