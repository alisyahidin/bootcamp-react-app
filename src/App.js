import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CardsDemo name="Ali"/>
      </div>
    );
  }
}

export default App;

// this withGreyBg is called HOC
const withGreyBg = WrappedComponent => {
  class NewComponent extends Component {
    state = {
      style: {
        backgroundColor: 'grey',
      }
    };

    changeBg = color => () => {
      this.setState({
        style: {
          backgroundColor: color
        }
      })
    }

    render() {
      return (
        <div className="wrapper" style={ this.state.style }>
          <WrappedComponent {...this.props} changeBg={ this.changeBg } />
        </div>
      );
    }
  }

  return NewComponent;
};

const SmallCard = props => {
  return (
    <div style={{
      height: '100px',
      width: '100px',
      backgroundColor: 'red'
    }}>
    <button onClick={ props.changeBg('blue') }>blue</button>
    </div>
  )
}

const BigCard = props => {
  console.log(props, 'BigCard')
  return (
    <div style={{
      height: '200px',
      width: '200px',
      backgroundColor: 'blue'
    }}>
    <button onClick={ props.changeBg('orange') }>orange</button>
    </div>
  )
}

const HugeCard = props => {
  console.log(props, 'HugeCard')
  return (
    <div style={{
      height: '300px',
      width: '300px',
      backgroundColor: 'green'
    }}>
    <button onClick={ props.changeBg('#333') }>#333</button>
    </div>
  )
}

const SmallCardWithGreyBg = withGreyBg(SmallCard);
const BigCardWithGreyBg = withGreyBg(BigCard);
const HugeCardWithGreyBg = withGreyBg(HugeCard);

class CardsDemo extends Component {
    state = {
      style: {
        padding: '100px',
        backgroundColor: 'yellow'
      }
    }
    render() {
      return (
        <div { ...this.state }>
          <SmallCardWithGreyBg {...this.props} />
          <BigCardWithGreyBg {...this.props} />
          <HugeCardWithGreyBg {...this.props} />
        </div>
      )
    }
}