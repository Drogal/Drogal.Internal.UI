import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { BgFrame } from '../../../../components/BgFrame';
import { InputText } from '../../../../components/Input/InputText';
import { Button } from '../../../../components/Button';

const meta = {
  title: 'Drogal Internal UI/DS/BgFrame',
  component: BgFrame,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Componente de fundo estrutural utilizado como container de seções em páginas ou modais. Suporta título, subtítulo, cores customizáveis e duas variantes visuais: <strong>filled</strong> (fundo sólido) e <strong>outlined</strong> (fundo transparente com borda).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título exibido no topo do componente',
      table: { type: { summary: 'string' } },
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo exibido abaixo do título',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'Variante visual do componente',
      table: {
        type: { summary: "'filled' | 'outlined'" },
        defaultValue: { summary: 'filled' },
      },
    },
    children: {
      control: false,
      description: 'Conteúdo interno do componente',
      table: { type: { summary: 'ReactNode' } },
    }
  },
} satisfies Meta<typeof BgFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    title: 'Veículo',
    subtitle: 'Insira abaixo a placa do veículo',
    variant: 'filled',
    children: (
      <div className="drg-input-spacing">
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <InputText title='Placa do veículo' placeholder="GHT4O89" style={{ width: '300px' }} />
          <Button label="Consultar" />
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante padrão com fundo sólido (<code>filled</code>). Utiliza a cor <code>$shade100</code>',
      },
    },
  },
};

export const Outlined: Story = {
  args: {
    title: 'Veículo',
    subtitle: 'Insira abaixo a placa do veículo',
    variant: 'outlined',
    children: (
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <InputText title='Placa do veículo' placeholder="GHT4O89" style={{ width: '300px' }} />
        <Button label="Consultar" />
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante com fundo transparente e borda (<code>outlined</code>).',
      },
    },
  },
};

export const SemTitulo: Story = {
  args: {
    variant: 'filled',
    children: (
      <InputText title='Placa' placeholder="GHT4O89" style={{ width: '300px' }} />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Frame sem título nem subtítulo. O header é omitido automaticamente quando nenhuma das props é fornecida.',
      },
    },
  },
};

export const ApenasTexto: Story = {
  args: {
    title: 'Informações do pedido',
    subtitle: 'Confira os dados antes de confirmar',
    variant: 'filled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Frame somente com título e subtítulo, sem conteúdo interno.',
      },
    },
  },
};