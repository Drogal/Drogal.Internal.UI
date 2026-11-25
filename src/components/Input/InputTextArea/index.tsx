import {
  InputTextarea as PureInputTextArea
} from "primereact/inputtextarea";
import type { InputTextareaProps } from "../../../types/local__primereact/inputtextarea/inputtextarea";
import InputFieldWrapper from "../../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../../Label/InputFieldWrapper/useFieldMessage";

interface ExtendedProps extends InputTextareaProps, FieldMessageProps {
  title: string;
}

/**
 * @description
 * Componente InputTextArea baseado no PrimeReact.
 * Utilizado para entrada de textos longos ou multilinha,
 * como descrições, observações ou comentários.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputTextarea` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputTextArea = ({ helpText, error, ...props }: ExtendedProps) => {
  const field = useFieldMessage({ helpText, error, invalid: props.invalid, describedBy: props["aria-describedby"] });
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
      <PureInputTextArea {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant}
        invalid={field.invalid}
        aria-describedby={field.describedBy}
      />
    </InputFieldWrapper>
  );
};
