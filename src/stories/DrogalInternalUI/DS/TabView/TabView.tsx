import React from 'react';

import './tabView.css';

export interface TabViewProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the tabView be? */
  size?: 'small' | 'medium' | 'large';
  /** TabView contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const TabView = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: TabViewProps) => {
  const mode = primary ? 'storybook-tabView--primary' : 'storybook-tabView--secondary';
  return (
    <button
      type="button"
      className={['storybook-tabView', `storybook-tabView--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
