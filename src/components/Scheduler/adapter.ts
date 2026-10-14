import type { Horario, SchedulerCell, SchedulerColumn, SchedulerLine, SchedulerView } from "./types";
import {
  DEFAULT_SLOT_MINUTES,
  DEFAULT_WEEK_DAYS,
  buildTimeSlots,
  formatDateKey,
  formatDayMonth,
  formatDayTitle,
  formatTime,
  formatWeekTitle,
  formatWeekdayLabel,
  getWeekDays,
  isSameDay,
  minutesOfDay,
  parseTime,
  startOfDay,
  toDate,
  type TimeSlotOptions,
  type WeekStartDay,
} from "./utils";

/** Visões suportadas pelo adapter. A visão mensal ainda não é gerada. */
export type SchedulerAdapterView = Exclude<SchedulerView, "month">;

/** Faixa horária no formato "HH:mm". */
export interface SchedulerTimeRange {
  start: string;
  end: string;
}

export interface SchedulerSlotClickEvent {
  start: Date;
  end: Date;
  column: SchedulerColumn;
  line: SchedulerLine;
}

export interface MapHorariosOptions extends TimeSlotOptions {
  /** Data de referência: qualquer dia da semana desejada (ou o próprio dia, na visão diária). @default new Date() */
  date?: Date | string;
  horarios?: Horario[];
  /** Quando informado, considera apenas os horários dessa sala. */
  codigoSala?: number;
  /** @default "week" */
  view?: SchedulerAdapterView;
  /** @default 1 (segunda-feira) */
  weekStartsOn?: WeekStartDay;
  /** Quantidade de dias exibidos na visão semanal. @default 5 */
  days?: number;
  /** Faixas bloqueadas em todos os dias (ex.: almoço, fora do expediente). */
  blockedRanges?: SchedulerTimeRange[];
  /** Data considerada "hoje" para destacar a coluna. @default new Date() */
  today?: Date;
  /** Título da célula reservada. @default NomeUsuario ?? "Usuário {CodigoUsuario}" */
  getCellTitle?: (horario: Horario) => string;
  /** Subtítulo da célula reservada. @default Departamento */
  getCellSubtitle?: (horario: Horario) => string;
  /** Clique em um slot disponível. Quando omitido, os slots não são clicáveis. */
  onSlotClick?: (event: SchedulerSlotClickEvent) => void;
  /** Clique em uma reserva ou exceção. */
  onHorarioClick?: (horario: Horario) => void;
  /** Clique no cabeçalho de um dia. */
  onColumnClick?: (date: Date) => void;
}

export interface SchedulerData {
  /** Título do período, pronto para a prop `title` do Scheduler. */
  title: string;
  /** Dias exibidos, na ordem das colunas. */
  days: Date[];
  columns: SchedulerColumn[];
  lines: SchedulerLine[];
  cells: SchedulerCell[];
}

const defaultCellTitle = (horario: Horario): string => horario.NomeUsuario ?? `Usuário ${horario.CodigoUsuario}`;
const defaultCellSubtitle = (horario: Horario): string => horario.Departamento;

const dateAtMinutes = (day: Date, minutes: number): Date => {
  const result = startOfDay(day);
  result.setMinutes(minutes);
  return result;
};

/**
 * Converte os horários recebidos da API em colunas, linhas e células do Scheduler.
 *
 * - `Reserva` vira célula reservada com nome e departamento, ocupando os slots do intervalo.
 * - `Excessao` e `blockedRanges` viram células indisponíveis.
 * - Os slots restantes viram células disponíveis.
 *
 * Intervalos não alinhados ao slot são arredondados para fora. Sobreposições
 * geram um `console.warn` e a última célula renderizada fica por cima.
 */
export const mapHorariosToScheduler = (options: MapHorariosOptions = {}): SchedulerData => {
  const {
    date = new Date(),
    horarios = [],
    codigoSala,
    view = "week",
    weekStartsOn = 1,
    days: dayCount = DEFAULT_WEEK_DAYS,
    blockedRanges = [],
    today = new Date(),
    getCellTitle = defaultCellTitle,
    getCellSubtitle = defaultCellSubtitle,
    onSlotClick,
    onHorarioClick,
    onColumnClick,
    slotMinutes,
    startHour,
    endHour,
  } = options;

  const reference = toDate(date);
  const days = view === "day" ? [startOfDay(reference)] : getWeekDays(reference, { weekStartsOn, days: dayCount });
  const slots = buildTimeSlots({ slotMinutes, startHour, endHour });
  const firstMinute = slots[0]?.start ?? 0;
  const slotSize = slots[0] ? slots[0].end - slots[0].start : DEFAULT_SLOT_MINUTES;

  const columns = days.map<SchedulerColumn>((day, index) => ({
    id: formatDateKey(day),
    order: index + 1,
    title: formatWeekdayLabel(day),
    subtitle: formatDayMonth(day),
    highlight: isSameDay(day, today),
    onClick: onColumnClick ? () => onColumnClick(day) : undefined,
  }));

  const lines = slots.map<SchedulerLine>((slot, index) => ({
    id: slot.start,
    order: index + 1,
    title: slot.label,
  }));

  const occupied = days.map(() => new Array<boolean>(slots.length).fill(false));
  const cells: SchedulerCell[] = [];

  /** Converte um intervalo em minutos para índices de linha (base 0, fim exclusivo), arredondando para fora. */
  const toRows = (startMinutes: number, endMinutes: number): [number, number] | null => {
    const rowStart = Math.max(0, Math.floor((startMinutes - firstMinute) / slotSize));
    const rowEnd = Math.min(slots.length, Math.ceil((endMinutes - firstMinute) / slotSize));
    return rowEnd > rowStart ? [rowStart, rowEnd] : null;
  };

  /** Marca as linhas como ocupadas e informa se alguma já estava ocupada. */
  const occupy = (column: number, rowStart: number, rowEnd: number): boolean => {
    let overlap = false;
    for (let row = rowStart; row < rowEnd; row += 1) {
      if (occupied[column][row]) overlap = true;
      occupied[column][row] = true;
    }
    return overlap;
  };

  blockedRanges.forEach((range, rangeIndex) => {
    const rows = toRows(parseTime(range.start), parseTime(range.end));
    if (!rows) return;

    days.forEach((_, column) => {
      occupy(column, rows[0], rows[1]);
      cells.push({
        id: `blocked-${rangeIndex}-${column}`,
        variant: "unavailable",
        timeLabel: `${range.start} até ${range.end}`,
        gridArea: [rows[0] + 1, column + 1, rows[1] + 1, column + 2],
      });
    });
  });

  horarios
    .filter((horario) => codigoSala === undefined || horario.CodigoSala === codigoSala)
    .forEach((horario) => {
      const start = toDate(horario.DataInicio);
      const end = toDate(horario.DataFim);
      const column = days.findIndex((day) => isSameDay(day, start));
      if (column < 0) return;

      const startMinutes = minutesOfDay(start);
      const endMinutes = isSameDay(start, end) ? minutesOfDay(end) : 24 * 60;
      const rows = toRows(startMinutes, endMinutes);
      if (!rows) return;

      if (occupy(column, rows[0], rows[1])) {
        console.warn(
          `[Scheduler] Horário ${horario.Id} sobrepõe outro horário em ${columns[column].title} ${columns[column].subtitle}.`,
        );
      }

      const isReserva = horario.Tipo === "Reserva";
      cells.push({
        id: `horario-${horario.Id}`,
        variant: isReserva ? "reserved" : "unavailable",
        title: isReserva ? getCellTitle(horario) : undefined,
        subtitle: isReserva ? getCellSubtitle(horario) : horario.Departamento || undefined,
        timeLabel: `${formatTime(startMinutes)} até ${formatTime(endMinutes)}`,
        gridArea: [rows[0] + 1, column + 1, rows[1] + 1, column + 2],
        onClick: onHorarioClick ? () => onHorarioClick(horario) : undefined,
      });
    });

  days.forEach((day, column) => {
    slots.forEach((slot, row) => {
      if (occupied[column][row]) return;

      cells.push({
        id: `slot-${column}-${row}`,
        variant: "available",
        timeLabel: `${formatTime(slot.start)} até ${formatTime(slot.end)}`,
        gridArea: [row + 1, column + 1, row + 2, column + 2],
        onClick: onSlotClick
          ? () =>
              onSlotClick({
                start: dateAtMinutes(day, slot.start),
                end: dateAtMinutes(day, slot.end),
                column: columns[column],
                line: lines[row],
              })
          : undefined,
      });
    });
  });

  return {
    title: view === "day" ? formatDayTitle(days[0]) : formatWeekTitle(days),
    days,
    columns,
    lines,
    cells,
  };
};
