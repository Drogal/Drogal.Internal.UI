import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { SelectButton } from '../../../../components/SelectButton';
import { useState } from 'react';

const options = ['Off', 'On'];
const cities = [
  { name: 'New York', value: 'NY' },
  { name: 'Rome', value: 'RM' },
  { name: 'London', value: 'LDN' }
];
const paymentOptions = [
  { name: 'Credit Card', value: 'CC' },
  { name: 'Debit Card', value: 'DC' },
  { name: 'Cash', value: 'CASH' }
];
const justifyOptions = [
  { icon: 'pi pi-align-left', value: 'left' },
  { icon: 'pi pi-align-center', value: 'center' },
  { icon: 'pi pi-align-right', value: 'right' },
  { icon: 'pi pi-align-justify', value: 'justify' }
];

const meta = {
  title: 'Drogal Internal UI/DS/SelectButton',
  component: SelectButton,
  parameters: {
    layout: 'padded',
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
    multiple: {
      control: 'boolean',
      description: 'When specified, allows selecting multiple values',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    unselectable: {
      control: 'boolean',
      description: 'Whether selection can be cleared',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
    invalid: {
      control: 'boolean',
      description: 'When present, it specifies that the component is in an invalid state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    allowEmpty: {
      control: 'boolean',
      description: 'Whether to allow empty selection',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline style of the component',
      table: {
        type: { summary: 'object' },
      },
    },
    className: {
      control: 'text',
      description: 'Style class of the component',
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
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState<any>(args.value);
    return (
      <SelectButton {...args} value={value} onChange={(e) => setValue(e.value)} />
    )
  },
  args: {
    options: options,
  },
};

export const WithObjects: Story = {
  args: {
    options: cities,
    optionLabel: 'name',
  },
};

export const Multiple: Story = {
  args: {
    options: cities,
    optionLabel: 'name',
    multiple: true,
  },
};

export const WithIcons: Story = {
  args: {
    options: justifyOptions,
    optionLabel: 'icon',
  },
};

export const Disabled: Story = {
  args: {
    options: options,
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    options: paymentOptions,
    optionLabel: 'name',
    invalid: true,
  },
};

export const Unselectable: Story = {
  args: {
    options: options,
    unselectable: false,
  },
};

export const PaymentMethods: Story = {
  args: {
    options: paymentOptions,
    optionLabel: 'name',
    optionValue: 'value',
  },
};

export const WithDefaultValue: Story = {
  args: {
    value: 'RM',
    options: cities,
    optionLabel: 'name',
    optionValue: 'value',
  },
};

export const MultipleWithDefault: Story = {
  args: {
    value: ['NY', 'LDN'],
    options: cities,
    optionLabel: 'name',
    optionValue: 'value',
    multiple: true,
  },
};
