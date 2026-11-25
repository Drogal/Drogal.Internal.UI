import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { BgFrame } from '../../../../components/BgFrame';
import { InputText } from '../../../../components/Input/InputText';
import { Button } from '../../../../components/Button';
import EnumIcons from '../../../../icons/EnumIcons';

const ConteudoExemplo = () => (
  <div
    style={{
      border: '1px dashed #e1e1e1',
      borderRadius: 6,
      padding: '2rem',
      textAlign: 'center',
      color: '#898989',
    }}
  >
    Conteúdo (substitua)
  </div>
);

const meta = {
  title: 'Drogal Internal UI/DS/BgFrame',
  component: BgFrame,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Componente de fundo estrutural utilizado como container de seções em páginas ou modais. Suporta título, subtítulo, cores customizáveis e três variantes visuais: <strong>filled</strong> (fundo sólido), <strong>outlined</strong> (fundo transparente com borda) e <strong>card</strong> (fundo branco com sombra, com ícone e ação no cabeçalho).',
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
      options: ['filled', 'outlined', 'card'],
      description: 'Variante visual do componente',
      table: {
        type: { summary: "'filled' | 'outlined' | 'card'" },
        defaultValue: { summary: 'filled' },
      },
    },
    icon: {
      control: false,
      description: 'Ícone à esquerda do título (`EnumIcons`)',
      table: { type: { summary: 'IconName' } },
    },
    actions: {
      control: false,
      description: 'Conteúdo à direita do cabeçalho, como um botão de ação',
      table: { type: { summary: 'ReactNode' } },
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

export const Card: Story = {
  args: {
    title: 'Título do card',
    icon: EnumIcons.Outlined.person,
    variant: 'card',
    actions: <Button label="Ação (F2)" size="small" />,
    children: <ConteudoExemplo />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Variante <code>card</code>: fundo branco, sombra leve, ícone à esquerda do título e ação à direita (<code>actions</code>). Usada nas seções do Sistema de Vendas (cliente, produtos, pagamento).',
      },
    },
  },
};

export const CardSemAcao: Story = {
  args: {
    title: 'Título do card',
    icon: EnumIcons.Outlined.person,
    variant: 'card',
    children: <ConteudoExemplo />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Card com título e ícone, sem ação no cabeçalho.',
      },
    },
  },
};

export const CardSemCabecalho: Story = {
  args: {
    variant: 'card',
    children: <ConteudoExemplo />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Card só com conteúdo. Sem <code>title</code>, <code>subtitle</code> e <code>actions</code>, o cabeçalho não é renderizado.',
      },
    },
  },
};
