import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Dialog } from '../../../../components/Dialog';
import { Button } from '../../../../components/Button';
import { useState } from 'react';

const meta = {
  title: 'Drogal Internal UI/DS/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
      description: 'Title content of the dialog',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    footer: {
      control: 'text',
      description: 'Footer content of the dialog',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    visible: {
      control: 'boolean',
      description: 'Specifies the visibility of the dialog',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    position: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of the dialog',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
    },
    modal: {
      control: 'boolean',
      description: 'Defines if background should be blocked when dialog is displayed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    resizable: {
      control: 'boolean',
      description: 'Enables resizing of the dialog',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    draggable: {
      control: 'boolean',
      description: 'Enables dragging to change the position using header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    dismissableMask: {
      control: 'boolean',
      description: 'Specifies if clicking the modal background should hide the dialog',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Specifies if pressing escape key should hide the dialog',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Adds a close icon to the header to hide the dialog',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    maximizable: {
      control: 'boolean',
      description: 'Whether the dialog can be displayed full screen',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maximized: {
      control: 'boolean',
      description: 'When enabled, the dialog is initially displayed full screen',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    blockScroll: {
      control: 'boolean',
      description: 'Whether background scroll should be blocked when dialog is visible',
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
    contentStyle: {
      control: 'object',
      description: 'Inline style of the content section',
      table: {
        type: { summary: 'object' },
      },
    },
    contentClassName: {
      control: 'text',
      description: 'Style class of the content section',
      table: {
        type: { summary: 'string' },
      },
    },
    headerStyle: {
      control: 'object',
      description: 'Inline style of the header section',
      table: {
        type: { summary: 'object' },
      },
    },
    headerClassName: {
      control: 'text',
      description: 'Style class of the header section',
      table: {
        type: { summary: 'string' },
      },
    },
    breakpoints: {
      control: 'object',
      description: 'Object literal to define widths per screen size',
      table: {
        type: { summary: 'object' },
      },
    },
    icons: {
      control: 'object',
      description: 'Custom icons template for the header',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Dialog Title',
    style: { width: '50vw' },
    onHide() { },
  },
};

export const WithFooter: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    const footerContent = (
      <div>
        <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} severity="secondary" />
        <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} />
      </div>
    );

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          footer={footerContent}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Do you want to continue?
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Confirmation',
    style: { width: '50vw' },
    onHide() { },
  },
};

export const Maximizable: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Maximizable Dialog',
    style: { width: '50vw' },
    maximizable: true,
    onHide() { },
  },
};

export const PositionTop: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog appears at the top of the page.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Top Position',
    style: { width: '50vw' },
    position: 'top',
    onHide() { },
  },
};

export const PositionBottom: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog appears at the bottom of the page.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Bottom Position',
    style: { width: '50vw' },
    position: 'bottom',
    onHide() { },
  },
};

export const PositionLeft: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog appears on the left side.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Left Position',
    style: { width: '25vw' },
    position: 'left',
    onHide() { },
  },
};

export const PositionRight: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog appears on the right side.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Right Position',
    style: { width: '25vw' },
    position: 'right',
    onHide() { },
  },
};

export const Resizable: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog can be resized by dragging the edges.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Resizable Dialog',
    style: { width: '50vw' },
    resizable: true,
    onHide() { },
  },
};

export const NotDraggable: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog cannot be dragged.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Not Draggable',
    style: { width: '50vw' },
    draggable: false,
    onHide() { },
  },
};

export const DismissableMask: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Click outside this dialog to close it.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Dismissable Mask',
    style: { width: '50vw' },
    dismissableMask: true,
    onHide() { },
  },
};

export const WithoutCloseIcon: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    const footerContent = (
      <div>
        <Button label="Close" icon="pi pi-times" onClick={() => setVisible(false)} />
      </div>
    );

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          footer={footerContent}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog has no close icon. Use the button to close.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'No Close Icon',
    style: { width: '50vw' },
    closable: false,
    onHide() { },
  },
};

export const Responsive: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button label="Show" onClick={() => setVisible(true)} />
        <Dialog
          {...args}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            This dialog is responsive and adjusts its width based on screen size.
          </p>
        </Dialog>
      </>
    );
  },
  args: {
    header: 'Responsive Dialog',
    style: { width: '50vw' },
    breakpoints: { '960px': '75vw', '640px': '90vw' },
    onHide() { },
  },
};
