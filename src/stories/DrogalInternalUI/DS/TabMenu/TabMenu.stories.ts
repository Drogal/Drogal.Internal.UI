import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { TabMenu } from '../../../../components/TabMenu';

const meta = {
  title: 'Drogal Internal UI/DS/TabMenu',
  component: TabMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
