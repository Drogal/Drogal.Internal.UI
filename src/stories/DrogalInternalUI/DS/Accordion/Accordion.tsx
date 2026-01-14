import React from 'react';

import './accordion.css';

export interface AccordionProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the accordion be? */
  size?: 'small' | 'medium' | 'large';
  /** Accordion contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Accordion = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: AccordionProps) => {
  const mode = primary ? 'storybook-accordion--primary' : 'storybook-accordion--secondary';
  return (
    <button
      type="button"
      className={['storybook-accordion', `storybook-accordion--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
