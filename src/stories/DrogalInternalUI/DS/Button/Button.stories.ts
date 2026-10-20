import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Button } from '../../../../components/Button';

const meta = {
  title: 'Drogal Internal UI/DS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text of the button',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'text',
      description: 'Name of the icon (e.g., "pi pi-check")',
      table: {
        type: { summary: 'string' },
      },
    },
    iconPos: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    badge: {
      control: 'text',
      description: 'Value of the badge',
      table: {
        type: { summary: 'string' },
      },
    },
    badgeClassName: {
      control: 'text',
      description: 'Style class of the badge',
      table: {
        type: { summary: 'string' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loadingIcon: {
      control: 'text',
      description: 'Icon to display in loading state',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pi pi-spinner pi-spin' },
      },
    },
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger', 'help', 'secondary', 'contrast'],
      description: 'Defines the style of the button',
      table: {
        type: { summary: 'string' },
      },
    },
    raised: {
      control: 'boolean',
      description: 'Add a shadow to indicate elevation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Add a circular border radius to the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text: {
      control: 'boolean',
      description: 'Add a textual class to the button without a background initially',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    outlined: {
      control: 'boolean',
      description: 'Add a border class without a background initially',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    plain: {
      control: 'boolean',
      description: 'Add a plain textual class to the button without a background initially',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    link: {
      control: 'boolean',
      description: 'Style button as a link',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Size of the button',
      table: {
        type: { summary: 'string' },
      },
    },
    visible: {
      control: 'boolean',
      description: 'When present, it specifies that the element should be visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When present, it specifies that the component should be disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Type of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    tooltip: {
      control: 'text',
      description: 'Content of the tooltip',
      table: {
        type: { summary: 'string' },
      },
    },
    tooltipOptions: {
      control: 'object',
      description: 'Configuration of the tooltip',
      table: {
        type: { summary: 'object' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Save',
    icon: 'pi pi-check',
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'pi pi-check',
    'aria-label': 'Submit',
  },
};

export const IconRight: Story = {
  args: {
    label: 'Next',
    icon: 'pi pi-arrow-right',
    iconPos: 'right',
  },
};

export const IconTop: Story = {
  args: {
    label: 'Upload',
    icon: 'pi pi-cloud-upload',
    iconPos: 'top',
  },
};

export const IconBottom: Story = {
  args: {
    label: 'Download',
    icon: 'pi pi-cloud-download',
    iconPos: 'bottom',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    severity: 'success',
  },
};

export const Info: Story = {
  args: {
    label: 'Info',
    severity: 'info',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    severity: 'warning',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger',
    severity: 'danger',
  },
};

export const Help: Story = {
  args: {
    label: 'Help',
    severity: 'help',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    severity: 'secondary',
  },
};

export const Contrast: Story = {
  args: {
    label: 'Contrast',
    severity: 'contrast',
  },
};

export const Raised: Story = {
  args: {
    label: 'Raised',
    raised: true,
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded',
    rounded: true,
  },
};

export const Text: Story = {
  args: {
    label: 'Text',
    text: true,
  },
};

export const TextWithIcon: Story = {
  args: {
    label: 'Submit',
    icon: 'pi pi-check',
    text: true,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    outlined: true,
  },
};

export const OutlinedWithSeverity: Story = {
  args: {
    label: 'Success',
    severity: 'success',
    outlined: true,
  },
};

export const Link: Story = {
  args: {
    label: 'Link',
    link: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true,
  },
};

export const LoadingIcon: Story = {
  args: {
    label: 'Submit',
    icon: 'pi pi-check',
    loading: true,
  },
};

export const WithBadge: Story = {
  args: {
    label: 'Notifications',
    icon: 'pi pi-bell',
    badge: '8',
  },
};

export const WithBadgeSeverity: Story = {
  args: {
    label: 'Messages',
    icon: 'pi pi-inbox',
    badge: '2',
    badgeClassName: 'p-badge-danger',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const WithTooltip: Story = {
  args: {
    label: 'Hover me',
    tooltip: 'This is a tooltip',
  },
};

export const RoundedIconOnly: Story = {
  args: {
    icon: 'pi pi-heart',
    rounded: true,
    'aria-label': 'Favorite',
  },
};

export const RaisedRounded: Story = {
  args: {
    label: 'Action',
    raised: true,
    rounded: true,
  },
};
