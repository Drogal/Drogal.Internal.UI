import type { ComponentProps, HTMLAttributes, ReactNode } from "react";
import EnumIcons from "../../icons/EnumIcons";
import { Icon } from "../Icon";

type IconName = ComponentProps<typeof Icon>["name"];

export type ResultSeverity = "success" | "error" | "warning" | "info";

const DEFAULT_ICONS: Record<ResultSeverity, IconName> = {
  success: EnumIcons.Outlined.check_circle_outline,
  error: EnumIcons.Outlined.highlight_off,
  warning: EnumIcons.Outlined.warning_amber,
  info: EnumIcons.Outlined.hourglass_top,
};

export interface ResultProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Define cor e ícone padrão. */
  severity: ResultSeverity;
  title: ReactNode;
  description?: ReactNode;
  /** Troca o ícone padrão da severidade. */
  icon?: IconName;
  /** Conteúdo abaixo da descrição, como botões de ação. */
  children?: ReactNode;
}

/**
 * @description
 * Componente Result.
 * Resultado de uma operação em destaque, com ícone, título e descrição
 * centralizados: pagamento confirmado ou recusado, rejeição da SEFAZ,
 * aguardando pagamento.
 *
 * É anunciado ao leitor de tela quando aparece: `role="alert"` em `error`
 * e `warning`, `role="status"` nos demais (pode ser trocado por `role`).
 */
export const Result = ({ severity, title, description, icon, children, className, ...props }: ResultProps) => {
  const classes = ["drg-result", `drg-result--${severity}`, className].filter(Boolean).join(" ");
  const role = severity === "error" || severity === "warning" ? "alert" : "status";

  return (
    <div role={role} {...props} className={classes}>
      <span className="drg-result__icon" aria-hidden="true">
        <Icon name={icon ?? DEFAULT_ICONS[severity]} />
      </span>
      <span className="drg-result__title">{title}</span>
      {description && <span className="drg-result__description">{description}</span>}
      {children && <div className="drg-result__actions">{children}</div>}
    </div>
  );
};
