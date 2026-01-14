import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { InputTextArea } from '../../../../components/InputTextArea';

const meta = {
  title: 'Drogal Internal UI/DS/InputTextArea',
  component: InputTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
