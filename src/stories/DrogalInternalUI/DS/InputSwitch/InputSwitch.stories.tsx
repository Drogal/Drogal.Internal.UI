import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputSwitch, type InputSwitchDrgProps } from '../../../../components/Input/InputSwitch';
import '../../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/InputSwitch',
  component: InputSwitch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Alterna um valor ligado/desligado. Na variante <strong>card</strong> (Toggle Field), a caixa inteira é clicável e mostra título e descrição; ligada, fica azul.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Rótulo. No `default` fica acima do switch; no `card`, ao lado, como título.',
      table: { type: { summary: 'string' } },
    },
    description: {
      control: 'text',
      description: 'Texto de apoio abaixo do título (só no `card`)',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: 'select',
      options: ['default', 'card'],
      description: 'Variante visual',
      table: { type: { summary: "'default' | 'card'" }, defaultValue: { summary: 'default' } },
    },
    checked: {
      control: 'boolean',
      description: 'Valor do switch',
      table: { type: { summary: 'boolean' } },
    },
    disabled: {
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
  },
} satisfies Meta<typeof InputSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

const Controlled = (args: InputSwitchDrgProps) => {
  const [checked, setChecked] = useState(Boolean(args.checked));
  return <InputSwitch {...args} checked={checked} onChange={(event) => setChecked(Boolean(event.value))} />;
};

export const Primary: Story = {
  args: { checked: false },
  render: (args) => <Controlled {...args} />,
};

export const ComTitulo: Story = {
  args: { title: 'Notificações', checked: true },
  render: (args) => <Controlled {...args} />,
};

export const ToggleField: Story = {
  args: {
    variant: 'card',
    title: 'Dividir pagamento',
    description: 'Use mais de uma forma de pagamento nesta venda',
    checked: false,
  },
  render: (args) => (
    <div style={{ width: '28.75rem' }}>
      <Controlled {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Variante <code>card</code>. Clique em qualquer parte da caixa para alternar.',
      },
    },
  },
};

export const ToggleFieldLigado: Story = {
  args: { ...ToggleField.args, checked: true },
  render: ToggleField.render,
};

export const ToggleFieldDesabilitado: Story = {
  args: { ...ToggleField.args, disabled: true },
  render: ToggleField.render,
};
