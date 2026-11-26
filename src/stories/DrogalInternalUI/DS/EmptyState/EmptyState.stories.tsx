import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { EmptyState } from '../../../../components/EmptyState';
import { Button } from '../../../../components/Button';
import EnumIcons from '../../../../icons/EnumIcons';

const meta = {
  title: 'Drogal Internal UI/DS/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Mensagem para quando não há o que mostrar: venda sem produtos, busca sem resultado ou falha ao carregar. Ação opcional em <code>action</code>.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false, description: 'Ícone acima do título (`EnumIcons`)', table: { type: { summary: 'IconName' } } },
    title: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    description: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    action: { control: false, description: 'Ação abaixo da descrição', table: { type: { summary: 'ReactNode' } } },
    className: { control: 'text', description: 'Classe extra na raiz', table: { type: { summary: 'string' } } },
    classNameTitle: { control: 'text', description: 'Classe extra no título, somada a `drg-empty-state__title`', table: { type: { summary: 'string' } } },
    classNameIcon: { control: 'text', description: 'Classe extra no ícone, somada às classes do ícone', table: { type: { summary: 'string' } } },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VendaVazia: Story = {
  args: {
    icon: EnumIcons.Outlined.barcode_scanner,
    title: 'Nenhum produto adicionado',
    description: 'Escaneie um produto para iniciar',
  },
};

export const SemResultados: Story = {
  args: {
    icon: EnumIcons.Outlined.search_off,
    title: 'Nenhuma nota encontrada',
    description: 'Confira o nome ou CPF/CNPJ, ou amplie o período para 30 dias.',
  },
};

export const FalhaAoCarregar: Story = {
  args: {
    icon: EnumIcons.Outlined.cloud_off,
    title: 'Não foi possível carregar',
    description: 'Verifique a conexão e tente novamente.',
    action: <Button label="Tentar novamente" outlined size="small" />,
  },
};

export const ErroComDestaque: Story = {
  args: {
    icon: EnumIcons.Outlined.lucide_wifi_off,
    title: 'Sem conexão com o servidor',
    description: 'As vendas continuam em contingência e serão enviadas quando a conexão voltar.',
    classNameIcon: 'text-pink-500',
    classNameTitle: 'text-pink-600',
    action: <Button label="Tentar novamente" outlined size="small" />,
  },
  parameters: {
    docs: {
      description: {
        story: '<code>classNameIcon</code> e <code>classNameTitle</code> deixam o estado vazio com cara de erro, sem mudar o componente.',
      },
    },
  },
};

export const TituloMaior: Story = {
  args: {
    icon: EnumIcons.Outlined.lucide_search,
    title: 'Nenhuma nota encontrada',
    description: 'Confira o nome ou CPF/CNPJ, ou amplie o período para 30 dias.',
    classNameIcon: 'text-primary',
    classNameTitle: 'text-xl',
    className: 'border-1 surface-border border-round-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Título maior, ícone na cor primária e uma borda na raiz com <code>className</code>.',
      },
    },
  },
};
