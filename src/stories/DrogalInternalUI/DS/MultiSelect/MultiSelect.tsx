import React from 'react';

import './multiSelect.css';

export interface MultiSelectProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the multiSelect be? */
  size?: 'small' | 'medium' | 'large';
  /** MultiSelect contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const MultiSelect = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: MultiSelectProps) => {
  const mode = primary ? 'storybook-multiSelect--primary' : 'storybook-multiSelect--secondary';
  return (
    <button
      type="button"
      className={['storybook-multiSelect', `storybook-multiSelect--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
