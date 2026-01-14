import React from 'react';

import './inputTextArea.css';

export interface InputTextAreaProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the inputTextArea be? */
  size?: 'small' | 'medium' | 'large';
  /** InputTextArea contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const InputTextArea = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputTextAreaProps) => {
  const mode = primary ? 'storybook-inputTextArea--primary' : 'storybook-inputTextArea--secondary';
  return (
    <button
      type="button"
      className={['storybook-inputTextArea', `storybook-inputTextArea--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
