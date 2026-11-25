import type { HTMLAttributes } from "react";

export type StatusIndicatorStatus = "online" | "offline" | "disconnected";

const DEFAULT_LABELS: Record<StatusIndicatorStatus, string> = {
  online: "Online",
  offline: "Offline",
  disconnected: "Sem conexão",
};

export interface StatusIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** Estado exibido: define a cor do ponto e o texto padrão. */
  status: StatusIndicatorStatus;
  /** Texto ao lado do ponto. @default "Online" | "Offline" | "Sem conexão" */
  label?: string;
}

/**
 * @description
 * Componente StatusIndicator.
 * Ponto colorido com um texto, para o estado da conexão do PDV
 * (Online, Offline, Sem conexão). Usado no `end` do `Header`.
 *
 * A cor do texto vem do elemento pai (`currentColor`), então funciona
 * tanto no Header escuro quanto em fundo claro.
 */
export const StatusIndicator = ({ status, label, className, ...props }: StatusIndicatorProps) => {
  const classes = ["drg-status-indicator", `drg-status-indicator--${status}`, className].filter(Boolean).join(" ");

  return (
    <span {...props} className={classes}>
      <span className="drg-status-indicator__dot" aria-hidden="true" />
      {label ?? DEFAULT_LABELS[status]}
    </span>
  );
};
