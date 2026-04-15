import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import Icon from '../Icon';
import EnumIcons from '../../icons/EnumIcons';

// ── Types ────────────────────────────────────────────────────────────────────

export interface UserInfo {
  name: string;
  profile: string;
  version?: string;
}

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  name?: string;
  user?: UserInfo;
  onLogout?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// ── Logo ─────────────────────────────────────────────────────────────────────

interface LogoProps {
  src?: string;
  alt?: string;
  name?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', name = 'DROGAL' }) => (
  <div className={styles.logo}>
    {src ? (
      <img src={src} alt={alt} className={styles.logoImg} />
    ) : (
      <span className={styles.logoText}>{name}</span>
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
              <span className={styles.dropdownName}>{user.name}</span>
              <span className={styles.dropdownProfile}>{user.profile}</span>
              {user.version && <span className={styles.dropdownVersion}>Versão: {user.version}</span>}
            </div>
          )}
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

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt, name, user, onLogout, children, className, style }) => (
  <header className={`${styles.header}${className ? ` ${className}` : ''}`} style={style} role="banner">
    <Logo src={logoSrc} alt={logoAlt} name={name} />
    {children && <div className={styles.headerContent}>{children}</div>}
    <div className={styles.headerSpacer} />
    <UserMenu user={user} onLogout={onLogout} />
  </header>
);

export default Header;
