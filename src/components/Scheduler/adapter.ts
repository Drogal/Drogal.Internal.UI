import type {
  Horario,
  SchedulerCell,
  SchedulerColumn,
  SchedulerGridArea,
  SchedulerLine,
  SchedulerView,
} from "./types";
import {
  DEFAULT_SLOT_MINUTES,
  DEFAULT_WEEK_DAYS,
  WEEKDAY_LABELS,
  addDays,
  buildTimeSlots,
  endOfMonth,
  formatDateKey,
  formatDayMonth,
  formatDayNumber,
  formatDayTitle,
  formatMonthTitle,
  formatTime,
  formatWeekTitle,
  formatWeekdayLabel,
  getWeekDays,
  isSameDay,
  minutesOfDay,
  parseTime,
  startOfDay,
  startOfMonth,
  startOfWeek,
  toDate,
  type TimeSlotOptions,
  type WeekStartDay,
} from "./utils";

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
  /** Data de referência: qualquer dia do período desejado. @default new Date() */
  date?: Date | string;
  horarios?: Horario[];
  /** Quando informado, considera apenas os horários dessa sala. */
  codigoSala?: number;
  /** @default "week" */
  view?: SchedulerView;
  /** @default 1 (segunda-feira) */
  weekStartsOn?: WeekStartDay;
  /** Quantidade de dias por semana nas visões semanal e mensal. @default 5 */
  days?: number;
  /** Faixas bloqueadas em todos os dias (ex.: almoço). Na visão mensal contam como horários ocupados. */
  blockedRanges?: SchedulerTimeRange[];
  /** Data considerada "hoje" para destacar a coluna ou o dia. @default new Date() */
  today?: Date;
  /** Título da célula reservada. @default NomeUsuario ?? "Usuário {CodigoUsuario}" */
  getCellTitle?: (horario: Horario) => string;
  /** Subtítulo da célula reservada. @default Departamento */
  getCellSubtitle?: (horario: Horario) => string;
  /** Clique em um slot disponível (visões dia e semana). Quando omitido, os slots não são clicáveis. */
  onSlotClick?: (event: SchedulerSlotClickEvent) => void;
  /**
   * Une em uma única célula horários contíguos (ou sobrepostos) do mesmo usuário,
   * sala, tipo e departamento no mesmo dia. @default true
   */
  mergeAdjacent?: boolean;
  /**
   * Clique em uma reserva ou exceção (visões dia e semana). Recebe o primeiro
   * horário da célula e todos os horários unidos nela (um só quando não houve união).
   */
  onHorarioClick?: (horario: Horario, grupo: Horario[]) => void;
  /** Clique no cabeçalho de um dia (visões dia e semana). */
  onColumnClick?: (date: Date) => void;
  /** Clique em um dia da visão mensal. Quando omitido, os dias não são clicáveis. */
  onDayClick?: (date: Date) => void;
}

export interface SchedulerData {
  /** Título do período, pronto para a prop `title` do Scheduler. */
  title: string;
  /** Dias exibidos, na ordem das células. */
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

interface MonthOptions {
  reference: Date;
  horarios: Horario[];
  weekStartsOn: WeekStartDay;
  days: number;
  today: Date;
  /** Quantidade de slots livres no dia, considerando bloqueios, reservas e exceções. */
  freeSlotsOf: (day: Date, horarios: Horario[]) => number;
  onDayClick?: (date: Date) => void;
}

/**
 * Visão mensal: uma linha por semana, uma coluna por dia da semana e uma célula por dia.
 * O dia fica disponível enquanto houver slot livre, reservado quando lotado por reservas
 * e indisponível quando todo o expediente está bloqueado ou fora do mês.
 */
const buildMonth = ({ reference, horarios, weekStartsOn, days, today, freeSlotsOf, onDayClick }: MonthOptions): SchedulerData => {
  const month = reference.getMonth();
  const last = endOfMonth(reference);
  const dayCount = Math.max(1, days);

  const weeks: Date[][] = [];
  for (let cursor = startOfWeek(startOfMonth(reference), weekStartsOn); cursor <= last; cursor = addDays(cursor, 7)) {
    const week = Array.from({ length: dayCount }, (_, index) => addDays(cursor, index));
    if (week.some((day) => day.getMonth() === month)) weeks.push(week);
  }

  const columns = Array.from({ length: dayCount }, (_, index): SchedulerColumn => ({
    id: index,
    order: index + 1,
    title: WEEKDAY_LABELS[(weekStartsOn + index) % 7],
  }));

  const lines = weeks.map((week, index): SchedulerLine => ({
    id: formatDateKey(week[0]),
    order: index + 1,
    title: `${formatDayMonth(week[0])} – ${formatDayMonth(week[week.length - 1])}`,
  }));

  const cells: SchedulerCell[] = [];
  weeks.forEach((week, row) => {
    week.forEach((day, column) => {
      const id = `day-${formatDateKey(day)}`;
      const gridArea: SchedulerGridArea = [row + 1, column + 1, row + 2, column + 2];

      if (day.getMonth() !== month) {
        cells.push({ id, variant: "unavailable", timeLabel: formatDayTitle(day), gridArea });
        return;
      }

      const dayHorarios = horarios.filter((horario) => isSameDay(toDate(horario.DataInicio), day));
      const reservas = dayHorarios.filter((horario) => horario.Tipo === "Reserva").length;
      const free = freeSlotsOf(day, dayHorarios);

      let variant: SchedulerCell["variant"] = "available";
      let subtitle: string | undefined;
      if (free > 0) {
        if (reservas > 0) subtitle = `${free} ${free === 1 ? "horário livre" : "horários livres"}`;
      } else if (reservas > 0) {
        variant = "reserved";
        subtitle = "Lotado";
      } else {
        variant = "unavailable";
        subtitle = "Indisponível";
      }

      cells.push({
        id,
        variant,
        title: formatDayNumber(day),
        subtitle,
        highlight: isSameDay(day, today),
        timeLabel: formatDayTitle(day),
        gridArea,
        onClick: onDayClick ? () => onDayClick(day) : undefined,
      });
    });
  });

  return { title: formatMonthTitle(reference), days: weeks.flat(), columns, lines, cells };
};

/**
 * Converte os horários recebidos da API em colunas, linhas e células do Scheduler.
 *
 * Visões dia e semana:
 * - `Reserva` vira célula reservada com nome e departamento, ocupando os slots do intervalo.
 * - `Excessao` e `blockedRanges` viram células indisponíveis.
 * - Os slots restantes viram células disponíveis.
 *
 * Visão mensal: uma célula por dia. O dia continua disponível enquanto houver
 * slot livre (com a quantidade no subtítulo), fica reservado quando as reservas
 * lotam o expediente e indisponível quando bloqueios e exceções ocupam tudo
 * ou quando está fora do mês.
 *
 * Intervalos não alinhados ao slot são arredondados para fora. Horários contíguos
 * do mesmo usuário viram uma célula só (`mergeAdjacent`). Um horário que avança
 * sobre uma faixa bloqueada fica inteiro, e o resto da faixa vira célula própria;
 * sobreposição entre horários gera um `console.warn` e a última célula renderizada
 * fica por cima.
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
    mergeAdjacent = true,
    onSlotClick,
    onHorarioClick,
    onColumnClick,
    onDayClick,
    slotMinutes,
    startHour,
    endHour,
  } = options;

  const reference = toDate(date);
  const filtered = codigoSala === undefined ? horarios : horarios.filter((horario) => horario.CodigoSala === codigoSala);

  const slots = buildTimeSlots({ slotMinutes, startHour, endHour });
  const firstMinute = slots[0]?.start ?? 0;
  const slotSize = slots[0] ? slots[0].end - slots[0].start : DEFAULT_SLOT_MINUTES;

  /** Converte um intervalo em minutos para índices de linha (base 0, fim exclusivo), arredondando para fora. */
  const toRows = (startMinutes: number, endMinutes: number): [number, number] | null => {
    const rowStart = Math.max(0, Math.floor((startMinutes - firstMinute) / slotSize));
    const rowEnd = Math.min(slots.length, Math.ceil((endMinutes - firstMinute) / slotSize));
    return rowEnd > rowStart ? [rowStart, rowEnd] : null;
  };

  /** Minutos de início e fim de um intervalo dentro do dia em que ele começa. */
  const minutesOfRange = (start: Date, end: Date): [number, number] => [
    minutesOfDay(start),
    isSameDay(start, end) ? minutesOfDay(end) : 24 * 60,
  ];
  const minutesOf = (horario: Horario): [number, number] =>
    minutesOfRange(toDate(horario.DataInicio), toDate(horario.DataFim));

  if (view === "month") {
    const freeSlotsOf = (_day: Date, dayHorarios: Horario[]): number => {
      const occupied = new Array<boolean>(slots.length).fill(false);
      const mark = (startMinutes: number, endMinutes: number) => {
        const rows = toRows(startMinutes, endMinutes);
        if (!rows) return;
        for (let row = rows[0]; row < rows[1]; row += 1) occupied[row] = true;
      };
      blockedRanges.forEach((range) => mark(parseTime(range.start), parseTime(range.end)));
      dayHorarios.forEach((horario) => mark(...minutesOf(horario)));
      return occupied.filter((value) => !value).length;
    };

    return buildMonth({ reference, horarios: filtered, weekStartsOn, days: dayCount, today, freeSlotsOf, onDayClick });
  }

  const days = view === "day" ? [startOfDay(reference)] : getWeekDays(reference, { weekStartsOn, days: dayCount });

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

  /** Marca as linhas como ocupadas e informa se alguma já estava ocupada. */
  const occupy = (column: number, rowStart: number, rowEnd: number): boolean => {
    let overlap = false;
    for (let row = rowStart; row < rowEnd; row += 1) {
      if (occupied[column][row]) overlap = true;
      occupied[column][row] = true;
    }
    return overlap;
  };

  /** Chave de união: horários com a mesma chave e contíguos no mesmo dia viram uma célula. */
  const groupKey = (horario: Horario): string =>
    [
      horario.CodigoSala,
      horario.CodigoUsuario,
      horario.Tipo,
      horario.Tipo === "Reserva" ? `${getCellTitle(horario)}|${getCellSubtitle(horario)}` : horario.Departamento,
    ].join("|");

  interface HorarioGroup {
    horarios: Horario[];
    start: Date;
    end: Date;
  }

  const groups: HorarioGroup[] = [];
  [...filtered]
    .sort((a, b) => toDate(a.DataInicio).getTime() - toDate(b.DataInicio).getTime())
    .forEach((horario) => {
      const start = toDate(horario.DataInicio);
      const end = toDate(horario.DataFim);
      const key = groupKey(horario);
      const adjacent = mergeAdjacent
        ? groups.find(
            (group) =>
              isSameDay(group.start, start) &&
              start.getTime() <= group.end.getTime() &&
              groupKey(group.horarios[0]) === key,
          )
        : undefined;

      if (adjacent) {
        adjacent.horarios.push(horario);
        if (end.getTime() > adjacent.end.getTime()) adjacent.end = end;
        return;
      }
      groups.push({ horarios: [horario], start, end });
    });

  groups.forEach((group) => {
    const first = group.horarios[0];
    const column = days.findIndex((day) => isSameDay(day, group.start));
    if (column < 0) return;

    const [startMinutes, endMinutes] = minutesOfRange(group.start, group.end);
    const rows = toRows(startMinutes, endMinutes);
    if (!rows) return;

    if (occupy(column, rows[0], rows[1])) {
      console.warn(
        `[Scheduler] Horário ${first.Id} sobrepõe outro horário em ${columns[column].title} ${columns[column].subtitle}.`,
      );
    }

    const isReserva = first.Tipo === "Reserva";
    cells.push({
      id: `horario-${group.horarios.map((horario) => horario.Id).join("-")}`,
      variant: isReserva ? "reserved" : "unavailable",
      title: isReserva ? getCellTitle(first) : undefined,
      subtitle: isReserva ? getCellSubtitle(first) : first.Departamento || undefined,
      timeLabel: `${formatTime(startMinutes)} até ${formatTime(endMinutes)}`,
      gridArea: [rows[0] + 1, column + 1, rows[1] + 1, column + 2],
      onClick: onHorarioClick ? () => onHorarioClick(first, group.horarios) : undefined,
    });
  });

  /**
   * As faixas bloqueadas entram depois dos horários e só nas linhas que sobraram: uma reserva que avança sobre o
   * almoço fica inteira, e o que resta da faixa vira uma célula própria, em vez de duas células uma por cima da
   * outra, com o ícone da faixa aparecendo na borda da reserva.
   */
  blockedRanges.forEach((range, rangeIndex) => {
    const rows = toRows(parseTime(range.start), parseTime(range.end));
    if (!rows) return;

    days.forEach((_, column) => {
      let runStart: number | null = null;

      const flush = (rowEnd: number) => {
        if (runStart === null) return;
        cells.push({
          id: `blocked-${rangeIndex}-${column}-${runStart}`,
          variant: "unavailable",
          timeLabel: `${formatTime(slots[runStart].start)} até ${formatTime(slots[rowEnd - 1].end)}`,
          gridArea: [runStart + 1, column + 1, rowEnd + 1, column + 2],
        });
        runStart = null;
      };

      for (let row = rows[0]; row < rows[1]; row += 1) {
        if (occupied[column][row]) {
          flush(row);
          continue;
        }
        occupied[column][row] = true;
        if (runStart === null) runStart = row;
      }
      flush(rows[1]);
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
