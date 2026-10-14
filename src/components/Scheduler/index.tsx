import { Skeleton } from "../Skeleton";
import { DEFAULT_LEGEND_LABELS } from "./constants";
import { SchedulerGrid } from "./SchedulerGrid";
import { SchedulerHeader } from "./SchedulerHeader";
import { SchedulerLegend } from "./SchedulerLegend";
import type { SchedulerLegendLabels, SchedulerProps, SchedulerView } from "./types";

const DEFAULT_VIEWS: SchedulerView[] = ["day", "week", "month"];
const SKELETON_ROWS = 8;

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

/**
 * @description
 * Componente Scheduler.
 * Grade de horários genérica: recebe colunas (ex.: dias da semana), linhas
 * (ex.: horários de 30 minutos) e células posicionadas por `gridArea`, com as
 * variantes disponível, reservado e indisponível.
 *
 * Não conhece o domínio de salas e reservas. Para converter a lista de
 * `Horario` da API em colunas, linhas e células use `mapHorariosToScheduler`.
 *
 * O cabeçalho (navegação, "Hoje" e seletor de visão) é controlado pelo pai
 * por meio de `title`, `view` e callbacks.
 */
export const Scheduler = ({
  columns,
  lines,
  cells,
  title,
  linesHeader = "Horário",
  view = "week",
  views = DEFAULT_VIEWS,
  onViewChange,
  onPrevious,
  onNext,
  onToday,
  todayLabel = "Hoje",
  showLegend = true,
  legend,
  loading = false,
  emptyMessage = "Nenhum horário para exibir.",
  className,
  style,
}: SchedulerProps) => {
  const sortedColumns = [...columns].sort(byOrder);
  const sortedLines = [...lines].sort(byOrder);
  const legendLabels: SchedulerLegendLabels = { ...DEFAULT_LEGEND_LABELS, ...legend };
  const showHeader = Boolean(title || onPrevious || onNext || onToday || views.length > 1);
  const isEmpty = sortedColumns.length === 0 || sortedLines.length === 0;

  const renderBody = () => {
    if (loading) {
      return (
        <div className="drg-scheduler__loading" role="status" aria-busy="true" aria-label="Carregando horários">
          {Array.from({ length: SKELETON_ROWS }, (_, index) => (
            <Skeleton key={index} width="100%" height="var(--drg-scheduler-row-height)" />
          ))}
        </div>
      );
    }

    if (isEmpty) {
      return <p className="drg-scheduler__empty">{emptyMessage}</p>;
    }

    return (
      <SchedulerGrid
        columns={sortedColumns}
        lines={sortedLines}
        cells={cells}
        linesHeader={linesHeader}
        variantLabels={legendLabels}
      />
    );
  };

  return (
    <div className={`drg-scheduler${className ? ` ${className}` : ""}`} style={style}>
      {showHeader && (
        <SchedulerHeader
          title={title}
          view={view}
          views={views}
          todayLabel={todayLabel}
          onViewChange={onViewChange}
          onPrevious={onPrevious}
          onNext={onNext}
          onToday={onToday}
        />
      )}
      <div className="drg-scheduler__body">{renderBody()}</div>
      {showLegend && <SchedulerLegend labels={legendLabels} />}
    </div>
  );
};
