import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Menu as PureMenu } from 'primereact/menu';

import '../../../theme.css';
import source from './NotasFiscais.stories.tsx?raw';
import { BgFrame } from '../../../components/BgFrame';
import { Button } from '../../../components/Button';
import { Column } from '../../../components/Column';
import { DataTable } from '../../../components/DataTable';
import { DescriptionList } from '../../../components/DescriptionList';
import { Dialog } from '../../../components/Dialog';
import { EmptyState } from '../../../components/EmptyState';
import { Menu, type MenuItem } from '../../../components/Menu';
import { Message } from '../../../components/Message';
import { OptionCard, type OptionCardValue } from '../../../components/OptionCard';
import { PageHeader } from '../../../components/PageHeader';
import { Paginator } from '../../../components/Paginator';
import { SummaryStat } from '../../../components/SummaryStat';
import { Tag } from '../../../components/Tag';
import EnumIcons from '../../../icons/EnumIcons';
import { formatCurrency, NOTA_SEVERITY, NOTAS, type NotaFiscal } from './shared/data';
import { PdvLayout } from './shared/PdvLayout';
import { sourceDocs } from './shared/source';

const meta = {
  title: 'Drogal Internal UI/Balcão Vendas/Notas fiscais',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Consulta de notas: <code>OptionCard</code> compacto como filtro de situação, <code>SummaryStat</code> com os totais do dia, <code>DataTable</code> com <code>Tag</code>, <code>Paginator compact</code> e o detalhe em <code>Dialog</code> com cabeçalho de status, <code>DescriptionList</code> e <code>Menu</code> de ações.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const FILTROS = [
  { value: 'todas', label: 'Todas' },
  { value: 'Autorizada', label: 'Autorizadas', icon: EnumIcons.Outlined.check_circle_outline },
  { value: 'Rejeitada', label: 'Rejeitadas', icon: EnumIcons.Outlined.error_outline },
  { value: 'Cancelada', label: 'Canceladas', icon: EnumIcons.Outlined.highlight_off },
];

const AcoesDaNota = ({ nota }: { nota: NotaFiscal }) => {
  const menuRef = useRef<PureMenu>(null);
  const itens: MenuItem[] = [
    { label: 'Reimprimir DANFE', icon: EnumIcons.Outlined.print, shortcut: 'Ctrl+P' },
    { label: 'Enviar por e-mail', icon: EnumIcons.Outlined.email },
    { separator: true },
    { label: 'Cancelar nota', icon: EnumIcons.Outlined.cancel, shortcut: 'F9', disabled: nota.status !== 'Autorizada' },
  ];

  return (
    <>
      <Menu ref={menuRef} popup model={itens} style={{ width: '18rem' }} />
      <Button
        label="Mais ações"
        outlined
        icon={`drg-icon ${EnumIcons.Outlined.more_horiz}`}
        aria-haspopup
        onClick={(event) => menuRef.current?.toggle(event)}
      />
    </>
  );
};

/** Cabeçalho do Dialog: título, subtítulo e Tag de situação antes do botão de fechar. */
const CabecalhoDaNota = ({ nota }: { nota: NotaFiscal }) => (
  <div className="flex align-items-center gap-3">
    <div className="flex flex-column gap-1 flex-1" style={{ minWidth: 0 }}>
      <span style={{ color: 'var(--gray-900)' }}>Nota fiscal {nota.numero}</span>
      <span style={{ color: '#898989', fontSize: '0.875rem', fontWeight: 400 }}>
        NF-e · Série {nota.serie} · Venda {nota.venda}
      </span>
    </div>
    <Tag value={nota.status} severity={NOTA_SEVERITY[nota.status]} />
  </div>
);

const ListaTela = ({ filtroInicial = 'todas', notaAberta }: { filtroInicial?: OptionCardValue; notaAberta?: NotaFiscal }) => {
  const [filtro, setFiltro] = useState<OptionCardValue>(filtroInicial);
  const [first, setFirst] = useState(0);
  const [selecionada, setSelecionada] = useState<NotaFiscal | undefined>(notaAberta);
  const notas = filtro === 'todas' ? NOTAS : NOTAS.filter((nota) => nota.status === filtro);
  const autorizadas = NOTAS.filter((nota) => nota.status === 'Autorizada');

  return (
    <PdvLayout page="notas">
      <div className="flex flex-column gap-4">
        <PageHeader title="Notas fiscais" subtitle="Notas emitidas por este caixa nos últimos 30 dias" />
        <div className="flex flex-wrap gap-3">
          <SummaryStat label="Faturado hoje" value={formatCurrency(autorizadas.reduce((soma, nota) => soma + nota.total, 0))} variant="info" />
          <SummaryStat label="Notas autorizadas" value={autorizadas.length} variant="success" />
          <SummaryStat label="Com rejeição" value={NOTAS.filter((nota) => nota.status === 'Rejeitada').length} variant="danger" />
        </div>
        <BgFrame variant="card">
          <div className="flex flex-column gap-3">
            <OptionCard size="compact" aria-label="Filtrar por situação" options={FILTROS} value={filtro} onChange={setFiltro} />
            {notas.length === 0 ? (
              <EmptyState icon={EnumIcons.Outlined.search_off} title="Nenhuma nota encontrada" description="Confira o filtro ou amplie o período para 30 dias." />
            ) : (
              <>
                <DataTable value={notas} dataKey="id">
                  <Column
                    header="Nota / Série"
                    body={(nota: NotaFiscal) => (
                      <div className="flex flex-column gap-1">
                        <span style={{ color: 'var(--gray-900)', fontWeight: 600 }}>
                          {nota.numero} / {nota.serie}
                        </span>
                        <span style={{ color: '#898989', fontSize: '0.75rem' }}>Venda {nota.venda}</span>
                      </div>
                    )}
                  />
                  <Column header="Cliente" field="cliente" />
                  <Column header="Emissão" field="emissao" />
                  <Column header="Total" body={(nota: NotaFiscal) => formatCurrency(nota.total)} />
                  <Column header="Situação" body={(nota: NotaFiscal) => <Tag value={nota.status} severity={NOTA_SEVERITY[nota.status]} />} />
                  <Column
                    header={<span className="drg-visually-hidden">Ações</span>}
                    body={(nota: NotaFiscal) => (
                      <Button
                        text
                        rounded
                        icon={`drg-icon ${EnumIcons.Outlined.visibility}`}
                        aria-label={`Ver nota ${nota.numero}`}
                        onClick={() => setSelecionada(nota)}
                      />
                    )}
                  />
                </DataTable>
                <div className="flex justify-content-end">
                  <Paginator compact first={first} rows={10} totalRecords={312} onPageChange={(event) => setFirst(event.first)} />
                </div>
              </>
            )}
          </div>
        </BgFrame>
      </div>
      <Dialog
        header={selecionada ? <CabecalhoDaNota nota={selecionada} /> : undefined}
        visible={Boolean(selecionada)}
        style={{ width: '34rem' }}
        onHide={() => setSelecionada(undefined)}
        footer={
          selecionada && (
            <div className="flex justify-content-end gap-2">
              <AcoesDaNota nota={selecionada} />
              <Button label="Fechar" onClick={() => setSelecionada(undefined)} />
            </div>
          )
        }
      >
        {selecionada && (
          <div className="flex flex-column gap-3">
            {selecionada.status === 'Rejeitada' && (
              <Message severity="error" text="Rejeição 778 — NCM inexistente. Corrija o cadastro do produto e reenvie." className="w-full justify-content-start" />
            )}
            <DescriptionList
              items={[
                { label: 'Cliente', value: selecionada.cliente },
                { label: 'Emissão', value: selecionada.emissao },
                { label: 'Total', value: formatCurrency(selecionada.total) },
                { label: 'Chave de acesso', value: '3526 1148 8451 1500 0103 6500 1000 0012 8410 0000 1284' },
              ]}
            />
          </div>
        )}
      </Dialog>
    </PdvLayout>
  );
};

export const Lista: Story = {
  render: () => <ListaTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['FILTROS', 'AcoesDaNota', 'CabecalhoDaNota', 'ListaTela'], '<ListaTela />'),
      description: {
        story: 'Filtre pela situação e clique no olho para abrir o detalhe. O "Cancelar nota" do menu só fica ativo em notas autorizadas.',
      },
    },
  },
};

export const DetalheDaNota: Story = {
  render: () => <ListaTela notaAberta={NOTAS[0]} />,
  parameters: {
    // Na página de docs, o Dialog aberto fica contido no iframe da story.
    docs: { ...sourceDocs(source, ['FILTROS', 'AcoesDaNota', 'CabecalhoDaNota', 'ListaTela'], '<ListaTela notaAberta={NOTAS[0]} />'), story: { inline: false, height: '640px' } },
  },
};

export const NotaRejeitada: Story = {
  render: () => <ListaTela filtroInicial="Rejeitada" notaAberta={NOTAS[2]} />,
  parameters: {
    // Na página de docs, o Dialog aberto fica contido no iframe da story.
    docs: {
      story: { inline: false, height: '640px' },
      ...sourceDocs(source, ['FILTROS', 'AcoesDaNota', 'CabecalhoDaNota', 'ListaTela'], '<ListaTela filtroInicial="Rejeitada" notaAberta={NOTAS[2]} />'),
      description: { story: 'Detalhe de uma nota rejeitada, com o motivo em <code>Message</code>.' },
    },
  },
};
