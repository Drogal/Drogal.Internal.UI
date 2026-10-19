import type { SchedulerLegendLabels, SchedulerView } from "./types";

/** Rótulos padrão da legenda e das descrições acessíveis. */
export const DEFAULT_LEGEND_LABELS: SchedulerLegendLabels = {
  available: "Disponível",
  reserved: "Reservado",
  unavailable: "Indisponível",
};

/** Rótulos exibidos no seletor de visão. */
export const SCHEDULER_VIEW_LABELS: Record<SchedulerView, string> = {
  day: "Dia",
  week: "Semana",
  month: "Mês",
};
