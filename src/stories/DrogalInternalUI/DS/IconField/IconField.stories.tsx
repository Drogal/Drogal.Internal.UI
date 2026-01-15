import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { IconField } from '../../../../components/IconField';
import { InputText } from '../../../../components/InputText';
import Icon from '../../../../components/Icon';
import EnumIcons from '../../../../icons/EnumIcons';
import { InputIcon } from '../../../../components/InputIcon';

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
      <InputText placeholder="Search" />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const IconLeft: Story = {
  render: (args) => (
    <IconField {...args}>
      <Icon name={EnumIcons.Outlined.search} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
      <InputText placeholder="Buscar..." style={{ paddingLeft: '40px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const IconRight: Story = {
  render: (args) => (
    <IconField {...args}>
      <InputText placeholder="Username" style={{ paddingRight: '40px' }} />
      <span className="pi pi-user" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'right',
  },
};

export const SearchField: Story = {
  render: (args) => (
    <IconField {...args}>
      <Icon name={EnumIcons.Outlined.search} />
      <InputText placeholder="Pesquisar produtos..." style={{ paddingLeft: '40px', width: '300px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const EmailField: Story = {
  render: (args) => (
    <IconField {...args}>
      <span className="pi pi-envelope" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
      <InputText placeholder="Digite seu email" type="email" style={{ paddingLeft: '40px', width: '300px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const CalendarField: Story = {
  render: (args) => (
    <IconField {...args}>
      <InputText placeholder="Selecione uma data" style={{ paddingRight: '40px', width: '250px' }} />
      <span className="pi pi-calendar" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'right',
  },
};

export const LocationField: Story = {
  render: (args) => (
    <IconField {...args}>
      <span className="pi pi-map-marker" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
      <InputText placeholder="Digite sua localização" style={{ paddingLeft: '40px', width: '300px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const PhoneField: Story = {
  render: (args) => (
    <IconField {...args}>
      <span className="pi pi-phone" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
      <InputText placeholder="(00) 00000-0000" style={{ paddingLeft: '40px', width: '250px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const LockField: Story = {
  render: (args) => (
    <IconField {...args}>
      <span className="pi pi-lock" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
      <InputText placeholder="Digite sua senha" type="password" style={{ paddingLeft: '40px', width: '250px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const FilterField: Story = {
  render: (args) => (
    <IconField {...args}>
      <InputText placeholder="Filtrar resultados" style={{ paddingRight: '40px', width: '250px' }} />
      <span className="pi pi-filter" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'right',
  },
};

export const CreditCardField: Story = {
  render: (args) => (
    <IconField {...args}>
      <span className="pi pi-credit-card" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
      <InputText placeholder="0000 0000 0000 0000" style={{ paddingLeft: '40px', width: '280px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};

export const TagField: Story = {
  render: (args) => (
    <IconField {...args}>
      <span className="pi pi-tag" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
      <InputText placeholder="Digite as tags" style={{ paddingLeft: '40px', width: '250px' }} />
    </IconField>
  ),
  args: {
    iconPosition: 'left',
  },
};
