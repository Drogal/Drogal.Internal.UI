import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { InputPassword } from './InputPassword';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Drogal Internal UI/DS/InputPassword',
  component: InputPassword,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: false,
    label: "InputPassword",
  },
};

export const Secondary: Story = {
  args: {
    label: 'InputPassword',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'InputPassword',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'InputPassword',
  },
};
