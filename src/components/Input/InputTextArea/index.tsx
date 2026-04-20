import {
  InputTextarea as PureInputTextArea
} from "primereact/inputtextarea";
import type { InputTextareaProps } from "../../../types/local__primereact/inputtextarea/inputtextarea";
import LabelInput from "../../Label/LabelInput";

interface ExtendedProps extends InputTextareaProps {
  title: string;
}

/**
 * @description
 * Componente InputTextArea baseado no PrimeReact.
 * Utilizado para entrada de textos longos ou multilinha,
 * como descrições, observações ou comentários.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputTextarea` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputTextArea = (props: ExtendedProps) => {
  const { disabled } = props;
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureInputTextArea {...props} disabled={disabled} variant={disabled ? 'filled' : props.variant} />
    </div>
  );
};
