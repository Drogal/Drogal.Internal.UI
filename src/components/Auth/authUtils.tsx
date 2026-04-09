const PAGE_URL = window.location.href;
const PAGE_HOST = window.location.host;
const COOKIE_NAME = "85bf4a2c4c200db0c5c5c2614404d10ac28293a6";


/**
 * @description
 * Hook responsável por gerenciar autenticação baseada em token via cookie.
 * 
 * Ele centraliza operações como:
 * - Recuperar o token do cookie
 * - Persistir o token no cookie
 * - Remover o token (logout)
 * - Preparar o token vindo da URL (fluxo SSO)
 * - Validar expiração do token (JWT)
 * - Redirecionar para a tela de login
 */
const authUtils = () => {

  /**
   * @description
   * Recupera o token armazenado no cookie.
   * 
   * @returns {string | null} Token encontrado ou null caso não exista
   */
  const getToken = (): string | null => {
    const match = document.cookie.match(new RegExp('(^| )' + COOKIE_NAME + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  /**
   * @description
   * Salva o token no cookie com expiração de 1 dia.
   * 
   * @param {string} token Token de autenticação
   */
  const setToken = (token: string) => {
    document.cookie = `${COOKIE_NAME}=${token}; path=/; max-age=${60 * 60 * 24}; SameSite=Lax`;
  };

  /**
   * @description
   * Remove o token do cookie, efetivamente deslogando o usuário.
   */
  const removeToken = () => {
    document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`;
  }

  /**
   * @description
   * Prepara o token vindo pela URL (ex: fluxo SSO).
   * 
   * - Lê o parâmetro `token` da query string
   * - Persiste o token no cookie
   * - Remove o token da URL
   * - Atualiza a URL sem recarregar a página
   */
  const prepareToken = () => {
    const url = new URL(window.location.href);

    const token = url.searchParams.get("token");

    if (token) {
      setToken(token);
    }

    url.searchParams.delete("token");

    window.history.replaceState({}, document.title, url.toString());
  };

  /**
   * @description
   * Valida se o token atual é válido.
   * 
   * - Verifica se existe token
   * - Tenta decodificar como JWT
   * - Valida expiração (`exp`)
   * 
   * @returns {boolean} true se o token for válido, false caso contrário
   */
  const isTokenValid = (): boolean => {
    const token = getToken();

    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if (!payload.exp) return true;

      const isExpired = payload.exp * 1000 < Date.now();

      return !isExpired;
    } catch {
      return false;
    }
  };

  /**
   * @description
   * Redireciona o usuário para a página de login.
   * @param appName: nome do aplicativo que será utilizando como identidade na tela do sso
   */
  const redirectToLogin = (appName:string) => {
    window.location.href = `http://sso.drogal.com.br?app=${appName}&to=${PAGE_HOST}&secure=${PAGE_URL.includes("https") ? "true" : "false"}`;
  };

  /**
   * @description
   * Realiza o logout do usuário:
   * - Remove o token do cookie
   * - Redireciona para a tela de login
   * @param appName: nome do aplicativo que será utilizando como identidade na tela do sso
   */
  const logout = (appName:string) => {
    removeToken();
    redirectToLogin(appName);
  };

  return {
    getToken,
    setToken,
    removeToken,
    prepareToken,
    isTokenValid,
    logout,
    redirectToLogin,
  };
};

export { authUtils };
