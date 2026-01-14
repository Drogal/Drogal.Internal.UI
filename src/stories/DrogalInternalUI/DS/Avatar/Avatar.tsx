import React from 'react';

import './avatar.css';

export interface AvatarProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the avatar be? */
  size?: 'small' | 'medium' | 'large';
  /** Avatar contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Avatar = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: AvatarProps) => {
  const mode = primary ? 'storybook-avatar--primary' : 'storybook-avatar--secondary';
  return (
    <button
      type="button"
      className={['storybook-avatar', `storybook-avatar--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
