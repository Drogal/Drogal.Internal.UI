import React from 'react';
import './overview.css';
import { Accordion } from '../../../components/Accordion';
import { AccordionTab } from '../../../components/Accordion.Tab';
import { Avatar } from '../../../components/Avatar';
import { Badge } from '../../../components/Badge';
import { Button } from '../../../components/Button';
import { Calendar } from '../../../components/Calendar';
import { DataTable } from '../../../components/DataTable';
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
import '../../../theme.css';

export const Overview: React.FC = () => {

  return (
    <article>

      <section className="storybook-page">
        <h2>OverView DS</h2>
        <p>Visualização de todos os componentes do Design System</p>

        <div className="components-grid">
          <div className="component-card">
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

          <div className="component-card">
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

          <div className="component-card">
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

          <div className="component-card">
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

          <div className="component-card">
            <h3>Calendar</h3>
            <Calendar />
          </div>

          <div className="component-card">
            <h3>DataTable</h3>
            <DataTable />
          </div>

          {/* <div className="component-card">
            <h3>Dialog</h3>
            <Dialog />
          </div> */}

          <div className="component-card">
            <h3>IconField</h3>
            <IconField />
          </div>

          <div className="component-card">
            <h3>InputNumber</h3>
            <InputNumber />
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
            <h3>InputText</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <InputText placeholder="Enter text" />
              <InputText title="Username" placeholder="Enter your username" name="username" />
              <InputText placeholder="Disabled" disabled />
              <InputText value="Read only text" readOnly />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
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
            <h3>InputTextArea</h3>
            <InputTextArea />
          </div>

          <div className="component-card">
            <h3>MultiSelect</h3>
            <MultiSelect />
          </div>

          <div className="component-card">
            <h3>Paginator</h3>
            <Paginator />
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
            <TabMenu />
          </div>

          {/* <div className="component-card">
            <h3>TabPanel</h3>
            <TabPanel />
          </div> */}

          <div className="component-card">
            <h3>TabView</h3>
            <TabView />
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
