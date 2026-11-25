import type { HTMLAttributes, ReactNode } from "react";

export type SummaryStatVariant = "default" | "info" | "danger" | "success";

export interface SummaryStatProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  /**
   * `default`: sem fundo, texto escuro. `info`: fundo azul claro. `success`: fundo verde claro.
   * `danger`: sem fundo, texto vermelho (como no Figma).
   * @default 'default'
   */
  variant?: SummaryStatVariant;
}

/**
 * @description
 * Componente SummaryStat.
 * Um número em destaque com rótulo, como o total da venda, o troco
 * ou o valor restante a pagar.
 */
export const SummaryStat = ({ label, value, variant = "default", className, ...props }: SummaryStatProps) => {
  const classes = ["drg-summary-stat", `drg-summary-stat--${variant}`, className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes}>
      <span className="drg-summary-stat__label">{label}</span>
      <span className="drg-summary-stat__value">{value}</span>
    </div>
  );
};
