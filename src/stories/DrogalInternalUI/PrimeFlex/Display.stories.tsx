import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/Display',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Classes utilitárias para controlar o tipo de display dos elementos.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children, bg = '#3B82F6' }: { children: React.ReactNode; bg?: string }) => (
  <div style={{
    padding: '1rem',
    backgroundColor: bg,
    color: '#fff',
    borderRadius: '4px',
  }}>
    {children}
  </div>
);

export const DisplayTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>block</h4>
        <p>Elemento em bloco (ocupa toda largura disponível)</p>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <div className="block"><Box>Display Block - Ocupa 100% da largura</Box></div>
          <div className="block"><Box bg="#10B981">Outro elemento block</Box></div>
        </div>
      </div>

      <div>
        <h4>inline</h4>
        <p>Elemento inline (ocupa apenas o espaço necessário)</p>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <span className="inline"><Box>Inline 1</Box></span>
          <span className="inline"><Box bg="#10B981">Inline 2</Box></span>
          <span className="inline"><Box bg="#F59E0B">Inline 3</Box></span>
        </div>
      </div>

      <div>
        <h4>inline-block</h4>
        <p>Combina características de inline e block</p>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <div className="inline-block" style={{ width: '150px' }}><Box>Inline-block 1</Box></div>
          <div className="inline-block" style={{ width: '150px' }}><Box bg="#10B981">Inline-block 2</Box></div>
          <div className="inline-block" style={{ width: '150px' }}><Box bg="#F59E0B">Inline-block 3</Box></div>
        </div>
      </div>

      <div>
        <h4>flex</h4>
        <p>Container flexbox</p>
        <div className="flex gap-2" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <Box>Flex Item 1</Box>
          <Box bg="#10B981">Flex Item 2</Box>
          <Box bg="#F59E0B">Flex Item 3</Box>
        </div>
      </div>

      <div>
        <h4>grid</h4>
        <p>Container grid</p>
        <div className="grid gap-2" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <div className="col-4"><Box>Grid Item 1</Box></div>
          <div className="col-4"><Box bg="#10B981">Grid Item 2</Box></div>
          <div className="col-4"><Box bg="#F59E0B">Grid Item 3</Box></div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tipos de display: `block`, `inline`, `inline-block`, `flex`, `grid`, `inline-flex`.',
      },
    },
  },
};

export const Hidden: Story = {
  render: () => (
    <div>
      <h3>Hidden / None</h3>
      <p>Use <code>hidden</code> para ocultar elementos</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <Box>Elemento Visível</Box>
        <div className="hidden">
          <Box bg="#EF4444">Este elemento está oculto (hidden)</Box>
        </div>
        <Box bg="#10B981">Outro Elemento Visível</Box>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `hidden` para ocultar elementos (display: none).',
      },
    },
  },
};

export const ResponsiveDisplay: Story = {
  render: () => (
    <div>
      <h3>Display Responsivo</h3>
      <p>Controle a visibilidade em diferentes breakpoints</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="block md:hidden">
          <Box bg="#EF4444">Visível apenas em MOBILE (menor que md)</Box>
        </div>
        <div className="hidden md:block lg:hidden">
          <Box bg="#F59E0B">Visível apenas em TABLET (md até lg)</Box>
        </div>
        <div className="hidden lg:block">
          <Box bg="#10B981">Visível apenas em DESKTOP (lg ou maior)</Box>
        </div>
        <div className="block">
          <Box>Sempre visível</Box>
        </div>
      </div>
      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#FEF3C7' }}>
        <strong>💡 Dica:</strong> Redimensione a janela para ver os elementos aparecerem/desaparecerem!
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Controle a visibilidade em diferentes tamanhos de tela usando breakpoints: `sm:`, `md:`, `lg:`, `xl:`.',
      },
    },
  },
};

export const Overflow: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>overflow-hidden</h4>
        <div className="overflow-hidden" style={{ height: '100px', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <div>
        <h4>overflow-auto</h4>
        <div className="overflow-auto" style={{ height: '100px', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <div>
        <h4>overflow-scroll</h4>
        <div className="overflow-scroll" style={{ height: '100px', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Controle o comportamento de overflow: `overflow-hidden`, `overflow-auto`, `overflow-scroll`, `overflow-visible`.',
      },
    },
  },
};

export const Visibility: Story = {
  render: () => (
    <div>
      <h3>Visibility</h3>
      <p>Diferença entre <code>hidden</code> e <code>invisible</code></p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box>Elemento Visível</Box>
        <div className="hidden">
          <Box bg="#EF4444">hidden - Não ocupa espaço (display: none)</Box>
        </div>
        <Box bg="#10B981">Elemento após o hidden</Box>
        <div className="invisible">
          <Box bg="#F59E0B">invisible - Ocupa espaço mas não aparece (visibility: hidden)</Box>
        </div>
        <Box bg="#8B5CF6">Elemento após o invisible</Box>
      </div>
      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#DBEAFE' }}>
        <strong>📝 Nota:</strong> <code>hidden</code> remove completamente do layout, enquanto <code>invisible</code> mantém o espaço ocupado.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`hidden` remove do layout (display: none), `invisible` oculta mas mantém espaço (visibility: hidden).',
      },
    },
  },
};
