import { useState } from "react";
import type { SchedulerView } from "./types";
import { addDays, addMonths, toDate } from "./utils";

export interface UseSchedulerNavigationOptions {
  /** @default new Date() */
  initialDate?: Date | string;
  /** @default "week" */
  initialView?: SchedulerView;
}

export interface SchedulerNavigation {
  /** Data de referência da visão atual. */
  date: Date;
  setDate: (date: Date) => void;
  view: SchedulerView;
  setView: (view: SchedulerView) => void;
  /** Volta um dia, uma semana ou um mês, conforme a visão. */
  previous: () => void;
  /** Avança um dia, uma semana ou um mês, conforme a visão. */
  next: () => void;
  /** Volta para a data atual. */
  today: () => void;
}

/**
 * Estado de navegação do Scheduler: data de referência e visão.
 * Combine com `mapHorariosToScheduler` para montar colunas, linhas e células.
 *
 * @example
 * const nav = useSchedulerNavigation();
 * const data = mapHorariosToScheduler({ date: nav.date, view: nav.view, horarios });
 * <Scheduler {...data} view={nav.view} onViewChange={nav.setView} onPrevious={nav.previous} onNext={nav.next} onToday={nav.today} />
 */
export const useSchedulerNavigation = (options: UseSchedulerNavigationOptions = {}): SchedulerNavigation => {
  const [date, setDate] = useState<Date>(() => toDate(options.initialDate ?? new Date()));
  const [view, setView] = useState<SchedulerView>(options.initialView ?? "week");

  const move = (direction: 1 | -1) =>
    setDate((current) => {
      if (view === "month") return addMonths(current, direction);
      return addDays(current, direction * (view === "day" ? 1 : 7));
    });

  return {
    date,
    setDate,
    view,
    setView,
    previous: () => move(-1),
    next: () => move(1),
    today: () => setDate(new Date()),
  };
};
