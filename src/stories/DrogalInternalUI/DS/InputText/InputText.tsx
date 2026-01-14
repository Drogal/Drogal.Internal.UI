import React from 'react';

import './inputText.css';

export interface InputTextProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the inputText be? */
  size?: 'small' | 'medium' | 'large';
  /** InputText contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const InputText = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputTextProps) => {
  const mode = primary ? 'storybook-inputText--primary' : 'storybook-inputText--secondary';
  return (
    <button
      type="button"
      className={['storybook-inputText', `storybook-inputText--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
