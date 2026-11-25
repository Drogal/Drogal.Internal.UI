import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { PageHeader } from '../../../../components/PageHeader';
import { Button } from '../../../../components/Button';
import { Tag } from '../../../../components/Tag';
import EnumIcons from '../../../../icons/EnumIcons';

const meta = {
  title: 'Drogal Internal UI/DS/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Cabeçalho de página: título (<code>&lt;h1&gt;</code>), subtítulo, link de voltar (<code>backLink</code>), tag de status (<code>tag</code>) e ações à direita (<code>actions</code>). O link de voltar é um <code>&lt;a&gt;</code> com <code>href</code> ou um botão com <code>onClick</code>.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    subtitle: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    backLink: { control: 'object', table: { type: { summary: '{ label, href?, onClick? }' } } },
    tag: { control: false, table: { type: { summary: 'ReactNode' } } },
    actions: { control: false, table: { type: { summary: 'ReactNode' } } },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Listagem: Story = {
  args: {
    title: 'Clientes',
    subtitle: 'Consulte, filtre e edite os clientes cadastrados na loja',
    actions: <Button label="Novo cliente" icon={`drg-icon ${EnumIcons.Outlined.add}`} />,
  },
};

export const Detalhe: Story = {
  args: {
    title: 'XV DE PIRACICABA S.A.F',
    subtitle: 'CNPJ 48.845.115/0001-03 · Cliente desde 03/2021',
    backLink: { label: 'Clientes', href: '#clientes' },
    tag: <Tag value="Ativo" severity="success" />,
    actions: (
      <>
        <Button label="Inativar" severity="danger" outlined />
        <Button label="Salvar alterações" icon={`drg-icon ${EnumIcons.Outlined.save}`} />
      </>
    ),
  },
};

export const SoLinkDeVoltar: Story = {
  args: {
    title: 'Nota fiscal 001284',
    backLink: { label: 'Notas fiscais', onClick: () => undefined },
  },
  parameters: {
    docs: { description: { story: 'Sem <code>href</code>, o link de voltar é um botão.' } },
  },
};
