import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { InputText } from '../../../../components/Input/InputText';

const meta = {
  title: 'Drogal Internal UI/DS/InputText',
  component: InputText,
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
      description: 'Placeholder text for the input',
      table: {
        type: { summary: 'string' },
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
    readOnly: {
      control: 'boolean',
      description: 'When present, it specifies that the element value cannot be altered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters to accept',
      table: {
        type: { summary: 'number' },
      },
    },
    size: {
      control: 'text',
      description: 'Size of the input field',
      table: {
        type: { summary: 'string | number' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'search', 'tel', 'url', 'password'],
      description: 'Type of the input element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    className: {
      control: 'text',
      description: 'Style class of the component',
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
    name: {
      control: 'text',
      description: 'Name of the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'Identifier of the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'When present, it specifies that the element should automatically get focus',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoComplete: {
      control: 'text',
      description: 'Hint for form autofill feature',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'When present, it specifies that an input field must be filled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'text',
      description: 'Label text for the input (custom prop)',
      table: {
        type: { summary: 'string' },
      },
    },
    keyfilter: {
      control: 'select',
      options: ['int', 'num', 'money', 'alpha', 'alphanum', 'hex', 'email'],
      description: 'Format definition for filtering',
      table: {
        type: { summary: 'string | RegExp' },
      },
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'Specifies the input variant of the component',
      table: {
        type: { summary: 'string' },
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
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Enter text',
    title: 'Text Input',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Sample text',
    title: 'With Value',
  },
};

export const WithLabel: Story = {
  args: {
    title: 'Username',
    placeholder: 'Enter your username',
    name: 'username',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    title: 'Read Only',
    value: 'Read only text',
    readOnly: true,
  },
};

export const Small: Story = {
  args: {
    title: 'Small',
    placeholder: 'Small input',
    className: 'p-inputtext-sm',
  },
};

export const Large: Story = {
  args: {
    title: 'Large',
    placeholder: 'Large input',
    className: 'p-inputtext-lg',
  },
};

export const WithMaxLength: Story = {
  args: {
    title: 'Max Length',
    placeholder: 'Max 10 characters',
    maxLength: 10,
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    title: 'Email',
    name: 'email',
  },
};

export const Search: Story = {
  args: {
    title: 'Search',
    type: 'search',
    placeholder: 'Search...',
  },
};

export const KeyFilterInteger: Story = {
  args: {
    placeholder: 'Only integers',
    keyfilter: 'int',
    title: 'Integer Input',
  },
};

export const KeyFilterAlpha: Story = {
  args: {
    placeholder: 'Only letters',
    keyfilter: 'alpha',
    title: 'Alphabetic Input',
  },
};

export const KeyFilterAlphanum: Story = {
  args: {
    placeholder: 'Letters and numbers',
    keyfilter: 'alphanum',
    title: 'Alphanumeric Input',
  },
};

export const KeyFilterEmail: Story = {
  args: {
    placeholder: 'Email format',
    keyfilter: 'email',
    title: 'Email Input',
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Filled variant',
    variant: 'filled',
    title: 'Filled',
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid input',
    invalid: true,
    title: 'Error Field',
  },
};

export const Required: Story = {
  args: {
    placeholder: 'Required field',
    required: true,
    title: 'Required Field',
  },
};

export const FullExample: Story = {
  args: {
    title: 'Full Name',
    placeholder: 'Enter your full name',
    name: 'fullname',
    required: true,
    maxLength: 50,
    autoComplete: 'name',
  },
};
