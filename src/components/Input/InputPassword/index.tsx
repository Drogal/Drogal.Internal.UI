import { Password as PureInputPassword } from "primereact/password";
import type { PasswordProps } from "../../../types/local__primereact/password/password";
import InputFieldWrapper from "../../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../../Label/InputFieldWrapper/useFieldMessage";

interface ExtendedProps extends PasswordProps, FieldMessageProps {
  title: string;
}

/**
 * @description
 * Componente InputPassword baseado no PrimeReact.
 * Utilizado para entrada segura de senhas, com recursos
 * como máscara, feedback de força e alternância de visibilidade.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `Password` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputPassword = ({ helpText, error, ...props }: ExtendedProps) => {
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
      <PureInputPassword {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant}
        invalid={field.invalid}
        aria-describedby={field.describedBy}
      />
    </InputFieldWrapper>
  );
};
