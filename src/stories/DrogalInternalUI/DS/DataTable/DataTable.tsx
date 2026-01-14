import React from 'react';

import './dataTable.css';

export interface DataTableProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the dataTable be? */
  size?: 'small' | 'medium' | 'large';
  /** DataTable contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const DataTable = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: DataTableProps) => {
  const mode = primary ? 'storybook-dataTable--primary' : 'storybook-dataTable--secondary';
  return (
    <button
      type="button"
      className={['storybook-dataTable', `storybook-dataTable--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
