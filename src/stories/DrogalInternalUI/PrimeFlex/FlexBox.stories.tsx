import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/FlexBox',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Sistema completo de Flexbox com classes utilitárias para criar layouts flexíveis e responsivos.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const BoxItem = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: '1rem',
    backgroundColor: '#3B82F6',
    color: '#fff',
    borderRadius: '4px',
    minWidth: '60px',
    textAlign: 'center'
  }}>
    {children}
  </div>
);

export const FlexDisplay: Story = {
  render: () => (
    <div>
      <h3>Flex Display</h3>
      <p>Use a classe <code>flex</code> para criar um container flex</p>
      <div className="flex" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <BoxItem>Item 1</BoxItem>
        <BoxItem>Item 2</BoxItem>
        <BoxItem>Item 3</BoxItem>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A classe `flex` transforma um elemento em flex container.',
      },
    },
  },
};

export const FlexDirection: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>flex-row (padrão)</h4>
        <div className="flex flex-row" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>flex-column</h4>
        <div className="flex flex-column" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>flex-row-reverse</h4>
        <div className="flex flex-row-reverse" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>flex-column-reverse</h4>
        <div className="flex flex-column-reverse" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Controle a direção dos itens flex: `flex-row`, `flex-column`, `flex-row-reverse`, `flex-column-reverse`.',
      },
    },
  },
};

export const JustifyContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>justify-content-start</h4>
        <div className="flex justify-content-start" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>justify-content-center</h4>
        <div className="flex justify-content-center" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>justify-content-end</h4>
        <div className="flex justify-content-end" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>justify-content-between</h4>
        <div className="flex justify-content-between" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>justify-content-around</h4>
        <div className="flex justify-content-around" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>justify-content-evenly</h4>
        <div className="flex justify-content-evenly" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alinhamento horizontal dos itens: `justify-content-start`, `center`, `end`, `between`, `around`, `evenly`.',
      },
    },
  },
};

export const AlignItems: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>align-items-start</h4>
        <div className="flex align-items-start" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', minHeight: '120px' }}>
          <BoxItem>1</BoxItem>
          <div style={{ padding: '2rem', backgroundColor: '#10B981', color: '#fff', borderRadius: '4px' }}>2 (maior)</div>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>align-items-center</h4>
        <div className="flex align-items-center" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', minHeight: '120px' }}>
          <BoxItem>1</BoxItem>
          <div style={{ padding: '2rem', backgroundColor: '#10B981', color: '#fff', borderRadius: '4px' }}>2 (maior)</div>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>align-items-end</h4>
        <div className="flex align-items-end" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', minHeight: '120px' }}>
          <BoxItem>1</BoxItem>
          <div style={{ padding: '2rem', backgroundColor: '#10B981', color: '#fff', borderRadius: '4px' }}>2 (maior)</div>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>align-items-stretch</h4>
        <div className="flex align-items-stretch" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', minHeight: '120px' }}>
          <BoxItem>1</BoxItem>
          <div style={{ padding: '2rem', backgroundColor: '#10B981', color: '#fff', borderRadius: '4px' }}>2 (maior)</div>
          <BoxItem>3</BoxItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alinhamento vertical dos itens: `align-items-start`, `center`, `end`, `stretch`, `baseline`.',
      },
    },
  },
};

export const FlexWrap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>flex-wrap</h4>
        <div className="flex flex-wrap" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>Item 1</BoxItem>
          <BoxItem>Item 2</BoxItem>
          <BoxItem>Item 3</BoxItem>
          <BoxItem>Item 4</BoxItem>
          <BoxItem>Item 5</BoxItem>
          <BoxItem>Item 6</BoxItem>
          <BoxItem>Item 7</BoxItem>
          <BoxItem>Item 8</BoxItem>
        </div>
      </div>

      <div>
        <h4>flex-nowrap</h4>
        <div className="flex flex-nowrap" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', overflow: 'auto' }}>
          <BoxItem>Item 1</BoxItem>
          <BoxItem>Item 2</BoxItem>
          <BoxItem>Item 3</BoxItem>
          <BoxItem>Item 4</BoxItem>
          <BoxItem>Item 5</BoxItem>
          <BoxItem>Item 6</BoxItem>
          <BoxItem>Item 7</BoxItem>
          <BoxItem>Item 8</BoxItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Controle se os itens devem quebrar linha: `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`.',
      },
    },
  },
};

export const Gap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>gap-1 (0.25rem)</h4>
        <div className="flex gap-1" style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>gap-3 (0.75rem)</h4>
        <div className="flex gap-3" style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>

      <div>
        <h4>gap-5 (1.25rem)</h4>
        <div className="flex gap-5" style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>3</BoxItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Espaçamento entre itens flex usando `gap-{0-8}`. Cada unidade = 0.25rem (4px).',
      },
    },
  },
};

export const FlexGrow: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>flex-grow-1</h4>
        <div className="flex" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <BoxItem>Item 1</BoxItem>
          <div className="flex-grow-1" style={{ padding: '1rem', backgroundColor: '#10B981', color: '#fff', borderRadius: '4px', textAlign: 'center' }}>
            Item 2 (flex-grow-1)
          </div>
          <BoxItem>Item 3</BoxItem>
        </div>
      </div>

      <div>
        <h4>flex-shrink-0</h4>
        <div className="flex" style={{ gap: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', maxWidth: '400px' }}>
          <div className="flex-shrink-0" style={{ padding: '1rem', backgroundColor: '#EF4444', color: '#fff', borderRadius: '4px', minWidth: '200px' }}>
            Não encolhe (flex-shrink-0)
          </div>
          <BoxItem>Item 2</BoxItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Controle de crescimento e encolhimento: `flex-grow-0`, `flex-grow-1`, `flex-shrink-0`, `flex-shrink-1`.',
      },
    },
  },
};
