import type { Ref } from "react";
import { Menu as PureMenu } from "primereact/menu";
import type { MenuProps as PureMenuProps } from "../../types/local__primereact/menu/menu";
import type { MenuItem as PureMenuItem } from "../../types/local__primereact/menuitem/menuitem";

export interface MenuItem extends PureMenuItem {
  /** Atalho de teclado exibido à direita do rótulo (ex.: "Ctrl+P", "F8"). Só exibe: o atalho em si é tratado pela tela. */
  shortcut?: string;
  items?: MenuItem[];
}

export interface MenuProps extends Omit<PureMenuProps, "model"> {
  model?: MenuItem[];
  /** Referência ao Menu, para abrir e fechar o modo `popup` (`toggle`, `show`, `hide`). */
  ref?: Ref<PureMenu>;
}

/** Item com atalho: o mesmo conteúdo do item padrão do PrimeReact, com o atalho no fim. */
const withShortcut = (item: MenuItem): PureMenuItem => {
  const items = item.items?.map(withShortcut);
  const base = items ? { ...item, items } : item;

  if (!item.shortcut || item.template) {
    return base;
  }

  const { shortcut } = item;

  return {
    ...base,
    template: (menuItem, options) => (
      <div className="p-menuitem-content">
        <a
          className={`${options.className} drg-menu__link`}
          href={menuItem.url}
          target={menuItem.target}
          tabIndex={-1}
        >
          {menuItem.icon && <span className={options.iconClassName} aria-hidden="true" />}
          <span className={options.labelClassName}>{menuItem.label}</span>
          <kbd className="drg-menu__shortcut">{shortcut}</kbd>
        </a>
      </div>
    ),
  };
};

/**
 * @description
 * Componente Menu baseado no PrimeReact.
 * Lista de ações, em linha ou em popup (`popup` com `ref.current.toggle(event)`),
 * como as operações de venda.
 *
 * Acrescenta `shortcut` nos itens para exibir o atalho de teclado à direita
 * do rótulo. Os ícones aceitam as classes do `EnumIcons`.
 *
 * Encapsula o componente `Menu` do PrimeReact,
 * mantendo compatibilidade com suas props originais.
 */
export const Menu = ({ model, className, ref, ...props }: MenuProps) => {
  const classes = ["drg-menu", className].filter(Boolean).join(" ");

  return <PureMenu {...props} ref={ref} model={model?.map(withShortcut)} className={classes} />;
};
