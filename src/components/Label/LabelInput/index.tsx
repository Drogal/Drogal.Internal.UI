interface LabelInputProps {
  title: string;
  name?: string;
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
      <label htmlFor={props.name} className="drg-label-input">{props.title}</label>
    </>
  );
}
export default LabelInput;
