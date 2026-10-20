import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../../theme.css';
import { Header } from '../../../../components/Header';

const sampleUser = {
  name: 'João da Silva',
  profile: 'Administrador',
  version: '2.1.0',
};

/** O botão de menu alternando o aberto/fechado, como a tela faz com o `SideMenu` em gaveta. */
function HeaderComMenuDemo() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <Header
        user={sampleUser}
        onMenuToggle={() => setAberto((valor) => !valor)}
        menuOpen={aberto}
        menuId="menu-exemplo"
      />
      <p style={{ margin: 0, padding: '1rem', fontSize: '14px' }}>
        Menu {aberto ? 'aberto' : 'fechado'}: <code>menuOpen</code> = {String(aberto)}
      </p>
    </>
  );
}

const meta = {
  title: 'Drogal Internal UI/DS/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Componente de cabeçalho fixo da aplicação. Exibe o logo (ou nome) à esquerda, conteúdo customizável no centro via `children` e o ícone de perfil do usuário à direita. <br/><br/>Com `onMenuToggle`, abaixo de 768px aparece o botão de menu (hambúrguer) à esquerda do logo, para abrir o `SideMenu` em gaveta (veja a story **ComMenuNoCelular** e, no SideMenu, a **GavetaNoCelular**). No desktop o botão não aparece. <br/><br/>OBS: O header é responsivo e mantém a usabilidade em telas menores. Content-width: 1510px',
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
    },
    onMenuToggle: {
      action: 'onMenuToggle',
      description:
        'Com ele, abaixo de 768px aparece o botão de menu (hambúrguer) à esquerda do logo, para abrir e fechar o `SideMenu` em gaveta (`mobileOpen` e `onMobileClose` dele). No desktop o botão não aparece.',
      table: { type: { summary: '() => void' } },
    },
    menuOpen: {
      control: 'boolean',
      description: 'Se a gaveta está aberta: vai no `aria-expanded` do botão e troca o rótulo entre "Abrir menu" e "Fechar menu"',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    menuId: {
      control: 'text',
      description: 'O `id` do `SideMenu` que o botão abre, para o `aria-controls`',
      table: { type: { summary: 'string' } },
    },
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

export const ComMenuNoCelular: Story = {
  render: () => <HeaderComMenuDemo />,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    docs: {
      description: {
        story:
          'Com `onMenuToggle`, abaixo de 768px aparece o botão de menu à esquerda do logo. Ele alterna `menuOpen`, que vai no `aria-expanded` e troca o rótulo entre "Abrir menu" e "Fechar menu"; `menuId` liga o botão ao menu pelo `aria-controls`. Esta story abre na largura de celular: em telas largas o botão não aparece. Para o uso completo, com o `SideMenu` em gaveta, veja a story GavetaNoCelular do SideMenu.',
      },
    },
  },
};
