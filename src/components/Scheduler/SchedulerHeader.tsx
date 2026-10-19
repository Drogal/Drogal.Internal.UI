import EnumIcons from "../../icons/EnumIcons";
import { Button } from "../Button";
import { SelectButton } from "../SelectButton";
import { SCHEDULER_VIEW_LABELS } from "./constants";
import type { SchedulerView } from "./types";

interface SchedulerHeaderProps {
  title?: string;
  view: SchedulerView;
  views: SchedulerView[];
  todayLabel: string;
  onViewChange?: (view: SchedulerView) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onToday?: () => void;
}

export const SchedulerHeader = ({
  title,
  view,
  views,
  todayLabel,
  onViewChange,
  onPrevious,
  onNext,
  onToday,
}: SchedulerHeaderProps) => {
  const showNavigation = Boolean(title || onPrevious || onNext);
  const viewOptions = views.map((value) => ({ label: SCHEDULER_VIEW_LABELS[value], value }));

  return (
    <div className="drg-scheduler__header">
      {showNavigation && (
        <div className="drg-scheduler__nav">
          {onPrevious && (
            <Button
              type="button"
              outlined
              className="drg-scheduler__nav-button"
              icon={`drg-icon ${EnumIcons.Outlined.chevron_left}`}
              aria-label="Período anterior"
              onClick={onPrevious}
            />
          )}
          {title && (
            <span className="drg-scheduler__title" aria-live="polite">
              {title}
            </span>
          )}
          {onNext && (
            <Button
              type="button"
              outlined
              className="drg-scheduler__nav-button"
              icon={`drg-icon ${EnumIcons.Outlined.chevron_right}`}
              aria-label="Próximo período"
              onClick={onNext}
            />
          )}
        </div>
      )}

      {onToday && (
        <Button type="button" outlined className="drg-scheduler__today" label={todayLabel} onClick={onToday} />
      )}

      {views.length > 1 && (
        <SelectButton
          className="drg-scheduler__views"
          value={view}
          options={viewOptions}
          allowEmpty={false}
          onChange={(event) => {
            const next = event.value as SchedulerView | null;
            if (next && next !== view) onViewChange?.(next);
          }}
        />
      )}
    </div>
  );
};
