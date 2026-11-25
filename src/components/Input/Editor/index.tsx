import { Editor as PureEditor } from "primereact/editor";
import type { EditorProps } from "../../../types/local__primereact/editor/editor";
import InputFieldWrapper from "../../Label/InputFieldWrapper";
import { useFieldMessage, type FieldMessageProps } from "../../Label/InputFieldWrapper/useFieldMessage";

interface ExtendedProps extends EditorProps, FieldMessageProps {
  title: string;
}

/**
 * @description
 * Componente Editor baseado no PrimeReact.
 * Utilizado para edição de conteúdo em formato rich text,
 * oferecendo recursos como formatação, listas, links e mídia.
 *
 * Ideal para criação e edição de textos ricos em formulários
 * ou interfaces administrativas.
 *
 * Encapsula o componente `Editor` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Editor = ({ helpText, error, ...props }: ExtendedProps) => {
  const field = useFieldMessage({ helpText, error });
  return (
    <InputFieldWrapper
      title={props.title}
      name={props.name}
      helpText={helpText}
      error={error}
      messageId={field.messageId}
    >
      <PureEditor {...props} />
    </InputFieldWrapper>
  )
};
