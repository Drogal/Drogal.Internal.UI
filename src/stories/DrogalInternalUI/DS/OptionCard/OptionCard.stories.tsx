import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { OptionCard, type OptionCardOption, type OptionCardProps, type OptionCardValue } from '../../../../components/OptionCard';
import EnumIcons from '../../../../icons/EnumIcons';

const FORMAS_DE_PAGAMENTO: OptionCardOption[] = [
  { value: 'pix', label: 'PIX', description: 'Pagamento instantâneo', icon: EnumIcons.Outlined.qr_code },
  { value: 'credito', label: 'Crédito', description: 'Em até 12 vezes', icon: EnumIcons.Outlined.credit_card },
  { value: 'dinheiro', label: 'Dinheiro', description: 'Com cálculo de troco', icon: EnumIcons.Outlined.payments },
  { value: 'link', label: 'Link', description: 'Indisponível nesta loja', icon: EnumIcons.Outlined.attach_money, disabled: true },
];

const meta = {
  title: 'Drogal Internal UI/DS/OptionCard',
  component: OptionCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Escolha de uma opção entre poucas, em cartões, como a forma de pagamento. Sempre há uma selecionada. Usa o <code>SelectButton</code> por baixo: Tab entre as opções e Enter ou Espaço para escolher. Dê um nome ao grupo com <code>aria-label</code> ou <code>aria-labelledby</code>.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object', table: { type: { summary: '{ value, label, description?, icon?, disabled? }[]' } } },
    size: {
      control: 'select',
      options: ['large', 'compact'],
      description: '`large`: cartão com descrição. `compact`: botão de 40px.',
      table: { type: { summary: "'large' | 'compact'" }, defaultValue: { summary: 'large' } },
    },
    disabled: { control: 'boolean', table: { type: { summary: 'boolean' } } },
  },
} satisfies Meta<typeof OptionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Controlled = (args: OptionCardProps) => {
  const [value, setValue] = useState<OptionCardValue | null | undefined>(args.value);
  return <OptionCard {...args} value={value} onChange={setValue} />;
};

export const FormaDePagamento: Story = {
  args: {
    options: FORMAS_DE_PAGAMENTO,
    value: 'pix',
    'aria-label': 'Forma de pagamento',
    onChange: () => undefined,
  },
  render: (args) => <Controlled {...args} />,
};

export const Compacto: Story = {
  args: {
    size: 'compact',
    options: FORMAS_DE_PAGAMENTO,
    value: 'pix',
    'aria-label': 'Forma de pagamento',
    onChange: () => undefined,
  },
  render: (args) => <Controlled {...args} />,
};
