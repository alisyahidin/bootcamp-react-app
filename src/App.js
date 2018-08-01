import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';

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
        <ul>
          {<li><a onClick={(e) => { e.preventDefault(); this.setState({page: 'home'})} } href="">Home</a></li>}
          <li><a onClick={this.handleNavLink('about')} href="">About</a></li>
          <li><a onClick={this.handleNavLink('contact')} href="">Contact</a></li>
        </ul>

        { this.state.page === 'home' && <HomeContainer /> }
        { this.state.page === 'about' && <AboutContainer /> }
        { this.state.page === 'contact' && <ContactContainer /> }
      </div>
    );
  }
}

export default App;
