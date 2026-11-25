import { useId } from "react";

export interface FieldMessageProps {
  /** Texto de ajuda exibido abaixo do campo (ex.: "Somente números; a máscara é aplicada automaticamente."). */
  helpText?: string;
  /** Mensagem de erro exibida abaixo do campo. Também marca o campo como inválido e tem prioridade sobre `helpText`. */
  error?: string;
}

interface UseFieldMessageOptions extends FieldMessageProps {
  /** `invalid` vindo das props do input, para não perder quem já usa. */
  invalid?: boolean;
  /** `aria-describedby` vindo das props do input, mantido junto do id da mensagem. */
  describedBy?: string;
}

/**
 * Liga o input à mensagem de ajuda ou de erro do `InputFieldWrapper`:
 * gera o id da mensagem, monta o `aria-describedby` e calcula o `invalid`.
 */
export const useFieldMessage = ({ helpText, error, invalid, describedBy }: UseFieldMessageOptions) => {
  const messageId = useId();
  const hasMessage = Boolean(error || helpText);

  return {
    messageId,
    invalid: Boolean(error) || Boolean(invalid),
    describedBy: hasMessage ? [describedBy, messageId].filter(Boolean).join(" ") : describedBy,
  };
};
