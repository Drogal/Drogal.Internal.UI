import type { CSSProperties } from "react";
import { Skeleton } from "../Skeleton";
import type { SchedulerView } from "./types";

/** Quantidade de colunas e linhas do skeleton quando o pai ainda não tem dados. */
const DEFAULT_COLUMNS: Record<SchedulerView, number> = { day: 1, week: 5, month: 5 };
const DEFAULT_ROWS: Record<SchedulerView, number> = { day: 12, week: 12, month: 5 };

interface SchedulerSkeletonProps {
  view: SchedulerView;
  /** Colunas já conhecidas; com zero usa o padrão da visão. */
  columns?: number;
  /** Linhas já conhecidas; com zero usa o padrão da visão. */
  rows?: number;
}

/** Placeholder de carregamento com o mesmo formato da grade da visão atual. */
export const SchedulerSkeleton = ({ view, columns, rows }: SchedulerSkeletonProps) => {
  const columnCount = columns || DEFAULT_COLUMNS[view];
  const rowCount = rows || DEFAULT_ROWS[view];

  const gridStyle: CSSProperties = {
    gridTemplateColumns: `var(--drg-scheduler-lines-width) repeat(${columnCount}, minmax(var(--drg-scheduler-column-min-width), 1fr))`,
    gridTemplateRows: `auto repeat(${rowCount}, var(--drg-scheduler-row-height))`,
  };

  return (
    <div
      className="drg-scheduler__grid drg-scheduler__skeleton"
      style={gridStyle}
      role="status"
      aria-busy="true"
      aria-label="Carregando horários"
    >
      {Array.from({ length: columnCount + 1 }, (_, index) => (
        <Skeleton key={`header-${index}`} height="2.75rem" />
      ))}
      {Array.from({ length: rowCount * (columnCount + 1) }, (_, index) => (
        <Skeleton key={`cell-${index}`} height="100%" />
      ))}
    </div>
  );
};
