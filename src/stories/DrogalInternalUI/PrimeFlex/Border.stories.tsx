import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/Border',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Classes utilitárias para bordas, incluindo largura, estilo, cor e border-radius.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const BorderBox = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <div
    className={className}
    style={{
      padding: '1.5rem',
      backgroundColor: '#fff',
      textAlign: 'center'
    }}
  >
    {children}
  </div>
);

export const BorderWidth: Story = {
  render: () => (
    <div>
      <h3>Largura da Borda</h3>
      <p>Use <code>border-{'{1-8}'}</code> para definir a largura da borda em todos os lados</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <BorderBox className="border-1">border-1</BorderBox>
        <BorderBox className="border-2">border-2</BorderBox>
        <BorderBox className="border-3">border-3</BorderBox>
        <BorderBox className="border-4">border-4</BorderBox>
        <BorderBox className="border-5">border-5</BorderBox>
        <BorderBox className="border-6">border-6</BorderBox>
        <BorderBox className="border-7">border-7</BorderBox>
        <BorderBox className="border-8">border-8</BorderBox>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de largura de borda de 1 a 8, onde cada unidade representa pixels.',
      },
    },
  },
};

export const BorderSides: Story = {
  render: () => (
    <div>
      <h3>Bordas Direcionais</h3>
      <p>Aplique bordas em lados específicos</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <BorderBox className="border-top-3">border-top-3</BorderBox>
        <BorderBox className="border-right-3">border-right-3</BorderBox>
        <BorderBox className="border-bottom-3">border-bottom-3</BorderBox>
        <BorderBox className="border-left-3">border-left-3</BorderBox>
        <BorderBox className="border-x-3">border-x-3 (esquerda + direita)</BorderBox>
        <BorderBox className="border-y-3">border-y-3 (topo + baixo)</BorderBox>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Bordas direcionais: `border-top-`, `border-right-`, `border-bottom-`, `border-left-`, `border-x-`, `border-y-`.',
      },
    },
  },
};

export const BorderStyle: Story = {
  render: () => (
    <div>
      <h3>Estilo da Borda</h3>
      <p>Diferentes estilos de borda</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <BorderBox className="border-3 border-solid">border-solid</BorderBox>
        <BorderBox className="border-3 border-dashed">border-dashed</BorderBox>
        <BorderBox className="border-3 border-dotted">border-dotted</BorderBox>
        <BorderBox className="border-3 border-double">border-double</BorderBox>
        <BorderBox className="border-3 border-none">border-none (sem borda)</BorderBox>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Estilos de borda: `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`.',
      },
    },
  },
};

export const BorderRadius: Story = {
  render: () => (
    <div>
      <h3>Border Radius</h3>
      <p>Use <code>border-round</code>, <code>border-circle</code> ou valores específicos</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <BorderBox className="border-3 border-noround">border-noround (0)</BorderBox>
        <BorderBox className="border-3 border-round-xs">border-round-xs</BorderBox>
        <BorderBox className="border-3 border-round-sm">border-round-sm</BorderBox>
        <BorderBox className="border-3 border-round">border-round (padrão)</BorderBox>
        <BorderBox className="border-3 border-round-md">border-round-md</BorderBox>
        <BorderBox className="border-3 border-round-lg">border-round-lg</BorderBox>
        <BorderBox className="border-3 border-round-xl">border-round-xl</BorderBox>
        <div className="border-3 border-circle" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', margin: '0 auto' }}>
          border-circle
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de border-radius: `border-noround`, `border-round-xs/sm/md/lg/xl`, `border-round`, `border-circle`.',
      },
    },
  },
};

export const BorderRadiusSides: Story = {
  render: () => (
    <div>
      <h3>Border Radius por Lado</h3>
      <p>Aplique border-radius em cantos específicos</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <BorderBox className="border-3 border-round-top">border-round-top</BorderBox>
        <BorderBox className="border-3 border-round-right">border-round-right</BorderBox>
        <BorderBox className="border-3 border-round-bottom">border-round-bottom</BorderBox>
        <BorderBox className="border-3 border-round-left">border-round-left</BorderBox>
        <BorderBox className="border-3 border-round-top-left">border-round-top-left</BorderBox>
        <BorderBox className="border-3 border-round-top-right">border-round-top-right</BorderBox>
        <BorderBox className="border-3 border-round-bottom-left">border-round-bottom-left</BorderBox>
        <BorderBox className="border-3 border-round-bottom-right">border-round-bottom-right</BorderBox>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Border-radius em lados específicos: `border-round-top/right/bottom/left` e cantos individuais.',
      },
    },
  },
};

export const CombinedBorders: Story = {
  render: () => (
    <div>
      <h3>Bordas Combinadas</h3>
      <p>Exemplos de combinações de bordas com cores e estilos</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <div className="border-3 border-blue-500 border-round p-4 bg-white">
          <h4 style={{ marginTop: 0 }}>Card Azul</h4>
          <p>border-3 border-blue-500 border-round</p>
        </div>

        <div className="border-left-4 border-green-500 p-4 bg-white shadow-2">
          <h4 style={{ marginTop: 0 }}>Barra Lateral</h4>
          <p>border-left-4 border-green-500 shadow-2</p>
        </div>

        <div className="border-3 border-dashed border-purple-500 border-round-lg p-4 bg-white">
          <h4 style={{ marginTop: 0 }}>Borda Tracejada</h4>
          <p>border-3 border-dashed border-purple-500</p>
        </div>

        <div className="border-2 border-orange-500 border-round-xl p-4 bg-orange-50">
          <h4 style={{ marginTop: 0 }}>Alert</h4>
          <p>border-2 border-orange-500 bg-orange-50</p>
        </div>

        <div className="border-top-3 border-bottom-3 border-pink-500 p-4 bg-white">
          <h4 style={{ marginTop: 0 }}>Topo e Base</h4>
          <p>border-top-3 border-bottom-3 border-pink-500</p>
        </div>

        <div className="border-3 border-red-500 border-round p-4 bg-red-50">
          <h4 style={{ marginTop: 0 }}>Error Box</h4>
          <p>border-3 border-red-500 bg-red-50</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplos práticos combinando largura, cor, estilo e radius de bordas.',
      },
    },
  },
};

export const BorderNone: Story = {
  render: () => (
    <div>
      <h3>Remover Bordas</h3>
      <p>Use <code>border-none</code> ou <code>border-noround</code></p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '1rem' }}>
        <div>
          <h4>Com borda padrão</h4>
          <div className="border-2 p-4 bg-white" style={{ borderColor: '#3B82F6' }}>
            Elemento com borda
          </div>
        </div>
        <div>
          <h4>Sem borda</h4>
          <div className="border-none p-4 bg-white shadow-2">
            border-none (usa sombra para destacar)
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `border-none` para remover bordas e `border-noround` para remover border-radius.',
      },
    },
  },
};
