import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { IconField } from '../../../../components/IconField';

const meta = {
  title: 'Drogal Internal UI/DS/IconField',
  component: IconField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
