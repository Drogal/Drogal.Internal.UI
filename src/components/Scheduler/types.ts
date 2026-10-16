import type { CSSProperties } from "react";

// ── DTOs recebidos da API ────────────────────────────────────────────────────

/** Sala de reunião retornada pela API. */
export interface Sala {
  Id: number;
  Nome: string;
  IconeUrl?: string;
}

export type HorarioTipo = "Reserva" | "Excessao";

/** Horário (reserva ou exceção) retornado pela API. */
export interface Horario {
  Id: number;
  CodigoUsuario: number;
  /** Aceita `Date` ou string ISO. Strings sem fuso são interpretadas como horário local. */
  DataInicio: Date | string;
  DataFim: Date | string;
  CodigoSala: number;
  Departamento: string;
  Tipo: HorarioTipo;
  /**
   * Nome exibido na célula reservada. Opcional: quando ausente, o adapter usa
   * `getCellTitle` ou o fallback "Usuário {CodigoUsuario}".
   */
  NomeUsuario?: string;
}

// ── Modelo do Scheduler ──────────────────────────────────────────────────────

export type SchedulerView = "day" | "week" | "month";

/** Coluna da grade (ex.: um dia da semana ou uma sala). */
export interface SchedulerColumn {
  id: string | number;
  /** Posição da coluna. A coluna de menor `order` é a coluna 1 do `gridArea`. */
  order: number;
  title: string;
  subtitle?: string;
  /** Destaca a coluna (ex.: dia atual). */
  highlight?: boolean;
  onClick?: () => void;
}

/** Linha da grade (ex.: um horário de 30 minutos). */
export interface SchedulerLine {
  id: string | number;
  /** Posição da linha. A linha de menor `order` é a linha 1 do `gridArea`. */
  order: number;
  title: string;
  onClick?: () => void;
}

export type SchedulerCellVariant = "available" | "reserved" | "unavailable";

/**
 * Posição da célula na grade, na ordem do CSS `grid-area`:
 * `[rowStart, colStart, rowEnd, colEnd]`, base 1 e fim exclusivo,
 * em coordenadas de dados (linha 1 = primeira `line`, coluna 1 = primeira `column`).
 * O componente soma o deslocamento dos cabeçalhos internamente.
 *
 * @example
 * // Ocupa as linhas 3 e 4 (ex.: 09:00 e 09:30) da coluna 1
 * gridArea: [3, 1, 5, 2]
 */
export type SchedulerGridArea = [rowStart: number, colStart: number, rowEnd: number, colEnd: number];

export interface SchedulerCell {
  id: string | number;
  title?: string;
  subtitle?: string;
  variant: SchedulerCellVariant;
  gridArea: SchedulerGridArea;
  /**
   * Rótulo do intervalo (ex.: "09:00 até 10:00") usado no tooltip e na descrição acessível.
   * Por padrão é derivado dos títulos das linhas ocupadas.
   */
  timeLabel?: string;
  /** Destaca a célula (ex.: dia atual na visão mensal). */
  highlight?: boolean;
  onClick?: () => void;
}

export type SchedulerLegendLabels = Record<SchedulerCellVariant, string>;

export interface SchedulerProps {
  columns: SchedulerColumn[];
  lines: SchedulerLine[];
  cells: SchedulerCell[];
  /** Título do período exibido no cabeçalho (ex.: "29 de setembro – 03 de outubro de 2026"). */
  title?: string;
  /** Rótulo do canto superior esquerdo, acima das linhas. @default "Horário" */
  linesHeader?: string;
  /** Visão ativa no seletor. @default "week" */
  view?: SchedulerView;
  /** Visões exibidas no seletor. Com uma única visão o seletor é omitido. @default ["day", "week", "month"] */
  views?: SchedulerView[];
  onViewChange?: (view: SchedulerView) => void;
  /** Quando informado, exibe a seta de período anterior. */
  onPrevious?: () => void;
  /** Quando informado, exibe a seta de próximo período. */
  onNext?: () => void;
  /** Quando informado, exibe o botão "Hoje". */
  onToday?: () => void;
  /** @default "Hoje" */
  todayLabel?: string;
  /** @default true */
  showLegend?: boolean;
  /** Sobrescreve os rótulos da legenda e das descrições acessíveis. */
  legend?: Partial<SchedulerLegendLabels>;
  /** Exibe um skeleton com o formato da grade da visão atual. */
  loading?: boolean;
  /** Mensagem exibida quando não há colunas ou linhas. */
  emptyMessage?: string;
  className?: string;
  style?: CSSProperties;
}
