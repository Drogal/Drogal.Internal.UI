import React, { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../../../components/Icon';
import { InputText } from '../../../components/Input/InputText';
import EnumIcons from '../../../icons/EnumIcons';
import './icons.css';

export const Icons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [iconType, setIconType] = useState<'outlined' | 'rounded' | 'all'>('all');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(100);
  const observerRef = useRef<HTMLDivElement>(null);

  const handleCopyIconName = (key: string, copyText: string) => {
    navigator.clipboard.writeText(copyText);
    setCopiedIcon(key);
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

        <div style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: 8, padding: '20px 24px', marginBottom: 8 }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 700 }}>Como usar</h3>
          <p style={{ margin: '0 0 8px' }}>Importe o componente <code>Icon</code> e o enum <code>EnumIcons</code>:</p>
          <pre style={{ background: '#1e1e1e', color: '#d4d4d4', borderRadius: 6, padding: '12px 16px', fontSize: 13, overflowX: 'auto', margin: '0 0 12px' }}>{`import Icon from 'drogal.internal.ui';
import EnumIcons from 'drogal.internal.ui/EnumIcons';`}</pre>
          <p style={{ margin: '0 0 8px' }}>Use a prop <code>name</code> passando um valor de <code>EnumIcons.Outlined</code> ou <code>EnumIcons.Rounded</code>:</p>
          <pre style={{ background: '#1e1e1e', color: '#d4d4d4', borderRadius: 6, padding: '12px 16px', fontSize: 13, overflowX: 'auto', margin: 0 }}>{`// Ícone Outlined
<Icon name={EnumIcons.Rounded.home} />

// Com estilo customizado
<Icon name={EnumIcons.Outlined.favorite} style={{ fontSize: '2rem', color: 'red' }} />`}</pre>
        </div>

        <div className="icon-controls">
          <InputText
            title='Buscar ícone:'
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
                      onClick={() => handleCopyIconName(key, EnumIcons.Rounded[key as keyof typeof EnumIcons.Rounded])}
                      title={`Clique para copiar: ${EnumIcons.Rounded[key as keyof typeof EnumIcons.Rounded]}`}
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
                      onClick={() => handleCopyIconName(key, EnumIcons.Outlined[key as keyof typeof EnumIcons.Outlined])}
                      title={`Clique para copiar: ${EnumIcons.Outlined[key as keyof typeof EnumIcons.Outlined]}`}
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
