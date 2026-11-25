import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../theme.css';
import source from './Clientes.stories.tsx?raw';
import { BgFrame } from '../../../components/BgFrame';
import { Button } from '../../../components/Button';
import { Column } from '../../../components/Column';
import { DataTable } from '../../../components/DataTable';
import { DescriptionList } from '../../../components/DescriptionList';
import { Dialog } from '../../../components/Dialog';
import { EmptyState } from '../../../components/EmptyState';
import { IconField } from '../../../components/Input/IconField';
import { InputIcon } from '../../../components/Input/InputIcon';
import { InputSwitch } from '../../../components/Input/InputSwitch';
import { InputText } from '../../../components/Input/InputText';
import { PageHeader } from '../../../components/PageHeader';
import { Paginator } from '../../../components/Paginator';
import { SummaryStat } from '../../../components/SummaryStat';
import { Tag } from '../../../components/Tag';
import EnumIcons from '../../../icons/EnumIcons';
import { CLIENTE_SEVERITY, CLIENTES, formatCurrency, type Cliente } from './shared/data';
import { PdvLayout } from './shared/PdvLayout';
import { sourceDocs } from './shared/source';

const meta = {
  title: 'Drogal Internal UI/Balcão Vendas/Clientes',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Cadastro de clientes: <code>PageHeader</code> (com <code>backLink</code>, <code>tag</code> e <code>actions</code>), <code>DataTable</code> com células em duas linhas e <code>Tag</code>, <code>Paginator compact</code>, <code>EmptyState</code> para busca sem resultado e formulários com <code>required</code>, <code>helpText</code> e <code>error</code>.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const nomeEDocumento = (cliente: Cliente) => (
  <div className="flex flex-column gap-1">
    <span style={{ color: 'var(--gray-900)', fontWeight: 600 }}>{cliente.nome}</span>
    <span style={{ color: '#898989', fontSize: '0.75rem' }}>{cliente.documento}</span>
  </div>
);

const ListaTela = ({ buscaInicial = '' }: { buscaInicial?: string }) => {
  const [busca, setBusca] = useState(buscaInicial);
  const [first, setFirst] = useState(0);
  const termo = busca.trim().toLowerCase();
  const filtrados = CLIENTES.filter(
    (cliente) => cliente.nome.toLowerCase().includes(termo) || cliente.documento.replace(/\D/g, '').includes(termo.replace(/\D/g, '') || '§'),
  );

  return (
    <PdvLayout page="clientes">
      <div className="flex flex-column gap-4">
        <PageHeader
          title="Clientes"
          subtitle="Consulte, filtre e edite os clientes cadastrados na loja"
          actions={<Button label="Novo cliente" icon={`drg-icon ${EnumIcons.Outlined.add}`} />}
        />
        <BgFrame variant="card">
          <div className="flex flex-column gap-3">
            <IconField iconPosition="left" style={{ maxWidth: '26rem' }}>
              <InputIcon className={`drg-icon ${EnumIcons.Outlined.search}`} />
              <InputText
                title=""
                aria-label="Buscar cliente"
                placeholder="Buscar por nome ou CPF/CNPJ"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                style={{ width: '100%' }}
              />
            </IconField>
            {filtrados.length === 0 ? (
              <EmptyState
                icon={EnumIcons.Outlined.search_off}
                title="Nenhum cliente encontrado"
                description="Confira o nome ou o CPF/CNPJ digitado."
                action={<Button label="Limpar busca" outlined size="small" onClick={() => setBusca('')} />}
              />
            ) : (
              <>
                <DataTable value={filtrados} dataKey="id">
                  <Column header="Cliente" body={nomeEDocumento} />
                  <Column header="Cidade" field="cidade" />
                  <Column header="Cliente desde" field="desde" />
                  <Column header="Situação" body={(cliente: Cliente) => <Tag value={cliente.status} severity={CLIENTE_SEVERITY[cliente.status]} />} />
                  <Column
                    header={<span className="drg-visually-hidden">Ações</span>}
                    body={(cliente: Cliente) => (
                      <Button text rounded icon={`drg-icon ${EnumIcons.Outlined.edit}`} aria-label={`Editar ${cliente.nome}`} />
                    )}
                  />
                </DataTable>
                <div className="flex justify-content-end">
                  <Paginator compact first={first} rows={10} totalRecords={1240} onPageChange={(event) => setFirst(event.first)} />
                </div>
              </>
            )}
          </div>
        </BgFrame>
      </div>
    </PdvLayout>
  );
};

export const Lista: Story = {
  render: () => <ListaTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['nomeEDocumento', 'ListaTela'], '<ListaTela />'),
      description: { story: 'Digite na busca para filtrar. Sem resultados, aparece o <code>EmptyState</code> com a ação de limpar.' },
    },
  },
};

export const BuscaSemResultado: Story = {
  render: () => <ListaTela buscaInicial="Fulano de Tal" />,
  parameters: { docs: sourceDocs(source, ['nomeEDocumento', 'ListaTela'], '<ListaTela buscaInicial="Fulano de Tal" />') },
};

const validarCnpj = (valor: string) => valor.replace(/\D/g, '').length === 14;

const DetalheTela = () => {
  const cliente = CLIENTES[0];
  const [ativo, setAtivo] = useState(true);
  const [cnpj, setCnpj] = useState(cliente.documento);
  const [email, setEmail] = useState('');
  const [tocado, setTocado] = useState(false);
  const cnpjInvalido = tocado && !validarCnpj(cnpj);

  return (
    <PdvLayout page="clientes">
      <div className="flex flex-column gap-4">
        <PageHeader
          title={cliente.nome}
          subtitle={`CNPJ ${cliente.documento} · Cliente desde ${cliente.desde}`}
          backLink={{ label: 'Clientes', href: '#clientes' }}
          tag={<Tag value={ativo ? 'Ativo' : 'Inativo'} severity={ativo ? 'success' : 'secondary'} />}
          actions={
            <>
              <Button label={ativo ? 'Inativar' : 'Reativar'} severity={ativo ? 'danger' : undefined} outlined onClick={() => setAtivo(!ativo)} />
              <Button label="Salvar alterações" icon={`drg-icon ${EnumIcons.Outlined.save}`} onClick={() => setTocado(true)} />
            </>
          }
        />
        <div className="grid">
          <div className="col-12 lg:col-8">
            <BgFrame variant="card" title="Dados cadastrais" icon={EnumIcons.Outlined.person}>
              <div className="grid">
                <div className="col-12 md:col-6">
                  <InputText title="Razão social" name="razao" required defaultValue={cliente.nome} className="w-full" />
                </div>
                <div className="col-12 md:col-6">
                  <InputText
                    title="CNPJ"
                    name="cnpj"
                    required
                    value={cnpj}
                    onChange={(event) => setCnpj(event.target.value)}
                    onBlur={() => setTocado(true)}
                    helpText="Somente números; a máscara é aplicada automaticamente."
                    error={cnpjInvalido ? 'CNPJ inválido. Confira os dígitos.' : undefined}
                    className="w-full"
                  />
                </div>
                <div className="col-12 md:col-6">
                  <InputText
                    title="E-mail para nota fiscal"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    helpText="A NFC-e é enviada para este e-mail."
                    className="w-full"
                  />
                </div>
                <div className="col-12 md:col-6">
                  <InputText title="Cidade" name="cidade" defaultValue={cliente.cidade} className="w-full" />
                </div>
                <div className="col-12">
                  <InputSwitch
                    variant="card"
                    title="Venda a prazo"
                    description="Permite fechar vendas no convênio, com cobrança no fim do mês"
                    checked={ativo}
                    disabled={!ativo}
                  />
                </div>
              </div>
            </BgFrame>
          </div>
          <div className="col-12 lg:col-4 flex flex-column gap-3">
            <BgFrame variant="card" title="Compras" icon={EnumIcons.Outlined.receipt_long}>
              <div className="flex flex-column gap-2">
                <SummaryStat label="No mês" value={formatCurrency(8412.3)} variant="info" />
                <SummaryStat label="Em aberto no convênio" value={formatCurrency(1200)} variant="danger" />
                <DescriptionList
                  variant="plain"
                  items={[
                    { label: 'Última compra', value: '25/11/2026' },
                    { label: 'Ticket médio', value: formatCurrency(386.2) },
                    { label: 'Limite do convênio', value: formatCurrency(5000) },
                  ]}
                />
              </div>
            </BgFrame>
          </div>
        </div>
      </div>
    </PdvLayout>
  );
};

export const Detalhe: Story = {
  render: () => <DetalheTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['validarCnpj', 'DetalheTela'], '<DetalheTela />'),
      description: {
        story:
          'Detalhe com link de voltar, <code>Tag</code> de situação e ações. Apague dígitos do CNPJ e saia do campo (ou clique em "Salvar") para ver o <code>error</code>; "Inativar" troca a tag e desabilita o Toggle Field.',
      },
    },
  },
};

const NovoClienteTela = () => {
  const [visivel, setVisivel] = useState(true);
  const [nome, setNome] = useState('');
  const [documento, setDocumento] = useState('');
  const [enviado, setEnviado] = useState(false);

  const erroNome = enviado && nome.trim() === '' ? 'Informe o nome ou a razão social.' : undefined;
  const digitos = documento.replace(/\D/g, '').length;
  const erroDocumento = enviado && digitos !== 11 && digitos !== 14 ? 'Informe um CPF (11 dígitos) ou CNPJ (14 dígitos).' : undefined;

  return (
    <PdvLayout page="clientes">
      <Button label="Novo cliente" icon={`drg-icon ${EnumIcons.Outlined.add}`} onClick={() => setVisivel(true)} />
      <Dialog
        header="Novo cliente"
        visible={visivel}
        style={{ width: '32rem' }}
        onHide={() => setVisivel(false)}
        footer={
          <div className="flex justify-content-end gap-2">
            <Button label="Cancelar" text onClick={() => setVisivel(false)} />
            <Button label="Cadastrar" onClick={() => setEnviado(true)} />
          </div>
        }
      >
        <div className="flex flex-column gap-3">
          <InputText title="Nome ou razão social" name="novo-nome" required value={nome} onChange={(event) => setNome(event.target.value)} error={erroNome} className="w-full" />
          <InputText
            title="CPF ou CNPJ"
            name="novo-documento"
            required
            value={documento}
            onChange={(event) => setDocumento(event.target.value)}
            helpText="Somente números."
            error={erroDocumento}
            className="w-full"
          />
          <InputText title="Telefone" name="novo-telefone" placeholder="(19) 99999-9999" className="w-full" />
        </div>
      </Dialog>
    </PdvLayout>
  );
};

export const NovoCliente: Story = {
  render: () => <NovoClienteTela />,
  parameters: {
    // Na página de docs, o Dialog aberto fica contido no iframe da story.
    docs: {
      story: { inline: false, height: '640px' },
      ...sourceDocs(source, ['NovoClienteTela'], '<NovoClienteTela />'),
      description: { story: 'Cadastro em <code>Dialog</code>. Clique em "Cadastrar" com os campos vazios para ver as mensagens de erro.' },
    },
  },
};
