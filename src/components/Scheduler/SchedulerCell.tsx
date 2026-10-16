import type { ComponentProps, CSSProperties } from "react";
import EnumIcons from "../../icons/EnumIcons";
import { Icon } from "../Icon";
import type { SchedulerCell as SchedulerCellModel, SchedulerCellVariant } from "./types";

type IconName = ComponentProps<typeof Icon>["name"];

const VARIANT_ICON: Record<SchedulerCellVariant, IconName> = {
  available: EnumIcons.Outlined.add,
  reserved: EnumIcons.Outlined.event_busy,
  unavailable: EnumIcons.Outlined.remove,
};

interface SchedulerCellProps {
  cell: SchedulerCellModel;
  /** Descrição completa da célula (coluna, período, conteúdo e estado). */
  description: string;
  style: CSSProperties;
}

export const SchedulerCell = ({ cell, description, style }: SchedulerCellProps) => {
  const hasText = Boolean(cell.title || cell.subtitle);
  const className = `drg-scheduler__cell drg-scheduler__cell--${cell.variant}${cell.highlight ? " drg-scheduler__cell--highlight" : ""}`;

  const content = hasText ? (
    <>
      {cell.title && <span className="drg-scheduler__cell-title">{cell.title}</span>}
      {cell.subtitle && <span className="drg-scheduler__cell-subtitle">{cell.subtitle}</span>}
    </>
  ) : (
    <Icon name={VARIANT_ICON[cell.variant]} aria-hidden="true" />
  );

  if (cell.onClick) {
    return (
      <button
        type="button"
        className={className}
        style={style}
        title={description}
        aria-label={description}
        onClick={cell.onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={className} style={style} title={description}>
      {content}
      {!hasText && <span className="drg-scheduler__sr-only">{description}</span>}
    </div>
  );
};
