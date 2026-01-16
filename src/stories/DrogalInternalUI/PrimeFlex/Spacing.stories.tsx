import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Classes utilitárias para margin e padding. Valores variam de 0 a 8, onde cada unidade representa 0.25rem (4px).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Margin: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <h3>Margin Classes</h3>
      <p>Classes de margem: <code>m-0</code>, <code>m-1</code>, <code>m-2</code>, <code>m-3</code>, <code>m-4</code>, <code>m-5</code>, <code>m-6</code>, <code>m-7</code>, <code>m-8</code></p>
      <div style={{ backgroundColor: '#fff', border: '2px dashed #ccc' }}>
        <div className="m-0 p-3" style={{ backgroundColor: '#3B82F6', color: '#fff' }}>m-0 - Sem margem</div>
        <div className="m-2 p-3" style={{ backgroundColor: '#3B82F6', color: '#fff' }}>m-2 - Margem 0.5rem (8px)</div>
        <div className="m-4 p-3" style={{ backgroundColor: '#3B82F6', color: '#fff' }}>m-4 - Margem 1rem (16px)</div>
        <div className="m-6 p-3" style={{ backgroundColor: '#3B82F6', color: '#fff' }}>m-6 - Margem 1.5rem (24px)</div>
        <div className="m-8 p-3" style={{ backgroundColor: '#3B82F6', color: '#fff' }}>m-8 - Margem 2rem (32px)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de margem aplicadas em todos os lados. Use `m-{0-8}` onde cada unidade = 0.25rem (4px).',
      },
    },
  },
};

export const MarginDirectional: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <h3>Margin Direcional</h3>
      <p>Margens direcionais: <code>mt-</code> (top), <code>mr-</code> (right), <code>mb-</code> (bottom), <code>ml-</code> (left)</p>
      <div style={{ backgroundColor: '#fff', border: '2px dashed #ccc', padding: '1rem' }}>
        <div className="mt-4 p-3" style={{ backgroundColor: '#10B981', color: '#fff' }}>mt-4 - Margin top</div>
        <div className="mr-4 p-3" style={{ backgroundColor: '#10B981', color: '#fff', display: 'inline-block' }}>mr-4 - Margin right</div>
        <div className="mb-4 p-3" style={{ backgroundColor: '#10B981', color: '#fff' }}>mb-4 - Margin bottom</div>
        <div className="ml-4 p-3" style={{ backgroundColor: '#10B981', color: '#fff' }}>ml-4 - Margin left</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Margens aplicadas em direções específicas usando `mt-`, `mr-`, `mb-`, `ml-` seguido do valor (0-8).',
      },
    },
  },
};

export const MarginAxis: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <h3>Margin por Eixo</h3>
      <p>Margens por eixo: <code>mx-</code> (horizontal), <code>my-</code> (vertical)</p>
      <div style={{ backgroundColor: '#fff', border: '2px dashed #ccc', padding: '1rem' }}>
        <div className="mx-4 p-3" style={{ backgroundColor: '#F59E0B', color: '#fff' }}>mx-4 - Margin horizontal (esquerda e direita)</div>
        <div className="my-4 p-3" style={{ backgroundColor: '#F59E0B', color: '#fff' }}>my-4 - Margin vertical (top e bottom)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `mx-` para margem horizontal e `my-` para margem vertical.',
      },
    },
  },
};

export const Padding: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <h3>Padding Classes</h3>
      <p>Classes de padding: <code>p-0</code>, <code>p-1</code>, <code>p-2</code>, <code>p-3</code>, <code>p-4</code>, <code>p-5</code>, <code>p-6</code>, <code>p-7</code>, <code>p-8</code></p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className="p-0" style={{ backgroundColor: '#EF4444', color: '#fff' }}>p-0 - Sem padding</div>
        <div className="p-2" style={{ backgroundColor: '#EF4444', color: '#fff' }}>p-2 - Padding 0.5rem (8px)</div>
        <div className="p-4" style={{ backgroundColor: '#EF4444', color: '#fff' }}>p-4 - Padding 1rem (16px)</div>
        <div className="p-6" style={{ backgroundColor: '#EF4444', color: '#fff' }}>p-6 - Padding 1.5rem (24px)</div>
        <div className="p-8" style={{ backgroundColor: '#EF4444', color: '#fff' }}>p-8 - Padding 2rem (32px)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de padding aplicadas em todos os lados. Use `p-{0-8}` onde cada unidade = 0.25rem (4px).',
      },
    },
  },
};

export const PaddingDirectional: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <h3>Padding Direcional</h3>
      <p>Paddings direcionais: <code>pt-</code> (top), <code>pr-</code> (right), <code>pb-</code> (bottom), <code>pl-</code> (left)</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className="pt-4" style={{ backgroundColor: '#8B5CF6', color: '#fff' }}>pt-4 - Padding top</div>
        <div className="pr-4" style={{ backgroundColor: '#8B5CF6', color: '#fff' }}>pr-4 - Padding right</div>
        <div className="pb-4" style={{ backgroundColor: '#8B5CF6', color: '#fff' }}>pb-4 - Padding bottom</div>
        <div className="pl-4" style={{ backgroundColor: '#8B5CF6', color: '#fff' }}>pl-4 - Padding left</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paddings aplicados em direções específicas usando `pt-`, `pr-`, `pb-`, `pl-` seguido do valor (0-8).',
      },
    },
  },
};

export const PaddingAxis: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <h3>Padding por Eixo</h3>
      <p>Paddings por eixo: <code>px-</code> (horizontal), <code>py-</code> (vertical)</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className="px-6" style={{ backgroundColor: '#EC4899', color: '#fff' }}>px-6 - Padding horizontal (esquerda e direita)</div>
        <div className="py-6" style={{ backgroundColor: '#EC4899', color: '#fff' }}>py-6 - Padding vertical (top e bottom)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `px-` para padding horizontal e `py-` para padding vertical.',
      },
    },
  },
};
