import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { IconField } from '../../../../components/Input/IconField';
import { InputText } from '../../../../components/Input/InputText';
import Icon from '../../../../components/Icon';
import EnumIcons from '../../../../icons/EnumIcons';
import { InputIcon } from '../../../../components/Input/InputIcon';

const meta = {
  title: 'Drogal Internal UI/DS/IconField',
  component: IconField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Posição do ícone em relação ao input',
    },
    children: {
      control: false,
      description: 'Elementos filhos (input e ícone)',
    },
    className: {
      control: 'text',
      description: 'Classes CSS customizadas',
    },
    style: {
      control: 'object',
      description: 'Estilos inline',
    },
  },
} satisfies Meta<typeof IconField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <IconField {...args}>
      <InputIcon >
        <Icon name={EnumIcons.Outlined.search} />
      </InputIcon>
      <InputText title='IconFIeld' placeholder="Search" />
    </IconField>
  ),
  args: {
    // iconPosition: 'left',
  },
};

export const IconLeft: Story = {
  render: (args) => (
    <IconField {...args}>
      <InputIcon >
        <Icon name={EnumIcons.Outlined.search} />
      </InputIcon>
      <InputText title='IconFIeld' placeholder="Search" />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};