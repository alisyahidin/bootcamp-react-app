import React, { Component } from 'react';
import { Tabs, WhiteSpace, SearchBar } from 'antd-mobile';
import CarouselComponent from './components/CarouselComponent';
import './App.css';

const tabs = [
  { title: 'Transport' },
  { title: 'Food' },
  { title: 'Delivery' },
];

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#FFF' }}>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div className="main-content" style={{ height: '90vh' }}>
            Content of first tab
          </div>
          <div>
              <SearchBar placeholder="Search" maxLength={8} />
              <WhiteSpace />
              <CarouselComponent slideWidth="100px"/>
              <div className="main-content" style={{ height: '60vh' }}>
                yoo
              </div>
          </div>
          <div className="main-content" style={{ height: '90vh' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
