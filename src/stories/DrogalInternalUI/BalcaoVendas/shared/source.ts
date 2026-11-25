/**
 * Monta o código mostrado no "Show code" das telas do Balcão Vendas a partir do
 * próprio arquivo da story (importado com `?raw`), para o exemplo nunca ficar
 * diferente do que roda.
 *
 * O código sai como num projeto que usa a lib: imports de `@drogal/drogal.internal.ui`
 * e os ícones pelo nome da classe ("drg-outlined-..."), já que o `EnumIcons` é interno.
 */

interface ParsedImport {
  /** `import type { ... }` */
  typeOnly: boolean;
  /** Nomes entre chaves, como escritos (`type X`, `A as B`). */
  names: string[];
  defaultName?: string;
  from: string;
}

const isUsed = (name: string, body: string): boolean => {
  const local = name.replace(/^type /, '').split(' as ').pop()?.trim() ?? '';
  return local !== '' && new RegExp(`\\b${local}\\b`).test(body);
};

const parseImports = (text: string): ParsedImport[] =>
  (text.match(/^import [\s\S]*?;$/gm) ?? []).flatMap((line) => {
    const match = line.match(/^import (type )?(?:(\w+)\s*,?\s*)?(?:\{([\s\S]*?)\})?\s*from '([^']+)';$/);
    if (!match) return [];
    const [, typeOnly, defaultName, names = '', from] = match;
    return [{ typeOnly: Boolean(typeOnly), defaultName, from, names: names.split(',').map((name) => name.trim()).filter(Boolean) }];
  });

const SKIP = ['theme.css', '@storybook/', 'icons/EnumIcons', './shared/source'];
const LOCAL_FILES: Record<string, { path: string; note: string }> = {
  './shared/PdvLayout': { path: './PdvLayout', note: 'veja a story "Balcão Vendas/Layout do PDV"' },
  './shared/data': { path: './data', note: 'dados de exemplo' },
};

const formatImport = ({ typeOnly, defaultName, names, from }: ParsedImport, note?: string): string => {
  const list = names.length > 3 ? `{\n  ${names.join(',\n  ')},\n}` : names.length > 0 ? `{ ${names.join(', ')} }` : '';
  const parts = [defaultName, list].filter(Boolean).join(', ');
  return `import ${typeOnly ? 'type ' : ''}${parts} from '${from}';${note ? ` // ${note}` : ''}`;
};

/** Imports usados no código mostrado, com a lib como pacote. */
const buildImports = (text: string, body: string): string => {
  const external: string[] = [];
  const local: string[] = [];
  const lib: string[] = [];

  parseImports(text).forEach((parsed) => {
    if (SKIP.some((skip) => parsed.from.includes(skip))) return;
    const names = parsed.names.filter((name) => isUsed(name, body));
    const defaultName = parsed.defaultName && isUsed(parsed.defaultName, body) ? parsed.defaultName : undefined;
    if (names.length === 0 && !defaultName) return;

    if (/(\.\.\/)+components\//.test(parsed.from)) {
      lib.push(...names.map((name) => (parsed.typeOnly ? `type ${name}` : name)));
    } else if (LOCAL_FILES[parsed.from]) {
      const { path, note } = LOCAL_FILES[parsed.from];
      local.push(formatImport({ ...parsed, names, defaultName, from: path }, note));
    } else {
      external.push(formatImport({ ...parsed, names, defaultName }));
    }
  });

  if (lib.length > 0) {
    const sorted = [...new Set(lib)].sort((a, b) => a.replace('type ', '').localeCompare(b.replace('type ', '')));
    external.push(formatImport({ typeOnly: false, names: sorted, from: '@drogal/drogal.internal.ui' }));
  }
  return [...external, ...local].join('\n');
};

/** Uma declaração do topo do arquivo (com o comentário logo acima), até a linha que a fecha na coluna 0. */
const readDeclaration = (lines: string[], name: string): string => {
  const start = lines.findIndex((line) => new RegExp(`^(export )?(const|function|interface|type) ${name}\\b`).test(line));
  if (start === -1) return `// ${name} não encontrado`;

  let first = start;
  while (first > 0 && /^(\/\*\*|\s\*|\/\/)/.test(lines[first - 1])) first -= 1;

  let last = start;
  if (!lines[start].trimEnd().endsWith(';')) {
    last = lines.findIndex((line, index) => index > start && /^[})\]]/.test(line));
  }
  return lines.slice(first, last + 1).join('\n');
};

/** Ícones pelo nome da classe, como o consumidor escreve hoje. */
const rewriteIcons = (code: string): string =>
  code
    .replace(/`drg-icon \$\{EnumIcons\.(Outlined|Rounded)\.(\w+)\}`/g, (_, set: string, icon: string) => `'drg-icon drg-${set.toLowerCase()}-${icon}'`)
    .replace(/EnumIcons\.(Outlined|Rounded)\.(\w+)/g, (_, set: string, icon: string) => `'drg-${set.toLowerCase()}-${icon}'`)
    // Em atributo JSX, icon={'drg-...'} vira icon="drg-...".
    .replace(/=\{'(drg-[^']+)'\}/g, '="$1"');

/**
 * Código de exemplo: imports usados, as declarações pedidas (na ordem dada) e o uso.
 * @param raw arquivo da story importado com `?raw`
 * @param names constantes, funções e tipos a mostrar
 * @param usage como a tela é usada, ex.: `<ListaTela />`
 */
export const exampleSource = (raw: string, names: string[], usage?: string): string => {
  const text = raw.replace(/\r\n/g, '\n');
  const lines = text.split('\n');
  const body = names.map((name) => readDeclaration(lines, name)).join('\n\n');
  const code = [buildImports(text, `${body}\n${usage ?? ''}`), body, usage ? `// Uso\n${usage}` : ''].filter(Boolean).join('\n\n');
  return rewriteIcons(code);
};

/** `parameters.docs` com o código de exemplo no "Show code". */
export const sourceDocs = (raw: string, names: string[], usage?: string) => ({
  source: { code: exampleSource(raw, names, usage), language: 'tsx', type: 'code' as const },
});
