import { Accordion as PureAccordion, type AccordionProps } from "primereact/accordion";


/**
 * @description
 * Componente Accordion baseado no PrimeReact.
 * Utilizado para organizar conteúdos colapsáveis em seções expansíveis.
 *
 * Encapsula o componente `Accordion` do PrimeReact,
 * mantendo compatibilidade total com suas props originais.
 */
export const Accordion = (props: AccordionProps) => {
  return <PureAccordion {...props} />;
};