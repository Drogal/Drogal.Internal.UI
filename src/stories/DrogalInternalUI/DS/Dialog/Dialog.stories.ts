import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Dialog } from '../../../../components/Dialog';

const meta = {
  title: 'Drogal Internal UI/DS/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
