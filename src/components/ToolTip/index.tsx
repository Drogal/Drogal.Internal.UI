import {
  Tooltip as PureToolTip,
  type TooltipProps
} from "primereact/tooltip";

/**
 * @description
 * Componente ToolTip baseado no PrimeReact.
 * Utilizado para organizar conteúdos em abas,
 * permitindo alternar entre diferentes painéis.
 *
 * Atua como container principal dos componentes `TabPanel`.
 *
 * Encapsula o componente `TabView` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const ToolTip = (props: TooltipProps) => {
  return <PureToolTip {...props} />;
};
