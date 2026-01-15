import {
  InputText as PureInputText,
  type InputTextProps
} from "primereact/inputtext";

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
 */
export const InputText = (props: InputTextProps) => {
  return (
    <div className="flex flex-column gap-2">
      {props?.title && (
        <label htmlFor={props.name}>{props.title}</label>
      )}
      <PureInputText {...props} />
    </div>
  );
};
