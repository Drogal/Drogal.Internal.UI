import { MultiSelect as PureMultiSelect } from "primereact/multiselect";
import type { MultiSelectProps } from "../../../types/local__primereact/multiselect/multiselect";
import InputFieldWrapper from "../../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../../Label/InputFieldWrapper/useFieldMessage";


interface ExtendedProps extends MultiSelectProps, FieldMessageProps {
  title: string;
}

/**
 * @description
 * Componente MultiSelect baseado no PrimeReact.
 * Utilizado para seleção de múltiplos itens a partir
 * de uma lista de opções.
 *
 * Ideal para cenários onde o usuário pode escolher
 * mais de um valor em formulários ou filtros.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `MultiSelect` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const MultiSelect = ({ helpText, error, ...props }: ExtendedProps) => {
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
      <PureMultiSelect {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant}
        invalid={field.invalid}
        aria-describedby={field.describedBy}
      />
    </InputFieldWrapper>
  );
};
