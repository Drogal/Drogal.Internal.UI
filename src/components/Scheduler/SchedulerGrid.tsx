import type { CSSProperties } from "react";
import { SchedulerCell } from "./SchedulerCell";
import type {
  SchedulerCell as SchedulerCellModel,
  SchedulerColumn,
  SchedulerLegendLabels,
  SchedulerLine,
} from "./types";

/** Linha e coluna ocupadas pelos cabeçalhos da grade. */
const HEADER_OFFSET = 1;

interface SchedulerGridProps {
  /** Colunas já ordenadas por `order`. */
  columns: SchedulerColumn[];
  /** Linhas já ordenadas por `order`. */
  lines: SchedulerLine[];
  cells: SchedulerCellModel[];
  linesHeader: string;
  variantLabels: SchedulerLegendLabels;
}

const isInsideGrid = (cell: SchedulerCellModel, rowCount: number, columnCount: number): boolean => {
  const [rowStart, colStart, rowEnd, colEnd] = cell.gridArea;
  return (
    rowStart >= 1 &&
    colStart >= 1 &&
    rowEnd > rowStart &&
    colEnd > colStart &&
    rowEnd <= rowCount + 1 &&
    colEnd <= columnCount + 1
  );
};

export const SchedulerGrid = ({ columns, lines, cells, linesHeader, variantLabels }: SchedulerGridProps) => {
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `var(--drg-scheduler-lines-width) repeat(${columns.length}, minmax(var(--drg-scheduler-column-min-width), 1fr))`,
    gridTemplateRows: `auto repeat(${lines.length}, var(--drg-scheduler-row-height))`,
  };

  const describe = (cell: SchedulerCellModel): string => {
    const [rowStart, colStart, rowEnd] = cell.gridArea;
    const column = columns[colStart - 1];
    const firstLine = lines[rowStart - 1];
    const lastLine = lines[rowEnd - 2];
    const period =
      cell.timeLabel ??
      (firstLine && lastLine && lastLine !== firstLine
        ? `${firstLine.title} a ${lastLine.title}`
        : firstLine?.title);

    return [
      column && [column.title, column.subtitle].filter(Boolean).join(" "),
      period,
      cell.title,
      cell.subtitle,
      variantLabels[cell.variant],
    ]
      .filter(Boolean)
      .join(", ");
  };

  return (
    <div className="drg-scheduler__grid" style={gridStyle}>
      <div className="drg-scheduler__corner" style={{ gridArea: "1 / 1" }}>
        {linesHeader}
      </div>

      {columns.map((column, index) => {
        const style: CSSProperties = { gridArea: `1 / ${index + 1 + HEADER_OFFSET}` };
        const className = `drg-scheduler__column-header${column.highlight ? " drg-scheduler__column-header--highlight" : ""}`;
        const content = (
          <>
            <span className="drg-scheduler__column-title">{column.title}</span>
            {column.subtitle && <span className="drg-scheduler__column-subtitle">{column.subtitle}</span>}
          </>
        );

        return column.onClick ? (
          <button
            key={column.id}
            type="button"
            className={`${className} drg-scheduler__column-header--clickable`}
            style={style}
            onClick={column.onClick}
          >
            {content}
          </button>
        ) : (
          <div key={column.id} className={className} style={style}>
            {content}
          </div>
        );
      })}

      {lines.map((line, index) => {
        const style: CSSProperties = { gridArea: `${index + 1 + HEADER_OFFSET} / 1` };

        return line.onClick ? (
          <button
            key={line.id}
            type="button"
            className="drg-scheduler__line-header drg-scheduler__line-header--clickable"
            style={style}
            onClick={line.onClick}
          >
            {line.title}
          </button>
        ) : (
          <div key={line.id} className="drg-scheduler__line-header" style={style}>
            {line.title}
          </div>
        );
      })}

      {cells.map((cell) => {
        if (!isInsideGrid(cell, lines.length, columns.length)) {
          console.warn(`[Scheduler] Célula "${cell.id}" ignorada: gridArea fora da grade.`);
          return null;
        }

        const [rowStart, colStart, rowEnd, colEnd] = cell.gridArea;
        const style: CSSProperties = {
          gridArea: `${rowStart + HEADER_OFFSET} / ${colStart + HEADER_OFFSET} / ${rowEnd + HEADER_OFFSET} / ${colEnd + HEADER_OFFSET}`,
        };

        return <SchedulerCell key={cell.id} cell={cell} style={style} description={describe(cell)} />;
      })}
    </div>
  );
};
