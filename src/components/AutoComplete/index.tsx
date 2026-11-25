import { AutoComplete as PureAutoComplete } from "primereact/autocomplete";
import type { AutoCompleteProps } from "../../types/local__primereact/autocomplete/autocomplete";
import InputFieldWrapper from "../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../Label/InputFieldWrapper/useFieldMessage";

// @ts-ignore: Ignore next line for documentation generation
interface ExtendedProps extends AutoCompleteProps, FieldMessageProps {
  title: string;
  multiple?: boolean;
}

/**
 * @description
 * O AutoComplete é um componente de entrada que fornece sugestões em tempo real enquanto o usuário digita.
 *
 * Encapsula o componente `AutoComplete` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const AutoComplete = ({ helpText, error, ...props }: ExtendedProps) => {
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
      <PureAutoComplete {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant}
        invalid={field.invalid}
        aria-describedby={field.describedBy}
      />
    </InputFieldWrapper>
  );
};
