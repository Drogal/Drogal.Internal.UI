import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/Grid',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Sistema de grid responsivo de 12 colunas. Use classes `col-{1-12}` para definir larguras e `grid` para criar containers grid.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({ children, bg = '#3B82F6' }: { children: React.ReactNode; bg?: string }) => (
  <div style={{
    padding: '1rem',
    backgroundColor: bg,
    color: '#fff',
    borderRadius: '4px',
    textAlign: 'center',
    border: '2px solid #fff'
  }}>
    {children}
  </div>
);

export const BasicGrid: Story = {
  render: () => (
    <div>
      <h3>Grid Básico</h3>
      <p>Use <code>grid</code> para criar um container grid</p>
      <div className="grid" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <div className="col-12">
          <GridItem>col-12 (100%)</GridItem>
        </div>
        <div className="col-6">
          <GridItem>col-6 (50%)</GridItem>
        </div>
        <div className="col-6">
          <GridItem>col-6 (50%)</GridItem>
        </div>
        <div className="col-4">
          <GridItem>col-4 (33.33%)</GridItem>
        </div>
        <div className="col-4">
          <GridItem>col-4 (33.33%)</GridItem>
        </div>
        <div className="col-4">
          <GridItem>col-4 (33.33%)</GridItem>
        </div>
        <div className="col-3">
          <GridItem>col-3</GridItem>
        </div>
        <div className="col-3">
          <GridItem>col-3</GridItem>
        </div>
        <div className="col-3">
          <GridItem>col-3</GridItem>
        </div>
        <div className="col-3">
          <GridItem>col-3</GridItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid de 12 colunas. Use `col-{1-12}` para definir a largura das colunas.',
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  render: () => (
    <div>
      <h3>Grid Responsivo</h3>
      <p>Use classes com breakpoints: <code>col-12 md:col-6 lg:col-4</code></p>
      <div className="grid" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <div className="col-12 md:col-6 lg:col-4">
          <GridItem>12 cols mobile, 6 tablet, 4 desktop</GridItem>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <GridItem>12 cols mobile, 6 tablet, 4 desktop</GridItem>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <GridItem>12 cols mobile, 6 tablet, 4 desktop</GridItem>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <GridItem>12 cols mobile, 6 tablet, 4 desktop</GridItem>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <GridItem>12 cols mobile, 6 tablet, 4 desktop</GridItem>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <GridItem>12 cols mobile, 6 tablet, 4 desktop</GridItem>
        </div>
      </div>
      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#FEF3C7' }}>
        <strong>💡 Dica:</strong> Redimensione a janela para ver o comportamento responsivo!
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid responsivo usando breakpoints: `sm:`, `md:`, `lg:`, `xl:`.',
      },
    },
  },
};

export const GridGap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>Sem gap</h4>
        <div className="grid" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <div className="col-4"><GridItem>col-4</GridItem></div>
          <div className="col-4"><GridItem>col-4</GridItem></div>
          <div className="col-4"><GridItem>col-4</GridItem></div>
        </div>
      </div>

      <div>
        <h4>gap-2</h4>
        <div className="grid gap-2" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <div className="col-4"><GridItem>col-4</GridItem></div>
          <div className="col-4"><GridItem>col-4</GridItem></div>
          <div className="col-4"><GridItem>col-4</GridItem></div>
        </div>
      </div>

      <div>
        <h4>gap-4</h4>
        <div className="grid gap-4" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <div className="col-4"><GridItem>col-4</GridItem></div>
          <div className="col-4"><GridItem>col-4</GridItem></div>
          <div className="col-4"><GridItem>col-4</GridItem></div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Adicione espaçamento entre colunas com `gap-{0-8}`.',
      },
    },
  },
};

export const ColOffset: Story = {
  render: () => (
    <div>
      <h3>Column Offset</h3>
      <p>Use <code>col-offset-{'{1-12}'}</code> para deslocar colunas</p>
      <div className="grid" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <div className="col-6 col-offset-3">
          <GridItem>col-6 col-offset-3 (centralizado)</GridItem>
        </div>
        <div className="col-4 col-offset-2">
          <GridItem>col-4 col-offset-2</GridItem>
        </div>
        <div className="col-4">
          <GridItem>col-4</GridItem>
        </div>
        <div className="col-3 col-offset-1">
          <GridItem>col-3 col-offset-1</GridItem>
        </div>
        <div className="col-3 col-offset-2">
          <GridItem>col-3 col-offset-2</GridItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use offset para criar espaço antes das colunas.',
      },
    },
  },
};

export const NestedGrid: Story = {
  render: () => (
    <div>
      <h3>Grid Aninhado</h3>
      <p>Grids podem ser aninhados dentro de colunas</p>
      <div className="grid gap-3" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <div className="col-8">
          <GridItem bg="#3B82F6">
            <div>col-8 (Externo)</div>
            <div className="grid gap-2" style={{ marginTop: '1rem' }}>
              <div className="col-6">
                <GridItem bg="#10B981">col-6 (Interno)</GridItem>
              </div>
              <div className="col-6">
                <GridItem bg="#10B981">col-6 (Interno)</GridItem>
              </div>
              <div className="col-4">
                <GridItem bg="#10B981">col-4</GridItem>
              </div>
              <div className="col-4">
                <GridItem bg="#10B981">col-4</GridItem>
              </div>
              <div className="col-4">
                <GridItem bg="#10B981">col-4</GridItem>
              </div>
            </div>
          </GridItem>
        </div>
        <div className="col-4">
          <GridItem bg="#F59E0B">col-4 (Externo)</GridItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Crie layouts complexos aninhando grids dentro de colunas.',
      },
    },
  },
};

export const AutoColumns: Story = {
  render: () => (
    <div>
      <h3>Colunas Automáticas</h3>
      <p>Use <code>col</code> para colunas de largura igual automática</p>
      <div className="grid gap-2" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <div className="col">
          <GridItem>col (auto)</GridItem>
        </div>
        <div className="col">
          <GridItem>col (auto)</GridItem>
        </div>
        <div className="col">
          <GridItem>col (auto)</GridItem>
        </div>
      </div>

      <h4 style={{ marginTop: '2rem' }}>Misturando auto com fixo</h4>
      <div className="grid gap-2" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <div className="col-3">
          <GridItem bg="#EF4444">col-3 (fixo)</GridItem>
        </div>
        <div className="col">
          <GridItem>col (auto - preenche espaço)</GridItem>
        </div>
        <div className="col-2">
          <GridItem bg="#EF4444">col-2 (fixo)</GridItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `col` sem número para criar colunas de largura automática.',
      },
    },
  },
};
