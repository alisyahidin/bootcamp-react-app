import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Article />
      </div>
    );
  }
}

export default App;

export class Article extends Component {
  state = {
    data: []
  }

  getData = () => {
    axios.get('http://localhost:5000/articles')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        alert(err)
      })
  }

  updateData = () => {
    this.getData()
  }

  componentDidMount = () => {
    this.getData()
  }

  render() {
    return (
      <div>
        <FormArticle updateData={ this.updateData } />
        { this.state.data.map( (datum, index) => <ArticleDetail key={ index } data={ datum } /> ) }
      </div>
    );
  }
}

export class FormArticle extends Component {
  state = {
    title: '',
    description: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    if ( this.state.title === '' || this.state.description === '' ) {
      return alert('Harus diisi')
    }
    axios.post('http://localhost:5000/articles', this.state)
      .then(res => {
        alert('success')
      })
      .catch(err => {
        alert(err)
      })

    this.props.updateData(this.state)
  }

  render() {
    return (
      <div>
        <h3>Create Post</h3>
        <input onChange={ this.handleInputChange } type="text" name="title" placeholder="title" />
        <input onChange={ this.handleInputChange } type="text" name="description" placeholder="description" />
        <button onClick={ this.handleSubmit }>Create</button>
      </div>
    );
  }
}

export class ArticleDetail extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.data.title }</h3>
        <p>{ this.props.data.description }</p>
        <button>delete</button>
      </div>
    );
  }
}
