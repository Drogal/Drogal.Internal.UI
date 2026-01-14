import { DataTable as PureDataTable, type DataTableProps, type DataTableValueArray } from "primereact/datatable";

export function DataTable<T extends DataTableValueArray>(props: DataTableProps<T>) {
  return <PureDataTable {...props} />;
}
