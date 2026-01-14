import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { InputNumber } from '../../../../components/InputNumber';

const meta = {
  title: 'Drogal Internal UI/DS/InputNumber',
  component: InputNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
