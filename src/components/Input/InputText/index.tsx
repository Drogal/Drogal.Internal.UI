import {
  InputText as PureInputText
} from "primereact/inputtext";
import type { InputTextProps } from "../../../types/local__primereact/inputtext/inputtext";
import InputFieldWrapper from "../../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../../Label/InputFieldWrapper/useFieldMessage";

/**
 * @description
 * Componente InputText baseado no PrimeReact.
 * Utilizado para entrada de textos simples em formulários
 * e interfaces de usuário.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputText` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 * 
 */


export interface InputTextDrgProps extends InputTextProps, FieldMessageProps {
  title: string;
  disabled?: boolean;
}

export const InputText = ({ helpText, error, ...props }: InputTextDrgProps) => {
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
      <PureInputText {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant}
        invalid={field.invalid}
        aria-describedby={field.describedBy}
      />
    </InputFieldWrapper>
  );
};
