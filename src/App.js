import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    page: 'home'
  }

  handleNavLink = param => e => {
    e.preventDefault()
    this.setState({
      page: param
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar handleNavLink={this.handleNavLink} />

        { this.state.page === 'home' && <HomeContainer /> }
        { this.state.page === 'about' && <AboutContainer /> }
        { this.state.page === 'contact' && <ContactContainer /> }
      </div>
    );
  }
}

export default App;
