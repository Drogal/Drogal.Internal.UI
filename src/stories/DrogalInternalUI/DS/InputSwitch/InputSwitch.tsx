import React from 'react';

import './inputSwitch.css';

export interface InputSwitchProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the inputSwitch be? */
  size?: 'small' | 'medium' | 'large';
  /** InputSwitch contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const InputSwitch = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputSwitchProps) => {
  const mode = primary ? 'storybook-inputSwitch--primary' : 'storybook-inputSwitch--secondary';
  return (
    <button
      type="button"
      className={['storybook-inputSwitch', `storybook-inputSwitch--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
