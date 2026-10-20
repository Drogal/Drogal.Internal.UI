import { useEffect, useId, useLayoutEffect, useRef, type ComponentProps, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import EnumIcons from "../../icons/EnumIcons";
import { Icon } from "../Icon";

type IconName = ComponentProps<typeof Icon>["name"];

export interface SideMenuItemTemplateOptions {
  /** Classes do link, já com o estado ativo e desabilitado aplicados. */
  className: string;
  /** Classe a acrescentar quando o item estiver ativo (útil com o `NavLink` do react-router). */
  activeClassName: string;
  /** Ícone e rótulo já montados. */
  content: ReactNode;
}

export interface SideMenuItem {
  /** Identificador comparado com `activeId` e usado como chave. @default href ?? label */
  id?: string | number;
  label: string;
  icon?: IconName;
  /** Quando informado, o item é um link `<a>`; sem `href`, é um `<button>`. */
  href?: string;
  /** Marca o item como ativo. Tem prioridade sobre `activeId`. */
  active?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>, item: SideMenuItem) => void;
  /** Renderização customizada do item, por exemplo com o `NavLink` do react-router. */
  template?: (item: SideMenuItem, options: SideMenuItemTemplateOptions) => ReactNode;
}

export interface SideMenuGroup {
  /** Identificador usado como chave. @default label */
  id?: string | number;
  /** Título do grupo, acima dos seus itens. */
  label: string;
  /** Texto de apoio do título, mostrado ao passar o mouse sobre ele. */
  description?: string;
  icon?: IconName;
  items: SideMenuItem[];
}

export interface SideMenuProps {
  /** Itens soltos, sem grupo. Com `groups`, vêm antes dos grupos. */
  items?: SideMenuItem[];
  /** Itens agrupados, cada grupo com o seu título. O item ativo é procurado em todos os grupos. */
  groups?: SideMenuGroup[];
  /** Item ativo, alternativa ao `active` de cada item. Compara com `id` e depois com `href`. */
  activeId?: string | number;
  /** Conteúdo acima dos itens (ex.: selo de ambiente). */
  header?: ReactNode;
  /** Conteúdo abaixo dos itens. */
  footer?: ReactNode;
  /** A partir de 768px o menu acompanha a rolagem, grudado abaixo do cabeçalho. @default true */
  sticky?: boolean;
  /** Distância do topo quando grudado. @default "calc(80px + 1rem)" (altura do Header mais o respiro) */
  stickyTop?: string;
  /** @default "Navegação principal" */
  ariaLabel?: string;
  /**
   * Gaveta no celular. Com `onMobileClose`, abaixo de 768px o menu sai da página e vira uma gaveta à esquerda, aberta
   * enquanto `mobileOpen` (o botão de menu do `Header`, `onMenuToggle`, alterna). Fecha no fundo escurecido, no Esc,
   * no botão de fechar e ao escolher um item. Sem `onMobileClose`, as telas menores mostram a fila horizontal.
   */
  mobileOpen?: boolean;
  onMobileClose?: () => void;
  /** Para o `aria-controls` do botão de menu do `Header` (`menuId`). */
  id?: string;
  className?: string;
  style?: CSSProperties;
}

const LINK_CLASS = "drg-side-menu__link";
const ACTIVE_CLASS = "drg-side-menu__link--active";
const DISABLED_CLASS = "drg-side-menu__link--disabled";

const itemKey = (item: SideMenuItem): string | number => item.id ?? item.href ?? item.label;

/**
 * @description
 * Componente SideMenu.
 * Menu de navegação lateral com ícone e rótulo por item: coluna fixa de 14rem
 * a partir de 768px (grudada abaixo do Header quando `sticky`) e fila horizontal
 * em telas menores.
 *
 * Não depende de roteador: itens com `href` viram links, sem `href` viram botões,
 * e `template` permite envolver o conteúdo com o `NavLink` do react-router.
 *
 * Os itens podem vir soltos (`items`) ou em grupos com título (`groups`); na fila
 * horizontal das telas menores, cada grupo começa uma linha com o seu título.
 *
 * Com `onMobileClose`, as telas menores trocam a fila horizontal por uma gaveta,
 * aberta pelo botão de menu do `Header` (`onMenuToggle`).
 */
export const SideMenu = ({
  items = [],
  groups = [],
  activeId,
  header,
  footer,
  sticky = true,
  stickyTop,
  ariaLabel = "Navegação principal",
  mobileOpen = false,
  onMobileClose,
  id,
  className,
  style,
}: SideMenuProps) => {
  const groupIdPrefix = useId();
  const drawer = onMobileClose !== undefined;
  const open = drawer && mobileOpen;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // O fechar mais recente, sem fazer o efeito de abertura rodar de novo a cada render do pai.
  const onMobileCloseRef = useRef(onMobileClose);
  useLayoutEffect(() => {
    onMobileCloseRef.current = onMobileClose;
  });

  // Gaveta aberta: Esc fecha, o foco vai para o botão de fechar e, no celular, a página atrás não rola. Ao fechar, o
  // foco volta para quem o tinha ao abrir (o botão de menu do Header), e não fica no botão de fechar escondido.
  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onMobileCloseRef.current?.();
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    const lockScroll = window.matchMedia?.("(max-width: 767px)").matches ?? false;
    const previousOverflow = document.body.style.overflow;
    if (lockScroll) document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (lockScroll) document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);
  const navStyle = {
    ...style,
    ...(stickyTop ? { "--drg-side-menu-top": stickyTop } : {}),
  } as CSSProperties;

  const isActive = (item: SideMenuItem): boolean =>
    item.active ?? (activeId !== undefined && (item.id === activeId || item.href === activeId));

  const renderItem = (item: SideMenuItem): ReactNode => {
    const active = isActive(item);
    const linkClass = `${LINK_CLASS}${active ? ` ${ACTIVE_CLASS}` : ""}${item.disabled ? ` ${DISABLED_CLASS}` : ""}`;
    const content = (
      <>
        {item.icon && <Icon name={item.icon} aria-hidden="true" />}
        <span className="drg-side-menu__label">{item.label}</span>
      </>
    );

    if (item.template) {
      return item.template(item, { className: linkClass, activeClassName: ACTIVE_CLASS, content });
    }

    if (item.href) {
      return (
        <a
          className={linkClass}
          href={item.href}
          aria-current={active ? "page" : undefined}
          aria-disabled={item.disabled || undefined}
          tabIndex={item.disabled ? -1 : undefined}
          onClick={(event) => {
            if (item.disabled) {
              event.preventDefault();
              return;
            }
            item.onClick?.(event, item);
          }}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        className={linkClass}
        aria-current={active ? "page" : undefined}
        disabled={item.disabled}
        onClick={(event) => item.onClick?.(event, item)}
      >
        {content}
      </button>
    );
  };

  const renderList = (list: SideMenuItem[]): ReactNode => (
    <ul className="drg-side-menu__list">
      {list.map((item) => (
        <li key={itemKey(item)} className="drg-side-menu__item">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );

  const navClassName = [
    "drg-side-menu",
    sticky && "drg-side-menu--sticky",
    drawer && "drg-side-menu--drawer",
    open && "drg-side-menu--open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {open && <div className="drg-side-menu__backdrop" aria-hidden="true" onClick={onMobileClose} />}
      <nav
        id={id}
        className={navClassName}
        aria-label={ariaLabel}
        style={navStyle}
        // Na gaveta, escolher um item fecha: o clique sobe do link (ou do NavLink do `template`) até aqui.
        onClick={
          open
            ? (event) => {
                if ((event.target as HTMLElement).closest(`.${LINK_CLASS}`)) onMobileClose?.();
              }
            : undefined
        }
      >
        {drawer && (
          <div className="drg-side-menu__drawer-bar">
            <button
              ref={closeButtonRef}
              type="button"
              className="drg-side-menu__close"
              aria-label="Fechar menu"
              onClick={onMobileClose}
            >
              <Icon name={EnumIcons.Outlined.close} aria-hidden="true" />
            </button>
          </div>
        )}
        {header && <div className="drg-side-menu__header">{header}</div>}
        {(items.length > 0 || groups.length === 0) && renderList(items)}
        {groups.map((group, position) => {
          const titleId = `${groupIdPrefix}-group-${position}`;

          return (
            <div key={group.id ?? group.label} className="drg-side-menu__group" role="group" aria-labelledby={titleId}>
              <span id={titleId} className="drg-side-menu__group-title" title={group.description}>
                {group.icon && <Icon name={group.icon} aria-hidden="true" />}
                <span className="drg-side-menu__label">{group.label}</span>
              </span>
              {renderList(group.items)}
            </div>
          );
        })}
        {footer && <div className="drg-side-menu__footer">{footer}</div>}
      </nav>
    </>
  );
};
