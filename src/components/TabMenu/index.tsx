import { TabMenu as PureTabMenu } from "primereact/tabmenu";
import type { TabMenuProps } from "../../types/local__primereact/tabmenu/tabmenu";

/**
 * @description
 * Componente TabMenu baseado no PrimeReact.
 * Utilizado para navegação por abas, permitindo
 * alternar entre diferentes visões ou seções.
 *
 * Ideal para menus horizontais e organização
 * de conteúdos relacionados.
 *
 * Encapsula o componente `TabMenu` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const TabMenu = (props: TabMenuProps) => {
  return <PureTabMenu {...props} />;
};
