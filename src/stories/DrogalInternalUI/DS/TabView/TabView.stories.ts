import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { TabView } from '../../../../components/TabView';

const meta = {
  title: 'Drogal Internal UI/DS/TabView',
  component: TabView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
