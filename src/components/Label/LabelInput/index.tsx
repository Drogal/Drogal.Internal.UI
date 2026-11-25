interface LabelInputProps {
  title: string;
  name?: string;
  className?:string;
  /** Mostra o asterisco de obrigatório. O `required` do input é que informa o leitor de tela. */
  required?: boolean;
}
/**
 * @description
 * Componente LabelInput
 * Utilizado para Label dos Inputs em formulários
 *
 * Este componente adiciona um label,
 * exibido quando a propriedade `title` é informada e `name` é opcionalmente fornecida.
 *
 * Encapsula Utilizado para Label dos Inputs em formulários, mantendo total compatibilidade com todos
 * inputs.
 *
 */
const LabelInput: React.FC<LabelInputProps> = (props) => {
  return (
    <>
      <label htmlFor={props.name} className={`drg-label-input text-bluegray-500 ${props.className}`}>
        {props.title}
        {props.required && <span className="drg-label-input__required" aria-hidden="true"> *</span>}
      </label>
    </>
  );
}
export default LabelInput;
