import React from 'react';
import './overview.css';
import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Calendar,
  DataTable,
  // Dialog,
  Editor,
  IconField,
  InputNumber,
  InputPassword,
  // InputSwitch,
  InputText,
  InputTextArea,
  MultiSelect,
  Paginator,
  SelectButton,
  Skeleton,
  TabMenu,
  TabView,
} from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

export const Overview: React.FC = () => {

  return (
    <article>

      <section className="storybook-page">
        <h2>OverView DS</h2>
        <p>Visualização de todos os componentes do Design System</p>

        <div className="components-grid">
          <div className="component-card">
            <h3>Accordion</h3>
            <Accordion />
          </div>

          <div className="component-card">
            <h3>Avatar</h3>
            <Avatar />
          </div>

          <div className="component-card">
            <h3>Badge</h3>
            <Badge />
          </div>

          <div className="component-card">
            <h3>Button</h3>
            <Button />
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
            <h3>Editor</h3>
            <Editor />
          </div>

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
            <InputText />
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
        </div>

      </section>
    </article>
  );
};
