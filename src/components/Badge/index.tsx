import { Badge as PureBadge } from "primereact/badge";
import type { BadgeProps } from "../../types/local__primereact/badge/badge";

/**
 * @description
 * Componente Badge baseado no PrimeReact.
 * Utilizado para exibir contadores, status ou pequenas
 * informações de destaque associadas a elementos da interface.
 *
 * Encapsula o componente `Badge` do PrimeReact,
 * preservando total compatibilidade com suas props originais.
 */
export const Badge = (props: BadgeProps) => {
  return <PureBadge {...props} />;
};
