import React from 'react';

import './skeleton.css';

export interface SkeletonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the skeleton be? */
  size?: 'small' | 'medium' | 'large';
  /** Skeleton contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Skeleton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: SkeletonProps) => {
  const mode = primary ? 'storybook-skeleton--primary' : 'storybook-skeleton--secondary';
  return (
    <button
      type="button"
      className={['storybook-skeleton', `storybook-skeleton--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
