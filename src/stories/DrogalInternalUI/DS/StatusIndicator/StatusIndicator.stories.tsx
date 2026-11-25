import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { StatusIndicator } from '../../../../components/StatusIndicator';

const meta = {
  title: 'Drogal Internal UI/DS/StatusIndicator',
  component: StatusIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Ponto colorido com texto, para o estado da conexão do PDV. A cor do texto vem do elemento pai, então funciona no Header escuro e em fundo claro.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['online', 'offline', 'disconnected'],
      description: 'Estado exibido',
      table: { type: { summary: "'online' | 'offline' | 'disconnected'" } },
    },
    label: {
      control: 'text',
      description: 'Texto ao lado do ponto. Padrão: "Online", "Offline" ou "Sem conexão".',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof StatusIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Online: Story = { args: { status: 'online' } };
export const Offline: Story = { args: { status: 'offline' } };
export const SemConexao: Story = { args: { status: 'disconnected' } };

export const NoHeaderEscuro: Story = {
  args: { status: 'online' },
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '1.5rem 2rem', background: '#434e5c', color: '#fff' }}>
      <StatusIndicator status="online" />
      <StatusIndicator status="offline" />
      <StatusIndicator status="disconnected" />
    </div>
  ),
};
