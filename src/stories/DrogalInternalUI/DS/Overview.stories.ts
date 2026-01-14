import type { Meta, StoryObj } from '@storybook/react-vite';

import { Overview } from './Overview';

const meta = {
  title: 'Drogal Internal UI/DS',
  component: Overview,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Overview>;
export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const OverviewList: Story = {
  play: async () => {},
};
