import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { InputTextArea } from '../../../../components/Input/InputTextArea';

const meta = {
  title: 'Drogal Internal UI/DS/InputTextArea',
  component: InputTextArea,
  parameters: {
    layout: 'padded',
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
    rows: {
      control: 'number',
      description: 'Number of rows to display',
      table: {
        type: { summary: 'number' },
      },
    },
    cols: {
      control: 'number',
      description: 'Number of columns to display',
      table: {
        type: { summary: 'number' },
      },
    },
    autoResize: {
      control: 'boolean',
      description: 'When enabled, textarea automatically adjusts its height based on content',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When present, it specifies that the textarea should be disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'When present, it specifies that the textarea is read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed in the textarea',
      table: {
        type: { summary: 'number' },
      },
    },
    required: {
      control: 'boolean',
      description: 'When present, it specifies that the textarea must be filled out before submitting the form',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'When present, it specifies that the textarea is in an invalid state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'Specifies the input variant of the component',
      table: {
        type: { summary: 'filled | outlined' },
        defaultValue: { summary: 'outlined' },
      },
    },
    title: {
      control: 'text',
      description: 'Label to display above the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Name of the textarea element',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'Identifier of the textarea element',
      table: {
        type: { summary: 'string' },
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
} satisfies Meta<typeof InputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Basic',
    placeholder: 'Enter your text here',
    rows: 5,
    cols: 30,
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Description',
    placeholder: 'Enter description',
    rows: 5,
    cols: 30,
    name: 'description',
  },
};

export const AutoResize: Story = {
  args: {
    title: 'Auto Resize Textarea',
    placeholder: 'Type something and watch the textarea grow',
    autoResize: true,
    rows: 3,
    cols: 30,
  },
};

export const WithRows: Story = {
  args: {
    title: 'Textarea with 10 Rows',
    placeholder: 'Textarea with 10 rows',
    rows: 10,
    cols: 30,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Textarea',
    placeholder: 'This textarea is disabled',
    disabled: true,
    rows: 5,
    cols: 30,
  },
};

export const ReadOnly: Story = {
  args: {
    title: 'Read Only',
    value: 'This text is read-only and cannot be edited.',
    readOnly: true,
    rows: 3,
    cols: 30,
  },
};

export const WithMaxLength: Story = {
  args: {
    title: 'Limited to 100 characters',
    placeholder: 'You can only type 100 characters',
    maxLength: 100,
    rows: 5,
    cols: 30,
  },
};

export const Invalid: Story = {
  args: {
    title: 'Error Field',
    placeholder: 'This field has an error',
    invalid: true,
    rows: 5,
    cols: 30,
  },
};

export const FilledVariant: Story = {
  args: {
    title: 'Filled Variant',
    placeholder: 'Enter your message',
    variant: 'filled',
    rows: 5,
    cols: 30,
  },
};

export const Required: Story = {
  args: {
    title: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 5,
    cols: 30,
  },
};

export const WithDefaultValue: Story = {
  args: {
    title: 'Comments',
    value: 'This is a pre-filled textarea with some default content that can be edited.',
    rows: 5,
    cols: 30,
  },
};

export const LongText: Story = {
  args: {
    title: 'Long Content',
    value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rows: 8,
    cols: 50,
  },
};
