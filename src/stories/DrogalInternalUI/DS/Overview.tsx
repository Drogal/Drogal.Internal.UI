import React from 'react';
import './overview.css';
import { Accordion } from '../../../components/Accordion';
import { AccordionTab } from '../../../components/Accordion.AccordionTab';
import { Avatar } from '../../../components/Avatar';
import { Badge } from '../../../components/Badge';
import { Button } from '../../../components/Button';
import { Calendar } from '../../../components/Calendar';
import { DataTable } from '../../../components/DataTable';
import { Column } from '../../../components/Column';
// import { Dialog } from '../../../components/Dialog';
import { Editor } from '../../../components/Editor';
import { IconField } from '../../../components/IconField';
import { InputNumber } from '../../../components/InputNumber';
import { InputPassword } from '../../../components/InputPassword';
// import { InputSwitch } from '../../../components/InputSwitch';
import { InputText } from '../../../components/InputText';
import { InputTextArea } from '../../../components/InputTextArea';
import { MultiSelect } from '../../../components/MultiSelect';
import { Paginator } from '../../../components/Paginator';
import { SelectButton } from '../../../components/SelectButton';
import { Skeleton } from '../../../components/Skeleton';
import { TabMenu } from '../../../components/TabMenu';
import { TabView } from '../../../components/TabView';
import { TabPanel } from '../../../components/TabView.TabPanel';

export const Overview: React.FC = () => {

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
                <Avatar icon="pi pi-user" />
                <Avatar icon="pi pi-user" />
                <Avatar icon="pi pi-user" />
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
          </div>

          <div className="component-card" >
            <h3>Calendar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <Calendar placeholder="Select a date" showIcon />
              <Calendar placeholder="Select date and time" showIcon showTime hourFormat="24" />
              <Calendar placeholder="Select time" showIcon timeOnly hourFormat="24" />
              <Calendar placeholder="Select date range"
                // selectionMode="range"
                hideOnRangeSelection />
              <Calendar placeholder="Month & Year" showIcon monthNavigator yearNavigator yearRange="2000:2030" />
              <Calendar placeholder="Inline calendar" inline />
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
          </div>

          <div className="component-card" >
            <h3>InputText</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputText title='Title' placeholder="Enter text" />
              <InputText title="Username" placeholder="Enter your username" name="username" />
              <InputText placeholder="Disabled" disabled />
              <InputText value="Read only text" readOnly />
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <InputText placeholder="Small" size="small" />
                <InputText placeholder="Normal" />
                <InputText placeholder="Large" size="large" />
              </div>
              <InputText type="email" placeholder="Enter your email" title="Email" />
              <InputText placeholder="Only integers" keyfilter="int" title="Integer Input" />
              <InputText placeholder="Invalid input" invalid title="Error Field" />
            </div>
          </div>

          <div className="component-card">
            <h3>IconField</h3>
            <IconField />
          </div>

          <div className="component-card">
            <h3>InputNumber</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputNumber
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
          </div>

          <div className="component-card">
            <h3>InputPassword</h3>
            <InputPassword />
          </div>

          {/* <div className="component-card">
            <h3>InputSwitch</h3>
            <InputSwitch />
          </div> */}



          <div className="component-card">
            <h3>InputTextArea</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputTextArea
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
          </div>

          <div className="component-card">
            <h3>MultiSelect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <MultiSelect
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
          </div>

          <div className="component-card">
            <h3>SelectButton</h3>
            <SelectButton />
          </div>

          <div className="component-card">
            <h3>Skeleton</h3>
            <Skeleton />
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
          </div>

          <div className="component-card">
            <h3>Editor</h3>
            <Editor />
          </div>
        </div>

      </section>
    </article>
  );
};
