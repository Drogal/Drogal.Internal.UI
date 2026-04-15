
import { InputIcon as PureInputIcon } from "primereact/inputicon";
import type { InputIconProps } from "../../../types/local__primereact/inputicon/inputicon";

/**
 * @description
 * Componente IconField baseado no PrimeReact.
 * Utilizado para agrupar campos de entrada com ícones,
 * facilitando a identificação visual e melhorando a usabilidade.
 *
 * Normalmente combinado com componentes de input
 * para criar campos com prefixos ou sufixos visuais.
 *
 * Encapsula o componente `IconField` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputIcon = (props: InputIconProps) => {
  return <PureInputIcon {...props} />;
};
