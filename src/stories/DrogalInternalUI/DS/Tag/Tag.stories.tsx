import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { Tag } from '../../../../components/Tag';

const severities = ['success', 'info', 'warning', 'danger', 'secondary'] as const;

const meta = {
  title: 'Drogal Internal UI/DS/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Exibe o status de um item (nota fiscal, cliente, arquivo). Duas variantes: <strong>solid</strong> (fundo na cor da severidade, texto branco) e <strong>subtle</strong> (fundo claro, texto na cor da severidade).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Texto exibido no tag',
      table: { type: { summary: 'ReactNode' } },
    },
    severity: {
      control: 'select',
      options: [undefined, ...severities],
      description: 'Cor do tag. Sem severidade, usa a cor primária.',
      table: { type: { summary: "'success' | 'info' | 'warning' | 'danger' | 'secondary'" } },
    },
    variant: {
      control: 'select',
      options: ['solid', 'subtle'],
      description: 'Variante visual',
      table: {
        type: { summary: "'solid' | 'subtle'" },
        defaultValue: { summary: 'solid' },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Cantos totalmente arredondados',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    icon: {
      control: 'text',
      description: 'Classe do ícone exibido antes do texto',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    value: 'Autorizada',
    severity: 'success',
    variant: 'solid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante padrão. Usada em status de destaque, como "Autorizada" na nota fiscal e "Ativo" no cliente.',
      },
    },
  },
};

export const Subtle: Story = {
  args: {
    value: 'Enviado',
    severity: 'success',
    variant: 'subtle',
  },
  parameters: {
    docs: {
      description: {
        story: 'Fundo claro e texto colorido. Usada em status secundários, como "Enviado" e "Erro" no envio de arquivos.',
      },
    },
  },
};

export const TodasAsSeveridades: Story = {
  args: { value: 'Tag' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {(['solid', 'subtle'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Tag value="Padrão" variant={variant} />
          {severities.map((severity) => (
            <Tag key={severity} value={severity} severity={severity} variant={variant} />
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'As duas variantes em todas as severidades. Na linha de cima, <code>solid</code>; na de baixo, <code>subtle</code>.',
      },
    },
  },
};

export const ExemplosDoSistemaDeVendas: Story = {
  args: { value: 'Tag' },
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Tag value="Autorizada" severity="success" />
      <Tag value="Ativo" severity="success" />
      <Tag value="Enviado" severity="success" variant="subtle" />
      <Tag value="Erro" severity="danger" variant="subtle" />
      <Tag value="62%" severity="secondary" variant="subtle" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Os tags como aparecem nas telas do Sistema de Vendas: nota fiscal, cliente e envio de arquivo.',
      },
    },
  },
};
