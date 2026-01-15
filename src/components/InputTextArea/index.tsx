import {
  InputTextarea as PureInputTextArea,
  type InputTextareaProps
} from "primereact/inputtextarea";

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
export const InputTextArea = (props: InputTextareaProps) => {
  return (
    <div className="flex flex-column gap-2">
      {props?.title && (
        <label htmlFor={props.name}>{props.title}</label>
      )}
      <PureInputTextArea {...props} />
    </div>
  );
};
