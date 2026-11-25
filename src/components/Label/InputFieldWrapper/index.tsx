import type { ReactNode } from "react";
import LabelInput from "../LabelInput";
import type { FieldMessageProps } from "./useFieldMessage";

interface InputFieldWrapperProps extends FieldMessageProps {
  title?: string;
  name?: string;
  /** Mostra o asterisco de obrigatório ao lado do label. */
  required?: boolean;
  /** Id da mensagem de ajuda ou erro, o mesmo do `aria-describedby` do input (ver `useFieldMessage`). */
  messageId?: string;
  children: ReactNode;
}

/**
 * @description
 * Wrapper compartilhado pelos inputs do DS.
 *
 * Com `title` preenchido, renderiza o label acima do input
 * dentro de `.drg-input-spacing`. Com `helpText` ou `error`, renderiza
 * a mensagem abaixo do input (o erro tem prioridade e deixa a borda vermelha).
 * Sem nenhum deles, renderiza apenas o input, sem wrapper, para não
 * reservar o espaço do label.
 */
const InputFieldWrapper = ({ title, name, required, helpText, error, messageId, children }: InputFieldWrapperProps) => {
  const hasTitle = Boolean(title?.trim());
  const message = error || helpText;

  if (!hasTitle && !message) {
    return <>{children}</>;
  }

  return (
    <div className={`drg-input-spacing${error ? " drg-field--invalid" : ""}`}>
      {hasTitle && <LabelInput title={title as string} name={name} required={required} />}
      {message ? (
        <div className="drg-field__control">
          {children}
          <small
            id={messageId}
            className={error ? "drg-field__error" : "drg-field__help"}
            aria-live={error ? "polite" : undefined}
          >
            {message}
          </small>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default InputFieldWrapper;
