import { InputNumber as PureInputNumber } from "primereact/inputnumber";
import type { InputNumberProps } from "../../../types/local__primereact/inputnumber/inputnumber";
import EnumIcons from "../../../icons/EnumIcons";
import InputFieldWrapper from "../../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../../Label/InputFieldWrapper/useFieldMessage";

export interface InputNumberDrgProps extends InputNumberProps, FieldMessageProps {
  title?: string;
  /**
   * Versão compacta "− 1 +", com os botões na horizontal, para quantidades em tabelas
   * (ex.: carrinho). Liga `showButtons` e `buttonLayout="horizontal"` e usa os ícones do DS.
   * No limite (`min`/`max`), o botão correspondente fica cinza.
   */
  compact?: boolean;
}

const LIMIT_CLASS = "drg-inputnumber__button--limit";

/**
 * @description
 * Componente InputNumber baseado no PrimeReact.
 * Utilizado para entrada de valores numéricos, com suporte a
 * formatação, casas decimais, moedas e validações.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Com `compact`, vira o seletor de quantidade "− 1 +" do Sistema de Vendas.
 *
 * Encapsula o componente `InputNumber` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputNumber = ({ helpText, error, compact = false, ...props }: InputNumberDrgProps) => {
  const field = useFieldMessage({ helpText, error, invalid: props.invalid, describedBy: props["aria-describedby"] });
  const { disabled, value, min, max } = props;

  const compactProps: Partial<InputNumberProps> = compact
    ? {
        showButtons: true,
        buttonLayout: "horizontal",
        incrementButtonIcon: props.incrementButtonIcon ?? `drg-icon ${EnumIcons.Outlined.add}`,
        decrementButtonIcon: props.decrementButtonIcon ?? `drg-icon ${EnumIcons.Outlined.remove}`,
        decrementButtonClassName: [
          props.decrementButtonClassName,
          value != null && min != null && value <= min ? LIMIT_CLASS : "",
        ]
          .filter(Boolean)
          .join(" "),
        incrementButtonClassName: [
          props.incrementButtonClassName,
          value != null && max != null && value >= max ? LIMIT_CLASS : "",
        ]
          .filter(Boolean)
          .join(" "),
        className: ["drg-inputnumber--compact", props.className].filter(Boolean).join(" "),
      }
    : {};

  return (
    <InputFieldWrapper
      title={props.title}
      name={props.name}
      required={props.required}
      helpText={helpText}
      error={error}
      messageId={field.messageId}
    >
      <PureInputNumber {...props} {...compactProps} disabled={disabled} variant={disabled ? 'filled' : props.variant}
        invalid={field.invalid}
        aria-describedby={field.describedBy}
      />
    </InputFieldWrapper>
  );
};
