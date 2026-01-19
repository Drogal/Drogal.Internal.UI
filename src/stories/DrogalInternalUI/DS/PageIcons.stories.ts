import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icons } from './Icons';

const meta = {
  title: 'Drogal Internal UI/DS',
  component: Icons,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Icons>;
export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const IconsList: Story = {
  play: async () => {},
};
