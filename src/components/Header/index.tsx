import React, { useState, useRef, useEffect } from 'react';
import EnumIcons from '../../icons/EnumIcons';
import LogoDrogal from '../../assets/Logo/logo-drogal.svg';
import { Icon } from '../Icon';

// ── Types ────────────────────────────────────────────────────────────────────

export interface UserInfo {
  name: string;
  profile: string;
  version?: string;
}

export interface HeaderProps {
  logoSrc?: string;
  logoHref?: string;
  logoAlt?: string;
  user?: UserInfo;
  onLogout?: () => void;
  children?: React.ReactNode;
}

// ── Logo ─────────────────────────────────────────────────────────────────────

interface LogoProps {
  src?: string;
  href?: string;
  alt?: string;
  name?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', href }) => (
  <div className="drg-logo" onClick={() => href ? window.location.replace(href) : window.location.replace('/')}>
    {src ? (
      <img src={src} alt={alt} className="drg-logo-img" />
    ) : (
      <img src={LogoDrogal} alt={alt} className="drg-logo-img" style={{ height: '43px' }} />
    )}
  </div>
);

// ── UserMenu ──────────────────────────────────────────────────────────────────

interface UserMenuProps {
  user?: UserInfo;
  onLogout?: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="drg-user-menu" ref={ref}>
      <button
        className="drg-avatar-button"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Menu do usuário"
        aria-expanded={open}
      >
        <span className="drg-avatar-icon">
          <Icon name={EnumIcons.Outlined.account_circle} />
        </span>
      </button>

      {open && (

        <div className="drg-dropdown">
          {user && (
            <div className="drg-dropdown-header">
              <span className="drg-dropdown-name">{user.name?.toLocaleUpperCase()}</span>
              <span className="drg-dropdown-profile">{user.profile?.toLocaleUpperCase()}</span>
            </div>
          )}

          <button className="drg-dropdown-item" disabled style={{ cursor: 'auto' }}>
            <span className="drg-dropdown-item-icon">
              <Icon name={EnumIcons.Outlined.info} />
            </span>
            Versão: {user && user.version}
          </button>
          <button className="drg-dropdown-item" onClick={onLogout}>
            <span className="drg-dropdown-item-icon">
              <Icon name={EnumIcons.Outlined.exit_to_app} />
            </span>
            Sair
          </button>
        </div>
      )}
    </div>
  );
};

// ── Header ────────────────────────────────────────────────────────────────────

export const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt, logoHref, user, onLogout, children }) => (
  <header className="drg-header" role="banner">
    <div className="drg-wrapper-header">

      <Logo src={logoSrc} alt={logoAlt} href={logoHref} />
      {children && <div className="drg-header-content">{children}</div>}
      <div className="drg-header-spacer" />
      <UserMenu user={user} onLogout={onLogout} />
    </div>
  </header>
);
