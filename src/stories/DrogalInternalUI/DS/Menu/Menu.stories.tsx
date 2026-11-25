import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Menu as PureMenu } from 'primereact/menu';

import '../../../../theme.css';
import { Menu, type MenuItem } from '../../../../components/Menu';
import { Button } from '../../../../components/Button';
import EnumIcons from '../../../../icons/EnumIcons';

const operacoes: MenuItem[] = [
  { label: 'Imprimir nota fiscal', icon: EnumIcons.Outlined.print, shortcut: 'Ctrl+P' },
  { label: 'Reimprimir comprovante', icon: EnumIcons.Outlined.receipt_long, shortcut: 'Ctrl+R' },
  { label: 'Desfazer último item', icon: EnumIcons.Outlined.undo, shortcut: 'Ctrl+Z' },
  { separator: true },
  { label: 'Cancelar venda', icon: EnumIcons.Outlined.cancel, shortcut: 'F8' },
  { label: 'Cancelar nota fiscal', icon: EnumIcons.Outlined.delete, shortcut: 'F9', disabled: true },
];

const meta = {
  title: 'Drogal Internal UI/DS/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Lista de ações, em linha ou em popup. Cada item aceita <code>shortcut</code> para exibir o atalho de teclado à direita do rótulo (o atalho em si é tratado pela tela). Ícones aceitam as classes do <code>EnumIcons</code>.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    model: {
      control: false,
      description: 'Itens do menu. Além das props do MenuItem do PrimeReact, aceita `shortcut`.',
      table: { type: { summary: 'MenuItem[]' } },
    },
    popup: {
      control: 'boolean',
      description: 'Exibe como popup, aberto por `ref.current.toggle(event)`',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OperacoesDeVenda: Story = {
  args: { model: operacoes, style: { width: '22.5rem' } },
  parameters: {
    docs: {
      description: {
        story: 'Itens com ícone e atalho. O último está desabilitado. Passe o mouse para ver o fundo de hover.',
      },
    },
  },
};

export const SemAtalho: Story = {
  args: {
    model: [
      { label: 'Imprimir nota fiscal', icon: EnumIcons.Outlined.print },
      { label: 'Reimprimir comprovante', icon: EnumIcons.Outlined.receipt_long },
    ],
    style: { width: '22.5rem' },
  },
};

const PopupExample = () => {
  const menuRef = useRef<PureMenu>(null);

  return (
    <>
      <Menu ref={menuRef} model={operacoes} popup style={{ width: '22.5rem' }} />
      <Button
        label="Operações (Ctrl+O)"
        icon={`drg-icon ${EnumIcons.Outlined.point_of_sale}`}
        onClick={(event) => menuRef.current?.toggle(event)}
        aria-haspopup
      />
    </>
  );
};

export const Popup: Story = {
  args: { model: operacoes },
  render: () => <PopupExample />,
  parameters: {
    docs: {
      description: {
        story: 'Menu em popup, aberto por um botão. Use uma <code>ref</code> e chame <code>toggle(event)</code>.',
      },
    },
  },
};
