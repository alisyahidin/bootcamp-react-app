import React from 'react';
import { Tabs, WhiteSpace, Badge, SearchBar } from 'antd-mobile';
import ComponentCarousel from './ComponentCarousel';

const tabs = [
  { title: 'Transport' },
  { title: 'Food' },
  { title: 'Delivery' }
];

const MenuBar = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div>
        <SearchBar placeholder="Search" maxLength={8} />
        <div style={{ height: '100vh', backgroundColor: '#fff', padding: '0rem' }}>
          <ComponentCarousel />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
  </div>
);

export default MenuBar;