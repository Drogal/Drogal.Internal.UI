import type { HTMLAttributes, ReactNode } from "react";

export interface DescriptionItemProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
}

/**
 * @description
 * Uma linha "rótulo — valor", com o rótulo cinza à esquerda e o valor à direita.
 * Use dentro de `DescriptionList` ou sozinha.
 */
export const DescriptionItem = ({ label, value, className, ...props }: DescriptionItemProps) => {
  const classes = ["drg-description-item", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes}>
      <dt className="drg-description-item__label">{label}</dt>
      <dd className="drg-description-item__value">{value}</dd>
    </div>
  );
};

export type DescriptionListVariant = "filled" | "plain";

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  /** Linhas da lista. Alternativa a passar `DescriptionItem` em `children`. */
  items?: Array<{ label: ReactNode; value: ReactNode; key?: string | number }>;
  /** `filled`: caixa cinza, como no Figma. `plain`: sem fundo. @default 'filled' */
  variant?: DescriptionListVariant;
  children?: ReactNode;
}

/**
 * @description
 * Componente DescriptionList.
 * Lista de pares rótulo e valor, como os dados de uma transação recusada
 * (motivo, código, bandeira, NSU). Renderiza um `<dl>` semântico.
 */
export const DescriptionList = ({ items, variant = "filled", className, children, ...props }: DescriptionListProps) => {
  const classes = ["drg-description-list", `drg-description-list--${variant}`, className].filter(Boolean).join(" ");

  return (
    <dl {...props} className={classes}>
      {items?.map((item, index) => (
        <DescriptionItem key={item.key ?? index} label={item.label} value={item.value} />
      ))}
      {children}
    </dl>
  );
};
