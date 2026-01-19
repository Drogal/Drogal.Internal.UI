import React, { useState, useMemo, useEffect, useRef } from 'react';
import './icons.css';
import Icon from '../../../components/Icon';
import EnumIcons from '../../../icons/EnumIcons';
import { InputText } from '../../../components/Input/InputText';

export const Icons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [iconType, setIconType] = useState<'outlined' | 'rounded' | 'all'>('all');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(100);
  const observerRef = useRef<HTMLDivElement>(null);

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

  // Reset visible count when search or type changes
  useEffect(() => {
    setVisibleCount(100);
  }, [searchTerm, iconType]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 100);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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
              <h3>Rounded Icons ({filteredRoundedIcons.length})</h3>
              <div className='component-card-icons-list'>
                {
                  filteredRoundedIcons.slice(0, iconType === 'all' ? Math.floor(visibleCount / 2) : visibleCount).map((key) => (
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
              <h3>Outlined Icons ({filteredOutlinedIcons.length})</h3>
              <div className='component-card-icons-list'>
                {
                  filteredOutlinedIcons.slice(0, iconType === 'all' ? Math.floor(visibleCount / 2) : visibleCount).map((key) => (
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
          <div ref={observerRef} className="scroll-trigger" />
        </div>

      </section>
    </article>
  );
};
