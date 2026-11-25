import {
  InputText as PureInputText
} from "primereact/inputtext";
import type { InputTextProps } from "../../../types/local__primereact/inputtext/inputtext";
import InputFieldWrapper from "../../Label/InputFieldWrapper";

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
  disabled?: boolean;
}

export const InputText = (props: InputTextDrgProps) => {

  const { disabled } = props;

  return (
    <InputFieldWrapper title={props.title} name={props.name}>
      <PureInputText {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant} />
    </InputFieldWrapper>
  );
};
