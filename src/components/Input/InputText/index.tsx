import {
  InputText as PureInputText,
  type InputTextProps
} from "primereact/inputtext";
import LabelInput from "../../Label/LabelInput";

/**
 * @description
 * Componente InputText baseado no PrimeReact.
 * Utilizado para entrada de textos simples em formulários
 * e interfaces de usuário.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputText` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 * 
 */


export interface InputTextDrgProps extends InputTextProps {
  title: string;
}

export const InputText = (props: InputTextDrgProps) => {
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureInputText {...props} />
    </div>
  );
};
