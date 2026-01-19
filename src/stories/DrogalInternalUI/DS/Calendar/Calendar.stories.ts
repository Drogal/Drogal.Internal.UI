import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Calendar } from '../../../../components/Input/Calendar';

const meta = {
  title: 'Drogal Internal UI/DS/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'date',
      description: 'Value of the component',
      table: {
        type: { summary: 'Date | Date[] | null | undefined' },
      },
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'Defines the quantity of the selection',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    dateFormat: {
      control: 'text',
      description: 'Format of the date',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'mm/dd/yy' },
      },
    },
    inline: {
      control: 'boolean',
      description: 'When enabled, displays the calendar as inline',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'When enabled, displays a button with icon next to input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'text',
      description: 'Icon of the calendar button',
      table: {
        type: { summary: 'string' },
      },
    },
    showButtonBar: {
      control: 'boolean',
      description: 'Whether to display today and clear buttons at the footer',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showTime: {
      control: 'boolean',
      description: 'Whether to display timepicker',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    timeOnly: {
      control: 'boolean',
      description: 'Whether to display timepicker only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hourFormat: {
      control: 'select',
      options: ['12', '24'],
      description: 'Specifies 12 or 24 hour format',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '24' },
      },
    },
    monthNavigator: {
      control: 'boolean',
      description: 'Whether the month should be rendered as a dropdown instead of text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    yearNavigator: {
      control: 'boolean',
      description: 'Whether the year should be rendered as a dropdown instead of text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    yearRange: {
      control: 'text',
      description: 'The range of years displayed in the year drop-down (e.g. "2000:2030")',
      table: {
        type: { summary: 'string' },
      },
    },
    minDate: {
      control: 'date',
      description: 'The minimum selectable date',
      table: {
        type: { summary: 'Date' },
      },
    },
    maxDate: {
      control: 'date',
      description: 'The maximum selectable date',
      table: {
        type: { summary: 'Date' },
      },
    },
    disabledDates: {
      control: 'object',
      description: 'Array with dates to disable',
      table: {
        type: { summary: 'Date[]' },
      },
    },
    disabledDays: {
      control: 'object',
      description: 'Array with disabled weekday numbers (0 = Sunday, 6 = Saturday)',
      table: {
        type: { summary: 'number[]' },
      },
    },
    numberOfMonths: {
      control: 'number',
      description: 'Number of months to display',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    view: {
      control: 'select',
      options: ['date', 'month', 'year'],
      description: 'Type of view to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'date' },
      },
    },
    touchUI: {
      control: 'boolean',
      description: 'When enabled, calendar overlay is displayed as optimized for touch devices',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showWeek: {
      control: 'boolean',
      description: 'When enabled, calendar will show week numbers',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When present, it specifies that the element should be disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnlyInput: {
      control: 'boolean',
      description: 'When specified, prevents entering the date manually with keyboard',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    showOtherMonths: {
      control: 'boolean',
      description: 'Whether to display dates in other months at the start/end of the current month',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    selectOtherMonths: {
      control: 'boolean',
      description: 'Whether days in other months shown before or after current month are selectable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideOnDateTimeSelect: {
      control: 'boolean',
      description: 'Whether to hide the overlay on date selection when showTime is enabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideOnRangeSelection: {
      control: 'boolean',
      description: 'Whether to hide the overlay on date selection is completed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showSeconds: {
      control: 'boolean',
      description: 'Whether to show the seconds in time picker',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showMillisec: {
      control: 'boolean',
      description: 'Whether to show the milliseconds in time picker',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    stepHour: {
      control: 'number',
      description: 'Hours to change per step',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    stepMinute: {
      control: 'number',
      description: 'Minutes to change per step',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    stepSecond: {
      control: 'number',
      description: 'Seconds to change per step',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    stepMillisec: {
      control: 'number',
      description: 'Milliseconds to change per step',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    shortYearCutoff: {
      control: 'text',
      description: 'The cutoff year for determining the century for ambiguous years',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '+10' },
      },
    },
    showOnFocus: {
      control: 'boolean',
      description: 'When disabled, datepicker will not be visible with input focus',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    appendTo: {
      control: 'select',
      options: ['self', 'body'],
      description: 'DOM element instance where the overlay panel should be mounted',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      },
    },
    panelClassName: {
      control: 'text',
      description: 'Style class of the datetimepicker panel',
      table: {
        type: { summary: 'string' },
      },
    },
    panelStyle: {
      control: 'object',
      description: 'Inline style of the datetimepicker panel',
      table: {
        type: { summary: 'object' },
      },
    },
    keepInvalid: {
      control: 'boolean',
      description: 'Keep invalid value when input blur',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    todayButtonClassName: {
      control: 'text',
      description: 'Style class of the today button',
      table: {
        type: { summary: 'string' },
      },
    },
    clearButtonClassName: {
      control: 'text',
      description: 'Style class of the clear button',
      table: {
        type: { summary: 'string' },
      },
    },
    baseZIndex: {
      control: 'number',
      description: 'Base zIndex value to use in layering',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    autoZIndex: {
      control: 'boolean',
      description: 'Whether to automatically manage layering',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a date',
    showIcon: true,
  },
};

export const WithTime: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select date and time',
    showIcon: true,
    showTime: true,
    hourFormat: '24',
  },
};

export const TimeOnly: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select time',
    showIcon: true,
    timeOnly: true,
    hourFormat: '24',
  },
};

export const RangeSelection: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select date range',
    showIcon: true,
    // selectionMode: 'range',
  },
};

export const MultipleSelection: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select multiple dates',
    showIcon: true,
    // selectionMode: 'multiple',
  },
};

export const InlineCalendar: Story = {
  args: {
    title: 'Calendar',
    inline: true,
  },
};

export const MonthPicker: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a month',
    showIcon: true,
    view: 'month',
    dateFormat: 'mm/yy',
  },
};

export const YearPicker: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a year',
    showIcon: true,
    view: 'year',
    dateFormat: 'yy',
  },
};

export const WithNavigators: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a date',
    showIcon: true,
    monthNavigator: true,
    yearNavigator: true,
    yearRange: '2000:2030',
  },
};

export const WithButtonBar: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a date',
    showIcon: true,
    showButtonBar: true,
  },
};

export const MultipleMonths: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a date',
    showIcon: true,
    numberOfMonths: 3,
  },
};

export const TouchUI: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a date',
    showIcon: true,
    touchUI: true,
  },
};

export const WithMinMaxDates: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Select a date',
    showIcon: true,
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
  },
};

export const Disabled: Story = {
  args: {
    title: 'Calendar',
    placeholder: 'Disabled',
    showIcon: true,
    disabled: true,
  },
};
