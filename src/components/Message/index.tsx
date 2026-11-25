import { Message as PureMessage } from "primereact/message";
import type { MessageProps } from "../../types/local__primereact/message/message";

export type { MessageProps };

/**
 * @description
 * Componente Message baseado no PrimeReact.
 * Utilizado para exibir mensagens de retorno em linha, como sucesso,
 * aviso ou erro, junto do conteúdo a que se referem.
 *
 * Também é a base do `Result` (resultado de pagamento, rejeição da SEFAZ),
 * que usa o `content` para montar o layout centralizado.
 *
 * Encapsula o componente `Message` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Message = (props: MessageProps) => {
  return <PureMessage {...props} />;
};
