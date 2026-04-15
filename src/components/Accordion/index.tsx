import { Accordion as PureAccordion } from "primereact/accordion";
import type { AccordionProps } from "../../types/local__primereact/accordion/accordion";


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