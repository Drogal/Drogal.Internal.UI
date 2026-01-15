import React, { useState, useMemo } from 'react';
import './icons.css';
import '../../../theme.css';
import '../../../outlined-icons.css'
import '../../../rounded-icons.css'
import Icon from '../../../components/Icon';
import EnumIcons from '../../../icons/EnumIcons';
import { InputText } from '../../../components/InputText';

export const Icons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [iconType, setIconType] = useState<'outlined' | 'rounded' | 'all'>('all');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const handleCopyIconName = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const filteredOutlinedIcons = useMemo(() => {
    return Object.keys(EnumIcons.Outlined).filter(key =>
      key.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredRoundedIcons = useMemo(() => {
    return Object.keys(EnumIcons.Rounded).filter(key =>
      key.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <article>

      <section className="storybook-page-icons">
        <h2>Icons Drogal Internal UI</h2>
        <p>Visualização de todos os ícones do Design System. Clique para copiar o nome.</p>

        <div className="icon-controls">
          <InputText
            placeholder="Buscar ícone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', maxWidth: '400px' }}
          />
          <div className="icon-type-selector">
            <button
              className={`type-button ${iconType === 'all' ? 'active' : ''}`}
              onClick={() => setIconType('all')}
            >
              Todos ({filteredOutlinedIcons.length + filteredRoundedIcons.length})
            </button>
            <button
              className={`type-button ${iconType === 'outlined' ? 'active' : ''}`}
              onClick={() => setIconType('outlined')}
            >
              Outlined ({filteredOutlinedIcons.length})
            </button>
            <button
              className={`type-button ${iconType === 'rounded' ? 'active' : ''}`}
              onClick={() => setIconType('rounded')}
            >
              Rounded ({filteredRoundedIcons.length})
            </button>
          </div>
        </div>

        <div className="components-grid-icons">
          {(iconType === 'all' || iconType === 'rounded') && (
            <div className='component-card-icons'>
              <h3>Rounded Icons</h3>
              <div className='component-card-icons-list'>
                {
                  filteredRoundedIcons.map((key) => (
                    <div
                      key={key}
                      className={`icon-item ${copiedIcon === key ? 'copied' : ''}`}
                      onClick={() => handleCopyIconName(key)}
                      title={`Clique para copiar: ${key}`}
                    >
                      <Icon name={EnumIcons.Rounded[key as keyof typeof EnumIcons.Rounded]} />
                      <span className="icon-name">{key}</span>
                      {copiedIcon === key && <span className="copied-badge">✓ Copiado!</span>}
                    </div>
                  ))
                }
              </div>
            </div>
          )}
          {(iconType === 'all' || iconType === 'outlined') && (
            <div className='component-card-icons'>
              <h3>Outlined Icons</h3>
              <div className='component-card-icons-list'>
                {
                  filteredOutlinedIcons.map((key) => (
                    <div
                      key={key}
                      className={`icon-item ${copiedIcon === key ? 'copied' : ''}`}
                      onClick={() => handleCopyIconName(key)}
                      title={`Clique para copiar: ${key}`}
                    >
                      <Icon name={EnumIcons.Outlined[key as keyof typeof EnumIcons.Outlined]} />
                      <span className="icon-name">{key}</span>
                      {copiedIcon === key && <span className="copied-badge">✓ Copiado!</span>}
                    </div>
                  ))
                }
              </div>
            </div>
          )}

        </div>

      </section>
    </article>
  );
};
