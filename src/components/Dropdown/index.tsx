import { Dropdown as PureAutoComplete, type DropdownProps } from "primereact/dropdown";
import LabelInput from "../Label/LabelInput";

interface ExtendedProps extends DropdownProps {
  title: string;
}

/**
 * @description
 * O Dropdown é um componente de seleção que permite ao usuário escolher uma opção de uma lista suspensa.
 *
 * Encapsula o componente `Dropdown` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Dropdown = (props: ExtendedProps) => {
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureAutoComplete {...props} />
    </div>
  );
};
