import { Paginator as PurePaginator } from "primereact/paginator";
import type { PaginatorProps } from "../../types/local__primereact/paginator/paginator";

/**
 * @description
 * Componente Paginator baseado no PrimeReact.
 * Utilizado para controle de paginação de listas
 * e tabelas de dados.
 *
 * Permite navegação entre páginas, definição de
 * quantidade de itens por página e controle de estado.
 *
 * Encapsula o componente `Paginator` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Paginator = (props: PaginatorProps) => {
  return <PurePaginator {...props} />;
};
