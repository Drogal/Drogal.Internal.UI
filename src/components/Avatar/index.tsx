import { Avatar as PureAvatar } from "primereact/avatar";
import type { AvatarProps } from "../../types/local__primereact/avatar/avatar";

/**
 * @description
 * Componente Avatar baseado no PrimeReact.
 * Utilizado para representar usuários, perfis ou entidades visuais
 * por meio de imagem, ícone ou texto.
 *
 * Encapsula o componente `Avatar` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Avatar = (props: AvatarProps) => {
  return <PureAvatar {...props} />;
};
