import React from 'react';

import './inputNumber.css';

export interface InputNumberProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the inputNumber be? */
  size?: 'small' | 'medium' | 'large';
  /** InputNumber contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const InputNumber = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputNumberProps) => {
  const mode = primary ? 'storybook-inputNumber--primary' : 'storybook-inputNumber--secondary';
  return (
    <button
      type="button"
      className={['storybook-inputNumber', `storybook-inputNumber--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
