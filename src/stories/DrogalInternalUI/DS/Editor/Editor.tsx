import React from 'react';

import './editor.css';

export interface EditorProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the editor be? */
  size?: 'small' | 'medium' | 'large';
  /** Editor contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Editor = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: EditorProps) => {
  const mode = primary ? 'storybook-editor--primary' : 'storybook-editor--secondary';
  return (
    <button
      type="button"
      className={['storybook-editor', `storybook-editor--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
