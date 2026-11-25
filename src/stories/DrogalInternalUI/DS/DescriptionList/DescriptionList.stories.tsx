import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { DescriptionItem, DescriptionList } from '../../../../components/DescriptionList';

const meta = {
  title: 'Drogal Internal UI/DS/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Lista de pares rótulo e valor (um <code>&lt;dl&gt;</code>). Passe as linhas em <code>items</code> ou como <code>DescriptionItem</code> em <code>children</code>. O <code>DescriptionItem</code> também pode ser usado sozinho.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '27rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    items: { control: 'object', table: { type: { summary: '{ label, value, key? }[]' } } },
    variant: {
      control: 'select',
      options: ['filled', 'plain'],
      table: { type: { summary: "'filled' | 'plain'" }, defaultValue: { summary: 'filled' } },
    },
  },
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TransacaoRecusada: Story = {
  args: {
    items: [
      { label: 'Motivo', value: 'Saldo ou limite insuficiente' },
      { label: 'Código', value: '51' },
      { label: 'Bandeira', value: 'Mastercard •••• 4821' },
      { label: 'NSU', value: '004512' },
    ],
  },
};

export const SemFundo: Story = {
  args: {
    variant: 'plain',
    items: [
      { label: 'Pagador', value: 'XV DE PIRACICABA S.A.F' },
      { label: 'Forma', value: 'PIX' },
    ],
  },
};

export const ItemSozinho: Story = {
  args: {},
  render: () => (
    <dl style={{ margin: 0 }}>
      <DescriptionItem label="Rótulo" value="Valor" />
    </dl>
  ),
  parameters: {
    docs: {
      description: {
        story: 'O <code>DescriptionItem</code> sozinho. Ele renderiza <code>&lt;dt&gt;</code> e <code>&lt;dd&gt;</code>, então fica dentro de um <code>&lt;dl&gt;</code>.',
      },
    },
  },
};
