import { ProgressBar as PureProgressBar } from "primereact/progressbar";
import type { ProgressBarProps as PureProgressBarProps } from "../../types/local__primereact/progressbar/progressbar";

export type ProgressBarSize = "small" | "medium";

export interface ProgressBarProps extends PureProgressBarProps {
  /**
   * Espessura da barra quando o valor não é exibido (`showValue` falso).
   * `medium` (6px) para etapas de um processo; `small` (4px) para o envio de arquivos.
   * @default 'medium'
   */
  size?: ProgressBarSize;
}

/**
 * @description
 * Componente ProgressBar baseado no PrimeReact.
 * Utilizado para indicar o andamento de uma operação, como a finalização
 * da venda ou o envio de um arquivo.
 *
 * Diferente do PrimeReact, o valor não é exibido por padrão: a barra é fina
 * (`size`), como no Sistema de Vendas. Com `showValue`, volta à altura do tema
 * para caber o percentual.
 *
 * Encapsula o componente `ProgressBar` do PrimeReact,
 * mantendo compatibilidade com suas props originais.
 */
export const ProgressBar = ({ size = "medium", showValue = false, className, ...props }: ProgressBarProps) => {
  const classes = ["drg-progressbar", showValue ? "" : `drg-progressbar--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return <PureProgressBar {...props} showValue={showValue} className={classes} />;
};
