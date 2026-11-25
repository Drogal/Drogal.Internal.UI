import { InputSwitch as PureInputSwitch } from "primereact/inputswitch";
import type { InputSwitchProps } from "../../../types/local__primereact/inputswitch/inputswitch";
import InputFieldWrapper from "../../Label/InputFieldWrapper";

export type InputSwitchVariant = "default" | "card";

export interface InputSwitchDrgProps extends InputSwitchProps {
  /** Rótulo. No `default` fica acima do switch; no `card`, ao lado, como título. */
  title?: string;
  /** Texto de apoio abaixo do título. Usado só no `card`. */
  description?: string;
  /**
   * `default`: label acima do switch.
   * `card`: caixa clicável com o switch à esquerda, título e descrição (Toggle Field, ex.: "Dividir pagamento").
   * @default 'default'
   */
  variant?: InputSwitchVariant;
}

/**
 * @description
 * Componente InputSwitch baseado no PrimeReact.
 * Utilizado para alternar estados booleanos como
 * ativado/desativado ou ligado/desligado.
 *
 * Na variante `default`, adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Na variante `card` (Toggle Field), a caixa inteira é o rótulo do switch:
 * clicar em qualquer parte alterna o valor. Ligado, a caixa fica azul.
 *
 * Encapsula o componente `InputSwitch` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputSwitch = ({ title, description, variant = "default", ...props }: InputSwitchDrgProps) => {
  if (variant === "card") {
    const classes = [
      "drg-toggle-field",
      props.checked ? "drg-toggle-field--checked" : "",
      props.disabled ? "drg-toggle-field--disabled" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label className={classes}>
        <PureInputSwitch {...props} />
        <span className="drg-toggle-field__text">
          {title && <span className="drg-toggle-field__title">{title}</span>}
          {description && <span className="drg-toggle-field__description">{description}</span>}
        </span>
      </label>
    );
  }

  return (
    <InputFieldWrapper title={title} name={props.name}>
      <PureInputSwitch {...props} />
    </InputFieldWrapper>
  );
};
