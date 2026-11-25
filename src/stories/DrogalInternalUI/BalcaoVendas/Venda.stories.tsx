import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Menu as PureMenu } from 'primereact/menu';

import '../../../theme.css';
import source from './Venda.stories.tsx?raw';
import { BgFrame } from '../../../components/BgFrame';
import { Button } from '../../../components/Button';
import { Column } from '../../../components/Column';
import { DataTable } from '../../../components/DataTable';
import { DescriptionList } from '../../../components/DescriptionList';
import { EmptyState } from '../../../components/EmptyState';
import { FileItem, FileUpload, type FileItemStatus } from '../../../components/FileUpload';
import { InputNumber } from '../../../components/Input/InputNumber';
import { Menu, type MenuItem } from '../../../components/Menu';
import { Message } from '../../../components/Message';
import { SummaryStat } from '../../../components/SummaryStat';
import { Tag } from '../../../components/Tag';
import EnumIcons from '../../../icons/EnumIcons';
import { CARRINHO, formatCurrency, type ProdutoCarrinho } from './shared/data';
import { PdvLayout } from './shared/PdvLayout';
import { sourceDocs } from './shared/source';

const meta = {
  title: 'Drogal Internal UI/Balcão Vendas/Venda',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Tela principal do PDV. Combina <code>Header</code> com <code>end</code>, <code>SideMenu</code> compacto, <code>BgFrame</code> na variante <code>card</code>, <code>EmptyState</code>, <code>DataTable</code> com <code>InputNumber</code> compacto e <code>Tag</code>, <code>SummaryStat</code>, <code>DescriptionList</code> e <code>Menu</code> com atalhos.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const OPERACOES: MenuItem[] = [
  { label: 'Imprimir nota fiscal', icon: EnumIcons.Outlined.print, shortcut: 'Ctrl+P' },
  { label: 'Reimprimir comprovante', icon: EnumIcons.Outlined.receipt_long, shortcut: 'Ctrl+R' },
  { label: 'Desfazer último item', icon: EnumIcons.Outlined.undo, shortcut: 'Ctrl+Z' },
  { separator: true },
  { label: 'Cancelar venda', icon: EnumIcons.Outlined.cancel, shortcut: 'F8' },
];

/** Resumo à direita: subtotal, desconto, total em destaque e as ações da venda. */
const ResumoDaVenda = ({ itens, onFinalizar }: { itens: ProdutoCarrinho[]; onFinalizar?: () => void }) => {
  const menuRef = useRef<PureMenu>(null);
  const subtotal = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  const desconto = itens.length > 0 ? subtotal * 0.05 : 0;
  const vazia = itens.length === 0;

  return (
    <BgFrame variant="card" title="Resumo" icon={EnumIcons.Outlined.receipt_long}>
      <div className="flex flex-column gap-3">
        <DescriptionList
          variant="plain"
          items={[
            { label: 'Itens', value: itens.reduce((soma, item) => soma + item.quantidade, 0) },
            { label: 'Subtotal', value: formatCurrency(subtotal) },
            { label: 'Desconto (5%)', value: `- ${formatCurrency(desconto)}` },
          ]}
        />
        <SummaryStat label="Total da venda" value={formatCurrency(subtotal - desconto)} variant="info" />
        <Button label="Finalizar venda (F2)" disabled={vazia} onClick={onFinalizar} />
        <Menu ref={menuRef} popup model={OPERACOES} style={{ width: '20rem' }} />
        <Button
          label="Operações (Ctrl+O)"
          outlined
          icon={`drg-icon ${EnumIcons.Outlined.more_horiz}`}
          aria-haspopup
          onClick={(event) => menuRef.current?.toggle(event)}
        />
      </div>
    </BgFrame>
  );
};

const VendaVaziaTela = () => (
  <PdvLayout page="vendas">
    <div className="grid">
      <div className="col-12 lg:col-8">
        <BgFrame variant="card" title="Itens da venda" icon={EnumIcons.Outlined.shopping_cart}>
          <EmptyState
            icon={EnumIcons.Outlined.qr_code_scanner}
            title="Nenhum produto adicionado"
            description="Escaneie um produto ou use a busca (F3) para iniciar"
          />
        </BgFrame>
      </div>
      <div className="col-12 lg:col-4">
        <ResumoDaVenda itens={[]} />
      </div>
    </div>
  </PdvLayout>
);

export const VendaVazia: Story = {
  render: () => <VendaVaziaTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['OPERACOES', 'ResumoDaVenda', 'VendaVaziaTela'], '<VendaVaziaTela />'),
      description: { story: 'Início da venda: <code>EmptyState</code> no card de itens e o resumo zerado, com "Finalizar" desabilitado.' },
    },
  },
};

const VendaComProdutosTela = () => {
  const [itens, setItens] = useState(CARRINHO);
  const [finalizou, setFinalizou] = useState(false);

  // Atalho F2 da tela, o mesmo exibido no botão.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F2') {
        event.preventDefault();
        setFinalizou(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const alterarQuantidade = (id: string, quantidade: number) =>
    setItens((atual) => atual.map((item) => (item.id === id ? { ...item, quantidade } : item)));

  const remover = (id: string) => setItens((atual) => atual.filter((item) => item.id !== id));

  const produto = (item: ProdutoCarrinho) => (
    <div className="flex flex-column gap-1">
      <span className="flex align-items-center gap-2" style={{ color: 'var(--gray-900)', fontWeight: 600 }}>
        {item.nome}
        {item.receita && <Tag value="Receita" severity="warning" variant="subtle" />}
      </span>
      <span style={{ color: '#898989', fontSize: '0.75rem' }}>
        {item.laboratorio} · EAN {item.ean}
      </span>
    </div>
  );

  const quantidade = (item: ProdutoCarrinho) => (
    <InputNumber
      compact
      min={1}
      max={99}
      value={item.quantidade}
      aria-label={`Quantidade de ${item.nome}`}
      onChange={(event) => alterarQuantidade(item.id, event.value ?? 1)}
    />
  );

  const acoes = (item: ProdutoCarrinho) => (
    <Button
      text
      rounded
      severity="danger"
      icon={`drg-icon ${EnumIcons.Outlined.delete}`}
      aria-label={`Remover ${item.nome}`}
      onClick={() => remover(item.id)}
    />
  );

  return (
    <PdvLayout page="vendas">
      <div className="grid">
        <div className="col-12 lg:col-8 flex flex-column gap-3">
          {finalizou && (
            <Message severity="info" text="F2 pressionado: aqui a tela seguiria para o pagamento." className="w-full justify-content-start" />
          )}
          <BgFrame
            variant="card"
            title="Itens da venda"
            icon={EnumIcons.Outlined.shopping_cart}
            actions={<Button label="Limpar venda" text severity="danger" size="small" onClick={() => setItens([])} />}
          >
            {itens.length === 0 ? (
              <EmptyState icon={EnumIcons.Outlined.qr_code_scanner} title="Nenhum produto adicionado" description="Escaneie um produto para iniciar" />
            ) : (
              <DataTable value={itens} dataKey="id">
                <Column header="Produto" body={produto} />
                <Column header="Preço" body={(item: ProdutoCarrinho) => formatCurrency(item.preco)} />
                <Column header="Qtd." body={quantidade} />
                <Column
                  header="Subtotal"
                  body={(item: ProdutoCarrinho) => <strong>{formatCurrency(item.preco * item.quantidade)}</strong>}
                />
                <Column header={<span className="drg-visually-hidden">Ações</span>} body={acoes} />
              </DataTable>
            )}
          </BgFrame>
        </div>
        <div className="col-12 lg:col-4">
          <ResumoDaVenda itens={itens} onFinalizar={() => setFinalizou(true)} />
        </div>
      </div>
    </PdvLayout>
  );
};

export const VendaComProdutos: Story = {
  render: () => <VendaComProdutosTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['OPERACOES', 'ResumoDaVenda', 'VendaComProdutosTela'], '<VendaComProdutosTela />'),
      description: {
        story:
          'Carrinho com quantidades editáveis (<code>InputNumber compact</code>), remoção de itens, total em <code>SummaryStat</code> e o <code>Menu</code> de operações em popup. Pressione F2 para "finalizar".',
      },
    },
  },
};

interface Envio {
  file: File;
  status: FileItemStatus;
  progress: number;
  error?: string;
}

const DEZ_MB = 10 * 1024 * 1024;

const AnexarReceitaTela = () => {
  const [envios, setEnvios] = useState<Envio[]>([]);

  // Simula o envio, já que o FileUpload só escolhe os arquivos.
  useEffect(() => {
    if (!envios.some((envio) => envio.status === 'uploading')) return undefined;
    const timer = window.setInterval(() => {
      setEnvios((atual) =>
        atual.map((envio) => {
          if (envio.status !== 'uploading') return envio;
          const progress = Math.min(envio.progress + 25, 100);
          return { ...envio, progress, status: progress === 100 ? 'done' : 'uploading' };
        }),
      );
    }, 400);
    return () => window.clearInterval(timer);
  }, [envios]);

  const receita = CARRINHO.find((item) => item.receita);

  return (
    <PdvLayout page="vendas">
      <div className="flex flex-column gap-3" style={{ maxWidth: '40rem' }}>
        <BgFrame
          variant="card"
          title="Anexar receita"
          subtitle={`Obrigatória para ${receita?.nome}`}
          icon={EnumIcons.Outlined.description}
        >
          <div className="flex flex-column gap-3">
            <FileUpload
              accept=".jpg,.jpeg,.png,.pdf"
              maxFileSize={DEZ_MB}
              multiple
              hint="JPG, PNG ou PDF até 10 MB"
              onSelect={(files) =>
                setEnvios((atual) => [...atual, ...files.map((file) => ({ file, status: 'uploading' as const, progress: 0 }))])
              }
              onReject={(recusados) =>
                setEnvios((atual) => [
                  ...atual,
                  ...recusados.map(({ file, reason }) => ({
                    file,
                    status: 'error' as const,
                    progress: 0,
                    error: reason === 'size' ? 'Arquivo acima de 10 MB' : 'Envie JPG, PNG ou PDF',
                  })),
                ])
              }
            />
            {envios.map((envio, index) => (
              <FileItem
                key={`${envio.file.name}-${index}`}
                name={envio.file.name}
                size={envio.file.size}
                status={envio.status}
                progress={envio.progress}
                error={envio.error}
                onRemove={() => setEnvios((atual) => atual.filter((_, posicao) => posicao !== index))}
              />
            ))}
            <div className="flex justify-content-end gap-2">
              <Button label="Voltar" text />
              <Button label="Continuar" disabled={!envios.some((envio) => envio.status === 'done')} />
            </div>
          </div>
        </BgFrame>
      </div>
    </PdvLayout>
  );
};

export const AnexarReceita: Story = {
  render: () => <AnexarReceitaTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['Envio', 'DEZ_MB', 'AnexarReceitaTela'], '<AnexarReceitaTela />'),
      description: {
        story:
          'Produto controlado: <code>FileUpload</code> com validação de tipo e tamanho e <code>FileItem</code> mostrando o envio (simulado). "Continuar" libera quando há um arquivo enviado.',
      },
    },
  },
};
