import { AuthLayout } from '../../../../components/Auth/authLayout';
import { Header } from '../../../../components/Header';
import { authUtils } from '../../../../components/Auth/authUtils';

const APP_NAME = 'Drogal storybook';

const DEMO_USER = {
  name: 'João da Silva',
  profile: 'Administrador',
  version: '1.0.0',
};

const DEMO_ROWS = [
  { id: 1, produto: 'Dipirona 500mg', categoria: 'Analgésico', estoque: 240, status: 'Ativo' },
  { id: 2, produto: 'Amoxicilina 875mg', categoria: 'Antibiótico', estoque: 85, status: 'Ativo' },
  { id: 3, produto: 'Omeprazol 20mg', categoria: 'Gastroprotetor', estoque: 310, status: 'Ativo' },
  { id: 4, produto: 'Losartana 50mg', categoria: 'Anti-hipertensivo', estoque: 12, status: 'Baixo estoque' },
  { id: 5, produto: 'Metformina 850mg', categoria: 'Antidiabético', estoque: 0, status: 'Sem estoque' },
];

const STATUS_COLOR: Record<string, string> = {
  Ativo: '#166534',
  'Baixo estoque': '#92400e',
  'Sem estoque': '#991b1b',
};

const STATUS_BG: Record<string, string> = {
  Ativo: '#dcfce7',
  'Baixo estoque': '#fef3c7',
  'Sem estoque': '#fee2e2',
};

const AuthPage = () => {
  const { logout } = authUtils();

  return (
    <AuthLayout appName={APP_NAME} fallback={'Carregando...'}>
      <div style={{ minHeight: '100vh', background: '#f3f4f6', fontFamily: 'Inter, sans-serif' }}>
        <Header user={DEMO_USER} onLogout={() => logout(APP_NAME)} />

        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            {[
              { label: 'Total de Produtos', value: '1.248', color: '#2563eb' },
              { label: 'Abaixo do Mínimo', value: '37', color: '#d97706' },
              { label: 'Transferências Hoje', value: '14', color: '#059669' },
              { label: 'Farmácias Ativas', value: '62', color: '#7c3aed' },
            ].map((k) => (
              <div
                key={k.label}
                style={{
                  background: '#fff',
                  borderRadius: 10,
                  padding: '1.25rem 1.5rem',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: k.color, lineHeight: 1 }}>
                  {k.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.3rem' }}>
                  {k.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: '#fff',
              borderRadius: 10,
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid #f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}>
                Controle de Estoque
              </span>
              <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>5 itens</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  {['#', 'Produto', 'Categoria', 'Estoque', 'Status'].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'left',
                        fontWeight: 600,
                        color: '#374151',
                        borderBottom: '1px solid #e5e7eb',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEMO_ROWS.map((row, i) => (
                  <tr
                    key={row.id}
                    style={{ borderBottom: i < DEMO_ROWS.length - 1 ? '1px solid #f3f4f6' : 'none' }}
                  >
                    <td style={{ padding: '0.875rem 1.5rem', color: '#9ca3af' }}>{row.id}</td>
                    <td style={{ padding: '0.875rem 1.5rem', fontWeight: 500, color: '#111827' }}>
                      {row.produto}
                    </td>
                    <td style={{ padding: '0.875rem 1.5rem', color: '#6b7280' }}>{row.categoria}</td>
                    <td style={{ padding: '0.875rem 1.5rem', color: '#374151' }}>{row.estoque}</td>
                    <td style={{ padding: '0.875rem 1.5rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.2rem 0.65rem',
                          borderRadius: 9999,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: STATUS_COLOR[row.status],
                          background: STATUS_BG[row.status],
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
