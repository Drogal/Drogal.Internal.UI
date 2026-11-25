import { Calendar as PureCalendar } from "primereact/calendar";
import type { CalendarProps } from "../../../types/local__primereact/calendar/calendar";
import InputFieldWrapper from "../../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../../Label/InputFieldWrapper/useFieldMessage";

interface ExtendedProps extends CalendarProps, FieldMessageProps {
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
export const Calendar = ({ helpText, error, ...props }: ExtendedProps) => {
  // O Calendar do PrimeReact não repassa aria-describedby ao input interno; só o invalid é ligado.
  const field = useFieldMessage({ helpText, error, invalid: props.invalid });
  const { disabled } = props;
  return (
    <InputFieldWrapper
      title={props.title}
      name={props.name}
      required={props.required}
      helpText={helpText}
      error={error}
      messageId={field.messageId}
    >
      <PureCalendar {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant}
        invalid={field.invalid}
      />
    </InputFieldWrapper>
  );
};
