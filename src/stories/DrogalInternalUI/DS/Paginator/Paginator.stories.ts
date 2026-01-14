import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Paginator } from '../../../../components/Paginator';

const meta = {
  title: 'Drogal Internal UI/DS/Paginator',
  component: Paginator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
