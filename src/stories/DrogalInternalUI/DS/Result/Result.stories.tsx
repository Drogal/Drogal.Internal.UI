import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { Result } from '../../../../components/Result';
import { Button } from '../../../../components/Button';

const meta = {
  title: 'Drogal Internal UI/DS/Result',
  component: Result,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Resultado de uma operação em destaque: pagamento confirmado ou recusado, rejeição da SEFAZ, aguardando pagamento. O ícone vem da severidade e pode ser trocado por <code>icon</code>. Ações opcionais entram em <code>children</code>.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '26.25rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Define cor e ícone padrão',
      table: { type: { summary: "'success' | 'error' | 'warning' | 'info'" } },
    },
    title: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    description: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    icon: { control: false, description: 'Troca o ícone padrão (`EnumIcons`)', table: { type: { summary: 'IconName' } } },
    children: { control: false, description: 'Ações abaixo da descrição', table: { type: { summary: 'ReactNode' } } },
  },
} satisfies Meta<typeof Result>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PagamentoConfirmado: Story = {
  args: {
    severity: 'success',
    title: 'Pagamento confirmado',
    description: 'R$ 3.224,16 recebido via PIX às 10:42',
  },
};

export const PagamentoRecusado: Story = {
  args: {
    severity: 'error',
    title: 'Pagamento recusado',
    description: 'A operadora não autorizou a transação.',
  },
};

export const RejeicaoSefaz: Story = {
  args: {
    severity: 'warning',
    title: 'Rejeição 778 — NCM inexistente',
    description: 'Item: Medicamento analgésico (Cód. 041892)',
  },
};

export const AguardandoPagamento: Story = {
  args: {
    severity: 'info',
    title: 'Aguardando pagamento',
    description: 'Peça ao cliente para escanear o QR Code.',
  },
};

export const ComAcoes: Story = {
  args: {
    severity: 'error',
    title: 'Pagamento recusado',
    description: 'A operadora não autorizou a transação.',
    children: (
      <>
        <Button label="Trocar forma de pagamento" outlined size="small" />
        <Button label="Tentar de novo" size="small" />
      </>
    ),
  },
};
