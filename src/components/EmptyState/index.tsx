import type { ComponentProps, HTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon";

type IconName = ComponentProps<typeof Icon>["name"];

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Ícone acima do título (`EnumIcons`). */
  icon?: IconName;
  title: ReactNode;
  description?: ReactNode;
  /** Ação abaixo da descrição, como um botão para tentar de novo. */
  action?: ReactNode;
  /** Classe extra no título, somada a `drg-empty-state__title`. */
  classNameTitle?: string;
  /** Classe extra no ícone (o `<i>`), somada às classes do ícone. */
  classNameIcon?: string;
}

/**
 * @description
 * Componente EmptyState.
 * Mensagem para quando não há o que mostrar: venda sem produtos,
 * busca sem resultado ou falha ao carregar. Ícone, título e descrição
 * centralizados, com ação opcional.
 */
export const EmptyState = ({ icon, title, description, action, className, classNameTitle, classNameIcon, ...props }: EmptyStateProps) => {
  const classes = ["drg-empty-state", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes}>
      {icon && (
        <span className="drg-empty-state__icon" aria-hidden="true">
          <Icon name={icon} className={classNameIcon || ''} />
        </span>
      )}
      <span className={`drg-empty-state__title ${classNameTitle || ''}`}>{title}</span>
      {description && <span className="drg-empty-state__description">{description}</span>}
      {action && <div className="drg-empty-state__action">{action}</div>}
    </div>
  );
};
