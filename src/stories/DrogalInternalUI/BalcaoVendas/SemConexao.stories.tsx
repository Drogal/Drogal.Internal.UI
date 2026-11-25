import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../theme.css';
import source from './SemConexao.stories.tsx?raw';
import { BgFrame } from '../../../components/BgFrame';
import { Button } from '../../../components/Button';
import { EmptyState } from '../../../components/EmptyState';
import { Message } from '../../../components/Message';
import EnumIcons from '../../../icons/EnumIcons';
import { PdvLayout } from './shared/PdvLayout';
import { sourceDocs } from './shared/source';

const meta = {
  title: 'Drogal Internal UI/Balcão Vendas/Sem conexão',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Estados de conexão do PDV: o <code>StatusIndicator</code> no <code>end</code> do Header muda para Offline ou Sem conexão, e a tela avisa com <code>Message</code> ou <code>EmptyState</code>.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const OfflineTela = () => (
  <PdvLayout page="vendas" status="offline">
    <div className="flex flex-column gap-3">
      <Message
        severity="warn"
        text="Caixa em modo offline: as vendas ficam salvas e as notas são emitidas quando a conexão voltar."
        className="w-full justify-content-start"
      />
      <BgFrame variant="card" title="Itens da venda" icon={EnumIcons.Outlined.shopping_cart}>
        <EmptyState icon={EnumIcons.Outlined.qr_code_scanner} title="Nenhum produto adicionado" description="Escaneie um produto para iniciar" />
      </BgFrame>
    </div>
  </PdvLayout>
);

export const Offline: Story = {
  render: () => <OfflineTela />,
  parameters: { docs: sourceDocs(source, ['OfflineTela'], '<OfflineTela />') },
};

const FalhaAoCarregarTela = () => (
  <PdvLayout page="clientes" status="disconnected">
    <BgFrame variant="card">
      <EmptyState
        icon={EnumIcons.Outlined.cloud_off}
        title="Não foi possível carregar"
        description="Verifique a conexão e tente novamente."
        action={<Button label="Tentar novamente" outlined size="small" icon={`drg-icon ${EnumIcons.Outlined.refresh}`} />}
      />
    </BgFrame>
  </PdvLayout>
);

export const FalhaAoCarregar: Story = {
  render: () => <FalhaAoCarregarTela />,
  parameters: { docs: sourceDocs(source, ['FalhaAoCarregarTela'], '<FalhaAoCarregarTela />') },
};
