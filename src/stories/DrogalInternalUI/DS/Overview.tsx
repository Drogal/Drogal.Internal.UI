import React from 'react';
import './overview.css';
import { InputText } from './InputText/InputText';
import { InputNumber } from './InputNumber/InputNumber';
import { InputTextArea } from './InputTextArea/InputTextArea';
import { InputPassword } from './InputPassword/InputPassword';
import { Calendar } from './Calendar/Calendar';
import { MultiSelect } from './MultiSelect/MultiSelect';
import { InputSwitch } from './InputSwitch/InputSwitch';
import { Accordion } from './Accordion/Accordion';
import { SelectButton } from './SelectButton/SelectButton';
import { Editor } from './Editor/Editor';
import { TabView } from './TabView/TabView';
import { TabPanel } from './TabPanel/TabPanel';
import { Paginator } from './Paginator/Paginator';
import { IconField } from './IconField/IconField';
import { Dialog } from './Dialog/Dialog';
import { DataTable } from './DataTable/DataTable';
import { Avatar } from './Avatar/Avatar';
import { Badge } from './Badge/Badge';
import { Skeleton } from './Skeleton/Skeleton';
import { TabMenu } from './TabMenu/TabMenu';
import { Button } from 'drogal.internal.ui';

export const Overview: React.FC = () => {

  return (
    <article>

      <section className="storybook-page">
        <h2>OverView DS</h2>
        <p>Visualização de todos os componentes do Design System</p>

        <div className="components-grid">
          <div className="component-card">
            <h3>Button</h3>
            <Button label="Button" />
          </div>

          <div className="component-card">
            <h3>InputText</h3>
            <InputText label="InputText" />
          </div>

          <div className="component-card">
            <h3>InputNumber</h3>
            <InputNumber label="InputNumber" />
          </div>

          <div className="component-card">
            <h3>InputTextArea</h3>
            <InputTextArea label="InputTextArea" />
          </div>

          <div className="component-card">
            <h3>InputPassword</h3>
            <InputPassword label="InputPassword" />
          </div>

          <div className="component-card">
            <h3>Calendar</h3>
            <Calendar label="Calendar" />
          </div>

          <div className="component-card">
            <h3>MultiSelect</h3>
            <MultiSelect label="MultiSelect" />
          </div>

          <div className="component-card">
            <h3>InputSwitch</h3>
            <InputSwitch label="InputSwitch" />
          </div>

          <div className="component-card">
            <h3>Accordion</h3>
            <Accordion label="Accordion" />
          </div>

          <div className="component-card">
            <h3>SelectButton</h3>
            <SelectButton label="SelectButton" />
          </div>

          <div className="component-card">
            <h3>Editor</h3>
            <Editor label="Editor" />
          </div>

          <div className="component-card">
            <h3>TabView</h3>
            <TabView label="TabView" />
          </div>

          <div className="component-card">
            <h3>TabPanel</h3>
            <TabPanel label="TabPanel" />
          </div>

          <div className="component-card">
            <h3>Paginator</h3>
            <Paginator label="Paginator" />
          </div>

          <div className="component-card">
            <h3>IconField</h3>
            <IconField label="IconField" />
          </div>

          <div className="component-card">
            <h3>Dialog</h3>
            <Dialog label="Dialog" />
          </div>

          <div className="component-card">
            <h3>DataTable</h3>
            <DataTable label="DataTable" />
          </div>

          <div className="component-card">
            <h3>Avatar</h3>
            <Avatar label="Avatar" />
          </div>

          <div className="component-card">
            <h3>Badge</h3>
            <Badge label="Badge" />
          </div>

          <div className="component-card">
            <h3>Skeleton</h3>
            <Skeleton label="Skeleton" />
          </div>

          <div className="component-card">
            <h3>TabMenu</h3>
            <TabMenu label="TabMenu" />
          </div>
        </div>

      </section>
    </article>
  );
};
