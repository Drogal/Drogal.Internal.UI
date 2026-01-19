import type { Meta, StoryObj } from '@storybook/react';
import '../../../theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Utility CSS/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Classes utilitárias para tipografia, incluindo tamanho, peso, alinhamento e transformações de texto.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Tamanho de Fonte</h3>
      <p className="text-xs">text-xs - Extra small (0.75rem / 12px)</p>
      <p className="text-sm">text-sm - Small (0.875rem / 14px)</p>
      <p className="text-base">text-base - Base (1rem / 16px)</p>
      <p className="text-lg">text-lg - Large (1.125rem / 18px)</p>
      <p className="text-xl">text-xl - Extra large (1.25rem / 20px)</p>
      <p className="text-2xl">text-2xl - 2XL (1.5rem / 24px)</p>
      <p className="text-3xl">text-3xl - 3XL (1.875rem / 30px)</p>
      <p className="text-4xl">text-4xl - 4XL (2.25rem / 36px)</p>
      <p className="text-5xl">text-5xl - 5XL (3rem / 48px)</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de tamanho de fonte: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`.',
      },
    },
  },
};

export const FontWeight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Peso da Fonte</h3>
      <p className="font-light">font-light - Light (300)</p>
      <p className="font-normal">font-normal - Normal (400)</p>
      <p className="font-medium">font-medium - Medium (500)</p>
      <p className="font-semibold">font-semibold - Semibold (600)</p>
      <p className="font-bold">font-bold - Bold (700)</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de peso de fonte: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`.',
      },
    },
  },
};

export const TextAlign: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Alinhamento de Texto</h3>
      <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <p className="text-left">text-left - Alinhado à esquerda</p>
        <p className="text-center">text-center - Centralizado</p>
        <p className="text-right">text-right - Alinhado à direita</p>
        <p className="text-justify">text-justify - Justificado - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de alinhamento: `text-left`, `text-center`, `text-right`, `text-justify`.',
      },
    },
  },
};

export const TextTransform: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Transformação de Texto</h3>
      <p className="uppercase">uppercase - TEXTO EM MAIÚSCULAS</p>
      <p className="lowercase">LOWERCASE - texto em minúsculas</p>
      <p className="capitalize">capitalize - Primeira Letra De Cada Palavra</p>
      <p className="normal-case">normal-case - Texto Normal</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de transformação: `uppercase`, `lowercase`, `capitalize`, `normal-case`.',
      },
    },
  },
};

export const TextDecoration: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Decoração de Texto</h3>
      <p className="underline">underline - Texto sublinhado</p>
      <p className="line-through">line-through - Texto riscado</p>
      <p className="no-underline">no-underline - Sem sublinhado (remove underline padrão de links)</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de decoração: `underline`, `line-through`, `no-underline`.',
      },
    },
  },
};

export const LineHeight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h3>Altura da Linha</h3>
      <div>
        <h4>line-height-1</h4>
        <p className="line-height-1" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem' }}>
          Line height 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h4>line-height-2</h4>
        <p className="line-height-2" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem' }}>
          Line height 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h4>line-height-3</h4>
        <p className="line-height-3" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem' }}>
          Line height 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h4>line-height-4</h4>
        <p className="line-height-4" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem' }}>
          Line height 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de altura de linha: `line-height-1`, `line-height-2`, `line-height-3`, `line-height-4`.',
      },
    },
  },
};

export const TextOverflow: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h3>Overflow de Texto</h3>
      <div>
        <h4>text-overflow-ellipsis + white-space-nowrap</h4>
        <p className="text-overflow-ellipsis white-space-nowrap overflow-hidden" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem', maxWidth: '300px' }}>
          Este é um texto muito longo que será truncado com reticências quando exceder a largura máxima
        </p>
      </div>
      <div>
        <h4>text-overflow-clip</h4>
        <p className="text-overflow-clip white-space-nowrap overflow-hidden" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem', maxWidth: '300px' }}>
          Este é um texto muito longo que será cortado abruptamente quando exceder a largura máxima
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Controle de overflow: `text-overflow-ellipsis`, `text-overflow-clip`. Combine com `white-space-nowrap` e `overflow-hidden`.',
      },
    },
  },
};

export const WhiteSpace: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h3>White Space</h3>
      <div>
        <h4>white-space-normal</h4>
        <p className="white-space-normal" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem', maxWidth: '400px' }}>
          Este texto     tem múltiplos     espaços e
          quebras de linha que serão
          normalizados.
        </p>
      </div>
      <div>
        <h4>white-space-nowrap</h4>
        <div style={{ maxWidth: '400px', overflow: 'auto' }}>
          <p className="white-space-nowrap" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem' }}>
            Este texto não quebra linha automaticamente mesmo sendo muito longo
          </p>
        </div>
      </div>
      <div>
        <h4>white-space-pre</h4>
        <p className="white-space-pre" style={{ backgroundColor: '#f0f0f0', padding: '0.5rem' }}>
          Este     texto
          preserva    espaços
          e quebras de linha
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Classes de white-space: `white-space-normal`, `white-space-nowrap`, `white-space-pre`, `white-space-pre-line`, `white-space-pre-wrap`.',
      },
    },
  },
};
