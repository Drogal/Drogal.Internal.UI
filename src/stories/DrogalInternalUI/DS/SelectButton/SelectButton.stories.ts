import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { SelectButton } from '../../../../components/SelectButton';

const meta = {
  title: 'Drogal Internal UI/DS/SelectButton',
  component: SelectButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
