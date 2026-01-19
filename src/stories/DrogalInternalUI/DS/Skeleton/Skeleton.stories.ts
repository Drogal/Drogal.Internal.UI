import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Skeleton } from '../../../../components/Skeleton';

const meta = {
  title: 'Drogal Internal UI/DS/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['rectangle', 'circle'],
      description: 'Forma do skeleton',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rectangle' },
      },
    },
    size: {
      control: 'text',
      description: 'Tamanho do skeleton (usado com shape="circle")',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: 'text',
      description: 'Largura do skeleton',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
      },
    },
    height: {
      control: 'text',
      description: 'Altura do skeleton',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1rem' },
      },
    },
    borderRadius: {
      control: 'text',
      description: 'Raio da borda',
      table: {
        type: { summary: 'string' },
      },
    },
    animation: {
      control: 'select',
      options: ['wave', 'none'],
      description: 'Tipo de animação',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'wave' },
      },
    },
    className: {
      control: 'text',
      description: 'Classes CSS customizadas',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Estilos inline',
      table: {
        type: { summary: 'object' },
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // shape: 'rectangle',
    width: '10rem',
    height: '4rem',
  },
};

export const Rectangle: Story = {
  args: {
    width: '10rem',
    height: '4rem',
    shape: 'rectangle',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton retangular básico, ideal para placeholders de conteúdo geral.',
      },
    },
  },
};

export const Circle: Story = {
  args: {
    shape: 'circle',
    size: '4rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton circular, perfeito para avatares e imagens redondas.',
      },
    },
  },
};

export const SmallCircle: Story = {
  args: {
    shape: 'circle',
    size: '2.5rem',
    height: '10rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton circular menor para itens de lista.',
      },
    },
  },
};

export const TextLine: Story = {
  args: {
    width: '20rem',
    height: '0.875rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton para linha de texto.',
      },
    },
  },
};

export const ShortText: Story = {
  args: {
    width: '10rem',
    height: '1rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton para texto curto.',
      },
    },
  },
};

export const CustomBorderRadius: Story = {
  args: {
    width: '20rem',
    height: '8rem',
    borderRadius: '4px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton com border radius customizado.',
      },
    },
  },
};

export const CustomSize: Story = {
  args: {
    width: '20rem',
    height: '10rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton com tamanho customizado.',
      },
    },
  },
};

export const Tall: Story = {
  args: {
    width: '10rem',
    height: '15rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton alto, útil para imagens ou cards grandes.',
      },
    },
  },
};
