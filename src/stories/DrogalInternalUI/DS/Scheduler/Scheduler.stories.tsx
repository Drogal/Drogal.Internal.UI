import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css';
import { Scheduler } from '../../../../components/Scheduler';
import { mapHorariosToScheduler } from '../../../../components/Scheduler/adapter';
import { useSchedulerNavigation } from '../../../../components/Scheduler/useSchedulerNavigation';
import type { Horario, HorarioTipo, Sala } from '../../../../components/Scheduler/types';
import { Dropdown } from '../../../../components/Dropdown';

// ─── dados de exemplo ────────────────────────────────────────────────────────

const SALAS: Sala[] = [
  { Id: 1, Nome: 'Sala Aurora' },
  { Id: 2, Nome: 'Sala Horizonte' },
];

const horario = (
  Id: number,
  CodigoSala: number,
  NomeUsuario: string,
  Departamento: string,
  dia: string,
  inicio: string,
  fim: string,
  Tipo: HorarioTipo = 'Reserva',
): Horario => ({
  Id,
  CodigoUsuario: Id * 10,
  CodigoSala,
  NomeUsuario,
  Departamento,
  DataInicio: `2026-${dia}T${inicio}:00`,
  DataFim: `2026-${dia}T${fim}:00`,
  Tipo,
});

/** Semana de segunda 28/09/2026 a sexta 02/10/2026. */
const HORARIOS: Horario[] = [
  horario(1, 1, 'Carlos Silva', 'TI', '09-28', '09:00', '10:00'),
  horario(2, 1, 'Mariana Costa', 'CRM', '09-28', '13:00', '14:00'),
  horario(3, 1, 'Ana Paula', 'Marketing', '09-29', '10:00', '11:00'),
  horario(4, 1, 'Rafael Mendes', 'Compras', '09-29', '14:30', '15:30'),
  horario(5, 1, 'Nilton Rodrigues', 'TI', '09-30', '09:00', '10:00'),
  horario(6, 1, 'Fernanda Lima', 'Diretoria', '09-30', '13:00', '14:00'),
  horario(7, 1, 'João Pereira', 'Planejamento', '10-01', '08:30', '09:30'),
  horario(8, 1, 'Luciana Alves', 'RH', '10-01', '11:00', '12:00'),
  horario(9, 1, 'Diego Vieira', 'Treinamento', '10-01', '15:30', '16:30'),
  horario(10, 1, 'Camila Santos', 'Projetos', '10-02', '13:00', '14:00'),
  horario(11, 2, 'Equipe de Dados', 'BI', '09-28', '10:00', '12:00'),
  horario(12, 2, 'Paulo Nunes', 'Financeiro', '09-29', '15:00', '16:30'),
  horario(13, 2, 'Manutenção', 'Facilities', '09-30', '14:00', '16:00', 'Excessao'),
  horario(14, 2, 'Beatriz Rocha', 'Jurídico', '10-02', '09:00', '09:45'),
  // demais semanas de outubro (visão mensal)
  horario(15, 1, 'Bruno Lima', 'TI', '10-06', '09:00', '10:30'),
  horario(16, 1, 'Larissa Melo', 'RH', '10-06', '14:00', '15:00'),
  horario(17, 1, 'Comitê de Produto', 'Produto', '10-14', '10:00', '12:00'),
  horario(18, 1, 'Auditoria', 'Financeiro', '10-21', '08:00', '12:00', 'Excessao'),
  horario(19, 1, 'Marcos Dias', 'Logística', '10-27', '15:00', '16:00'),
  horario(20, 1, 'Renata Souza', 'Marketing', '10-27', '16:00', '17:00'),
  // dia lotado (08/10) e dia bloqueado o expediente inteiro (20/10)
  horario(21, 1, 'Workshop de Vendas', 'Comercial', '10-08', '08:00', '12:00'),
  horario(22, 1, 'Workshop de Vendas', 'Comercial', '10-08', '12:30', '17:00'),
  horario(23, 1, 'Manutenção', 'Facilities', '10-20', '08:00', '18:30', 'Excessao'),
];

/** Almoço e fim do expediente, bloqueados em todos os dias. */
const EXPEDIENTE = [
  { start: '12:00', end: '12:30' },
  { start: '17:00', end: '18:30' },
];

/** Data fixa para que o destaque de "hoje" seja estável na documentação. */
const HOJE = new Date(2026, 8, 30); // quarta-feira, 30/09/2026

const semana = mapHorariosToScheduler({
  date: HOJE,
  today: HOJE,
  horarios: HORARIOS,
  codigoSala: 1,
  blockedRanges: EXPEDIENTE,
});

const dia = mapHorariosToScheduler({
  view: 'day',
  date: HOJE,
  today: HOJE,
  horarios: HORARIOS,
  codigoSala: 1,
  blockedRanges: EXPEDIENTE,
});

const mes = mapHorariosToScheduler({
  view: 'month',
  date: new Date(2026, 9, 15),
  today: new Date(2026, 9, 15),
  horarios: HORARIOS,
  codigoSala: 1,
  blockedRanges: EXPEDIENTE,
});

// ─── exemplos interativos ────────────────────────────────────────────────────

function SchedulerControlado() {
  const nav = useSchedulerNavigation({ initialDate: HOJE });
  const [horarios, setHorarios] = useState<Horario[]>(HORARIOS);
  const [mensagem, setMensagem] = useState(
    'Clique em um horário disponível para reservar ou em uma reserva para cancelar.',
  );

  const data = mapHorariosToScheduler({
    date: nav.date,
    view: nav.view,
    today: HOJE,
    horarios,
    codigoSala: 1,
    blockedRanges: EXPEDIENTE,
    onSlotClick: ({ start, end }) => {
      setHorarios((atual) => [
        ...atual,
        {
          Id: Math.max(0, ...atual.map((h) => h.Id)) + 1,
          CodigoUsuario: 999,
          NomeUsuario: 'Você',
          Departamento: 'Nova reserva',
          CodigoSala: 1,
          DataInicio: start,
          DataFim: end,
          Tipo: 'Reserva',
        },
      ]);
      setMensagem(`Reserva criada em ${start.toLocaleString('pt-BR')}.`);
    },
    onHorarioClick: (item, grupo) => {
      const ids = new Set(grupo.map((h) => h.Id));
      setHorarios((atual) => atual.filter((h) => !ids.has(h.Id)));
      setMensagem(
        grupo.length > 1
          ? `${grupo.length} reservas de ${item.NomeUsuario} canceladas.`
          : `Reserva de ${item.NomeUsuario} cancelada.`,
      );
    },
    onDayClick: (day) => {
      nav.setDate(day);
      nav.setView('day');
    },
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Scheduler
        {...data}
        view={nav.view}
        onViewChange={nav.setView}
        onPrevious={nav.previous}
        onNext={nav.next}
        onToday={() => nav.setDate(HOJE)}
      />
      <p style={{ margin: 0, fontSize: 14, color: '#6c6c6c' }}>{mensagem}</p>
    </div>
  );
}

function SchedulerPorSala() {
  const nav = useSchedulerNavigation({ initialDate: HOJE });
  const [codigoSala, setCodigoSala] = useState<number>(SALAS[0].Id);
  const salaOptions = SALAS.map((sala) => ({ label: sala.Nome, value: sala.Id }));

  const data = mapHorariosToScheduler({
    date: nav.date,
    view: nav.view,
    today: HOJE,
    horarios: HORARIOS,
    codigoSala,
    blockedRanges: EXPEDIENTE,
    onDayClick: (day) => {
      nav.setDate(day);
      nav.setView('day');
    },
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ width: 300 }}>
        <Dropdown
          title="Sala"
          options={salaOptions}
          value={codigoSala}
          onChange={(event) => {
            const selected = event.value as { value: number } | null;
            if (selected) setCodigoSala(selected.value);
          }}
        />
      </div>
      <Scheduler
        columns={data.columns}
        lines={data.lines}
        cells={data.cells}
        title={data.title}
        view={nav.view}
        onViewChange={nav.setView}
        onPrevious={nav.previous}
        onNext={nav.next}
        onToday={() => nav.setDate(HOJE)}
      />
    </div>
  );
}

// ─── meta ────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Drogal Internal UI/DS/Scheduler',
  component: Scheduler,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Grade de horários para reserva de salas. O componente é genérico: recebe <code>columns</code> (ex.: dias), ' +
          '<code>lines</code> (ex.: horários) e <code>cells</code> posicionadas por <code>gridArea</code>, nas variantes ' +
          '<strong>disponível</strong>, <strong>reservado</strong> e <strong>indisponível</strong>. ' +
          'Para converter a lista de <code>Horario</code> da API em colunas, linhas e células use <code>mapHorariosToScheduler</code>; ' +
          'para a navegação entre períodos use <code>useSchedulerNavigation</code>.<br/><br/>' +
          'Dimensões ajustáveis por CSS custom properties no elemento raiz: <code>--drg-scheduler-lines-width</code>, ' +
          '<code>--drg-scheduler-column-min-width</code>, <code>--drg-scheduler-row-height</code>, ' +
          '<code>--drg-scheduler-gap</code>, <code>--drg-scheduler-max-height</code> e ' +
          '<code>--drg-scheduler-title-width</code> (largura mínima do título entre as setas, para elas não se moverem ao trocar o período).',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    columns: semana.columns,
    lines: semana.lines,
    cells: semana.cells,
    title: semana.title,
  },
  argTypes: {
    columns: {
      control: false,
      description: 'Colunas da grade (ex.: dias da semana), ordenadas por `order`. `highlight` destaca a coluna.',
      table: { type: { summary: 'SchedulerColumn[]' } },
    },
    lines: {
      control: false,
      description: 'Linhas da grade (ex.: horários de 30 minutos), ordenadas por `order`.',
      table: { type: { summary: 'SchedulerLine[]' } },
    },
    cells: {
      control: false,
      description:
        'Células posicionadas por `gridArea` = `[rowStart, colStart, rowEnd, colEnd]` (base 1, fim exclusivo). ' +
        'Células com `onClick` são renderizadas como botões.',
      table: { type: { summary: 'SchedulerCell[]' } },
    },
    title: {
      control: 'text',
      description: 'Título do período exibido no cabeçalho',
      table: { type: { summary: 'string' } },
    },
    linesHeader: {
      control: 'text',
      description: 'Rótulo do canto superior esquerdo',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Horário' } },
    },
    view: {
      control: 'select',
      options: ['day', 'week', 'month'],
      description: 'Visão ativa no seletor',
      table: { type: { summary: "'day' | 'week' | 'month'" }, defaultValue: { summary: 'week' } },
    },
    views: {
      control: 'check',
      options: ['day', 'week', 'month'],
      description: 'Visões exibidas no seletor. Com uma única visão o seletor é omitido.',
      table: { type: { summary: 'SchedulerView[]' }, defaultValue: { summary: "['day', 'week', 'month']" } },
    },
    onViewChange: {
      action: 'onViewChange',
      description: 'Callback disparado ao trocar a visão',
      table: { type: { summary: '(view: SchedulerView) => void' } },
    },
    onPrevious: {
      action: 'onPrevious',
      description: 'Callback da seta de período anterior. Quando omitido, a seta não é exibida.',
      table: { type: { summary: '() => void' } },
    },
    onNext: {
      action: 'onNext',
      description: 'Callback da seta de próximo período. Quando omitido, a seta não é exibida.',
      table: { type: { summary: '() => void' } },
    },
    onToday: {
      action: 'onToday',
      description: 'Callback do botão "Hoje". Quando omitido, o botão não é exibido.',
      table: { type: { summary: '() => void' } },
    },
    todayLabel: {
      control: 'text',
      description: 'Texto do botão "Hoje"',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Hoje' } },
    },
    showLegend: {
      control: 'boolean',
      description: 'Exibe a legenda abaixo da grade',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    legend: {
      control: 'object',
      description: 'Sobrescreve os rótulos da legenda e das descrições acessíveis',
      table: { type: { summary: 'Partial<Record<SchedulerCellVariant, string>>' } },
    },
    loading: {
      control: 'boolean',
      description: 'Exibe um skeleton no lugar da grade',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensagem exibida quando não há colunas ou linhas',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Nenhum horário para exibir.' } },
    },
    className: { control: false, table: { type: { summary: 'string' } } },
    style: { control: false, table: { type: { summary: 'CSSProperties' } } },
  },
} satisfies Meta<typeof Scheduler>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── stories ─────────────────────────────────────────────────────────────────

export const Semana: Story = {
  args: {
    columns: semana.columns,
    lines: semana.lines,
    cells: semana.cells,
    title: semana.title,
    view: 'week',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Visão semanal gerada por <code>mapHorariosToScheduler</code> a partir de uma lista de <code>Horario</code>. ' +
          'Reservas ocupam os slots do intervalo, o almoço e o fim do expediente vêm de <code>blockedRanges</code> ' +
          'e a coluna de hoje é destacada.',
      },
    },
  },
};

export const Dia: Story = {
  args: {
    columns: dia.columns,
    lines: dia.lines,
    cells: dia.cells,
    title: dia.title,
    view: 'day',
    views: ['day', 'week'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Visão diária: o adapter gera uma única coluna com a data de referência.',
      },
    },
  },
};

export const Mes: Story = {
  args: {
    columns: mes.columns,
    lines: mes.lines,
    cells: mes.cells,
    title: mes.title,
    linesHeader: 'Semana',
    view: 'month',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Visão mensal: uma linha por semana e uma célula por dia. O dia continua disponível enquanto houver horário livre ' +
          '(com a quantidade no subtítulo), fica reservado quando as reservas lotam o expediente e indisponível quando bloqueios ' +
          'e exceções ocupam o dia inteiro ou quando está fora do mês. O dia atual recebe destaque e <code>onDayClick</code> ' +
          'do adapter torna os dias clicáveis.',
      },
    },
  },
};

export const NavegacaoControlada: Story = {
  render: () => <SchedulerControlado />,
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo completo com <code>useSchedulerNavigation</code>: setas, "Hoje" e troca de visão controlados pelo pai. ' +
          'Clicar em um slot disponível cria uma reserva, clicar em uma reserva a remove (estado local da story) ' +
          'e clicar em um dia na visão mensal abre a visão diária daquele dia. Reservas contíguas do mesmo usuário ' +
          'são unidas em uma célula só (<code>mergeAdjacent</code>).',
      },
    },
  },
};

export const PorSala: Story = {
  render: () => <SchedulerPorSala />,
  parameters: {
    docs: {
      description: {
        story: 'Filtra os horários por sala com a opção <code>codigoSala</code> do adapter.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    columns: semana.columns,
    lines: semana.lines,
    cells: semana.cells,
    title: semana.title,
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Enquanto <code>loading</code> é verdadeiro a grade é substituída por um skeleton com o formato da visão atual. ' +
          'Com <code>columns</code> e <code>lines</code> informados o skeleton usa as mesmas quantidades; sem eles, usa um padrão por visão.',
      },
    },
  },
};

export const LoadingDia: Story = {
  args: {
    columns: [],
    lines: [],
    cells: [],
    title: dia.title,
    view: 'day',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading da visão diária sem dados prévios: uma coluna e o número padrão de linhas.',
      },
    },
  },
};

export const LoadingMes: Story = {
  args: {
    columns: [],
    lines: [],
    cells: [],
    title: mes.title,
    linesHeader: 'Semana',
    view: 'month',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading da visão mensal sem dados prévios: cinco colunas e cinco semanas com a altura de linha da visão mensal.',
      },
    },
  },
};

export const Vazio: Story = {
  args: {
    columns: [],
    lines: [],
    cells: [],
    title: semana.title,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sem colunas ou linhas o componente exibe <code>emptyMessage</code>.',
      },
    },
  },
};

export const SemCabecalhoELegenda: Story = {
  render: () => (
    <Scheduler columns={semana.columns} lines={semana.lines} cells={semana.cells} views={['week']} showLegend={false} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Somente a grade: sem <code>title</code> e callbacks de navegação o cabeçalho é omitido, ' +
          'e com uma única visão o seletor também. <code>showLegend</code> oculta a legenda.',
      },
    },
  },
};
