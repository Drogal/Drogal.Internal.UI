import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css'
import { Dropdown } from '../../../../components/Dropdown';

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];

const countries = [
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
];

const groupedCities = [
  {
    label: 'Germany',
    code: 'DE',
    items: [
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' }
    ]
  },
  {
    label: 'USA',
    code: 'US',
    items: [
      { label: 'Chicago', value: 'Chicago' },
      { label: 'Los Angeles', value: 'Los Angeles' },
      { label: 'New York', value: 'New York' },
      { label: 'San Francisco', value: 'San Francisco' }
    ]
  },
  {
    label: 'Japan',
    code: 'JP',
    items: [
      { label: 'Kyoto', value: 'Kyoto' },
      { label: 'Osaka', value: 'Osaka' },
      { label: 'Tokyo', value: 'Tokyo' },
      { label: 'Yokohama', value: 'Yokohama' }
    ]
  }
];

const meta = {
  title: 'Drogal Internal UI/DS/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
      description: 'Valor selecionado',
      table: {
        type: { summary: 'any' },
      },
    },
    options: {
      control: 'object',
      description: 'Array de opções a serem exibidas',
      table: {
        type: { summary: 'any[]' },
      },
    },
    optionLabel: {
      control: 'text',
      description: 'Campo do objeto a ser exibido como label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'label' },
      },
    },
    optionValue: {
      control: 'text',
      description: 'Campo do objeto a ser usado como value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'value' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
      table: {
        type: { summary: 'string' },
      },
    },
    filter: {
      control: 'boolean',
      description: 'Habilita filtro de busca',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'Exibe botão para limpar seleção',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    editable: {
      control: 'boolean',
      description: 'Permite entrada de texto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checkmark: {
      control: 'boolean',
      description: 'Exibe checkmark na opção selecionada',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Quando presente, desabilita o componente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Estado inválido do componente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Variante do estilo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    optionGroupLabel: {
      control: 'text',
      description: 'Campo para o label do grupo',
      table: {
        type: { summary: 'string' },
      },
    },
    optionGroupChildren: {
      control: 'text',
      description: 'Campo para os itens filhos do grupo',
      table: {
        type: { summary: 'string' },
      },
    },
    filterPlaceholder: {
      control: 'text',
      description: 'Placeholder do campo de filtro',
      table: {
        type: { summary: 'string' },
      },
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensagem quando não há opções',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No results found' },
      },
    },
    emptyFilterMessage: {
      control: 'text',
      description: 'Mensagem quando o filtro não retorna resultados',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No results found' },
      },
    },
    className: {
      control: 'text',
      description: 'Classes CSS customizadas',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Estilos inline',
      table: {
        type: { summary: 'object' },
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico de Dropdown com opções de cidades.',
      },
    },
  },
};

export const WithFilter: Story = {
  render: (args) => {
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.value)}
        options={countries}
        optionLabel="name"
        placeholder="Select a Country"
        filter
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Countries',
  },
  parameters: {
    docs: {

      description: {
        story: 'Dropdown com filtro de busca habilitado.',
      },
    },
  },
};

export const WithClearIcon: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        showClear
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown com ícone para limpar a seleção.',
      },
    },
  },
};

export const Editable: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        editable
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown editável que permite entrada de texto.',
      },
    },
  },
};

export const WithCheckmark: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        checkmark
        highlightOnSelect={false}
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown com checkmark na opção selecionada.',
      },
    },
  },
};

export const Grouped: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={groupedCities}
        optionLabel="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        placeholder="Select a City"
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown com opções agrupadas por categoria.',
      },
    },
  },
};

export const Filled: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        variant="filled"
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown com variante filled.',
      },
    },
  },
};

export const Invalid: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        invalid
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown em estado inválido.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    title: 'Cities',
    loading: true,
    placeholder: 'Loading...',
    className: 'w-full md:w-14rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown em estado de carregamento.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    title: 'Cities',
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select a City',
    disabled: true,
    className: 'w-full md:w-14rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown desabilitado.',
      },
    },
  },
};
