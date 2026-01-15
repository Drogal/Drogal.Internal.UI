import React from 'react';
import './icons.css';
import '../../../theme.css';
import '../../../outlined-icons.css'
import '../../../rounded-icons.css'
import Icon from '../../../components/Icon';
import EnumIcons from '../../../icons/EnumIcons';

export const Icons: React.FC = () => {

  return (
    <article>

      <section className="storybook-page-icons">
        <h2>Icons Drogal Internal UI</h2>
        <p>Visualização de todos os componentes do Design System</p>

        <div className="components-grid-icons">
          <div className='component-card-icons'>
            <h3>Rounded Icons</h3>
            <div className='component-card-icons-list'>
              {
                EnumIcons.Rounded && Object.keys(EnumIcons.Rounded).map((key) => (
                  <Icon key={key} name={EnumIcons.Rounded[key as keyof typeof EnumIcons.Rounded]} />
                ))
              }
            </div>


          </div>
          <div className='component-card-icons'>
            <h3>Outlined Icons</h3>
            <div className='component-card-icons-list'>
              {
                EnumIcons.Outlined && Object.keys(EnumIcons.Outlined).map((key) => (
                  <Icon key={key} name={EnumIcons.Outlined[key as keyof typeof EnumIcons.Outlined]} />
                ))
              }
            </div>
          </div>

        </div>

      </section>
    </article>
  );
};
