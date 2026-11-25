import { Paginator as PurePaginator } from "primereact/paginator";
import type { PaginatorProps as PurePaginatorProps } from "../../types/local__primereact/paginator/paginator";
import EnumIcons from "../../icons/EnumIcons";
import { Icon } from "../Icon";
import { getCompactPages } from "./compactPages";

export interface PaginatorProps extends PurePaginatorProps {
  /**
   * Versão compacta "‹ 1 2 3 … 156 ›" do Sistema de Vendas: a primeira e a última página,
   * a atual com as vizinhas e reticências. Usa `first`, `rows`, `totalRecords` e
   * `onPageChange` como o Paginator normal; as demais opções de layout são ignoradas.
   */
  compact?: boolean;
  /** Rótulo da navegação no modo compacto. @default "Paginação" */
  ariaLabel?: string;
}

const CompactPaginator = ({
  first = 0,
  rows = 10,
  totalRecords = 0,
  onPageChange,
  className,
  style,
  ariaLabel = "Paginação",
}: PaginatorProps) => {
  const pageCount = Math.max(1, Math.ceil(totalRecords / rows));
  const current = Math.min(Math.floor(first / rows), pageCount - 1);

  const goTo = (page: number) => {
    if (page === current || page < 0 || page >= pageCount) return;
    onPageChange?.({ first: page * rows, rows, page, pageCount });
  };

  const classes = ["drg-paginator-compact", className].filter(Boolean).join(" ");

  return (
    <nav className={classes} style={style} aria-label={ariaLabel}>
      <button
        type="button"
        className="drg-paginator-compact__nav"
        aria-label="Página anterior"
        disabled={current === 0}
        onClick={() => goTo(current - 1)}
      >
        <Icon name={EnumIcons.Outlined.chevron_left} aria-hidden="true" />
      </button>
      {getCompactPages(current, pageCount).map((item) =>
        typeof item === "number" ? (
          <button
            key={item}
            type="button"
            className={`drg-paginator-compact__page${item === current ? " drg-paginator-compact__page--active" : ""}`}
            aria-label={`Página ${item + 1}`}
            aria-current={item === current ? "page" : undefined}
            onClick={() => goTo(item)}
          >
            {item + 1}
          </button>
        ) : (
          <span key={item} className="drg-paginator-compact__ellipsis" aria-hidden="true">
            …
          </span>
        ),
      )}
      <button
        type="button"
        className="drg-paginator-compact__nav"
        aria-label="Próxima página"
        disabled={current >= pageCount - 1}
        onClick={() => goTo(current + 1)}
      >
        <Icon name={EnumIcons.Outlined.chevron_right} aria-hidden="true" />
      </button>
    </nav>
  );
};

/**
 * @description
 * Componente Paginator baseado no PrimeReact.
 * Utilizado para controle de paginação de listas
 * e tabelas de dados.
 *
 * Permite navegação entre páginas, definição de
 * quantidade de itens por página e controle de estado.
 *
 * Com `compact`, vira o paginador "‹ 1 2 3 … 156 ›" do Sistema de Vendas,
 * com o mesmo `onPageChange`.
 *
 * Encapsula o componente `Paginator` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Paginator = ({ compact = false, ariaLabel, ...props }: PaginatorProps) => {
  if (compact) return <CompactPaginator {...props} ariaLabel={ariaLabel} />;
  return <PurePaginator {...props} />;
};
