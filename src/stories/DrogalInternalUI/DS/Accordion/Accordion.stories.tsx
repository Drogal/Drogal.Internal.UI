import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from '../../../../components/Accordion';
import '../../../../theme.css';
import { AccordionTab } from '../../../../components/Accordion.Tab';


const meta: Meta<typeof Accordion> = {
  title: 'Drogal Internal UI/DS/Accordion',
  component: Accordion,
  subcomponents: { AccordionTab },
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    activeIndex: {
      control: 'number',
      description: 'Index of the active tab or an array of indexes in multiple mode',
      table: {
        type: { summary: 'number | number[]' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'When enabled, multiple tabs can be activated at the same time',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    expandIcon: {
      control: 'text',
      description: 'Icon of a collapsed tab',
      table: {
        type: { summary: 'string' },
      },
    },
    collapseIcon: {
      control: 'text',
      description: 'Icon of an expanded tab',
      table: {
        type: { summary: 'string' },
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
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionTab header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </AccordionTab>
      <AccordionTab header="Header II">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </AccordionTab>
      <AccordionTab header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
      </AccordionTab>
    </Accordion>
  ),
  args: {
    activeIndex: 0,
  },
};

export const Multiple: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionTab header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </AccordionTab>
      <AccordionTab header="Header II">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </AccordionTab>
      <AccordionTab header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </AccordionTab>
    </Accordion>
  ),
  args: {
    activeIndex: 0,
    multiple: true,
  },
};

export const WithActiveIndexes: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionTab header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AccordionTab>
      <AccordionTab header="Header II">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </AccordionTab>
      <AccordionTab header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
        </p>
      </AccordionTab>
    </Accordion>
  ),
  args: {
    multiple: true,
    activeIndex: [0, 2],
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionTab header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AccordionTab>
      <AccordionTab header="Header II" disabled>
        <p className="m-0">
          This tab is disabled and cannot be opened.
        </p>
      </AccordionTab>
      <AccordionTab header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
        </p>
      </AccordionTab>
    </Accordion>
  ),
  args: {
    activeIndex: 0,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionTab header="Header I" >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AccordionTab>
      <AccordionTab header="Header II" >
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </AccordionTab>
      <AccordionTab header="Header III" >
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
        </p>
      </AccordionTab>
    </Accordion>
  ),
  args: {
    activeIndex: 0,
  },
};

export const CustomExpandIcons: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionTab header="Header I">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AccordionTab>
      <AccordionTab header="Header II">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </AccordionTab>
      <AccordionTab header="Header III">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
        </p>
      </AccordionTab>
    </Accordion>
  ),
  args: {
    activeIndex: 0,
    expandIcon: 'pi pi-plus',
    collapseIcon: 'pi pi-minus',
  },
};