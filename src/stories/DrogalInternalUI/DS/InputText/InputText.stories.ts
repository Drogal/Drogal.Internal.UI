import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { InputText } from '../../../../components/InputText';

const meta = {
  title: 'Drogal Internal UI/DS/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
