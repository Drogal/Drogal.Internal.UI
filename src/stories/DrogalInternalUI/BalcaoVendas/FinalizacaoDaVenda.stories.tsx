import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../theme.css';
import source from './FinalizacaoDaVenda.stories.tsx?raw';
import { BgFrame } from '../../../components/BgFrame';
import { Button } from '../../../components/Button';
import { ProcessSteps, type ProcessStepItem } from '../../../components/ProcessSteps';
import { Result } from '../../../components/Result';
import EnumIcons from '../../../icons/EnumIcons';
import { formatCurrency } from './shared/data';
import { PdvLayout } from './shared/PdvLayout';
import { sourceDocs } from './shared/source';

const meta = {
  title: 'Drogal Internal UI/Balcão Vendas/Finalização da venda',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Depois do pagamento: <code>ProcessSteps</code> mostra cada etapa (pagamento, NFC-e, comprovante) com a barra de progresso, e o <code>Result</code> fecha com o resultado.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ETAPAS = [
  { title: 'Pagamento confirmado', description: `PIX · ${formatCurrency(3224.16)}` },
  { title: 'Emitindo NFC-e na SEFAZ', description: 'Autorizando nota 001288 · Série 001' },
  { title: 'Imprimir comprovante', description: 'Enviando para a impressora do caixa' },
];

/** Etapas a partir de quantas já terminaram; a seguinte fica em andamento. */
const montarEtapas = (concluidas: number, erroNa?: number): ProcessStepItem[] =>
  ETAPAS.map((etapa, index) => ({
    key: etapa.title,
    ...etapa,
    status:
      erroNa === index ? 'error' : index < concluidas ? 'done' : index === concluidas && erroNa === undefined ? 'loading' : 'pending',
  }));

const FinalizandoTela = () => {
  const [concluidas, setConcluidas] = useState(1);

  // Simula o avanço das etapas.
  useEffect(() => {
    if (concluidas >= ETAPAS.length) return undefined;
    const timer = window.setTimeout(() => setConcluidas((valor) => valor + 1), 1500);
    return () => window.clearTimeout(timer);
  }, [concluidas]);

  const terminou = concluidas >= ETAPAS.length;

  return (
    <PdvLayout page="vendas">
      <div className="flex flex-column gap-3" style={{ maxWidth: '30rem' }}>
        <BgFrame variant="card" title="Finalizando a venda" icon={EnumIcons.Outlined.point_of_sale}>
          <ProcessSteps
            ariaLabel="Finalizando a venda"
            steps={montarEtapas(concluidas)}
            progress={Math.round((concluidas / ETAPAS.length) * 100)}
          />
        </BgFrame>
        {terminou && (
          <Result severity="success" title="Venda concluída" description="Nota 001288 autorizada e comprovante impresso.">
            <Button label="Nova venda (F2)" size="small" onClick={() => setConcluidas(1)} />
          </Result>
        )}
      </div>
    </PdvLayout>
  );
};

export const Finalizando: Story = {
  render: () => <FinalizandoTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['ETAPAS', 'montarEtapas', 'FinalizandoTela'], '<FinalizandoTela />'),
      description: {
        story: 'As etapas avançam sozinhas (simulação) até o <code>Result</code> de venda concluída. "Nova venda" reinicia.',
      },
    },
  },
};

const RejeicaoTela = () => (
  <PdvLayout page="vendas">
    <div className="flex flex-column gap-3" style={{ maxWidth: '30rem' }}>
      <BgFrame variant="card" title="Finalizando a venda" icon={EnumIcons.Outlined.point_of_sale}>
        <ProcessSteps ariaLabel="Finalizando a venda" steps={montarEtapas(1, 1)} progress={33} />
      </BgFrame>
      <Result severity="warning" title="Rejeição 778 — NCM inexistente" description="Item: Medicamento analgésico (Cód. 041892)">
        <Button label="Corrigir cadastro" outlined size="small" />
        <Button label="Reenviar nota" size="small" />
      </Result>
    </div>
  </PdvLayout>
);

export const RejeicaoNaSefaz: Story = {
  render: () => <RejeicaoTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['ETAPAS', 'montarEtapas', 'RejeicaoTela'], '<RejeicaoTela />'),
      description: { story: 'Etapa da NFC-e com erro e o <code>Result</code> em <code>warning</code> explicando a rejeição.' },
    },
  },
};
