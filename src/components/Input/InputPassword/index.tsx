import { Password as PureInputPassword } from "primereact/password";
import type { PasswordProps } from "../../../types/local__primereact/password/password";
import LabelInput from "../../Label/LabelInput";

interface ExtendedProps extends PasswordProps {
  title: string;
}

/**
 * @description
 * Componente InputPassword baseado no PrimeReact.
 * Utilizado para entrada segura de senhas, com recursos
 * como máscara, feedback de força e alternância de visibilidade.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `Password` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputPassword = (props: ExtendedProps) => {
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureInputPassword {...props} />
    </div>
  );

};
