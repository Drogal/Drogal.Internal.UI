import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { MultiSelect } from '../../../../components/MultiSelect';

const meta = {
  title: 'Drogal Internal UI/DS/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
