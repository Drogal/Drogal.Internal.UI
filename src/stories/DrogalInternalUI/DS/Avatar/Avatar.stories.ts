import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from '../../../../components/Avatar';
import '../../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Defines the text to display',
    },
    icon: {
      control: 'text',
      description: 'Defines the icon to display',
    },
    image: {
      control: 'text',
      description: 'Defines the image to display',
    },
    size: {
      control: 'select',
      options: ['normal', 'large', 'xlarge'],
      description: 'Size of the element',
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
      description: 'Shape of the element',
    },
    style: {
      control: 'object',
      description: 'Inline style of the element',
    },
    className: {
      control: 'text',
      description: 'Style class of the element',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'PI',
  },
};

export const WithImage: Story = {
  args: {
    image: 'https://i.pravatar.cc/150?img=12',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'pi pi-user',
  },
};

export const Large: Story = {
  args: {
    label: 'LG',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    label: 'XL',
    size: 'xlarge',
  },
};

export const Small: Story = {
  args: {
    label: 'SM',
  },
};

export const Circle: Story = {
  args: {
    label: 'CR',
    shape: 'circle',
  },
};

export const Square: Story = {
  args: {
    label: 'SQ',
    shape: 'square',
  },
};
