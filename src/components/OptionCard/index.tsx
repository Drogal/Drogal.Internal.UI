import type { ComponentProps, CSSProperties } from "react";
import { SelectButton as PureSelectButton } from "primereact/selectbutton";
import { Icon } from "../Icon";

type IconName = ComponentProps<typeof Icon>["name"];

export type OptionCardValue = string | number;

export interface OptionCardOption {
  value: OptionCardValue;
  label: string;
  /** Texto de apoio abaixo do rótulo. Só aparece no tamanho `large`. */
  description?: string;
  icon?: IconName;
  disabled?: boolean;
}

export type OptionCardSize = "large" | "compact";

export interface OptionCardProps {
  options: OptionCardOption[];
  value?: OptionCardValue | null;
  onChange: (value: OptionCardValue) => void;
  /**
   * `large`: cartão de 200×110 com ícone, rótulo e descrição (formas de pagamento).
   * `compact`: botão de 40px com ícone e rótulo.
   * @default 'large'
   */
  size?: OptionCardSize;
  /** Rótulo do grupo para leitor de tela (ex.: "Forma de pagamento"). */
  "aria-label"?: string;
  /** Id de um título visível que nomeia o grupo, no lugar de `aria-label`. */
  "aria-labelledby"?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * @description
 * Componente OptionCard.
 * Escolha de uma opção entre poucas, em cartões, como a forma de pagamento
 * (PIX, cartão, dinheiro). Sempre há uma selecionada: clicar na já
 * selecionada não a desmarca.
 *
 * Usa o `SelectButton` do PrimeReact por baixo, com o mesmo teclado
 * (Tab entre as opções, Enter ou Espaço para escolher).
 */
export const OptionCard = ({
  options,
  value,
  onChange,
  size = "large",
  disabled,
  className,
  style,
  ...aria
}: OptionCardProps) => {
  const classes = ["drg-option-card", `drg-option-card--${size}`, className].filter(Boolean).join(" ");

  const itemTemplate = (option: OptionCardOption) => (
    <span className="drg-option-card__content">
      {option.icon && (
        <span className="drg-option-card__icon" aria-hidden="true">
          <Icon name={option.icon} />
        </span>
      )}
      <span className="drg-option-card__label">{option.label}</span>
      {size === "large" && option.description && (
        <span className="drg-option-card__description">{option.description}</span>
      )}
    </span>
  );

  return (
    <PureSelectButton
      {...aria}
      className={classes}
      style={style}
      options={options}
      value={value}
      optionLabel="label"
      optionValue="value"
      optionDisabled="disabled"
      allowEmpty={false}
      disabled={disabled}
      itemTemplate={itemTemplate}
      onChange={(event) => {
        if (event.value !== null && event.value !== undefined) onChange(event.value as OptionCardValue);
      }}
    />
  );
};
