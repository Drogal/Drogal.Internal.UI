import { Tag as PureTag } from "primereact/tag";
import type { TagProps as PureTagProps } from "../../types/local__primereact/tag/tag";

export type TagVariant = "solid" | "subtle";

export interface TagProps extends PureTagProps {
  /**
   * `solid`: fundo na cor da severidade e texto branco (ex.: "Autorizada").
   * `subtle`: fundo claro e texto na cor da severidade (ex.: "Enviado", "Erro").
   * @default 'solid'
   */
  variant?: TagVariant;
}

/**
 * @description
 * Componente Tag baseado no PrimeReact.
 * Utilizado para exibir o status de um item, como a situação de uma nota
 * fiscal ou de um cliente, em tabelas, cabeçalhos e listas.
 *
 * Encapsula o componente `Tag` do PrimeReact, mantendo compatibilidade
 * com suas props originais, e acrescenta a variante `subtle`.
 */
export const Tag = ({ variant = "solid", className, ...props }: TagProps) => {
  const classes = ["drg-tag", variant === "subtle" ? "drg-tag--subtle" : "", className]
    .filter(Boolean)
    .join(" ");

  return <PureTag {...props} className={classes} />;
};
