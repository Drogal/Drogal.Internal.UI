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
}

/**
 * @description
 * Componente EmptyState.
 * Mensagem para quando não há o que mostrar: venda sem produtos,
 * busca sem resultado ou falha ao carregar. Ícone, título e descrição
 * centralizados, com ação opcional.
 */
export const EmptyState = ({ icon, title, description, action, className, ...props }: EmptyStateProps) => {
  const classes = ["drg-empty-state", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes}>
      {icon && (
        <span className="drg-empty-state__icon" aria-hidden="true">
          <Icon name={icon} />
        </span>
      )}
      <span className="drg-empty-state__title">{title}</span>
      {description && <span className="drg-empty-state__description">{description}</span>}
      {action && <div className="drg-empty-state__action">{action}</div>}
    </div>
  );
};
