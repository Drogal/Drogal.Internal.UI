import React from 'react';

import './inputPassword.css';

export interface InputPasswordProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the inputPassword be? */
  size?: 'small' | 'medium' | 'large';
  /** InputPassword contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const InputPassword = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputPasswordProps) => {
  const mode = primary ? 'storybook-inputPassword--primary' : 'storybook-inputPassword--secondary';
  return (
    <button
      type="button"
      className={['storybook-inputPassword', `storybook-inputPassword--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
