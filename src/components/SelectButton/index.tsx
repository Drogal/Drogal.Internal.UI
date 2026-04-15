import { SelectButton as PureSelectButton } from "primereact/selectbutton";
import type { SelectButtonProps } from "../../types/local__primereact/selectbutton/selectbutton";

/**
 * @description
 * Componente SelectButton baseado no PrimeReact.
 * Utilizado para seleção de uma ou múltiplas opções
 * exibidas como botões.
 *
 * Ideal para alternar estados, filtros ou escolhas
 * rápidas em interfaces de usuário.
 *
 * Encapsula o componente `SelectButton` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const SelectButton = (props: SelectButtonProps) => {
  return <PureSelectButton {...props} />;
};
