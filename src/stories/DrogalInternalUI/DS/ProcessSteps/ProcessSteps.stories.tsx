import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { ProcessStep, ProcessSteps } from '../../../../components/ProcessSteps';

const meta = {
  title: 'Drogal Internal UI/DS/ProcessSteps',
  component: ProcessSteps,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Lista vertical de etapas de um processo, com barra de progresso opcional (<code>progress</code>). Cada etapa tem um estado: <code>done</code>, <code>loading</code>, <code>pending</code> ou <code>error</code>. O estado é lido pelo leitor de tela junto com o título.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '25rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    steps: { control: 'object', table: { type: { summary: '{ title, description?, status, key? }[]' } } },
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Percentual da barra abaixo das etapas, ou `"indeterminate"`. Sem ele, a barra não aparece.',
      table: { type: { summary: "number | 'indeterminate'" } },
    },
  },
} satisfies Meta<typeof ProcessSteps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FinalizandoVenda: Story = {
  args: {
    ariaLabel: 'Finalizando a venda',
    progress: 60,
    steps: [
      { title: 'Pagamento confirmado', description: 'PIX · R$ 3.224,16', status: 'done' },
      { title: 'Emitindo NFC-e na SEFAZ...', description: 'Autorizando nota 001288 · Série 001', status: 'loading' },
      { title: 'Imprimir comprovante', description: 'Aguardando autorização', status: 'pending' },
    ],
  },
};

export const TodosOsEstados: Story = {
  args: {},
  render: () => (
    <ProcessSteps>
      <ProcessStep title="Etapa" description="Descrição da etapa" status="done" />
      <ProcessStep title="Etapa" description="Descrição da etapa" status="loading" />
      <ProcessStep title="Etapa" description="Descrição da etapa" status="pending" />
      <ProcessStep title="Etapa" description="Descrição da etapa" status="error" />
    </ProcessSteps>
  ),
  parameters: {
    docs: { description: { story: 'As etapas também podem vir como <code>ProcessStep</code> em <code>children</code>.' } },
  },
};

export const ComErro: Story = {
  args: {
    steps: [
      { title: 'Pagamento confirmado', description: 'PIX · R$ 3.224,16', status: 'done' },
      { title: 'Rejeição na SEFAZ', description: '778 — NCM inexistente', status: 'error' },
      { title: 'Imprimir comprovante', description: 'Aguardando autorização', status: 'pending' },
    ],
  },
};
