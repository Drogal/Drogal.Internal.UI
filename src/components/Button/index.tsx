import { Button as PureButton, type ButtonProps } from "primereact/button";

export type { ButtonProps };

/**
 * @description
 * Componente Button baseado no PrimeReact.
 * Utilizado para acionar ações, submeter formulários
 * ou iniciar fluxos de navegação na interface.
 *
 * Encapsula o componente `Button` do PrimeReact,
 * mantendo compatibilidade total com suas props originais.
 */
export const Button = (props: ButtonProps) => {
  return <PureButton {...props} />;
};
