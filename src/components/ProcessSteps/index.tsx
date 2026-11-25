import type { HTMLAttributes, ReactNode } from "react";
import EnumIcons from "../../icons/EnumIcons";
import { Icon } from "../Icon";
import { ProgressBar } from "../ProgressBar";

export type ProcessStepStatus = "done" | "loading" | "pending" | "error";

export interface ProcessStepItem {
  key?: string | number;
  title: ReactNode;
  description?: ReactNode;
  status: ProcessStepStatus;
}

/** Texto para leitor de tela, já que o estado aparece só pelo ícone. */
const STATUS_LABELS: Record<ProcessStepStatus, string> = {
  done: "Concluída",
  loading: "Em andamento",
  pending: "Pendente",
  error: "Com erro",
};

const StepIcon = ({ status }: { status: ProcessStepStatus }) => {
  if (status === "done") return <Icon name={EnumIcons.Outlined.check_circle_outline} />;
  if (status === "error") return <Icon name={EnumIcons.Outlined.error_outline} />;
  if (status === "loading") return <span className="drg-process-steps__spinner" />;
  return <span className="drg-process-steps__circle" />;
};

export interface ProcessStepProps extends Omit<HTMLAttributes<HTMLLIElement>, "title"> {
  title: ReactNode;
  description?: ReactNode;
  status: ProcessStepStatus;
}

/**
 * @description
 * Uma etapa de um processo: ícone do estado (concluída, em andamento,
 * pendente ou com erro), título e descrição. Use dentro de `ProcessSteps`.
 */
export const ProcessStep = ({ title, description, status, className, ...props }: ProcessStepProps) => {
  const classes = ["drg-process-steps__step", `drg-process-steps__step--${status}`, className].filter(Boolean).join(" ");

  return (
    <li {...props} className={classes} aria-current={status === "loading" ? "step" : undefined}>
      <span className="drg-process-steps__icon" aria-hidden="true">
        <StepIcon status={status} />
      </span>
      <span className="drg-process-steps__text">
        <span className="drg-process-steps__title">
          {title}
          <span className="drg-visually-hidden"> ({STATUS_LABELS[status]})</span>
        </span>
        {description && <span className="drg-process-steps__description">{description}</span>}
      </span>
    </li>
  );
};

export interface ProcessStepsProps extends HTMLAttributes<HTMLDivElement> {
  steps?: ProcessStepItem[];
  /**
   * Percentual da barra de progresso abaixo das etapas. Sem ele, a barra não aparece.
   * Use `"indeterminate"` quando não se sabe quanto falta.
   */
  progress?: number | "indeterminate";
  /** Rótulo da lista e da barra para leitor de tela. @default "Andamento" */
  ariaLabel?: string;
  /** Alternativa a `steps`: `ProcessStep` em `children`. */
  children?: ReactNode;
}

/**
 * @description
 * Componente ProcessSteps.
 * Lista vertical de etapas de um processo, como a finalização da venda
 * (pagamento, emissão da NFC-e, impressão do comprovante), com uma
 * barra de progresso opcional abaixo.
 */
export const ProcessSteps = ({ steps, progress, ariaLabel = "Andamento", className, children, ...props }: ProcessStepsProps) => {
  const classes = ["drg-process-steps", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={classes}>
      <ol className="drg-process-steps__list" aria-label={ariaLabel}>
        {steps?.map((step, index) => (
          <ProcessStep key={step.key ?? index} title={step.title} description={step.description} status={step.status} />
        ))}
        {children}
      </ol>
      {progress !== undefined && (
        <ProgressBar
          className="drg-process-steps__progress"
          mode={progress === "indeterminate" ? "indeterminate" : "determinate"}
          value={progress === "indeterminate" ? undefined : progress}
          aria-label={ariaLabel}
        />
      )}
    </div>
  );
};
