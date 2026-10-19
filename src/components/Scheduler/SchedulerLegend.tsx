import type { SchedulerCellVariant, SchedulerLegendLabels } from "./types";

const VARIANTS: SchedulerCellVariant[] = ["available", "reserved", "unavailable"];

interface SchedulerLegendProps {
  labels: SchedulerLegendLabels;
}

export const SchedulerLegend = ({ labels }: SchedulerLegendProps) => (
  <ul className="drg-scheduler__legend" aria-label="Legenda">
    {VARIANTS.map((variant) => (
      <li key={variant} className="drg-scheduler__legend-item">
        <span className={`drg-scheduler__legend-swatch drg-scheduler__legend-swatch--${variant}`} aria-hidden="true" />
        {labels[variant]}
      </li>
    ))}
  </ul>
);
