import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { TabPanel } from '../../../../components/TabView';

const meta = {
  title: 'Drogal Internal UI/DS/TabPanel',
  component: TabPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
