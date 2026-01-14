import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomButton from './customButton';

const meta = {
  title: 'Drogal Internal UI/DS/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
