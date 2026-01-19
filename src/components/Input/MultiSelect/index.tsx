import {
  MultiSelect as PureMultiSelect,
  type MultiSelectProps
} from "primereact/multiselect";
import LabelInput from "../../Label/LabelInput";


interface ExtendedProps extends MultiSelectProps {
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
export const MultiSelect = (props: ExtendedProps) => {
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureMultiSelect {...props} />
    </div>
  );
};
