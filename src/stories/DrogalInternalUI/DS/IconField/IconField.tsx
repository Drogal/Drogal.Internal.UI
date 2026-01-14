import React from 'react';

import './iconField.css';

export interface IconFieldProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the iconField be? */
  size?: 'small' | 'medium' | 'large';
  /** IconField contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const IconField = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IconFieldProps) => {
  const mode = primary ? 'storybook-iconField--primary' : 'storybook-iconField--secondary';
  return (
    <button
      type="button"
      className={['storybook-iconField', `storybook-iconField--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
