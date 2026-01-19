import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css'
import { InputNumber } from '../../../../components/Input/InputNumber';

const meta = {
  title: 'Drogal Internal UI/DS/InputNumber',
  component: InputNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Valor numérico do input',
    },
    onChange: {
      action: 'changed',
      description: 'Callback quando o valor muda',
    },
    format: {
      control: 'boolean',
      description: 'Habilita formatação de números com separadores de milhar',
    },
    showButtons: {
      control: 'boolean',
      description: 'Exibe botões de incremento e decremento',
    },
    buttonLayout: {
      control: 'select',
      options: ['stacked', 'horizontal', 'vertical'],
      description: 'Layout dos botões (apenas quando showButtons=true)',
    },
    mode: {
      control: 'select',
      options: ['decimal', 'currency'],
      description: 'Modo do InputNumber',
    },
    currency: {
      control: 'text',
      description: 'Código da moeda (ex: USD, BRL, EUR)',
    },
    currencyDisplay: {
      control: 'select',
      options: ['symbol', 'code', 'name'],
      description: 'Como a moeda é exibida',
    },
    locale: {
      control: 'text',
      description: 'Localização para formatação (ex: pt-BR, en-US)',
    },
    min: {
      control: 'number',
      description: 'Valor mínimo permitido',
    },
    max: {
      control: 'number',
      description: 'Valor máximo permitido',
    },
    minFractionDigits: {
      control: 'number',
      description: 'Número mínimo de casas decimais',
    },
    maxFractionDigits: {
      control: 'number',
      description: 'Número máximo de casas decimais',
    },
    step: {
      control: 'number',
      description: 'Incremento/decremento dos botões',
    },
    prefix: {
      control: 'text',
      description: 'Prefixo do valor',
    },
    suffix: {
      control: 'text',
      description: 'Sufixo do valor',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
    },
    invalid: {
      control: 'boolean',
      description: 'Estilo de erro/inválido',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Variante visual do input',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Tamanho do input',
    },
    inputId: {
      control: 'text',
      description: 'ID do elemento input',
    },
    name: {
      control: 'text',
      description: 'Nome do input',
    },
    inputClassName: {
      control: 'text',
      description: 'Classes CSS do input',
    },
    useGrouping: {
      control: 'boolean',
      description: 'Usa agrupamento de dígitos (separador de milhar)',
    },
    allowEmpty: {
      control: 'boolean',
      description: 'Permite valor vazio',
    },
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    placeholder: 'Digite um número',
  },
};

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(42);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    placeholder: 'Digite um número',
  },
};

export const WithButtons: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(0);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    showButtons: true,
    title: 'Input Number',
    step: 1,
  },
};

export const ButtonsStacked: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(0);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    showButtons: true,
    buttonLayout: 'stacked',
    step: 1,
    title: 'Input Number',
  },
};

export const ButtonsHorizontal: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(0);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    showButtons: true,
    buttonLayout: 'horizontal',
    step: 1,
  },
};

export const WithMinMax: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(50);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    min: 0,
    max: 100,
    showButtons: true,
    placeholder: 'Entre 0 e 100',
  },
};

export const Decimals: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    minFractionDigits: 2,
    maxFractionDigits: 2,
    placeholder: 'Digite um valor decimal',
  },
};

export const Currency: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(1500.5);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    mode: 'currency',
    currency: 'BRL',
    locale: 'pt-BR',
  },
};

export const CurrencyUS: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(1500.5);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    mode: 'currency',
    currency: 'USD',
    locale: 'en-US',
  },
};

export const WithPrefix: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(20);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    prefix: '% ',
  },
};

export const WithSuffix: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(50);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    suffix: ' kg',
  },
};

export const WithThousandsSeparator: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(1000000);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    useGrouping: true,
    locale: 'pt-BR',
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(100);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    disabled: true,
  },
};

export const Invalid: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    invalid: true,
    placeholder: 'Campo obrigatório',
  },
};

export const FilledVariant: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    variant: 'filled',
    placeholder: 'Digite um número',
  },
};

export const Small: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    placeholder: 'Tamanho pequeno',
  },
};

export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | null>(null);
    return <InputNumber {...args} value={value} onChange={(e) => setValue(e.value)} />;
  },
  args: {
    title: 'Input Number',
    placeholder: 'Tamanho grande',
  },
};
