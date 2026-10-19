export const DEFAULT_SLOT_MINUTES = 30;
export const DEFAULT_START_HOUR = 8;
export const DEFAULT_END_HOUR = 18;
export const DEFAULT_WEEK_DAYS = 5;

/** 0 = domingo, 1 = segunda-feira. */
export type WeekStartDay = 0 | 1;

export interface TimeSlotOptions {
  /** Duração de cada linha em minutos. @default 30 */
  slotMinutes?: number;
  /** Hora da primeira linha. @default 8 */
  startHour?: number;
  /** Hora da última linha (inclusive). @default 18 */
  endHour?: number;
}

export interface TimeSlot {
  /** Minutos desde a meia-noite em que o slot começa. */
  start: number;
  /** Minutos desde a meia-noite em que o slot termina (exclusivo). */
  end: number;
  /** Rótulo no formato "HH:mm". */
  label: string;
}

export const WEEKDAY_LABELS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"] as const;

const monthLongFormatter = new Intl.DateTimeFormat("pt-BR", { month: "long" });
const weekdayLongFormatter = new Intl.DateTimeFormat("pt-BR", { weekday: "long" });

const pad2 = (value: number): string => String(value).padStart(2, "0");

/** Converte `Date` ou string ISO em uma nova instância de `Date`. */
export const toDate = (value: Date | string): Date =>
  value instanceof Date ? new Date(value.getTime()) : new Date(value);

export const startOfDay = (date: Date): Date => {
  const result = new Date(date.getTime());
  result.setHours(0, 0, 0, 0);
  return result;
};

export const addDays = (date: Date, amount: number): Date => {
  const result = new Date(date.getTime());
  result.setDate(result.getDate() + amount);
  return result;
};

export const addMonths = (date: Date, amount: number): Date => {
  const result = new Date(date.getTime());
  result.setDate(1);
  result.setMonth(result.getMonth() + amount);
  return result;
};

export const startOfMonth = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), 1);

export const endOfMonth = (date: Date): Date => new Date(date.getFullYear(), date.getMonth() + 1, 0);

export const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

export const startOfWeek = (date: Date, weekStartsOn: WeekStartDay = 1): Date => {
  const day = startOfDay(date);
  const diff = (day.getDay() - weekStartsOn + 7) % 7;
  return addDays(day, -diff);
};

/** Retorna os dias da semana que contém `date`, começando em `weekStartsOn`. */
export const getWeekDays = (
  date: Date,
  options: { weekStartsOn?: WeekStartDay; days?: number } = {},
): Date[] => {
  const { weekStartsOn = 1, days = DEFAULT_WEEK_DAYS } = options;
  const first = startOfWeek(date, weekStartsOn);
  return Array.from({ length: Math.max(0, days) }, (_, index) => addDays(first, index));
};

/** Minutos decorridos desde a meia-noite local. */
export const minutesOfDay = (date: Date): number => date.getHours() * 60 + date.getMinutes();

/** Formata minutos desde a meia-noite como "HH:mm". */
export const formatTime = (minutes: number): string => `${pad2(Math.floor(minutes / 60))}:${pad2(minutes % 60)}`;

/** Converte "HH:mm" em minutos desde a meia-noite. */
export const parseTime = (value: string): number => {
  const [hours = "0", minutes = "0"] = value.split(":");
  return Number(hours) * 60 + Number(minutes);
};

/** Gera os slots de `startHour` até `endHour` (inclusive), de `slotMinutes` em `slotMinutes`. */
export const buildTimeSlots = (options: TimeSlotOptions = {}): TimeSlot[] => {
  const {
    slotMinutes = DEFAULT_SLOT_MINUTES,
    startHour = DEFAULT_START_HOUR,
    endHour = DEFAULT_END_HOUR,
  } = options;
  const size = Math.max(1, slotMinutes);
  const slots: TimeSlot[] = [];
  for (let start = startHour * 60; start <= endHour * 60; start += size) {
    slots.push({ start, end: start + size, label: formatTime(start) });
  }
  return slots;
};

/** Chave estável no fuso local, ex.: "2026-09-29". */
export const formatDateKey = (date: Date): string =>
  `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;

/** "29/09" */
export const formatDayMonth = (date: Date): string => `${pad2(date.getDate())}/${pad2(date.getMonth() + 1)}`;

/** "01" */
export const formatDayNumber = (date: Date): string => pad2(date.getDate());

/** "outubro de 2026" */
export const formatMonthTitle = (date: Date): string => `${monthLongFormatter.format(date)} de ${date.getFullYear()}`;

/** "Seg" */
export const formatWeekdayLabel = (date: Date): string => WEEKDAY_LABELS[date.getDay()];

/** "29 de setembro" */
export const formatDayMonthLong = (date: Date): string => `${pad2(date.getDate())} de ${monthLongFormatter.format(date)}`;

/** "quarta-feira, 01 de outubro de 2026" */
export const formatDayTitle = (date: Date): string =>
  `${weekdayLongFormatter.format(date)}, ${formatDayMonthLong(date)} de ${date.getFullYear()}`;

/**
 * Título do período coberto por `days`.
 * Ex.: "29 de setembro – 03 de outubro de 2026", "06 – 10 de outubro de 2026".
 */
export const formatWeekTitle = (days: Date[]): string => {
  if (days.length === 0) return "";
  const first = days[0];
  const last = days[days.length - 1];
  if (isSameDay(first, last)) return formatDayTitle(first);

  const sameYear = first.getFullYear() === last.getFullYear();
  const sameMonth = sameYear && first.getMonth() === last.getMonth();

  if (sameMonth) {
    return `${pad2(first.getDate())} – ${formatDayMonthLong(last)} de ${last.getFullYear()}`;
  }
  if (sameYear) {
    return `${formatDayMonthLong(first)} – ${formatDayMonthLong(last)} de ${last.getFullYear()}`;
  }
  return `${formatDayMonthLong(first)} de ${first.getFullYear()} – ${formatDayMonthLong(last)} de ${last.getFullYear()}`;
};
