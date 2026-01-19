import {
  InputNumber as PureInputNumber,
  type InputNumberProps
} from "primereact/inputnumber";
import LabelInput from "../../Label/LabelInput";

interface ExtendedProps extends InputNumberProps {
  title: string;
}

/**
 * @description
 * Componente InputNumber baseado no PrimeReact.
 * Utilizado para entrada de valores numéricos, com suporte a
 * formatação, casas decimais, moedas e validações.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputNumber` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputNumber = (props: ExtendedProps) => {
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureInputNumber {...props} />
    </div>
  );
};
