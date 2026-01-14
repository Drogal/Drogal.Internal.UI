import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { InputSwitch } from '../../../../components/InputSwitch';

const meta = {
  title: 'Drogal Internal UI/DS/InputSwitch',
  component: InputSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
