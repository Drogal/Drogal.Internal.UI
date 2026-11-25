import type { ReactNode } from "react";
import LabelInput from "../LabelInput";

interface InputFieldWrapperProps {
  title?: string;
  name?: string;
  children: ReactNode;
}

/**
 * @description
 * Wrapper compartilhado pelos inputs do DS.
 *
 * Com `title` preenchido, renderiza o label acima do input
 * dentro de `.drg-input-spacing`. Sem `title` (ou só com espaços),
 * renderiza apenas o input, sem wrapper, para não reservar
 * o espaço do label.
 */
const InputFieldWrapper = ({ title, name, children }: InputFieldWrapperProps) => {
  const hasTitle = Boolean(title?.trim());

  if (!hasTitle) {
    return <>{children}</>;
  }

  return (
    <div className="drg-input-spacing">
      <LabelInput title={title as string} name={name} />
      {children}
    </div>
  );
};

export default InputFieldWrapper;
