import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../theme.css';
import source from './Pagamento.stories.tsx?raw';
import { BgFrame } from '../../../components/BgFrame';
import { Button } from '../../../components/Button';
import { DescriptionList } from '../../../components/DescriptionList';
import { InputNumber } from '../../../components/Input/InputNumber';
import { InputSwitch } from '../../../components/Input/InputSwitch';
import { OptionCard, type OptionCardOption, type OptionCardValue } from '../../../components/OptionCard';
import { ProgressBar } from '../../../components/ProgressBar';
import { Result } from '../../../components/Result';
import { SummaryStat } from '../../../components/SummaryStat';
import EnumIcons from '../../../icons/EnumIcons';
import { formatCurrency } from './shared/data';
import { PdvLayout } from './shared/PdvLayout';
import { sourceDocs } from './shared/source';

const TOTAL = 3224.16;

const FORMAS: OptionCardOption[] = [
  { value: 'pix', label: 'PIX', description: 'Pagamento instantâneo', icon: EnumIcons.Outlined.qr_code_2 },
  { value: 'credito', label: 'Crédito', description: 'Em até 12 vezes', icon: EnumIcons.Outlined.credit_card },
  { value: 'debito', label: 'Débito', description: 'À vista no cartão', icon: EnumIcons.Outlined.credit_card },
  { value: 'dinheiro', label: 'Dinheiro', description: 'Com cálculo de troco', icon: EnumIcons.Outlined.payments },
  { value: 'convenio', label: 'Convênio', description: 'Indisponível para este cliente', icon: EnumIcons.Outlined.attach_money, disabled: true },
];

const meta = {
  title: 'Drogal Internal UI/Balcão Vendas/Pagamento',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Etapa de pagamento: <code>OptionCard</code> para a forma, <code>InputSwitch</code> na variante <code>card</code> (Toggle Field) para dividir, <code>InputNumber</code> com <code>helpText</code>/<code>error</code>, <code>SummaryStat</code> para total, restante e troco, e <code>Result</code> com <code>DescriptionList</code> para o retorno da operadora.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const EscolhaDaFormaTela = () => {
  const [forma, setForma] = useState<OptionCardValue>('dinheiro');
  const [dividir, setDividir] = useState(false);
  const [valorNaForma, setValorNaForma] = useState<number | null>(dividir ? 1000 : TOTAL);
  const [recebido, setRecebido] = useState<number | null>(3300);

  const valor = dividir ? valorNaForma ?? 0 : TOTAL;
  const restante = Math.max(TOTAL - valor, 0);
  const troco = forma === 'dinheiro' && recebido !== null ? recebido - valor : 0;
  const recebidoInsuficiente = forma === 'dinheiro' && recebido !== null && recebido < valor;
  const valorAcimaDoTotal = dividir && valor > TOTAL;

  return (
    <PdvLayout page="vendas">
      <div className="grid">
        <div className="col-12 lg:col-8 flex flex-column gap-3">
          <BgFrame variant="card" title="Forma de pagamento" icon={EnumIcons.Outlined.payments}>
            <div className="flex flex-column gap-4">
              <OptionCard aria-label="Forma de pagamento" options={FORMAS} value={forma} onChange={setForma} />
              <InputSwitch
                variant="card"
                title="Dividir pagamento"
                description="Use mais de uma forma de pagamento nesta venda"
                checked={dividir}
                onChange={(event) => {
                  setDividir(Boolean(event.value));
                  setValorNaForma(event.value ? 1000 : TOTAL);
                }}
              />
              <div className="grid">
                {dividir && (
                  <div className="col-12 md:col-6">
                    <InputNumber
                      title="Valor nesta forma"
                      name="valor-forma"
                      required
                      mode="currency"
                      currency="BRL"
                      locale="pt-BR"
                      value={valorNaForma}
                      onValueChange={(event) => setValorNaForma(event.value ?? null)}
                      helpText={`Restante depois desta forma: ${formatCurrency(restante)}`}
                      error={valorAcimaDoTotal ? `O valor passa do total da venda (${formatCurrency(TOTAL)})` : undefined}
                      className="w-full"
                    />
                  </div>
                )}
                {forma === 'dinheiro' && (
                  <div className="col-12 md:col-6">
                    <InputNumber
                      title="Valor recebido"
                      name="valor-recebido"
                      mode="currency"
                      currency="BRL"
                      locale="pt-BR"
                      value={recebido}
                      onValueChange={(event) => setRecebido(event.value ?? null)}
                      helpText="Informe o valor entregue pelo cliente para calcular o troco"
                      error={recebidoInsuficiente ? 'Valor recebido menor que o valor a pagar' : undefined}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </BgFrame>
        </div>
        <div className="col-12 lg:col-4">
          <BgFrame variant="card" title="Resumo do pagamento" icon={EnumIcons.Outlined.receipt_long}>
            <div className="flex flex-column gap-2">
              <SummaryStat label="Total da venda" value={formatCurrency(TOTAL)} variant="info" />
              {dividir && <SummaryStat label="Restante a pagar" value={formatCurrency(restante)} variant="danger" />}
              {forma === 'dinheiro' && troco > 0 && <SummaryStat label="Troco" value={formatCurrency(troco)} variant="success" />}
              <Button
                label={`Receber ${formatCurrency(valor)}`}
                className="mt-2"
                disabled={recebidoInsuficiente || valorAcimaDoTotal || valor <= 0}
              />
            </div>
          </BgFrame>
        </div>
      </div>
    </PdvLayout>
  );
};

export const EscolhaDaForma: Story = {
  render: () => <EscolhaDaFormaTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['TOTAL', 'FORMAS', 'EscolhaDaFormaTela'], '<EscolhaDaFormaTela />'),
      description: {
        story:
          'Interativo: troque a forma, ligue "Dividir pagamento" e altere os valores. O troco aparece em dinheiro; com valor recebido menor, o campo mostra o erro e o botão bloqueia.',
      },
    },
  },
};

const AguardandoPixTela = () => (
  <PdvLayout page="vendas">
    <div className="flex flex-column gap-3" style={{ maxWidth: '30rem' }}>
      <Result severity="info" title="Aguardando pagamento" description="Peça ao cliente para escanear o QR Code.">
        <Button label="Cancelar PIX" outlined severity="secondary" size="small" />
      </Result>
      <ProgressBar mode="indeterminate" aria-label="Aguardando confirmação do PIX" />
      <SummaryStat label="Valor do PIX" value={formatCurrency(TOTAL)} />
    </div>
  </PdvLayout>
);

export const AguardandoPix: Story = {
  render: () => <AguardandoPixTela />,
  parameters: {
    docs: {
      ...sourceDocs(source, ['TOTAL', 'AguardandoPixTela'], '<AguardandoPixTela />'),
      description: { story: '<code>Result</code> em <code>info</code> com ação e <code>ProgressBar</code> indeterminado enquanto o PIX não é confirmado.' },
    },
  },
};

const PagamentoConfirmadoTela = () => (
  <PdvLayout page="vendas">
    <div className="flex flex-column gap-3" style={{ maxWidth: '30rem' }}>
      <Result severity="success" title="Pagamento confirmado" description={`${formatCurrency(TOTAL)} recebido via PIX às 10:42`} />
      <DescriptionList
        items={[
          { label: 'Pagador', value: 'XV DE PIRACICABA S.A.F' },
          { label: 'Instituição', value: 'Banco do Brasil' },
          { label: 'ID da transação', value: 'E18236120202611251042s0b3f' },
        ]}
      />
      <div className="flex justify-content-end gap-2">
        <Button label="Imprimir comprovante" outlined icon={`drg-icon ${EnumIcons.Outlined.print}`} />
        <Button label="Emitir nota fiscal" />
      </div>
    </div>
  </PdvLayout>
);

export const PagamentoConfirmado: Story = {
  render: () => <PagamentoConfirmadoTela />,
  parameters: { docs: sourceDocs(source, ['TOTAL', 'PagamentoConfirmadoTela'], '<PagamentoConfirmadoTela />') },
};

const PagamentoRecusadoTela = () => (
  <PdvLayout page="vendas">
    <div className="flex flex-column gap-3" style={{ maxWidth: '30rem' }}>
      <Result severity="error" title="Pagamento recusado" description="A operadora não autorizou a transação." />
      <DescriptionList
        items={[
          { label: 'Motivo', value: 'Saldo ou limite insuficiente' },
          { label: 'Código', value: '51' },
          { label: 'Bandeira', value: 'Mastercard •••• 4821' },
          { label: 'NSU', value: '004512' },
        ]}
      />
      <div className="flex justify-content-end gap-2">
        <Button label="Trocar forma de pagamento" outlined />
        <Button label="Tentar de novo" />
      </div>
    </div>
  </PdvLayout>
);

export const PagamentoRecusado: Story = {
  render: () => <PagamentoRecusadoTela />,
  parameters: { docs: sourceDocs(source, ['PagamentoRecusadoTela'], '<PagamentoRecusadoTela />') },
};
