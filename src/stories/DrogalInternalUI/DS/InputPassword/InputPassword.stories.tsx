import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css'
import { InputPassword } from '../../../../components/Input/InputPassword';

const meta = {
  title: 'Drogal Internal UI/DS/InputPassword',
  component: InputPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Value of the component',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the password input',
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
    feedback: {
      control: 'boolean',
      description: 'Whether to show the strength indicator or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    toggleMask: {
      control: 'boolean',
      description: 'Whether to show an icon to display the password as plain text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    weakLabel: {
      control: 'text',
      description: 'Text for a weak password',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Weak' },
      },
    },
    mediumLabel: {
      control: 'text',
      description: 'Text for a medium password',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Medium' },
      },
    },
    strongLabel: {
      control: 'text',
      description: 'Text for a strong password',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Strong' },
      },
    },
    promptLabel: {
      control: 'text',
      description: 'Text to prompt password entry',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Please enter a password' },
      },
    },
    mediumRegex: {
      control: 'text',
      description: 'Regex for a medium level password',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).' },
      },
    },
    strongRegex: {
      control: 'text',
      description: 'Regex for a strong level password',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})' },
      },
    },
    inputClassName: {
      control: 'text',
      description: 'Style class of the input field',
      table: {
        type: { summary: 'string' },
      },
    },
    inputId: {
      control: 'text',
      description: 'Identifier of the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    panelClassName: {
      control: 'text',
      description: 'Style class of the overlay panel element',
      table: {
        type: { summary: 'string' },
      },
    },
    panelStyle: {
      control: 'object',
      description: 'Inline style of the overlay panel element',
      table: {
        type: { summary: 'object' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'When present, it specifies that the component should have invalid state style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Specifies the input variant of the component',
      table: {
        type: { summary: 'outlined | filled' },
        defaultValue: { summary: 'outlined' },
      },
    },
    title: {
      control: 'text',
      description: 'Label to display above the password input',
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
    inputStyle: {
      control: 'object',
      description: 'Inline style of the input field',
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
    style: {
      control: 'object',
      description: 'Inline style of the element',
      table: {
        type: { summary: 'object' },
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
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Password',
    placeholder: 'Enter your password',
    feedback: false,
  },
};

export const WithMeter: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Password with Strength Meter',
    placeholder: 'Enter your password',
    feedback: true,
  },
};

export const CustomLabels: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Password with Custom Labels',
    placeholder: 'Choose a password',
    feedback: true,
    promptLabel: 'Choose a password',
    weakLabel: 'Too simple',
    mediumLabel: 'Average complexity',
    strongLabel: 'Complex password',
  },
};

export const ToggleMask: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Password with Toggle Mask',
    placeholder: 'Enter your password',
    feedback: false,
    toggleMask: true,
  },
};

export const ToggleMaskWithMeter: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Password with Toggle Mask and Meter',
    placeholder: 'Enter your password',
    feedback: true,
    toggleMask: true,
  },
};

export const Filled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Filled Variant',
    placeholder: 'Enter your password',
    feedback: false,
    variant: 'filled',
  },
};

export const Invalid: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Invalid Password',
    placeholder: 'Enter your password',
    feedback: false,
    invalid: true,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    return (<InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />);
  },
  args: {
    title: 'Disabled Password',
    placeholder: 'Disabled',
    disabled: true,
  },
};
