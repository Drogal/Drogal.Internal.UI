import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import '../../../theme.css';
import { Button } from '../../../components/Button';
import { InputText } from '../../../components/Input/InputText';
import { InputTextArea } from '../../../components/Input/InputTextArea';
import { InputNumber } from '../../../components/Input/InputNumber';
import { InputPassword } from '../../../components/Input/InputPassword';
import { InputSwitch } from '../../../components/Input/InputSwitch';
import { Dropdown } from '../../../components/Dropdown';
import { SelectButton } from '../../../components/SelectButton';
import { Avatar } from '../../../components/Avatar';
import { Badge } from '../../../components/Badge';
import { Dialog } from '../../../components/Dialog';
import { Skeleton } from '../../../components/Skeleton';

// ─── tipos ──────────────────────────────────────────────────────────────────

type SectionItem = {
  id: string;
  label: string;
  active: boolean;
};

const ALL_SECTIONS: SectionItem[] = [
  { id: 'inputs',    label: 'Inputs de Texto',   active: true  },
  { id: 'dropdown',  label: 'Dropdown / Select',  active: true  },
  { id: 'buttons',   label: 'Buttons',            active: true  },
  { id: 'switch',    label: 'Switch & Toggle',    active: true  },
  { id: 'avatar',    label: 'Avatar & Badge',     active: true  },
  { id: 'dialog',    label: 'Dialog',             active: false },
  { id: 'skeleton',  label: 'Skeleton',           active: false },
  { id: 'form',      label: 'Formulário Exemplo', active: false },
];

const cityOptions = [
  { label: 'São Paulo',       value: 'SP'  },
  { label: 'Rio de Janeiro',  value: 'RJ'  },
  { label: 'Belo Horizonte',  value: 'BH'  },
  { label: 'Curitiba',        value: 'CWB' },
  { label: 'Porto Alegre',    value: 'POA' },
];

const statusOptions = [
  { label: 'Ativo',      value: 'active'   },
  { label: 'Inativo',    value: 'inactive' },
  { label: 'Pendente',   value: 'pending'  },
];

// ─── bloco visual reutilizável ───────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: 8,
      padding: '20px 24px',
      background: '#fff',
    }}>
      <p style={{ margin: '0 0 16px', fontWeight: 600, fontSize: 14, color: '#475569' }}>
        {title}
      </p>
      {children}
    </div>
  );
}

// ─── seções individuais ──────────────────────────────────────────────────────

function InputsSection() {
  return (
    <Section title="Inputs de Texto">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <InputText title="Nome" placeholder="Digite seu nome" />
        <InputText title="E-mail" type="email" placeholder="seu@email.com" />
        <InputPassword title="Senha" placeholder="••••••••" />
        <InputTextArea title="Observações" placeholder="Texto livre..." rows={3} />
        <InputNumber title="Quantidade" min={0} max={999} />
      </div>
    </Section>
  );
}

function DropdownSection() {
  const [city, setCity]     = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  return (
    <Section title="Dropdown / Select">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Dropdown
          title="Cidade"
          options={cityOptions}
          value={city}
          onChange={(e) => setCity(e.value as string)}
          placeholder="Selecione uma cidade"
          className="w-full"
        />
        <Dropdown
          title="Status"
          options={statusOptions}
          value={status}
          onChange={(e) => setStatus(e.value as string)}
          placeholder="Selecione o status"
          showClear
          className="w-full"
        />
      </div>
    </Section>
  );
}

function ButtonsSection() {
  return (
    <Section title="Buttons">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button label="Primary" />
        <Button label="Secondary"  severity="secondary" />
        <Button label="Success"    severity="success" />
        <Button label="Warning"    severity="warning" />
        <Button label="Danger"     severity="danger" />
        <Button label="Info"       severity="info" />
        <Button label="Outlined"   outlined />
        <Button label="Text"       text />
        <Button label="Disabled"   disabled />
        <Button label="Com ícone"  icon="pi pi-check" iconPos="left" />
        <Button label="Loading"    loading />
      </div>
    </Section>
  );
}

function SwitchSection() {
  const [sw1, setSw1] = useState(false);
  const [sw2, setSw2] = useState(true);
  const [tab, setTab] = useState<string>('active');

  return (
    <Section title="Switch & Toggle">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <InputSwitch checked={sw1} onChange={(e) => setSw1(e.value)} />
          <span style={{ fontSize: 14 }}>{sw1 ? 'Ligado' : 'Desligado'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <InputSwitch checked={sw2} onChange={(e) => setSw2(e.value)} />
          <span style={{ fontSize: 14 }}>{sw2 ? 'Habilitado' : 'Desabilitado'}</span>
        </div>
        <SelectButton
          value={tab}
          onChange={(e) => setTab(e.value as string)}
          options={statusOptions}
        />
      </div>
    </Section>
  );
}

function AvatarSection() {
  return (
    <Section title="Avatar & Badge">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
        <Avatar label="GS" size="large" shape="circle" />
        <Avatar icon="pi pi-user" size="large" shape="circle" />
        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <Avatar icon="pi pi-bell" size="large" shape="circle" />
          <Badge value="3" severity="danger" style={{ position: 'absolute', top: -4, right: -4 }} />
        </div>
        <Badge value="Novo"     severity="success" />
        <Badge value="Pendente" severity="warning" />
        <Badge value="Erro"     severity="danger" />
        <Badge value="Info"     severity="info" />
      </div>
    </Section>
  );
}

function DialogSection() {
  const [open, setOpen] = useState(false);

  return (
    <Section title="Dialog">
      <Button label="Abrir Dialog" onClick={() => setOpen(true)} />
      <Dialog
        header="Exemplo de Dialog"
        visible={open}
        onHide={() => setOpen(false)}
        style={{ width: '40vw' }}
        footer={
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <Button label="Cancelar" severity="secondary" onClick={() => setOpen(false)} />
            <Button label="Confirmar" onClick={() => setOpen(false)} />
          </div>
        }
      >
        <p style={{ margin: 0 }}>
          Conteúdo do dialog. Você pode colocar qualquer componente aqui dentro.
        </p>
      </Dialog>
    </Section>
  );
}

function SkeletonSection() {
  return (
    <Section title="Skeleton">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton width="100%" height="2rem" />
        <Skeleton width="75%"  height="2rem" />
        <Skeleton width="50%"  height="2rem" />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
          <Skeleton shape="circle" size="4rem" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Skeleton width="80%" height="1rem" />
            <Skeleton width="60%" height="1rem" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function FormSection() {
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [city,     setCity]     = useState<string | null>(null);
  const [active,   setActive]   = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);
  const handleReset  = () => { setName(''); setEmail(''); setCity(null); setActive(true); setSubmitted(false); };

  return (
    <Section title="Formulário Exemplo">
      {submitted ? (
        <div style={{ padding: 16, background: '#f0fdf4', borderRadius: 6, border: '1px solid #bbf7d0' }}>
          <p style={{ margin: 0, color: '#166534', fontWeight: 500 }}>Formulário enviado!</p>
          <p style={{ margin: '4px 0 12px', color: '#166534', fontSize: 13 }}>
            Nome: {name} | E-mail: {email} | Cidade: {city ?? '—'} | Ativo: {active ? 'Sim' : 'Não'}
          </p>
          <Button label="Novo preenchimento" severity="secondary" onClick={handleReset} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <InputText  title="Nome"    value={name}  onChange={(e) => setName(e.target.value)}  placeholder="Seu nome" />
          <InputText  title="E-mail"  type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
          <Dropdown
            title="Cidade"
            options={cityOptions}
            value={city}
            onChange={(e) => setCity(e.value as string)}
            placeholder="Selecione"
            className="w-full"
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <InputSwitch checked={active} onChange={(e) => setActive(e.value)} />
            <span style={{ fontSize: 14 }}>Conta ativa</span>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <Button label="Limpar"  severity="secondary" outlined onClick={handleReset} />
            <Button label="Enviar"  onClick={handleSubmit} />
          </div>
        </div>
      )}
    </Section>
  );
}

// ─── mapa de seções ──────────────────────────────────────────────────────────

const SECTION_MAP: Record<string, React.ReactNode> = {
  inputs:   <InputsSection />,
  dropdown: <DropdownSection />,
  buttons:  <ButtonsSection />,
  switch:   <SwitchSection />,
  avatar:   <AvatarSection />,
  dialog:   <DialogSection />,
  skeleton: <SkeletonSection />,
  form:     <FormSection />,
};

// ─── Playground principal ────────────────────────────────────────────────────

function PlaygroundScreen() {
  const [sections, setSections] = useState<SectionItem[]>(ALL_SECTIONS);
  const [cols, setCols] = useState<1 | 2>(2);

  const toggle = (id: string) =>
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );

  const active = sections.filter((s) => s.active);

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f8fafc' }}>
      {/* ─── toolbar ─── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: '#1e293b',
        color: '#fff',
        padding: '12px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'center',
      }}>
        <span style={{ fontWeight: 700, fontSize: 15, marginRight: 8 }}>Playground</span>

        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => toggle(s.id)}
            style={{
              padding: '4px 12px',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 500,
              background: s.active ? '#3b82f6' : '#334155',
              color: '#fff',
              transition: 'background 0.15s',
            }}
          >
            {s.active ? '✓ ' : ''}{s.label}
          </button>
        ))}

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <button
            onClick={() => setCols(1)}
            style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer', background: cols === 1 ? '#3b82f6' : '#334155', color: '#fff', fontSize: 12 }}
          >
            1 col
          </button>
          <button
            onClick={() => setCols(2)}
            style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer', background: cols === 2 ? '#3b82f6' : '#334155', color: '#fff', fontSize: 12 }}
          >
            2 col
          </button>
        </div>
      </div>

      {/* ─── grid de seções ─── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 16,
        padding: 20,
        maxWidth: 1400,
        margin: '0 auto',
      }}>
        {active.length === 0 ? (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: 60,
            color: '#94a3b8',
            fontSize: 15,
          }}>
            Nenhuma seção selecionada. Clique nos botões acima para adicionar componentes.
          </div>
        ) : (
          active.map((s) => (
            <div key={s.id}>{SECTION_MAP[s.id]}</div>
          ))
        )}
      </div>
    </div>
  );
}

// ─── meta / stories ──────────────────────────────────────────────────────────

const meta = {
  title: 'Drogal Internal UI/Playground',
  component: PlaygroundScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Tela de teste livre. Ative/desative seções pela toolbar e escolha entre 1 ou 2 colunas. ' +
          'Cada seção é independente e mantém seu próprio estado.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlaygroundScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
