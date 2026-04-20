import React from 'react';

export type BgFrameVariant = 'filled' | 'outlined';

export interface BgFrameProps {
  title?: string;
  subtitle?: string;
  variant?: BgFrameVariant;
  children?: React.ReactNode;
}

export const BgFrame: React.FC<BgFrameProps> = ({
  title,
  subtitle,
  variant = 'filled',
  children,
}) => {

  return (
    <div
      className={`drg-bg-frame drg-bg-frame--${variant}`}
    >
      {(title || subtitle) && (
        <div className="drg-bg-frame__header">
          {title && (
            <span
              className="drg-bg-frame__title"
            >
              {title}
            </span>
          )}
          {subtitle && (
            <span
              className="drg-bg-frame__subtitle"
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
      {children && <div className="drg-bg-frame__content">{children}</div>}
    </div>
  );
};
