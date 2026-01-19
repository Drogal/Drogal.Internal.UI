import { Editor as PureEditor, type EditorProps } from "primereact/editor";
import LabelInput from "../../Label/LabelInput";

interface ExtendedProps extends EditorProps {
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
export const Editor = (props: ExtendedProps) => {
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureEditor {...props} />
    </div>
  )
};
