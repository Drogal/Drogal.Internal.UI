import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { SummaryStat } from '../../../../components/SummaryStat';

const meta = {
  title: 'Drogal Internal UI/DS/SummaryStat',
  component: SummaryStat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Número em destaque com rótulo: total da venda, troco, valor restante a pagar.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    value: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    variant: {
      control: 'select',
      options: ['default', 'info', 'danger', 'success'],
      table: { type: { summary: "'default' | 'info' | 'danger' | 'success'" }, defaultValue: { summary: 'default' } },
    },
  },
} satisfies Meta<typeof SummaryStat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = { args: { label: 'Total da venda', value: 'R$ 3.224,16' } };
export const Info: Story = { args: { label: 'Total da venda', value: 'R$ 3.224,16', variant: 'info' } };
export const Danger: Story = { args: { label: 'Restante a pagar', value: 'R$ 1.200,00', variant: 'danger' } };
export const Success: Story = { args: { label: 'Troco', value: 'R$ 15,84', variant: 'success' } };

export const TodasAsVariantes: Story = {
  args: { label: 'Total da venda', value: 'R$ 3.224,16' },
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
      <SummaryStat label="Total da venda" value="R$ 3.224,16" />
      <SummaryStat label="Total da venda" value="R$ 3.224,16" variant="info" style={{ width: '16.25rem' }} />
      <SummaryStat label="Total da venda" value="R$ 3.224,16" variant="danger" />
      <SummaryStat label="Total da venda" value="R$ 3.224,16" variant="success" style={{ width: '16.25rem' }} />
    </div>
  ),
};
