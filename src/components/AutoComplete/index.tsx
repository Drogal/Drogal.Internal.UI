import { AutoComplete as PureAutoComplete, type AutoCompleteProps } from "primereact/autocomplete";
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
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureAutoComplete {...props} />
    </div>
  );
};
