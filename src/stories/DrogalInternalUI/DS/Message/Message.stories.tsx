import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { Message } from '../../../../components/Message';

const meta = {
  title: 'Drogal Internal UI/DS/Message',
  component: Message,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Mensagem de retorno em linha (sucesso, informação, aviso ou erro). Para o resultado de uma operação em destaque, como "Pagamento confirmado", use o <code>Result</code>, que é montado sobre este componente.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto da mensagem',
      table: { type: { summary: 'ReactNode' } },
    },
    severity: {
      control: 'select',
      options: ['success', 'info', 'warn', 'error', 'secondary', 'contrast'],
      description: 'Tipo da mensagem, que define cor e ícone',
      table: { type: { summary: "'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast'" } },
    },
    content: {
      control: false,
      description: 'Conteúdo customizado, no lugar do ícone e do texto padrão',
      table: { type: { summary: 'ReactNode | (props) => ReactNode' } },
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { severity: 'success', text: 'Pagamento confirmado.' },
};

export const Info: Story = {
  args: { severity: 'info', text: 'Aguardando o cliente escanear o QR Code.' },
};

export const Warn: Story = {
  args: { severity: 'warn', text: 'Item com NCM inexistente.' },
};

export const ErrorMessage: Story = {
  name: 'Error',
  args: { severity: 'error', text: 'A operadora não autorizou a transação.' },
};

export const TodasAsSeveridades: Story = {
  args: { text: 'Mensagem' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '28rem' }}>
      <Message severity="success" text="Pagamento confirmado." />
      <Message severity="info" text="Aguardando o cliente escanear o QR Code." />
      <Message severity="warn" text="Item com NCM inexistente." />
      <Message severity="error" text="A operadora não autorizou a transação." />
    </div>
  ),
};
