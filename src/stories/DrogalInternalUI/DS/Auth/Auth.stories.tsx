import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../theme.css';
import AuthPage from './AuthPage';
import React from 'react';
import { AuthLayout } from '../../../../components/Auth/authLayout';

const PAGE_URL = window.location.href;
const COOKIE_NAME = "85bf4a2c4c200db0c5c5c2614404d10ac28293a6";
const APP_NAME = 'Drogal storybook';

const createMockJWT = (expireInSeconds = 86400) => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({
      sub: '12345',
      name: 'Usuário Demo',
      exp: Math.floor(Date.now() / 1000) + expireInSeconds,
    }),
  );
  return `${header}.${payload}.mock-signature`;
};

const meta = {
  title: 'Drogal Internal UI/DS/Auth',
  // component: AuthPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'O `AuthLayout` protege a aplicação validando o token JWT no cookie. Se o token estiver ausente ou expirado, redireciona para o SSO (`http://sso.drogal.com.br`). Após o login, o SSO retorna à aplicação com `?token=...` na URL, que é persistido no cookie pelo `prepareToken()` e o conteúdo protegido é renderizado.\n\n> No Storybook, um JWT mock é injetado no cookie antes do `AuthLayout` montar, para evitar o redirect real para o SSO (que seria bloqueado pela política de rede privada do navegador).\n\n> #####ATENÇÃO : Os Exemplos no `Showcode` abaixo não estão corretos e não devem ser usados de exemplo, devido a limitações do ambiente do Storybook, que não permite simular completamente o fluxo de autenticação com redirecionamento e cookies. Para testar o `AuthLayout` e o fluxo de autenticação, é recomendado rodar a aplicação localmente e acessar as rotas protegidas para verificar o comportamento real do componente.\n\n O uso correto seria: `<AuthLayout appName={APP_NAME}> ...conteúdo protegido... </AuthLayout>`',
      },
    },
  },
  argTypes: {
    appName: {
      control: 'text',
      description: 'Nome do aplicativo para identificação no SSO',
      defaultValue: 'Drogal storybook',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Drogal storybook' },
      },
    },
    fallback: {
      control: 'text',
      description: 'Conteúdo exibido enquanto a autenticação é verificada',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Carregando...' },
      },
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story, { id }) => React.createElement(Story, { key: id }),
  ],
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const PaginaDeExemplo: Story = {
  name: 'Página Para Login',
  render: () => {

    return (
      <iframe src={`http://sso.drogal.com.br?app=${`drogal-storybook`}&to=${`${window.location.host}/?path=/story/drogal-internal-ui-ds-auth--pagina-de-exemplo`}&secure=${PAGE_URL.includes("https") ? "true" : "false"}`} style={{ width: '100%', height: '100vh' }}></iframe>
    )
  },
};
export const PaginaLogado: Story = {
  name: 'Página Logado',
  beforeEach: () => {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(createMockJWT())}; path=/; max-age=86400; SameSite=Lax`;
    return () => {
      document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`;
    };
  },
  render: () => (
    <AuthLayout appName={APP_NAME} fallback={'Carregando...'}>

      <AuthPage />
    </AuthLayout>
  ),
};
