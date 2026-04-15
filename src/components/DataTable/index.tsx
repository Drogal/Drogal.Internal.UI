import { DataTable as PureDataTable, type DataTableValueArray } from "primereact/datatable";
import type { DataTableProps } from "../../types/local__primereact/datatable/datatable";

/**
 * @description
 * Componente DataTable baseado no PrimeReact.
 * Utilizado para exibição de dados tabulares com suporte a
 * paginação, ordenação, filtros e seleção de linhas.
 *
 * Implementa tipagem genérica para garantir segurança de tipos
 * nas operações sobre os dados da tabela.
 *
 * Encapsula o componente `DataTable` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const DataTable = <T extends DataTableValueArray>(
  props: DataTableProps<T>
) => {
  return <PureDataTable {...props} />;
};



