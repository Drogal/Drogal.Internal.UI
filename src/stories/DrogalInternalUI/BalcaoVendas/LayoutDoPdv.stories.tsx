import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../theme.css';
import layoutSource from './shared/PdvLayout.tsx?raw';
import { BgFrame } from '../../../components/BgFrame';
import { EmptyState } from '../../../components/EmptyState';
import EnumIcons from '../../../icons/EnumIcons';
import { PdvLayout } from './shared/PdvLayout';
import { exampleSource } from './shared/source';

const meta = {
  title: 'Drogal Internal UI/Balcão Vendas/Layout do PDV',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A casca usada em todas as telas do Balcão Vendas: <code>Header</code> com a busca no <code>children</code> e o <code>StatusIndicator</code> e a filial no <code>end</code>, e o <code>SideMenu</code> na variante <code>compact</code>. Abaixo de 768px o menu vira gaveta, aberta pelo botão do Header.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutDoPdv: Story = {
  render: () => (
    <PdvLayout page="vendas">
      <BgFrame variant="card" title="Conteúdo da tela" icon={EnumIcons.Outlined.dashboard}>
        <EmptyState icon={EnumIcons.Outlined.dashboard} title="Área da tela" description="Cada tela do Balcão Vendas entra aqui." />
      </BgFrame>
    </PdvLayout>
  ),
  parameters: {
    docs: {
      source: {
        code: exampleSource(
          layoutSource,
          ['PdvPage', 'MENU', 'PdvLayoutProps', 'PdvLayout'],
          '<PdvLayout page="vendas" status="online">\n  {/* conteúdo da tela */}\n</PdvLayout>',
        ),
        language: 'tsx',
        type: 'code',
      },
    },
  },
};

export const Offline: Story = {
  render: () => (
    <PdvLayout page="clientes" status="offline">
      <BgFrame variant="card" title="Conteúdo da tela" icon={EnumIcons.Outlined.dashboard} />
    </PdvLayout>
  ),
  parameters: {
    docs: {
      source: { code: '<PdvLayout page="clientes" status="offline">\n  {/* conteúdo da tela */}\n</PdvLayout>', language: 'tsx', type: 'code' },
    },
  },
};
