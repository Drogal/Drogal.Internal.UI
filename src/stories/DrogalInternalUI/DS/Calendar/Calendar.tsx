import React from 'react';

import './calendar.css';

export interface CalendarProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the calendar be? */
  size?: 'small' | 'medium' | 'large';
  /** Calendar contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Calendar = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: CalendarProps) => {
  const mode = primary ? 'storybook-calendar--primary' : 'storybook-calendar--secondary';
  return (
    <button
      type="button"
      className={['storybook-calendar', `storybook-calendar--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
