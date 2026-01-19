import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { MultiSelect } from '../../../../components/Input/MultiSelect';
import { useState } from 'react';
import { InputNumber } from '../../../../components/Input/InputNumber';

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];

const countries = [
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
];

const groupedCities = [
  {
    label: 'Germany',
    code: 'DE',
    items: [
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' }
    ]
  },
  {
    label: 'USA',
    code: 'US',
    items: [
      { label: 'Chicago', value: 'Chicago' },
      { label: 'Los Angeles', value: 'Los Angeles' },
      { label: 'New York', value: 'New York' },
      { label: 'San Francisco', value: 'San Francisco' }
    ]
  },
  {
    label: 'Japan',
    code: 'JP',
    items: [
      { label: 'Kyoto', value: 'Kyoto' },
      { label: 'Osaka', value: 'Osaka' },
      { label: 'Tokyo', value: 'Tokyo' },
      { label: 'Yokohama', value: 'Yokohama' }
    ]
  }
];

const meta = {
  title: 'Drogal Internal UI/DS/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
      description: 'Value of the component',
      table: {
        type: { summary: 'any' },
      },
    },
    options: {
      control: 'object',
      description: 'An array of selectitems to display as the available options',
      table: {
        type: { summary: 'array' },
      },
    },
    optionLabel: {
      control: 'text',
      description: 'Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options',
      table: {
        type: { summary: 'string' },
      },
    },
    optionValue: {
      control: 'text',
      description: 'Name of the value field of an option when arbitrary objects are used as options instead of SelectItems',
      table: {
        type: { summary: 'string' },
      },
    },
    optionDisabled: {
      control: 'text',
      description: 'Name of the disabled field of an option',
      table: {
        type: { summary: 'string' },
      },
    },
    optionGroupLabel: {
      control: 'text',
      description: 'Name of the label field of an option group',
      table: {
        type: { summary: 'string' },
      },
    },
    optionGroupChildren: {
      control: 'text',
      description: 'Name of the options field of an option group',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Label to display when there are no selections',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When present, it specifies that the component should be disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    filter: {
      control: 'boolean',
      description: 'When specified, displays an input field to filter the items on keyup',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    filterBy: {
      control: 'text',
      description: 'When filtering is enabled, filterBy decides which field or fields (comma separated) to search against',
      table: {
        type: { summary: 'string' },
      },
    },
    filterPlaceholder: {
      control: 'text',
      description: 'Placeholder text to show when filter input is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    filterLocale: {
      control: 'text',
      description: 'Locale to use in filtering. The default locale is the host environment\'s current locale',
      table: {
        type: { summary: 'string' },
      },
    },
    showSelectAll: {
      control: 'boolean',
      description: 'Whether to show the select all checkbox inside the panel header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    selectAll: {
      control: 'boolean',
      description: 'Whether all data is selected',
      table: {
        type: { summary: 'boolean' },
      },
    },
    display: {
      control: 'select',
      options: ['comma', 'chip'],
      description: 'Defines how the selected items are displayed',
      table: {
        type: { summary: 'comma | chip' },
        defaultValue: { summary: 'comma' },
      },
    },
    maxSelectedLabels: {
      control: 'number',
      description: 'Decides how many selected item labels to show at most',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
      },
    },
    selectedItemsLabel: {
      control: 'text',
      description: 'Label to display after exceeding max selected labels',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '{0} items selected' },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'When enabled, a clear icon is displayed to clear the value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    virtualScrollerOptions: {
      control: 'object',
      description: 'Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it',
      table: {
        type: { summary: 'object' },
      },
    },
    panelStyle: {
      control: 'object',
      description: 'Inline style of the overlay panel element',
      table: {
        type: { summary: 'object' },
      },
    },
    panelClassName: {
      control: 'text',
      description: 'Style class of the overlay panel element',
      table: {
        type: { summary: 'string' },
      },
    },
    scrollHeight: {
      control: 'text',
      description: 'Maximum height of the options panel',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '200px' },
      },
    },
    appendTo: {
      control: 'text',
      description: 'DOM element instance where the overlay panel should be mounted',
      table: {
        type: { summary: 'self | HTMLElement' },
      },
    },
    emptyFilterMessage: {
      control: 'text',
      description: 'Text to display when filtering does not return any results',
      table: {
        type: { summary: 'string' },
      },
    },
    emptyMessage: {
      control: 'text',
      description: 'Text to display when there are no options available',
      table: {
        type: { summary: 'string' },
      },
    },
    resetFilterOnHide: {
      control: 'boolean',
      description: 'Clears the filter value when hiding the dropdown',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fixedPlaceholder: {
      control: 'boolean',
      description: 'Whether to display the placeholder as fixed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectOnFocus: {
      control: 'boolean',
      description: 'When enabled, the focused option is selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'When enabled, the component will be focused on mount',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'text',
      description: 'Label to display above the multiselect',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Name of the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline style of the element',
      table: {
        type: { summary: 'object' },
      },
    },
    className: {
      control: 'text',
      description: 'Style class of the element',
      table: {
        type: { summary: 'string' },
      },
    },
    pt: {
      control: 'object',
      description: 'Uses to pass attributes to DOM elements inside the component',
      table: {
        type: { summary: 'object' },
      },
    },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select Cities',
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const WithFilter: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Countries',
    options: countries,
    optionLabel: 'name',
    filter: true,
    filterPlaceholder: 'Search countries',
    placeholder: 'Select Countries',
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const ChipDisplay: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select Cities',
    display: 'chip',
    className: 'w-full md:w-20rem',
  },
};

export const GroupedItems: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: groupedCities,
    optionLabel: 'label',
    optionGroupLabel: 'label',
    optionGroupChildren: 'items',
    placeholder: 'Select Cities',
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const WithTitle: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Choose your cities',
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select Cities',
    disabled: true,
    className: 'w-full md:w-20rem',
  },
};

export const WithClearIcon: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select Cities',
    showClear: true,
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const WithMaxLabels: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Countries',
    options: countries,
    optionLabel: 'name',
    placeholder: 'Select Countries',
    maxSelectedLabels: 2,
    selectedItemsLabel: '{0} countries selected',
    className: 'w-full md:w-20rem',
  },
};

export const VirtualScroll: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    const [virtualScrollerValues, setVirtualScrollerValues] = useState<number>(5);
    return (
      <>
        <InputNumber size={50} title='virtualScroller:' value={virtualScrollerValues} onChange={(e) => setVirtualScrollerValues(e.value || 5)} />
        <MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} virtualScrollerOptions={{ itemSize: virtualScrollerValues }} />
      </>
    );
  },
  args: {
    title: 'Select Items',
    options: Array.from({ length: 10000 }).map((_, i) => ({
      name: `Item ${i + 1}`,
      code: `ITEM${i + 1}`
    })),
    optionLabel: 'name',
    placeholder: 'Select Items',
    filter: true,
    virtualScrollerOptions: { itemSize: 5 },
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const CustomScrollHeight: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Countries',
    options: countries,
    optionLabel: 'name',
    placeholder: 'Select Countries',
    scrollHeight: '300px',
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const FixedPlaceholder: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Cities',
    fixedPlaceholder: true,
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};

export const WithSelectAll: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (<MultiSelect {...args} value={values} onChange={(e) => setValues(e.value)} />);
  },
  args: {
    title: 'Select Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select Cities',
    showSelectAll: true,
    maxSelectedLabels: 3,
    className: 'w-full md:w-20rem',
  },
};
