import React from 'react';

import './paginator.css';

export interface PaginatorProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the paginator be? */
  size?: 'small' | 'medium' | 'large';
  /** Paginator contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Paginator = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: PaginatorProps) => {
  const mode = primary ? 'storybook-paginator--primary' : 'storybook-paginator--secondary';
  return (
    <button
      type="button"
      className={['storybook-paginator', `storybook-paginator--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
