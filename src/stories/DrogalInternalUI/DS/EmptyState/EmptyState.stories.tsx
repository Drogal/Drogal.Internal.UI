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
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VendaVazia: Story = {
  args: {
    icon: EnumIcons.Outlined.qr_code_scanner,
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
