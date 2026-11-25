import type { HTMLAttributes, MouseEvent, ReactNode } from "react";
import EnumIcons from "../../icons/EnumIcons";
import { Icon } from "../Icon";

export interface PageHeaderBackLink {
  /** Texto do link, normalmente o nome da página anterior (ex.: "Clientes"). */
  label: string;
  /** Com `href`, vira um link `<a>`; sem `href`, um botão. */
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title: ReactNode;
  /** Texto de apoio abaixo do título (ex.: descrição da página, CNPJ do cliente). */
  subtitle?: ReactNode;
  /** Link "‹ Página anterior" acima do título. */
  backLink?: PageHeaderBackLink;
  /** Ao lado do título, como um `Tag` de status ("Ativo"). */
  tag?: ReactNode;
  /** Botões à direita. */
  actions?: ReactNode;
}

/**
 * @description
 * Componente PageHeader.
 * Cabeçalho de página com título, subtítulo, link de voltar, tag de status
 * e ações à direita, como em Clientes e nos detalhes de um cliente.
 *
 * O título é um `<h1>`. O link de voltar não depende de roteador: com `href`
 * é um `<a>`, sem `href` é um `<button>` com `onClick`.
 */
export const PageHeader = ({ title, subtitle, backLink, tag, actions, className, ...props }: PageHeaderProps) => {
  const classes = ["drg-page-header", className].filter(Boolean).join(" ");

  const backContent = (
    <>
      <Icon name={EnumIcons.Outlined.chevron_left} aria-hidden="true" />
      {backLink?.label}
    </>
  );

  return (
    <header {...props} className={classes}>
      {backLink &&
        (backLink.href ? (
          <a className="drg-page-header__back" href={backLink.href} onClick={backLink.onClick}>
            {backContent}
          </a>
        ) : (
          <button type="button" className="drg-page-header__back" onClick={backLink.onClick}>
            {backContent}
          </button>
        ))}
      <div className="drg-page-header__row">
        <div className="drg-page-header__heading">
          <div className="drg-page-header__title-row">
            <h1 className="drg-page-header__title">{title}</h1>
            {tag}
          </div>
          {subtitle && <p className="drg-page-header__subtitle">{subtitle}</p>}
        </div>
        {actions && <div className="drg-page-header__actions">{actions}</div>}
      </div>
    </header>
  );
};
