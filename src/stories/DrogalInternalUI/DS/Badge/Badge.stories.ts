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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
