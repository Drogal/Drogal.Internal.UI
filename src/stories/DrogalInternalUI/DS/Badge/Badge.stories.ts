import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Badge } from '../../../../components/Badge';

const meta = {
  title: 'Drogal Internal UI/DS/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Value to display inside the badge',
      table: {
        type: { summary: 'string | number' },
      },
    },
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger', 'secondary', 'contrast'],
      description: 'Severity type of the badge',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['normal', 'large', 'xlarge'],
      description: 'Size of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
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
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '2',
  },
};

export const Success: Story = {
  args: {
    value: '8',
    severity: 'success',
  },
};

export const Info: Story = {
  args: {
    value: '4',
    severity: 'info',
  },
};

export const Warning: Story = {
  args: {
    value: '12',
    severity: 'warning',
  },
};

export const Danger: Story = {
  args: {
    value: '3',
    severity: 'danger',
  },
};

export const Secondary: Story = {
  args: {
    value: '5',
    severity: 'secondary',
  },
};

export const Contrast: Story = {
  args: {
    value: '7',
    severity: 'contrast',
  },
};

export const Large: Story = {
  args: {
    value: '10',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    value: '99',
    size: 'xlarge',
  },
};

export const WithText: Story = {
  args: {
    value: 'NEW',
    severity: 'success',
  },
};

export const LargeDanger: Story = {
  args: {
    value: '25',
    severity: 'danger',
    size: 'large',
  },
};

export const XLargeWarning: Story = {
  args: {
    value: '100+',
    severity: 'warning',
    size: 'xlarge',
  },
};
