import { IconField as PureIconField } from "primereact/iconfield";
import type { IconFieldProps } from "../../../types/local__primereact/iconfield/iconfield";

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
export const IconField = (props: IconFieldProps) => {
  return <PureIconField {...props} />;
};
