import React from 'react';

import './badge.css';

export interface BadgeProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the badge be? */
  size?: 'small' | 'medium' | 'large';
  /** Badge contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Badge = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: BadgeProps) => {
  const mode = primary ? 'storybook-badge--primary' : 'storybook-badge--secondary';
  return (
    <button
      type="button"
      className={['storybook-badge', `storybook-badge--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
