import { useState } from "react";
import type { SchedulerAdapterView } from "./adapter";
import { addDays, toDate } from "./utils";

export interface UseSchedulerNavigationOptions {
  /** @default new Date() */
  initialDate?: Date | string;
  /** @default "week" */
  initialView?: SchedulerAdapterView;
}

export interface SchedulerNavigation {
  /** Data de referência da visão atual. */
  date: Date;
  setDate: (date: Date) => void;
  view: SchedulerAdapterView;
  setView: (view: SchedulerAdapterView) => void;
  /** Volta um dia ou uma semana, conforme a visão. */
  previous: () => void;
  /** Avança um dia ou uma semana, conforme a visão. */
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
  const [view, setView] = useState<SchedulerAdapterView>(options.initialView ?? "week");
  const step = view === "day" ? 1 : 7;

  return {
    date,
    setDate,
    view,
    setView,
    previous: () => setDate((current) => addDays(current, -step)),
    next: () => setDate((current) => addDays(current, step)),
    today: () => setDate(new Date()),
  };
};
