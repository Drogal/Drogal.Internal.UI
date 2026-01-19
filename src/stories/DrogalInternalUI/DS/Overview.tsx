import React, { useState } from 'react';
import './overview.css';
import { Accordion } from '../../../components/Accordion';
import { AccordionTab } from '../../../components/Accordion.AccordionTab';
import { AutoComplete } from '../../../components/AutoComplete';
import { Avatar } from '../../../components/Avatar';
import { Badge } from '../../../components/Badge';
import { Button } from '../../../components/Button';
import { Calendar } from '../../../components/Input/Calendar';
import { DataTable } from '../../../components/DataTable';
import { Column } from '../../../components/Column';
// import { Dialog } from '../../../components/Dialog';
import { Dropdown } from '../../../components/Dropdown';
import { Editor } from '../../../components/Input/Editor';
import { IconField } from '../../../components/Input/IconField';
import { InputIcon } from '../../../components/Input/InputIcon';
import { InputNumber } from '../../../components/Input/InputNumber';
import { InputPassword } from '../../../components/Input/InputPassword';
// import { InputSwitch } from '../../../components/InputSwitch';
import { InputText } from '../../../components/Input/InputText';
import { InputTextArea } from '../../../components/Input/InputTextArea';
import { MultiSelect } from '../../../components/Input/MultiSelect';
import { Paginator } from '../../../components/Paginator';
import { SelectButton } from '../../../components/SelectButton';
import { Skeleton } from '../../../components/Skeleton';
import { TabMenu } from '../../../components/TabMenu';
import { TabView } from '../../../components/TabView';
import { TabPanel } from '../../../components/TabView.TabPanel';
import EnumIcons from '../../../icons/EnumIcons';
import Icon from '../../../components/Icon';

export const Overview: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strongPassword, setStrongPassword] = useState('');
  const [noFeedback, setNoFeedback] = useState('');
  const [togglePassword, setTogglePassword] = useState('');
  const [strengthTest, setStrengthTest] = useState('');
  const [disabledPassword, setDisabledPassword] = useState('senha123');
  const [invalidPassword, setInvalidPassword] = useState('');
  const [selectValue, setSelectValue] = useState<any>('Off');
  const [cityValue, setCityValue] = useState<any>(null);
  const [multipleValue, setMultipleValue] = useState<any>([]);
  const [justifyValue, setJustifyValue] = useState<any>(null);

  // AutoComplete states
  const [autoCompleteValue, setAutoCompleteValue] = useState('');
  const [autoCompleteItems, setAutoCompleteItems] = useState<string[]>([]);
  const [countryValue, setCountryValue] = useState<any>(null);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [multipleCountries, setMultipleCountries] = useState<any[]>([]);
  const [filteredMultipleCountries, setFilteredMultipleCountries] = useState<any[]>([]);

  // Dropdown states
  const [dropdownCity, setDropdownCity] = useState<any>(null);
  const [dropdownCountry, setDropdownCountry] = useState<any>(null);

  const cities = ['New York', 'Rome', 'London', 'Istanbul', 'Paris', 'Tokyo', 'Berlin', 'Madrid', 'Cairo', 'Sydney'];
  const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'United States', code: 'US' }
  ];

  const searchCities = (event: { query: string }) => {
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(event.query.toLowerCase())
    );
    setAutoCompleteItems(filtered);
  };

  const searchCountries = (event: { query: string }) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(event.query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const searchMultipleCountries = (event: { query: string }) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(event.query.toLowerCase())
    );
    setFilteredMultipleCountries(filtered);
  };

  return (
    <article>

      <section className="storybook-page">
        <h2>Overview DS</h2>
        <p>Visualização de todos os componentes do Design System</p>

        <div className="components-grid">
          <div className="component-card" >
            <h3>Accordion</h3>
            <Accordion activeIndex={0}>
              <AccordionTab header="Features">
                <p className="m-0">
                  Accordion component provides expandable sections for organizing content in a space-efficient way.
                  It supports single and multiple expansion modes.
                </p>
              </AccordionTab>
              <AccordionTab header="Configuration">
                <p className="m-0">
                  Customize the accordion with different icons, styles, and behaviors.
                  Control which tabs are open or closed programmatically.
                </p>
              </AccordionTab>
              <AccordionTab header="Usage">
                <p className="m-0">
                  Perfect for FAQs, settings panels, and any content that needs to be organized hierarchically.
                </p>
              </AccordionTab>
            </Accordion>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-accordion--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>AutoComplete</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div>
                <AutoComplete
                  title='Cities'
                  value={autoCompleteValue}
                  suggestions={autoCompleteItems}
                  completeMethod={searchCities}
                  onChange={(e) => setAutoCompleteValue(e.value)}
                  placeholder="Search cities"
                />
              </div>
              <div>
                <AutoComplete
                  title='Cities'
                  value={autoCompleteValue}
                  suggestions={autoCompleteItems}
                  completeMethod={searchCities}
                  onChange={(e) => setAutoCompleteValue(e.value)}
                  placeholder="Search cities"
                  dropdown
                />
              </div>
              <div>
                <AutoComplete
                  title='Countries'
                  value={countryValue}
                  suggestions={filteredCountries}
                  completeMethod={searchCountries}
                  onChange={(e) => setCountryValue(e.value)}
                  field="name"
                  placeholder="Search countries"
                />
              </div>
              <div>
                <AutoComplete
                  title='Countries'
                  value={multipleCountries}
                  suggestions={filteredMultipleCountries}
                  completeMethod={searchMultipleCountries}
                  onChange={(e) => setMultipleCountries(e.value)}
                  field="name"
                  placeholder="Select multiple countries"
                  multiple
                />
              </div>
              {/* <div> */}
              <AutoComplete
                title='Countries'
                value={multipleCountries}
                suggestions={filteredMultipleCountries}
                completeMethod={searchMultipleCountries}
                onChange={(e) => setMultipleCountries(e.value)}
                field="name"
                placeholder="Select multiple countries"
                multiple
                dropdown
              />
              {/* </div> */}
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-autocomplete--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>Dropdown</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div>
                <Dropdown
                  title='City'
                  value={dropdownCity}
                  onChange={(e) => setDropdownCity(e.value)}
                  options={cities.map(city => ({ name: city, code: city }))}
                  optionLabel="name"
                  placeholder="Select a City"
                />
              </div>
              <div>
                <Dropdown
                  title='With Filter'
                  value={dropdownCountry}
                  onChange={(e) => setDropdownCountry(e.value)}
                  options={countries}
                  optionLabel="name"
                  placeholder="Select a Country"
                  filter
                />
              </div>
              <div>
                <Dropdown
                  title="With Clear Icon"
                  value={dropdownCity}
                  onChange={(e) => setDropdownCity(e.value)}
                  options={cities.map(city => ({ name: city, code: city }))}
                  optionLabel="name"
                  placeholder="Select a City"
                  showClear
                />
              </div>
              <div>
                <Dropdown
                  title="Editable"
                  value={dropdownCity}
                  onChange={(e) => setDropdownCity(e.value)}
                  options={cities.map(city => ({ name: city, code: city }))}
                  optionLabel="name"
                  placeholder="Select a City"
                  editable
                />
              </div>
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-dropdown--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card" >
            <h3>Avatar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar label="P" />
                <Avatar label="V" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                <Avatar label="U" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar icon={EnumIcons.Outlined.person} />
                <Avatar icon={EnumIcons.Outlined.person} />
                <Avatar icon={EnumIcons.Outlined.person} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar label="P" />
                <Avatar label="P" size="large" />
                <Avatar label="P" size="xlarge" />
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar label="P" shape="circle" />
                <Avatar label="P" shape="square" />
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="large" shape="circle" />
              </div>
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-avatar--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card" >
            <h3>Badge</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Badge value="2" />
                <Badge value="8" severity="success" />
                <Badge value="4" severity="info" />
                <Badge value="12" severity="warning" />
                <Badge value="3" severity="danger" />
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Badge value="NEW" severity="success" />
                <Badge value="HOT" severity="danger" />
                <Badge value="SALE" severity="warning" />
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Badge value="5" severity="secondary" />
                <Badge value="7" severity="contrast" />
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Badge value="10" size="large" />
                <Badge value="99" size="xlarge" />
                <Badge value="100+" severity="danger" size="xlarge" />
              </div>
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-badge--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card" >
            <h3>Button</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Primary" />
                <Button label="Success" severity="success" />
                <Button label="Info" severity="info" />
                <Button label="Warning" severity="warning" />
                <Button label="Danger" severity="danger" />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Save" icon="pi pi-check" />
                <Button icon="pi pi-search" aria-label="Search" />
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Outlined" outlined />
                <Button label="Text" text />
                <Button label="Raised" raised />
                <Button label="Rounded" rounded />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Small" size="small" />
                <Button label="Normal" />
                <Button label="Large" size="large" />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Loading" loading />
                <Button label="Disabled" disabled />
              </div>
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-button--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card" >
            <h3>Calendar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <Calendar title='Calendar' placeholder="Select a date" showIcon />
              <Calendar title='Calendar' placeholder="Select date and time" showIcon showTime hourFormat="24" />
              <Calendar title='Calendar' placeholder="Select time" showIcon timeOnly hourFormat="24" />
              <Calendar title='Calendar' placeholder="Select date range"
                // selectionMode="range"
                hideOnRangeSelection />
              <Calendar title='Calendar' placeholder="Month & Year" showIcon monthNavigator yearNavigator yearRange="2000:2030" />
              <Calendar title='Calendar' placeholder="Inline calendar" inline />
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-calendar--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card" >
            <h3>DataTable</h3>
            <DataTable
              value={[
                { id: 1, name: 'Bamboo Watch', category: 'Accessories', price: 65 },
                { id: 2, name: 'Black Watch', category: 'Accessories', price: 72 },
                { id: 3, name: 'Blue Band', category: 'Fitness', price: 79 },
                { id: 4, name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
                { id: 5, name: 'Bracelet', category: 'Accessories', price: 15 },
              ]}
              dataKey="id"
              paginator
              rows={3}
              stripedRows
              tableStyle={{ minWidth: '100%' }}
            >
              <Column field="name" header="Name" sortable />
              <Column field="category" header="Category" sortable />
              <Column field="price" header="Price" sortable />
            </DataTable>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-datatable--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card" >
            <h3>InputText</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputText title='Title' placeholder="Enter text" />
              <InputText title="Username" placeholder="Enter your username" name="username" />
              <InputText title="Disabled" placeholder="Disabled" disabled />
              <InputText title="Read Only" value="Read only text" readOnly />
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <InputText className="p-inputtext-sm" title="Small" placeholder="Small" />
                <InputText title="Normal" placeholder="Normal" />
                <InputText className="p-inputtext-lg" title="Large" placeholder="Large" />
              </div>
              <InputText type="email" placeholder="Enter your email" title="Email" />
              <InputText placeholder="Only integers" keyfilter="int" title="Integer Input" />
              <InputText placeholder="Invalid input" invalid title="Error Field" />
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-inputtext--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>IconField</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <IconField iconPosition="left">
                <InputIcon>
                  <Icon name={EnumIcons.Outlined.search} />
                </InputIcon>
                <InputText title="Search" placeholder="Search" />
              </IconField>
              <IconField iconPosition="right">
                <InputIcon>
                  <Icon name={EnumIcons.Outlined.mail} />
                </InputIcon>
                <InputText title="Email" placeholder="Email" />
              </IconField>
              <IconField iconPosition="left">
                <InputIcon>
                  <Icon name={EnumIcons.Outlined.person} />
                </InputIcon>
                <InputText title="Username" placeholder="Username" />
              </IconField>
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-iconfield--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>InputNumber</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputNumber
                title="Basic"
                placeholder="Digite um número"
              />
              <InputNumber
                title="Quantidade"
                placeholder="Digite a quantidade"
                name="quantity"
              />
              <InputNumber
                title="Com Botões"
                showButtons
                step={1}
              />
              <InputNumber
                title="Botões Empilhados"
                showButtons
                buttonLayout="stacked"
                step={1}
              />
              <InputNumber
                title="Valor entre 0 e 100"
                showButtons
                min={0}
                max={100}
              />
              <InputNumber
                title="Decimais (2 casas)"
                minFractionDigits={2}
                maxFractionDigits={2}
                placeholder="0.00"
              />
              <InputNumber
                title="Moeda (BRL)"
                mode="currency"
                currency="BRL"
                locale="pt-BR"
              />
              <InputNumber
                title="Moeda (USD)"
                mode="currency"
                currency="USD"
                locale="en-US"
              />
              <InputNumber
                title="Com Prefixo"
                prefix="% "
              />
              <InputNumber
                title="Com Sufixo"
                suffix=" kg"
              />
              <InputNumber
                title="Separador de Milhar"
                useGrouping
                locale="pt-BR"
              />
              <InputNumber
                title="Disabled"
                disabled
              />
              <InputNumber
                title="Invalid"
                invalid
                placeholder="Campo obrigatório"
              />
              <InputNumber
                title="Filled Variant"
                variant="filled"
                placeholder="Digite um número"
              />
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-inputnumber--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>InputPassword</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputPassword
                title="Senha Básica"
                placeholder="Digite sua senha"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputPassword
                title="Com Medidor de Força"
                placeholder="Digite uma senha forte"
                name="strongPassword"
                feedback={true}
                value={strongPassword}
                onChange={(e) => setStrongPassword(e.target.value)}
              />
              <InputPassword
                title="Sem Medidor"
                placeholder="Digite sua senha"
                name="noFeedback"
                feedback={false}
                value={noFeedback}
                onChange={(e) => setNoFeedback(e.target.value)}
              />
              <InputPassword
                title="Toggle Mask"
                placeholder="Senha com alternância"
                name="togglePassword"
                toggleMask
                value={togglePassword}
                onChange={(e) => setTogglePassword(e.target.value)}
              />
              <InputPassword
                title="Fraca/Média/Forte"
                placeholder="Teste a força"
                name="strengthTest"
                feedback={true}
                promptLabel="Digite uma senha"
                weakLabel="Fraca"
                mediumLabel="Média"
                strongLabel="Forte"
                value={strengthTest}
                onChange={(e) => setStrengthTest(e.target.value)}
              />
              <InputPassword
                title="Desabilitado"
                placeholder="Campo desabilitado"
                name="disabled"
                disabled
                value={disabledPassword}
                onChange={(e) => setDisabledPassword(e.target.value)}
              />
              <InputPassword
                title="Inválido"
                placeholder="Senha obrigatória"
                name="invalid"
                className="p-invalid"
                value={invalidPassword}
                onChange={(e) => setInvalidPassword(e.target.value)}
              />
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-inputpassword--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          {/* <div className="component-card">
            <h3>InputSwitch</h3>
            <InputSwitch />
          </div> */}



          <div className="component-card">
            <h3>InputTextArea</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputTextArea
                title="Basic"
                placeholder="Enter your text here"
                rows={5}
              />
              <InputTextArea
                title="Description"
                placeholder="Enter description"
                rows={4}
                name="description"
              />
              <InputTextArea
                title="Auto Resize"
                placeholder="Type something and watch grow"
                autoResize
                rows={3}
              />
              <InputTextArea
                title="Read Only"
                value="This text is read-only and cannot be edited."
                readOnly
                rows={3}
              />
              <InputTextArea
                title="Limited to 100 chars"
                placeholder="Max 100 characters"
                maxLength={100}
                rows={4}
              />
              <InputTextArea
                title="Error Field"
                placeholder="This field has an error"
                invalid
                rows={3}
              />
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-inputtextarea--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>MultiSelect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <MultiSelect
                title="Basic"
                options={[
                  { name: 'New York', code: 'NY' },
                  { name: 'Rome', code: 'RM' },
                  { name: 'London', code: 'LDN' },
                  { name: 'Istanbul', code: 'IST' },
                  { name: 'Paris', code: 'PRS' }
                ]}
                optionLabel="name"
                placeholder="Select Cities"
                maxSelectedLabels={3}
              />
              <MultiSelect
                title="Select Countries"
                options={[
                  { name: 'Brazil', code: 'BR' },
                  { name: 'France', code: 'FR' },
                  { name: 'Germany', code: 'DE' },
                  { name: 'Japan', code: 'JP' },
                  { name: 'United States', code: 'US' }
                ]}
                optionLabel="name"
                filter
                filterPlaceholder="Search countries"
                placeholder="Choose countries"
                maxSelectedLabels={2}
              />
              <MultiSelect
                title="Chip Display"
                options={[
                  { name: 'New York', code: 'NY' },
                  { name: 'Rome', code: 'RM' },
                  { name: 'London', code: 'LDN' },
                  { name: 'Paris', code: 'PRS' }
                ]}
                optionLabel="name"
                placeholder="Chip Display"
                display="chip"
              />
              <MultiSelect
                title="Grouped Cities"
                options={[
                  {
                    label: 'Germany',
                    items: [
                      { label: 'Berlin', value: 'Berlin' },
                      { label: 'Munich', value: 'Munich' }
                    ]
                  },
                  {
                    label: 'USA',
                    items: [
                      { label: 'New York', value: 'New York' },
                      { label: 'San Francisco', value: 'San Francisco' }
                    ]
                  }
                ]}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                placeholder="Grouped Cities"
                maxSelectedLabels={2}
              />
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-multiselect--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>Paginator</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <Paginator
                first={0}
                rows={10}
                totalRecords={120}
              />
              <Paginator
                first={0}
                rows={10}
                totalRecords={120}
                rowsPerPageOptions={[10, 20, 30, 50]}
              />
              <Paginator
                first={0}
                rows={10}
                totalRecords={150}
                template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
              />
              <Paginator
                first={0}
                rows={25}
                totalRecords={1000}
                rowsPerPageOptions={[25, 50, 100]}
                template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
              />
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-paginator--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>SelectButton</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Basic</label>
                <SelectButton
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.value)}
                  options={['Off', 'On']}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>With Objects</label>
                <SelectButton
                  value={cityValue}
                  onChange={(e) => setCityValue(e.value)}
                  options={[
                    { name: 'New York', value: 'NY' },
                    { name: 'Rome', value: 'RM' },
                    { name: 'London', value: 'LDN' }
                  ]}
                  optionLabel="name"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Multiple</label>
                <SelectButton
                  value={multipleValue}
                  onChange={(e) => setMultipleValue(e.value)}
                  options={[
                    { name: 'New York', value: 'NY' },
                    { name: 'Rome', value: 'RM' },
                    { name: 'London', value: 'LDN' }
                  ]}
                  optionLabel="name"
                  multiple
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>With Icons</label>
                <SelectButton
                  value={justifyValue}
                  onChange={(e) => setJustifyValue(e.value)}
                  options={[
                    { icon: <Icon name={EnumIcons.Outlined.format_align_left} />, value: 'left' },
                    { icon: <Icon name={EnumIcons.Outlined.format_align_center} />, value: 'center' },
                    { icon: <Icon name={EnumIcons.Outlined.format_align_right} />, value: 'right' },
                    { icon: <Icon name={EnumIcons.Outlined.format_align_justify} />, value: 'justify' }
                  ]}
                  optionLabel="icon"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Disabled</label>
                <SelectButton
                  options={['Off', 'On']}
                  disabled
                />
              </div>
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-selectbutton--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>Skeleton</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Rectangle</label>
                <Skeleton width="100%" height="4rem" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Circle</label>
                <Skeleton shape="circle" size="4rem" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Card Layout</label>
                <div style={{ border: '1px solid var(--surface-border)', borderRadius: '8px', padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <Skeleton shape="circle" size="3rem" />
                    <div style={{ flex: 1 }}>
                      <Skeleton width="100%" height="1rem" className="mb-2" />
                      <Skeleton width="75%" height="1rem" />
                    </div>
                  </div>
                  <Skeleton width="100%" height="8rem" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>List Layout</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Skeleton shape="circle" size="2.5rem" />
                    <Skeleton width="100%" height="1rem" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Skeleton shape="circle" size="2.5rem" />
                    <Skeleton width="100%" height="1rem" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Skeleton shape="circle" size="2.5rem" />
                    <Skeleton width="100%" height="1rem" />
                  </div>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Text Lines</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Skeleton width="100%" height="0.875rem" />
                  <Skeleton width="95%" height="0.875rem" />
                  <Skeleton width="90%" height="0.875rem" />
                  <Skeleton width="85%" height="0.875rem" />
                </div>
              </div>
            </div>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-skeleton--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>TabMenu</h3>
            <TabMenu
              model={[
                { label: 'Home', icon: 'pi pi-home' },
                { label: 'Calendar', icon: 'pi pi-calendar' },
                { label: 'Edit', icon: 'pi pi-pencil' },
                { label: 'Settings', icon: 'pi pi-cog' }
              ]}
              activeIndex={0}
            />
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-tabmenu--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>TabView</h3>
            <TabView>
              <TabPanel header="Overview" leftIcon="pi pi-home">
                <p className="m-0">
                  TabView is a container component to group content with tabs. It provides a clean interface
                  for organizing related information in separate panels.
                </p>
              </TabPanel>
              <TabPanel header="Features" leftIcon="pi pi-star">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p className="m-0">• Support for icons on tab headers</p>
                  <p className="m-0">• Controlled and uncontrolled modes</p>
                  <p className="m-0">• Scrollable tab headers</p>
                  <p className="m-0">• Disabled tabs</p>
                  <p className="m-0">• Dynamic tabs</p>
                </div>
              </TabPanel>
              <TabPanel header="Usage" leftIcon="pi pi-code">
                <p className="m-0">
                  Perfect for organizing complex forms, settings pages, dashboards, and any content
                  that benefits from being divided into logical sections.
                </p>
              </TabPanel>
            </TabView>
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-tabview--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

          <div className="component-card">
            <h3>Editor</h3>
            <Editor title="Rich Text Editor" placeholder="Start typing here..." />
            <div className="component-card-footer">
              <a href="../?path=/docs/drogal-internal-ui-ds-editor--docs" className="component-link" target="_parent">
                Ver documentação <Icon name={EnumIcons.Outlined.arrow_forward_ios} />
              </a>
            </div>
          </div>

        </div>

      </section>
    </article>
  );
};
