import React from 'react';

import './tabMenu.css';

export interface TabMenuProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the tabMenu be? */
  size?: 'small' | 'medium' | 'large';
  /** TabMenu contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const TabMenu = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: TabMenuProps) => {
  const mode = primary ? 'storybook-tabMenu--primary' : 'storybook-tabMenu--secondary';
  return (
    <button
      type="button"
      className={['storybook-tabMenu', `storybook-tabMenu--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
