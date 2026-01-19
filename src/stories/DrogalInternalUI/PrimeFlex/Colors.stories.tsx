import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Classes utilitárias para cores de texto e background.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorBox = ({ className, label }: { className: string; label: string }) => (
  <div style={{ textAlign: 'center' }}>
    <div className={className} style={{ height: '80px', borderRadius: '8px', border: '1px solid #ddd' }}></div>
    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>{label}</p>
  </div>
);

export const BackgroundColors: Story = {
  render: () => (
    <div>
      <h3>Background Colors</h3>
      <p>Use <code>bg-{'{color}'}</code> para definir cores de fundo</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <ColorBox className="bg-blue-50" label="bg-blue-50" />
        <ColorBox className="bg-blue-100" label="bg-blue-100" />
        <ColorBox className="bg-blue-200" label="bg-blue-200" />
        <ColorBox className="bg-blue-300" label="bg-blue-300" />
        <ColorBox className="bg-blue-400" label="bg-blue-400" />
        <ColorBox className="bg-blue-500" label="bg-blue-500" />
        <ColorBox className="bg-blue-600" label="bg-blue-600" />
        <ColorBox className="bg-blue-700" label="bg-blue-700" />
        <ColorBox className="bg-blue-800" label="bg-blue-800" />
        <ColorBox className="bg-blue-900" label="bg-blue-900" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de cor de fundo com intensidades de 50 a 900. Disponível para várias cores.',
      },
    },
  },
};

export const TextColors: Story = {
  render: () => (
    <div>
      <h3>Text Colors</h3>
      <p>Use <code>text-{'{color}'}</code> para definir cores de texto</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
        <p className="text-blue-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-blue-500 - Texto azul</p>
        <p className="text-green-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-green-500 - Texto verde</p>
        <p className="text-red-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-red-500 - Texto vermelho</p>
        <p className="text-yellow-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-yellow-500 - Texto amarelo</p>
        <p className="text-purple-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-purple-500 - Texto roxo</p>
        <p className="text-pink-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-pink-500 - Texto rosa</p>
        <p className="text-indigo-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-indigo-500 - Texto índigo</p>
        <p className="text-gray-500" style={{ fontSize: '1.25rem', fontWeight: '500' }}>text-gray-500 - Texto cinza</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de cor de texto com intensidades de 50 a 900.',
      },
    },
  },
};

export const ColorPalette: Story = {
  render: () => (
    <div>
      <h3>Paleta de Cores Completa</h3>
      <p>Cores disponíveis: blue, green, red, yellow, purple, pink, indigo, gray, teal, orange, cyan</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h4>Green</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
            <ColorBox className="bg-green-50" label="50" />
            <ColorBox className="bg-green-100" label="100" />
            <ColorBox className="bg-green-200" label="200" />
            <ColorBox className="bg-green-300" label="300" />
            <ColorBox className="bg-green-400" label="400" />
            <ColorBox className="bg-green-500" label="500" />
            <ColorBox className="bg-green-600" label="600" />
            <ColorBox className="bg-green-700" label="700" />
            <ColorBox className="bg-green-800" label="800" />
            <ColorBox className="bg-green-900" label="900" />
          </div>
        </div>

        <div>
          <h4>Red</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
            <ColorBox className="bg-red-50" label="50" />
            <ColorBox className="bg-red-100" label="100" />
            <ColorBox className="bg-red-200" label="200" />
            <ColorBox className="bg-red-300" label="300" />
            <ColorBox className="bg-red-400" label="400" />
            <ColorBox className="bg-red-500" label="500" />
            <ColorBox className="bg-red-600" label="600" />
            <ColorBox className="bg-red-700" label="700" />
            <ColorBox className="bg-red-800" label="800" />
            <ColorBox className="bg-red-900" label="900" />
          </div>
        </div>

        <div>
          <h4>Purple</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
            <ColorBox className="bg-purple-50" label="50" />
            <ColorBox className="bg-purple-100" label="100" />
            <ColorBox className="bg-purple-200" label="200" />
            <ColorBox className="bg-purple-300" label="300" />
            <ColorBox className="bg-purple-400" label="400" />
            <ColorBox className="bg-purple-500" label="500" />
            <ColorBox className="bg-purple-600" label="600" />
            <ColorBox className="bg-purple-700" label="700" />
            <ColorBox className="bg-purple-800" label="800" />
            <ColorBox className="bg-purple-900" label="900" />
          </div>
        </div>

        <div>
          <h4>Orange</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
            <ColorBox className="bg-orange-50" label="50" />
            <ColorBox className="bg-orange-100" label="100" />
            <ColorBox className="bg-orange-200" label="200" />
            <ColorBox className="bg-orange-300" label="300" />
            <ColorBox className="bg-orange-400" label="400" />
            <ColorBox className="bg-orange-500" label="500" />
            <ColorBox className="bg-orange-600" label="600" />
            <ColorBox className="bg-orange-700" label="700" />
            <ColorBox className="bg-orange-800" label="800" />
            <ColorBox className="bg-orange-900" label="900" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paleta completa de cores com todas as intensidades.',
      },
    },
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div>
      <h3>Cores Semânticas</h3>
      <p>Cores com significado específico</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <div className="bg-primary text-white p-4" style={{ borderRadius: '8px' }}>
          bg-primary - Cor primária do tema
        </div>
        <div className="bg-primary-reverse text-primary p-4" style={{ borderRadius: '8px', border: '1px solid var(--primary-color)' }}>
          bg-primary-reverse - Inverso da cor primária
        </div>
        <div className="surface-ground p-4" style={{ borderRadius: '8px' }}>
          surface-ground - Superfície base
        </div>
        <div className="surface-section p-4" style={{ borderRadius: '8px' }}>
          surface-section - Superfície de seção
        </div>
        <div className="surface-card p-4" style={{ borderRadius: '8px' }}>
          surface-card - Superfície de card
        </div>
        <div className="surface-overlay p-4" style={{ borderRadius: '8px' }}>
          surface-overlay - Superfície de overlay
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cores semânticas do tema: `bg-primary`, `bg-primary-reverse`, `surface-ground`, `surface-section`, `surface-card`, `surface-overlay`.',
      },
    },
  },
};

export const BorderColors: Story = {
  render: () => (
    <div>
      <h3>Border Colors</h3>
      <p>Use <code>border-{'{color}'}</code> para definir cores de borda</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <div className="border-3 border-blue-500 p-4" style={{ borderRadius: '8px' }}>
          border-blue-500
        </div>
        <div className="border-3 border-green-500 p-4" style={{ borderRadius: '8px' }}>
          border-green-500
        </div>
        <div className="border-3 border-red-500 p-4" style={{ borderRadius: '8px' }}>
          border-red-500
        </div>
        <div className="border-3 border-purple-500 p-4" style={{ borderRadius: '8px' }}>
          border-purple-500
        </div>
        <div className="border-3 border-orange-500 p-4" style={{ borderRadius: '8px' }}>
          border-orange-500
        </div>
        <div className="border-3 border-pink-500 p-4" style={{ borderRadius: '8px' }}>
          border-pink-500
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de cor de borda combinadas com largura de borda.',
      },
    },
  },
};

export const Opacity: Story = {
  render: () => (
    <div>
      <h3>Opacity</h3>
      <p>Controle a opacidade de elementos</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginTop: '1rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <div className="bg-blue-500 p-3 opacity-0" style={{ borderRadius: '8px', color: '#fff' }}>opacity-0</div>
        <div className="bg-blue-500 p-3 opacity-10" style={{ borderRadius: '8px', color: '#fff' }}>opacity-10</div>
        <div className="bg-blue-500 p-3 opacity-20" style={{ borderRadius: '8px', color: '#fff' }}>opacity-20</div>
        <div className="bg-blue-500 p-3 opacity-30" style={{ borderRadius: '8px', color: '#fff' }}>opacity-30</div>
        <div className="bg-blue-500 p-3 opacity-40" style={{ borderRadius: '8px', color: '#fff' }}>opacity-40</div>
        <div className="bg-blue-500 p-3 opacity-50" style={{ borderRadius: '8px', color: '#fff' }}>opacity-50</div>
        <div className="bg-blue-500 p-3 opacity-60" style={{ borderRadius: '8px', color: '#fff' }}>opacity-60</div>
        <div className="bg-blue-500 p-3 opacity-70" style={{ borderRadius: '8px', color: '#fff' }}>opacity-70</div>
        <div className="bg-blue-500 p-3 opacity-80" style={{ borderRadius: '8px', color: '#fff' }}>opacity-80</div>
        <div className="bg-blue-500 p-3 opacity-90" style={{ borderRadius: '8px', color: '#fff' }}>opacity-90</div>
        <div className="bg-blue-500 p-3 opacity-100" style={{ borderRadius: '8px', color: '#fff' }}>opacity-100</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de opacidade: `opacity-0` até `opacity-100` em incrementos de 10.',
      },
    },
  },
};
