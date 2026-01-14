import React from 'react';

import './dialog.css';

export interface DialogProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the dialog be? */
  size?: 'small' | 'medium' | 'large';
  /** Dialog contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Dialog = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: DialogProps) => {
  const mode = primary ? 'storybook-dialog--primary' : 'storybook-dialog--secondary';
  return (
    <button
      type="button"
      className={['storybook-dialog', `storybook-dialog--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
