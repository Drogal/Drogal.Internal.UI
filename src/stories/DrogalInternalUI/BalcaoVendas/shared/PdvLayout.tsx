import { useState, type ReactNode } from 'react';

import { Header } from '../../../../components/Header';
import { Icon } from '../../../../components/Icon';
import { IconField } from '../../../../components/Input/IconField';
import { InputIcon } from '../../../../components/Input/InputIcon';
import { InputText } from '../../../../components/Input/InputText';
import { SideMenu, type SideMenuItem } from '../../../../components/SideMenu';
import { StatusIndicator, type StatusIndicatorStatus } from '../../../../components/StatusIndicator';
import EnumIcons from '../../../../icons/EnumIcons';

export type PdvPage = 'vendas' | 'clientes' | 'notas' | 'produtos';

const MENU: SideMenuItem[] = [
  { id: 'vendas', label: 'Vendas', icon: EnumIcons.Outlined.point_of_sale },
  { id: 'clientes', label: 'Clientes', icon: EnumIcons.Outlined.person },
  { id: 'notas', label: 'Notas fiscais', icon: EnumIcons.Outlined.description },
  { id: 'produtos', label: 'Produtos', icon: EnumIcons.Outlined.package },
];

interface PdvLayoutProps {
  /** Item ativo no menu lateral. */
  page: PdvPage;
  /** Estado da conexão mostrado no Header. @default 'online' */
  status?: StatusIndicatorStatus;
  children: ReactNode;
}

/**
 * Casca das telas do Balcão Vendas: Header do PDV (busca, status e filial) e
 * SideMenu compacto. No celular, o menu vira gaveta pelo botão do Header.
 */
export const PdvLayout = ({ page, status = 'online', children }: PdvLayoutProps) => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header
        user={{ name: 'Ana Souza', profile: 'Balconista', version: '1.0.0' }}
        onMenuToggle={() => setMenuAberto((aberto) => !aberto)}
        menuOpen={menuAberto}
        menuId="pdv-menu"
        end={
          <>
            <StatusIndicator status={status} />
            <span className="flex align-items-center gap-2">
              <Icon name={EnumIcons.Outlined.desktop_windows} aria-hidden="true" style={{ fontSize: '1.25rem' }} />
              Filial 001
            </span>
          </>
        }
      >
        <IconField iconPosition="left" style={{ width: '30rem', marginLeft: '1rem' }}>
          <InputIcon className={`drg-icon ${EnumIcons.Outlined.search}`} />
          <InputText
            title=""
            aria-label="Buscar produto"
            placeholder="Buscar produto (código, nome, EAN) ou pressione F3"
            style={{ width: '100%' }}
          />
        </IconField>
      </Header>
      <div className="flex gap-4 p-4">
        <SideMenu
          id="pdv-menu"
          variant="compact"
          items={MENU}
          activeId={page}
          ariaLabel="Sistema de Vendas"
          mobileOpen={menuAberto}
          onMobileClose={() => setMenuAberto(false)}
          style={{ background: '#ffffff', borderRadius: 8, paddingBlock: '0.5rem' }}
        />
        <main className="flex-1" style={{ minWidth: 0 }}>
          {children}
        </main>
      </div>
    </div>
  );
};
