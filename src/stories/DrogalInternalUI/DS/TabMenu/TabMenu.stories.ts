import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { TabMenu } from '../../../../components/TabMenu';

// Sample menu items
const items = [
  { label: 'Home', icon: 'pi pi-home' },
  { label: 'Calendar', icon: 'pi pi-calendar' },
  { label: 'Edit', icon: 'pi pi-pencil' },
  { label: 'Documentation', icon: 'pi pi-file' },
  { label: 'Settings', icon: 'pi pi-cog' }
];

const simpleItems = [
  { label: 'Dashboard' },
  { label: 'Transactions' },
  { label: 'Products' },
  { label: 'Messages' }
];

const badgeItems = [
  { label: 'Home', icon: 'pi pi-home' },
  { label: 'Calendar', icon: 'pi pi-calendar', badge: '2' },
  { label: 'Messages', icon: 'pi pi-inbox', badge: '5', badgeClassName: 'p-badge-danger' },
  { label: 'Settings', icon: 'pi pi-cog' }
];

const meta = {
  title: 'Drogal Internal UI/DS/TabMenu',
  component: TabMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    model: {
      control: 'object',
      description: 'An array of menuitems',
      table: {
        type: { summary: 'MenuItem[]' },
      },
    },
    activeIndex: {
      control: 'number',
      description: 'Active index of menuitem',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline style of the component',
      table: {
        type: { summary: 'object' },
      },
    },
    className: {
      control: 'text',
      description: 'Style class of the component',
      table: {
        type: { summary: 'string' },
      },
    },
    pt: {
      control: 'object',
      description: 'Uses to pass attributes to DOM elements inside the component',
      table: {
        type: { summary: 'object' },
      },
    },
    ptOptions: {
      control: 'object',
      description: 'Used to configure passthrough(pt) options of the component',
      table: {
        type: { summary: 'object' },
      },
    },
  },
} satisfies Meta<typeof TabMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    model: items,
  },
};

export const WithActiveIndex: Story = {
  args: {
    model: items,
    activeIndex: 2,
  },
};

export const SimpleLabels: Story = {
  args: {
    model: simpleItems,
  },
};

export const WithBadges: Story = {
  args: {
    model: badgeItems,
  },
};

export const IconsOnly: Story = {
  args: {
    model: [
      { icon: 'pi pi-home' },
      { icon: 'pi pi-calendar' },
      { icon: 'pi pi-pencil' },
      { icon: 'pi pi-cog' }
    ],
  },
};

export const LongList: Story = {
  args: {
    model: [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'Calendar', icon: 'pi pi-calendar' },
      { label: 'Edit', icon: 'pi pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-file' },
      { label: 'Settings', icon: 'pi pi-cog' },
      { label: 'Profile', icon: 'pi pi-user' },
      { label: 'Messages', icon: 'pi pi-inbox' },
      { label: 'Notifications', icon: 'pi pi-bell' }
    ],
  },
};
