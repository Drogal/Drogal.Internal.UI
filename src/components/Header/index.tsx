import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
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
  <div className={styles.logo} onClick={() => href ? window.location.replace(href) : window.location.replace('/')}>
    {src ? (
      <img src={src} alt={alt} className={styles.logoImg} />
    ) : (
      <img src={LogoDrogal} alt={alt} className={styles.logoImg} style={{ height: '43px' }} />
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
    <div className={styles.userMenu} ref={ref}>
      <button
        className={styles.avatarButton}
        onClick={() => setOpen(prev => !prev)}
        aria-label="Menu do usuário"
        aria-expanded={open}
      >
        <span className={styles.avatarIcon}>
          <Icon name={EnumIcons.Outlined.account_circle} />
        </span>
      </button>

      {open && (

        <div className={styles.dropdown}>
          {user && (
            <div className={styles.dropdownHeader}>
              <span className={styles.dropdownName}>{user.name?.toLocaleUpperCase()}</span>
              <span className={styles.dropdownProfile}>{user.profile?.toLocaleUpperCase()}</span>
            </div>
          )}

          <button className={styles.dropdownItem} disabled style={{ cursor: 'auto' }}>
            <span className={styles.dropdownItemIcon}>
              <Icon name={EnumIcons.Outlined.info} />
            </span>
            Versão: {user && user.version}
          </button>
          <button className={styles.dropdownItem} onClick={onLogout}>
            <span className={styles.dropdownItemIcon}>
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
  <header className={`${styles.header}`} role="banner">
    <div className={styles.wrapperHeader}>

      <Logo src={logoSrc} alt={logoAlt} href={logoHref} />
      {children && <div className={styles.headerContent}>{children}</div>}
      <div className={styles.headerSpacer} />
      <UserMenu user={user} onLogout={onLogout} />
    </div>
  </header>
);
