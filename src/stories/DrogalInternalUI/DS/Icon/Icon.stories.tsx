import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import Icon from '../../../../components/Icon';
import EnumIcons from '../../../../icons/EnumIcons';

const meta = {
  title: 'Drogal Internal UI/DS/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do ícone. Nome pode ser encontrado corretamente na lista de Icons disponíveis.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Estilos inline aplicados ao elemento',
      table: {
        type: { summary: 'CSSProperties' },
      },
    },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    name: EnumIcons.Outlined.home,
  },
};

export const Rounded: Story = {
  args: {
    name: EnumIcons.Rounded.home,
  },
};

export const ComEstilo: Story = {
  args: {
    name: EnumIcons.Outlined.favorite,
    style: { fontSize: '2rem', color: '#e53935' },
  },
};

export const Pequeno: Story = {
  args: {
    name: EnumIcons.Outlined.stars,
    style: { fontSize: '1rem' },
  },
};

export const Medio: Story = {
  args: {
    name: EnumIcons.Outlined.stars,
    style: { fontSize: '1.5rem' },
  },
};

export const Grande: Story = {
  args: {
    name: EnumIcons.Outlined.stars,
    style: { fontSize: '3rem' },
  },
};

export const ComClasse: Story = {
  args: {
    name: EnumIcons.Outlined.settings,
    className: 'p-2',
  },
};
