import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Editor } from '../../../../components/Input/Editor';

const meta = {
  title: 'Drogal Internal UI/DS/Editor',
  component: Editor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Rich Text Editor',
    placeholder: 'Start typing here...',
  },
};
