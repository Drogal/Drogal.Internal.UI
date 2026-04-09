import { useMemo } from "react";
import Select, {
  type ActionMeta,
  type GroupBase,
  type MultiValue,
  type Props as ReactSelectProps,
  type SingleValue,
} from "react-select";
import LabelInput from "../Label/LabelInput";

type DropdownOption = Record<string, unknown>;

interface LegacyGroupOption {
  label?: string;
  items: DropdownOption[];
}

type DropdownValue = DropdownOption | DropdownOption[] | null;

interface DropdownChangeEvent {
  originalEvent?: ActionMeta<DropdownOption>; 
  value: DropdownValue;
  target: {
    name?: string;
    value: DropdownValue;
  };
}

interface ExtendedProps
  extends Omit<
    ReactSelectProps<DropdownOption, boolean, GroupBase<DropdownOption>>,
    "onChange" | "options" | "value" | "isSearchable" | "isClearable"
  > {
  title: string;
  name?: string;
  options?: DropdownOption[] | LegacyGroupOption[];
  value?: DropdownValue | string | number;
  optionLabel?: string;
  optionValue?: string;
  filter?: boolean;
  showClear?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  onChange?: (event: DropdownChangeEvent) => void;
}

const isLegacyGroup = (option: unknown): option is LegacyGroupOption => {
  return Boolean(option && typeof option === "object" && Array.isArray((option as LegacyGroupOption).items));
};

const isOptionObject = (value: unknown): value is DropdownOption => {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
};

/**
 * @description
 * O Dropdown é um componente de seleção que permite ao usuário escolher uma opção de uma lista suspensa.
 *
 * Encapsula o componente `Select` do React Select,
 * mantendo compatibilidade com props legadas do Dropdown anterior.
 */
export const Dropdown = ({
  title,
  name,
  options,
  value,
  optionLabel,
  optionValue,
  filter,
  showClear,
  isSearchable,
  isClearable,
  onChange,
  isMulti,
  ...rest
}: ExtendedProps) => {
  const getOptionLabel = (option: DropdownOption): string => {
    if (optionLabel && typeof option[optionLabel] === "string") {
      return option[optionLabel] as string;
    }

    if (typeof option.label === "string") {
      return option.label;
    }

    if (typeof option.value === "string" || typeof option.value === "number") {
      return String(option.value);
    }

    return "";
  };

  const getOptionValue = (option: DropdownOption): string => {
    if (optionValue && (typeof option[optionValue] === "string" || typeof option[optionValue] === "number")) {
      return String(option[optionValue]);
    }

    if (typeof option.value === "string" || typeof option.value === "number") {
      return String(option.value);
    }

    if (typeof option.label === "string") {
      return option.label;
    }

    return "";
  };

  const normalizedOptions = useMemo(() => {
    if (!options?.length) {
      return [] as Array<DropdownOption | GroupBase<DropdownOption>>;
    }

    const hasLegacyGroups = options.some((option) => isLegacyGroup(option));
    if (!hasLegacyGroups) {
      return options as DropdownOption[];
    }

    return (options as LegacyGroupOption[]).map((group) => ({
      label: group.label ?? "",
      options: group.items,
    }));
  }, [options]);

  const flatOptions = useMemo(() => {
    return normalizedOptions.flatMap((entry) => {
      if ("options" in entry && Array.isArray(entry.options)) {
        return entry.options;
      }
      return [entry];
    });
  }, [normalizedOptions]);

  const findOptionByValue = (rawValue: string | number) => {
    const expectedValue = String(rawValue);
    return flatOptions.find((option) => getOptionValue(option) === expectedValue) ?? null;
  };

  const normalizedValue = useMemo(() => {
    if (value == null) {
      return isMulti ? [] : null;
    }

    if (isMulti) {
      const multiSource = Array.isArray(value) ? value : [value];
      return multiSource
        .map((item) => {
          if (isOptionObject(item)) {
            return item;
          }

          if (typeof item === "string" || typeof item === "number") {
            return findOptionByValue(item);
          }

          return null;
        })
        .filter(Boolean) as DropdownOption[];
    }

    if (isOptionObject(value)) {
      return value;
    }

    if (typeof value === "string" || typeof value === "number") {
      return findOptionByValue(value);
    }

    return null;
  }, [findOptionByValue, isMulti, value]);

  const handleChange = (
    selectedValue: MultiValue<DropdownOption> | SingleValue<DropdownOption>,
    actionMeta: ActionMeta<DropdownOption>,
  ) => {
    const mappedValue: DropdownValue = isMulti
      ? (Array.isArray(selectedValue) ? [...selectedValue] : [])
      : ((selectedValue as SingleValue<DropdownOption>) ?? null);

    onChange?.({
      originalEvent: actionMeta,
      value: mappedValue,
      target: {
        name,
        value: mappedValue,
      },
    });
  };

  return (
    <div className="drg-input-spacing">
      <LabelInput title={title} name={name} />
      <Select
        {...rest}
        classNamePrefix={'r-dropdown' + (rest.classNamePrefix ? ` ${rest.classNamePrefix}` : '')}
        name={name}
        options={normalizedOptions}
        value={normalizedValue}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        isMulti={Boolean(isMulti)}
        isSearchable={isSearchable ?? filter ?? true}
        isClearable={isClearable ?? showClear ?? false}
        onChange={handleChange}
      />
    </div>
  );
};
