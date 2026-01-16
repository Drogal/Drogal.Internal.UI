import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/Elevation',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Classes utilitárias para adicionar sombras e profundidade aos elementos.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ElevationBox = ({ className, label }: { className: string; label: string }) => (
  <div style={{ textAlign: 'center' }}>
    <div
      className={className}
      style={{
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: '500'
      }}
    >
      {label}
    </div>
  </div>
);

export const ShadowLevels: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', padding: '2rem' }}>
      <h3>Níveis de Sombra</h3>
      <p>Use <code>shadow-{'{1-8}'}</code> para adicionar profundidade</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <ElevationBox className="shadow-1" label="shadow-1" />
        <ElevationBox className="shadow-2" label="shadow-2" />
        <ElevationBox className="shadow-3" label="shadow-3" />
        <ElevationBox className="shadow-4" label="shadow-4" />
        <ElevationBox className="shadow-5" label="shadow-5" />
        <ElevationBox className="shadow-6" label="shadow-6" />
        <ElevationBox className="shadow-7" label="shadow-7" />
        <ElevationBox className="shadow-8" label="shadow-8" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Níveis de sombra de 1 a 8, onde números maiores representam sombras mais profundas.',
      },
    },
  },
};

export const NoShadow: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', padding: '2rem' }}>
      <h3>Remover Sombra</h3>
      <p>Use <code>shadow-none</code> para remover sombras</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h4>Com sombra (padrão de um card)</h4>
          <div className="shadow-2 p-4 bg-white" style={{ borderRadius: '8px' }}>
            Este elemento tem sombra
          </div>
        </div>
        <div>
          <h4>Sem sombra</h4>
          <div className="shadow-none p-4 bg-white" style={{ borderRadius: '8px', border: '1px solid #ddd' }}>
            Este elemento não tem sombra
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `shadow-none` para remover completamente a sombra de um elemento.',
      },
    },
  },
};

export const PracticalUsage: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', padding: '2rem' }}>
      <h3>Uso Prático</h3>
      <p>Exemplos de como usar elevação em componentes reais</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div className="shadow-1 bg-white p-4" style={{ borderRadius: '12px' }}>
          <h4 style={{ marginTop: 0 }}>Card Básico (shadow-1)</h4>
          <p>Elevação sutil para cards simples e elementos de interface.</p>
          <button className="shadow-2" style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#3B82F6', color: '#fff', cursor: 'pointer' }}>
            Ação
          </button>
        </div>

        <div className="shadow-3 bg-white p-4" style={{ borderRadius: '12px' }}>
          <h4 style={{ marginTop: 0 }}>Card Destacado (shadow-3)</h4>
          <p>Elevação média para destacar conteúdo importante.</p>
          <button className="shadow-2" style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#10B981', color: '#fff', cursor: 'pointer' }}>
            Ação
          </button>
        </div>

        <div className="shadow-5 bg-white p-4" style={{ borderRadius: '12px' }}>
          <h4 style={{ marginTop: 0 }}>Modal/Dialog (shadow-5)</h4>
          <p>Elevação alta para modais e elementos flutuantes.</p>
          <button className="shadow-2" style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#8B5CF6', color: '#fff', cursor: 'pointer' }}>
            Ação
          </button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplos práticos de uso de elevação em diferentes tipos de componentes.',
      },
    },
  },
};

export const HoverEffect: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', padding: '2rem' }}>
      <h3>Efeito Hover</h3>
      <p>Combine sombras com transições para criar efeitos interativos</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div
          className="shadow-2 bg-white p-4"
          style={{
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.classList.remove('shadow-2');
            e.currentTarget.classList.add('shadow-5');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove('shadow-5');
            e.currentTarget.classList.add('shadow-2');
          }}
        >
          <h4 style={{ marginTop: 0 }}>Hover para Elevar</h4>
          <p>Passe o mouse para ver a sombra aumentar (shadow-2 → shadow-5)</p>
        </div>

        <div
          className="shadow-4 bg-white p-4"
          style={{
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.classList.remove('shadow-4');
            e.currentTarget.classList.add('shadow-1');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove('shadow-1');
            e.currentTarget.classList.add('shadow-4');
          }}
        >
          <h4 style={{ marginTop: 0 }}>Hover para Reduzir</h4>
          <p>Passe o mouse para ver a sombra diminuir (shadow-4 → shadow-1)</p>
        </div>

        <div
          className="shadow-3 bg-white p-4"
          style={{
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.classList.remove('shadow-3');
            e.currentTarget.classList.add('shadow-6');
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove('shadow-6');
            e.currentTarget.classList.add('shadow-3');
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <h4 style={{ marginTop: 0 }}>Elevar + Mover</h4>
          <p>Combina elevação com movimento (shadow-3 → shadow-6 + translateY)</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#DBEAFE', borderRadius: '8px' }}>
        <strong>💡 Dica:</strong> Combine classes de sombra com transições CSS para criar experiências interativas suaves.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplos de como criar efeitos hover combinando sombras com transições.',
      },
    },
  },
};
