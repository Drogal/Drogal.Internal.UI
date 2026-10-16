import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css';
import { SideMenu } from '../../../../components/SideMenu';
import type { SideMenuGroup, SideMenuItem } from '../../../../components/SideMenu';
import { Badge } from '../../../../components/Badge';
import EnumIcons from '../../../../icons/EnumIcons';

const ITEMS: SideMenuItem[] = [
  { id: 'overview', label: 'Visão geral', icon: EnumIcons.Outlined.dashboard },
  { id: 'flows', label: 'Fluxos de execução', icon: EnumIcons.Outlined.list_alt },
  { id: 'agents', label: 'Agentes', icon: EnumIcons.Outlined.dns },
  { id: 'collector', label: 'Coletor', icon: EnumIcons.Outlined.move_to_inbox },
  { id: 'throughput', label: 'Vazão', icon: EnumIcons.Outlined.tune },
];

const LINK_ITEMS: SideMenuItem[] = [
  { href: '/', label: 'Visão geral', icon: EnumIcons.Outlined.dashboard },
  { href: '/execution-flows', label: 'Fluxos de execução', icon: EnumIcons.Outlined.list_alt },
  { href: '/agents', label: 'Agentes', icon: EnumIcons.Outlined.dns },
  { href: '/collector', label: 'Coletor', icon: EnumIcons.Outlined.move_to_inbox },
  { href: '/settings/throughput', label: 'Vazão', icon: EnumIcons.Outlined.tune },
];

const GROUPS: SideMenuGroup[] = [
  {
    id: 'salas',
    label: 'Salas de Reunião',
    description: 'Salas para reuniões presenciais e por vídeo.',
    items: [
      { id: 'inovacao', label: 'Sala Inovação', icon: EnumIcons.Outlined.lightbulb },
      { id: 'estrategia', label: 'Sala Estratégia', icon: EnumIcons.Outlined.insights },
      { id: 'auditorio', label: 'Auditório', icon: EnumIcons.Outlined.theaters },
    ],
  },
  {
    id: 'carros',
    label: 'Carros',
    description: 'Veículos da frota para visitas e entregas.',
    items: [
      { id: 'carro-1', label: 'Carro 1', icon: EnumIcons.Outlined.directions_car },
      { id: 'carro-2', label: 'Carro 2', icon: EnumIcons.Outlined.directions_car },
    ],
  },
];

function SideMenuControlado() {
  const [activeId, setActiveId] = useState<string | number>('overview');
  const items = ITEMS.map((item) => ({
    ...item,
    disabled: item.id === 'collector',
    onClick: () => setActiveId(item.id ?? item.label),
  }));

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <SideMenu items={items} activeId={activeId} sticky={false} />
      <div style={{ flex: 1, padding: '1rem', background: '#f1f3f5', borderRadius: 6, minHeight: 200 }}>
        Conteúdo de <strong>{ITEMS.find((item) => item.id === activeId)?.label}</strong>
      </div>
    </div>
  );
}

const meta = {
  title: 'Drogal Internal UI/DS/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Menu de navegação lateral com ícone e rótulo por item, trazido do console do Drogal.Workflow. ' +
          'A partir de 768px é uma coluna de 14rem que acompanha a rolagem grudada abaixo do <code>Header</code> ' +
          '(<code>sticky</code>); abaixo disso vira uma fila horizontal no topo.<br/><br/>' +
          'Não depende de roteador: itens com <code>href</code> viram links, sem <code>href</code> viram botões e ' +
          '<code>template</code> permite envolver o conteúdo com o <code>NavLink</code> do react-router. ' +
          'O item ativo pode vir de <code>activeId</code> ou de <code>active</code> em cada item.<br/><br/>' +
          'Dimensões ajustáveis por CSS custom properties: <code>--drg-side-menu-width</code>, ' +
          '<code>--drg-side-menu-top</code> e <code>--drg-side-menu-gap</code>.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    items: ITEMS,
    activeId: 'overview',
    sticky: false,
  },
  argTypes: {
    items: {
      control: false,
      description: 'Itens soltos do menu: `label`, `icon` (nome do ícone do DS), `href`, `active`, `disabled`, `onClick` e `template`.',
      table: { type: { summary: 'SideMenuItem[]' } },
    },
    groups: {
      control: false,
      description:
        'Itens agrupados: cada grupo tem `label` (o título), `description` (aparece ao passar o mouse no título), ' +
        '`icon` e `items`. Com `items` também, os soltos vêm antes.',
      table: { type: { summary: 'SideMenuGroup[]' } },
    },
    activeId: {
      control: 'select',
      options: ITEMS.map((item) => item.id),
      description: 'Item ativo. Compara com `id` e depois com `href`.',
      table: { type: { summary: 'string | number' } },
    },
    header: {
      control: false,
      description: 'Conteúdo acima dos itens (ex.: selo de ambiente)',
      table: { type: { summary: 'ReactNode' } },
    },
    footer: {
      control: false,
      description: 'Conteúdo abaixo dos itens',
      table: { type: { summary: 'ReactNode' } },
    },
    sticky: {
      control: 'boolean',
      description: 'A partir de 768px o menu acompanha a rolagem, grudado abaixo do cabeçalho',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    stickyTop: {
      control: 'text',
      description: 'Distância do topo quando grudado',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'calc(80px + 1rem)' } },
    },
    ariaLabel: {
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Navegação principal' } },
    },
    className: { control: false, table: { type: { summary: 'string' } } },
    style: { control: false, table: { type: { summary: 'CSSProperties' } } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Story />
        <div style={{ flex: 1, background: '#f1f3f5', borderRadius: 6, minHeight: 200 }} />
      </div>
    ),
  ],
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Itens como botões, com o ativo definido por <code>activeId</code>.',
      },
    },
  },
};

export const Controlado: Story = {
  render: () => <SideMenuControlado />,
  decorators: [(Story) => <Story />],
  parameters: {
    docs: {
      description: {
        story: 'O pai guarda o item ativo e troca no <code>onClick</code>. O item "Coletor" está desabilitado.',
      },
    },
  },
};

export const ComCabecalho: Story = {
  args: {
    header: <Badge value="Homologação" severity="warning" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Slot <code>header</code> acima dos itens, como o selo de ambiente do console do Workflow.',
      },
    },
  },
};

export const ComLinks: Story = {
  args: {
    items: LINK_ITEMS.map((item) => ({ ...item, onClick: (event) => event.preventDefault() })),
    activeId: '/agents',
  },
  parameters: {
    docs: {
      description: {
        story: 'Itens com <code>href</code> viram links. <code>activeId</code> também aceita o <code>href</code>.',
      },
    },
  },
};

export const ComTemplate: Story = {
  args: {
    items: LINK_ITEMS.map((item) => ({
      ...item,
      template: (current, { className, content }) => (
        <a className={className} href={current.href} onClick={(event) => event.preventDefault()} data-router-link>
          {content}
        </a>
      ),
    })),
    activeId: '/execution-flows',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Com <code>template</code> o item é renderizado pelo consumidor. Com react-router: ' +
          '<code>template: (item, { className, activeClassName, content }) =&gt; &lt;NavLink to={item.href} ' +
          'className={({ isActive }) =&gt; isActive ? `${className} ${activeClassName}` : className}&gt;{content}&lt;/NavLink&gt;</code>.',
      },
    },
  },
};

export const ComGrupos: Story = {
  args: {
    items: undefined,
    groups: GROUPS,
    activeId: 'estrategia',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Itens em <code>groups</code>, cada grupo com o seu título, como as agendas por tipo do Drogal.Reservas. ' +
          'A <code>description</code> do grupo aparece ao passar o mouse no título. O ativo é procurado em todos os ' +
          'grupos; na fila horizontal das telas menores, cada grupo começa uma linha.',
      },
    },
  },
};
