import { Calendar as PureCalendar } from "primereact/calendar";
import type { CalendarProps } from "../../../types/local__primereact/calendar/calendar";
import InputFieldWrapper from "../../Label/InputFieldWrapper";

interface ExtendedProps extends CalendarProps {
  title: string;
}

/**
 * @description
 * Componente Calendar baseado no PrimeReact.
 * Utilizado para seleção de datas, horários ou intervalos,
 * oferecendo suporte a diferentes formatos e modos de exibição.
 *
 * Encapsula o componente `Calendar` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Calendar = (props: ExtendedProps) => {
  const { disabled } = props;
  return (
    <InputFieldWrapper title={props.title} name={props.name}>
      <PureCalendar {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant} />
    </InputFieldWrapper>
  );
};
