import { AutoComplete as PureAutoComplete } from "primereact/autocomplete";
import type { AutoCompleteProps } from "../../types/local__primereact/autocomplete/autocomplete";
import LabelInput from "../Label/LabelInput";

// @ts-ignore: Ignore next line for documentation generation
interface ExtendedProps extends AutoCompleteProps {
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
export const AutoComplete = (props: ExtendedProps) => {
  const { disabled } = props;
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureAutoComplete {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant} />
    </div>
  );
};
