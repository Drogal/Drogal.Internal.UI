import { Column as PureColumn } from "primereact/column";
import type { ColumnProps } from "../../types/local__primereact/column/column";

/**
 * @description
 * Componente Avatar baseado no PrimeReact.
 * Utilizado para representar usuários, perfis ou entidades visuais
 * por meio de imagem, ícone ou texto.
 *
 * Encapsula o componente `Avatar` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Column = (props: ColumnProps) => {
  return <PureColumn {...props} />;
};
