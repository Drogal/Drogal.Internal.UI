import { Calendar as PureCalendar, type CalendarProps } from "primereact/calendar";
import LabelInput from "../../Label/LabelInput";

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
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureCalendar {...props} />
    </div>
  )

};
