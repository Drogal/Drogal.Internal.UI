import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { Header } from '../../../../components/Header';

const sampleUser = {
  name: 'João da Silva',
  profile: 'Administrador',
  version: '2.1.0',
};

const meta = {
  title: 'Drogal Internal UI/DS/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Componente de cabeçalho fixo da aplicação. Exibe o logo (ou nome) à esquerda, conteúdo customizável no centro via `children` e o ícone de perfil do usuário à direita. <br/><br/>OBS: O header é responsivo e mantém a usabilidade em telas menores. Content-width: 1510px',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logoSrc: {
      control: 'text',
      description: 'URL da imagem do logotipo',
      table: { type: { summary: 'string' } },
    },
    logoHref: {
      control: 'text',
      description: 'URL para o qual o logo redireciona ao ser clicado',
      table: { type: { summary: 'string' } },
    },
    logoAlt: {
      control: 'text',
      description: 'Texto alternativo da imagem do logotipo',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Logo' } },
    },
    user: {
      control: 'object',
      description: 'Informações do usuário logado (nome, perfil e versão)',
      table: { type: { summary: 'UserInfo' } },
    },
    onLogout: {
      action: 'onLogout',
      description: 'Callback disparado ao clicar em "Sair" no menu do usuário',
      table: { type: { summary: '() => void' } },
    },
    children: {
      control: false,
      description: 'Conteúdo opcional exibido no centro do header, respeitando a altura máxima de 80px',
      table: { type: { summary: 'ReactNode' } },
    }
  },
  decorators: [
    (Story) => (
      <div style={{ height: '80px', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    user: sampleUser,
  },
  parameters: {
    docs: {
      description: {
        story: 'Uso padrão com usuário autenticado. Exibe nome, perfil e versão no dropdown ao clicar no ícone.',
      },
    },
  },
};

export const ComLogo: Story = {
  args: {
    user: sampleUser,
    logoSrc: 'https://projetos.drogal.com.br/b6eccb34a71fe322927bcbda3df13658.png',
    logoHref: 'https://www.drogal.com.br',
    logoAlt: 'Logo da empresa',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header com imagem de logo customizada via `logoSrc`. Quando fornecida, substitui o texto do nome.',
      },
    },
  },
};

export const ComChildren: Story = {
  args: {
    user: sampleUser,
    children: (
      <span style={{ color: '#fff', fontSize: '14px', padding: '0 16px' }}>
        Conteúdo customizado no centro
      </span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header com conteúdo customizado no centro via `children`. O conteúdo respeita o height máximo de 80px.',
      },
    },
  },
};

export const SemUsuario: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Header sem usuário autenticado. O ícone de perfil ainda é exibido, mas o dropdown não mostra informações de usuário.',
      },
    },
  },
};
