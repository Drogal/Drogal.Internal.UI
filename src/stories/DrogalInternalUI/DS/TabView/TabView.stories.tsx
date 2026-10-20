import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { TabView } from '../../../../components/TabView';
import { TabPanel } from '../../../../components/TabView.TabPanel';

const meta = {
  title: 'Drogal Internal UI/DS/TabView',
  component: TabView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    activeIndex: {
      control: 'number',
      description: 'Index of the active tab',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    scrollable: {
      control: 'boolean',
      description: 'When enabled, tab headers can be scrolled horizontally',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    panelContainerStyle: {
      control: 'object',
      description: 'Inline style of the tab panels container',
      table: {
        type: { summary: 'object' },
      },
    },
    panelContainerClassName: {
      control: 'text',
      description: 'Style class of the tab panels container',
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
  },
} satisfies Meta<typeof TabView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <TabView {...args}>
      <TabPanel header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TabPanel>
      <TabPanel header="Header II">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </TabPanel>
      <TabPanel header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
      </TabPanel>
    </TabView>
  ),
  args: {
    activeIndex: 0,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <TabView {...args}>
      <TabPanel header="Header I" leftIcon="pi pi-calendar">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </TabPanel>
      <TabPanel header="Header II" leftIcon="pi pi-user">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </TabPanel>
      <TabPanel header="Header III" leftIcon="pi pi-cog">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
        </p>
      </TabPanel>
    </TabView>
  ),
  args: {
    activeIndex: 0,
  },
};

export const WithActiveIndex: Story = {
  render: (args) => (
    <TabView {...args}>
      <TabPanel header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </TabPanel>
      <TabPanel header="Header II">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
      </TabPanel>
      <TabPanel header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos.
        </p>
      </TabPanel>
    </TabView>
  ),
  args: {
    activeIndex: 2,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <TabView {...args}>
      <TabPanel header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </TabPanel>
      <TabPanel header="Header II" disabled>
        <p className="m-0">
          This tab is disabled and cannot be selected.
        </p>
      </TabPanel>
      <TabPanel header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos.
        </p>
      </TabPanel>
    </TabView>
  ),
  args: {
    activeIndex: 0,
  },
};

export const Scrollable: Story = {
  render: (args) => (
    <TabView {...args}>
      <TabPanel header="Tab 1">
        <p className="m-0">Content 1</p>
      </TabPanel>
      <TabPanel header="Tab 2">
        <p className="m-0">Content 2</p>
      </TabPanel>
      <TabPanel header="Tab 3">
        <p className="m-0">Content 3</p>
      </TabPanel>
      <TabPanel header="Tab 4">
        <p className="m-0">Content 4</p>
      </TabPanel>
      <TabPanel header="Tab 5">
        <p className="m-0">Content 5</p>
      </TabPanel>
      <TabPanel header="Tab 6">
        <p className="m-0">Content 6</p>
      </TabPanel>
      <TabPanel header="Tab 7">
        <p className="m-0">Content 7</p>
      </TabPanel>
      <TabPanel header="Tab 8">
        <p className="m-0">Content 8</p>
      </TabPanel>
    </TabView>
  ),
  args: {
    scrollable: true,
  },
};

