import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css'
import { Dropdown } from '../../../../components/Dropdown';

type CityOption = {
  label: string;
  value: string;
};

type CountryOption = {
  name: string;
  code: string;
};

const cities = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' }
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
    items: [
      { name: 'Berlin', code: 'BER' },
      { name: 'Frankfurt', code: 'FRA' },
      { name: 'Hamburg', code: 'HAM' },
      { name: 'Munich', code: 'MUC' }
    ]
  },
  {
    label: 'USA',
    items: [
      { name: 'Chicago', code: 'CHI' },
      { name: 'Los Angeles', code: 'LAX' },
      { name: 'New York', code: 'NYC' },
      { name: 'San Francisco', code: 'SFO' }
    ]
  },
  {
    label: 'Japan',
    items: [
      { name: 'Kyoto', code: 'KYO' },
      { name: 'Osaka', code: 'OSA' },
      { name: 'Tokyo', code: 'TYO' },
      { name: 'Yokohama', code: 'YOK' }
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

} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(cities[1]);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value as CityOption | null)}
        options={cities}
        placeholder="Select a City"
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
    name: 'city',
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
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

    return (
      <Dropdown
        {...args}
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.value as CountryOption | null)}
        options={countries}
        optionLabel="name"
        optionValue="code"
        placeholder="Select a Country"
        filter
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Countries',
    name: 'country',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown com busca habilitada usando `filter` e opções com `optionLabel` e `optionValue`.',
      },
    },
  },
};

export const WithClearIcon: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(cities[0]);

    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value as CityOption | null)}
        options={cities}
        placeholder="Select a City"
        showClear
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
    name: 'city-clear',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo com limpeza de seleção habilitada através da prop `showClear`.',
      },
    },
  },
};

export const MultiSelect: Story = {
  render: (args) => {
    const [selectedCities, setSelectedCities] = useState<CityOption[]>([cities[0], cities[2]]);

    return (
      <Dropdown
        {...args}
        value={selectedCities}
        onChange={(e) => setSelectedCities((e.value as CityOption[]) ?? [])}
        options={cities}
        placeholder="Select Cities"
        isMulti
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Cities',
    name: 'cities-multi',
  },
  parameters: {
    docs: {
      description: {
        story: 'Seleção múltipla com retorno em array no `e.value`.',
      },
    },
  },
};

export const GroupedOptions: Story = {
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<CountryOption | null>(null);

    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value as CountryOption | null)}
        options={groupedCities}
        optionLabel="name"
        optionValue="code"
        placeholder="Select a Grouped City"
        filter
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Grouped Cities',
    name: 'grouped-city',
  },
  parameters: {
    docs: {
      description: {
        story: 'Uso com grupos no formato legado `{ label, items }`, convertido internamente para o `react-select`.',
      },
    },
  },
};

export const PrimitiveValue: Story = {
  render: (args) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>('BR');

    return (
      <Dropdown
        {...args}
        value={selectedCountryCode ?? undefined}
        onChange={(e) => {
          const nextValue = e.value as CountryOption | null;
          setSelectedCountryCode(nextValue?.code ?? null);
        }}
        options={countries}
        optionLabel="name"
        optionValue="code"
        placeholder="Select a Country by Code"
        className="w-full md:w-14rem"
      />
    );
  },
  args: {
    title: 'Country Code',
    name: 'country-code',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstra compatibilidade com valor primitivo ao receber apenas o código da opção selecionada.',
      },
    },
  },
};