import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { ProgressBar } from '../../../../components/ProgressBar';

const meta = {
  title: 'Drogal Internal UI/DS/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Indica o andamento de uma operação, como a finalização da venda ou o envio de um arquivo. Por padrão é uma barra fina, sem percentual.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Percentual concluído (modo determinado)',
      table: { type: { summary: 'number' } },
    },
    mode: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: '`indeterminate` quando não se sabe quanto falta',
      table: { type: { summary: "'determinate' | 'indeterminate'" }, defaultValue: { summary: 'determinate' } },
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description: 'Espessura da barra: `medium` (6px) ou `small` (4px). Ignorada com `showValue`.',
      table: { type: { summary: "'medium' | 'small'" }, defaultValue: { summary: 'medium' } },
    },
    showValue: {
      control: 'boolean',
      description: 'Exibe o percentual dentro da barra (usa a altura do tema)',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinado: Story = {
  args: { value: 60 },
  parameters: {
    docs: { description: { story: 'Progresso conhecido, como as etapas da finalização da venda.' } },
  },
};

export const Indeterminado: Story = {
  args: { mode: 'indeterminate' },
  parameters: {
    docs: { description: { story: 'Aguardando uma resposta sem previsão, como a autorização da SEFAZ.' } },
  },
};

export const Pequeno: Story = {
  args: { value: 76, size: 'small' },
  parameters: {
    docs: { description: { story: 'Barra de 4px, usada no item de arquivo durante o envio.' } },
  },
};

export const ComPercentual: Story = {
  args: { value: 40, showValue: true },
  parameters: {
    docs: { description: { story: 'Com `showValue`, a barra volta à altura do tema para caber o percentual.' } },
  },
};
