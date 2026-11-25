/** Dados fictícios usados nos exemplos do Balcão Vendas. */

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export interface ProdutoCarrinho {
  id: string;
  nome: string;
  ean: string;
  laboratorio: string;
  preco: number;
  quantidade: number;
  receita?: boolean;
}

export const CARRINHO: ProdutoCarrinho[] = [
  { id: '1', nome: 'Dipirona Monoidratada 500mg 20 comp.', ean: '7896004703398', laboratorio: 'EMS', preco: 12.9, quantidade: 2 },
  { id: '2', nome: 'Amoxicilina 500mg 21 cáps.', ean: '7896422501019', laboratorio: 'Neo Química', preco: 38.5, quantidade: 1, receita: true },
  { id: '3', nome: 'Protetor Solar FPS 50 200ml', ean: '7891010249632', laboratorio: 'Sundown', preco: 79.9, quantidade: 1 },
  { id: '4', nome: 'Vitamina C 1g 30 comp. efervescentes', ean: '7896181900132', laboratorio: 'Cimed', preco: 24.75, quantidade: 3 },
];

export type ClienteStatus = 'Ativo' | 'Inativo' | 'Bloqueado';

export interface Cliente {
  id: string;
  nome: string;
  documento: string;
  cidade: string;
  status: ClienteStatus;
  desde: string;
}

export const CLIENTES: Cliente[] = [
  { id: '1', nome: 'XV DE PIRACICABA S.A.F', documento: '48.845.115/0001-03', cidade: 'Piracicaba/SP', status: 'Ativo', desde: '03/2021' },
  { id: '2', nome: 'Maria Aparecida Souza', documento: '123.456.789-09', cidade: 'Rio Claro/SP', status: 'Ativo', desde: '11/2019' },
  { id: '3', nome: 'Clínica Santa Luzia Ltda', documento: '12.345.678/0001-90', cidade: 'Limeira/SP', status: 'Bloqueado', desde: '06/2022' },
  { id: '4', nome: 'João Pedro Almeida', documento: '987.654.321-00', cidade: 'Piracicaba/SP', status: 'Inativo', desde: '01/2018' },
  { id: '5', nome: 'Farmácia Escola Unimep', documento: '54.383.660/0001-02', cidade: 'Piracicaba/SP', status: 'Ativo', desde: '08/2020' },
];

export const CLIENTE_SEVERITY = { Ativo: 'success', Inativo: 'secondary', Bloqueado: 'danger' } as const;

export type NotaStatus = 'Autorizada' | 'Cancelada' | 'Rejeitada' | 'Pendente';

export interface NotaFiscal {
  id: string;
  numero: string;
  serie: string;
  venda: string;
  cliente: string;
  emissao: string;
  total: number;
  status: NotaStatus;
}

export const NOTAS: NotaFiscal[] = [
  { id: '1', numero: '001284', serie: '001', venda: '008742', cliente: 'XV DE PIRACICABA S.A.F', emissao: '25/11/2026 10:42', total: 3224.16, status: 'Autorizada' },
  { id: '2', numero: '001283', serie: '001', venda: '008741', cliente: 'Maria Aparecida Souza', emissao: '25/11/2026 10:15', total: 89.4, status: 'Autorizada' },
  { id: '3', numero: '001282', serie: '001', venda: '008740', cliente: 'Consumidor final', emissao: '25/11/2026 09:58', total: 24.75, status: 'Rejeitada' },
  { id: '4', numero: '001281', serie: '001', venda: '008739', cliente: 'Clínica Santa Luzia Ltda', emissao: '24/11/2026 18:30', total: 512.0, status: 'Cancelada' },
  { id: '5', numero: '001280', serie: '001', venda: '008738', cliente: 'Consumidor final', emissao: '24/11/2026 18:02', total: 12.9, status: 'Pendente' },
];

export const NOTA_SEVERITY = { Autorizada: 'success', Cancelada: 'secondary', Rejeitada: 'danger', Pendente: 'warning' } as const;
