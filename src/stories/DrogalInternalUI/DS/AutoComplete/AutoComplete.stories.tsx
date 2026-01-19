import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css'
import { AutoComplete } from '../../../../components/AutoComplete';

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

const cities = ['New York', 'Rome', 'London', 'Istanbul', 'Paris', 'Tokyo', 'Berlin', 'Madrid', 'Cairo', 'Sydney'];

const groupedCities = [
  {
    label: 'Germany',
    items: [
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' }
    ]
  },
  {
    label: 'USA',
    items: [
      { label: 'Chicago', value: 'Chicago' },
      { label: 'Los Angeles', value: 'Los Angeles' },
      { label: 'New York', value: 'New York' },
      { label: 'San Francisco', value: 'San Francisco' }
    ]
  },
  {
    label: 'Japan',
    items: [
      { label: 'Kyoto', value: 'Kyoto' },
      { label: 'Osaka', value: 'Osaka' },
      { label: 'Tokyo', value: 'Tokyo' },
      { label: 'Yokohama', value: 'Yokohama' }
    ]
  }
];

const meta = {
  title: 'Drogal Internal UI/DS/AutoComplete',
  component: AutoComplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
      description: 'Valor do componente',
      table: {
        type: { summary: 'any' },
      },
    },
    suggestions: {
      control: 'object',
      description: 'Array de sugestões a serem exibidas',
      table: {
        type: { summary: 'any[]' },
      },
    },
    field: {
      control: 'text',
      description: 'Campo do objeto a ser exibido como label',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder para o input',
      table: {
        type: { summary: 'string' },
      },
    },
    dropdown: {
      control: 'boolean',
      description: 'Exibe um botão dropdown para mostrar todas as sugestões',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Permite seleção múltipla de valores',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    forceSelection: {
      control: 'boolean',
      description: 'Força que o valor seja uma das sugestões',
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
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Variante do estilo do input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    delay: {
      control: 'number',
      description: 'Delay em milissegundos para disparar a busca',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
    },
    minLength: {
      control: 'number',
      description: 'Número mínimo de caracteres para iniciar a busca',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    selectionLimit: {
      control: 'number',
      description: 'Número máximo de seleções no modo múltiplo',
      table: {
        type: { summary: 'number' },
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
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [filteredItems, setFilteredItems] = useState<string[]>([]);

    const search = (event: { query: string }) => {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredItems}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
      />
    );
  },
  args: {
    title: 'City',
    placeholder: 'Search cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico de AutoComplete com sugestões de cidades.',
      },
    },
  },
};

export const WithDropdown: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [filteredItems, setFilteredItems] = useState<string[]>([]);

    const search = (event: { query: string }) => {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredItems}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        dropdown
      />
    );
  },
  args: {
    title: 'City',
    placeholder: 'Search cities',
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete com botão dropdown para exibir todas as sugestões.',
      },
    },
  },
};

export const WithObjects: Story = {
  render: (args) => {
    const [value, setValue] = useState<any>(null);
    const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

    const search = (event: { query: string }) => {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredCountries(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredCountries}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        field="name"
      />
    );
  },
  args: {
    title: 'Country',
    placeholder: 'Search countries',
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete trabalhando com objetos usando a propriedade field.',
      },
    },
  },
};

export const MultipleDropdown: Story = {
  render: (args) => {
    const [value, setValue] = useState<any[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

    const search = (event: { query: string }) => {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredCountries(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredCountries}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        field="name"
      />
    );
  },
  args: {
    title: 'Country',
    placeholder: 'Select multiple countries',
    multiple: true,
    dropdown: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete com seleção múltipla habilitada.',
      },
    },
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<any[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

    const search = (event: { query: string }) => {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredCountries(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredCountries}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        field="name"
      />
    );
  },
  args: {
    title: 'Country',
    placeholder: 'Select multiple countries',
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete com seleção múltipla habilitada.',
      },
    },
  },
};


export const Grouped: Story = {
  render: (args) => {
    const [value, setValue] = useState<any>(null);
    const [filteredCities, setFilteredCities] = useState<any[]>([]);

    const search = (event: { query: string }) => {
      const query = event.query.toLowerCase();
      const filtered = groupedCities.map((group) => ({
        ...group,
        items: group.items.filter((item: any) =>
          item.label.toLowerCase().includes(query)
        ),
      })).filter((group) => group.items.length > 0);
      setFilteredCities(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredCities}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        field="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
      />
    );
  },
  args: {
    placeholder: 'Type to search',
    title: 'City',
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete com opções agrupadas por categoria.',
      },
    },
  },
};

export const ForceSelection: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [filteredItems, setFilteredItems] = useState<string[]>([]);

    const search = (event: { query: string }) => {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredItems}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        forceSelection
      />
    );
  },
  args: {
    title: 'City',
    placeholder: 'Must select from list',
  },
  parameters: {
    docs: {
      description: {
        story: 'ForceSelection valida que o input seja uma das sugestões.',
      },
    },
  },
};

export const Filled: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [filteredItems, setFilteredItems] = useState<string[]>([]);

    const search = (event: { query: string }) => {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredItems}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        variant="filled"
      />
    );
  },
  args: {
    title: 'City',
    placeholder: 'Filled variant',
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete com variante filled.',
      },
    },
  },
};

export const Invalid: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [filteredItems, setFilteredItems] = useState<string[]>([]);

    const search = (event: { query: string }) => {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(event.query.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    return (
      <AutoComplete
        {...args}
        value={value}
        suggestions={filteredItems}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        invalid
      />
    );
  },
  args: {
    title: 'City',
    placeholder: 'Invalid state',
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete em estado inválido.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    title: 'City',
    placeholder: 'Disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'AutoComplete desabilitado.',
      },
    },
  },
};