import React from 'react';

import './tabPanel.css';

export interface TabPanelProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the tabPanel be? */
  size?: 'small' | 'medium' | 'large';
  /** TabPanel contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const TabPanel = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: TabPanelProps) => {
  const mode = primary ? 'storybook-tabPanel--primary' : 'storybook-tabPanel--secondary';
  return (
    <button
      type="button"
      className={['storybook-tabPanel', `storybook-tabPanel--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
