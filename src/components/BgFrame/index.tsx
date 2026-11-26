import React, { type ComponentProps } from 'react';
import { Icon } from '../Icon';

type IconName = ComponentProps<typeof Icon>['name'];

export type BgFrameVariant = 'filled' | 'outlined' | 'card';

export interface BgFrameProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  /**
   * `filled`: fundo cinza. `outlined`: transparente com borda.
   * `card`: fundo branco com sombra, para seções de conteúdo (Card do Sistema de Vendas).
   * @default 'filled'
   */
  variant?: BgFrameVariant;
  /** Ícone à esquerda do título. */
  icon?: IconName;
  /** Conteúdo à direita do cabeçalho, como um botão de ação. */
  actions?: React.ReactNode;
  children?: React.ReactNode;
  /** Classe extra na `div` raiz. */
  className?: string;
  /** Classe extra no título, somada a `drg-bg-frame__title`. */
  classNameTitle?: string;
  /** Classe extra no subtítulo, somada a `drg-bg-frame__subtitle`. */
  classNameSubtitle?: string;
  /** Classe extra no ícone do cabeçalho (o `<i>`), somada às classes do ícone. */
  classNameIcon?: string;
  /** Atributos extras repassados para a `div` raiz (ex.: `id`, `data-*`, `aria-*`). */
  restProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const BgFrame: React.FC<BgFrameProps> = ({
  title,
  subtitle,
  variant = 'filled',
  icon,
  actions,
  children,
  className,
  classNameTitle,
  classNameSubtitle,
  classNameIcon,
  restProps
}) => {
  const hasHeading = Boolean(title || subtitle);

  return (
    <div
      className={`drg-bg-frame drg-bg-frame--${variant} ${className || ''}`}
      {...restProps}
    >
      {(hasHeading || actions) && (
        <div className="drg-bg-frame__header">
          {icon && hasHeading && (
            <span className={`drg-bg-frame__icon `} aria-hidden="true">
              <Icon name={icon} className={classNameIcon || ''} />
            </span>
          )}
          {hasHeading && (
            <div className="drg-bg-frame__heading">
              {title && (
                <span className={`drg-bg-frame__title ${classNameTitle || ''}`}>{title}</span>
              )}
              {subtitle && (
                <span className={`drg-bg-frame__subtitle ${classNameSubtitle || ''}`}>{subtitle}</span>
              )}
            </div>
          )}
          {actions && <div className="drg-bg-frame__actions">{actions}</div>}
        </div>
      )}
      {children && <div className="drg-bg-frame__content">{children}</div>}
    </div>
  );
};
