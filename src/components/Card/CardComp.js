import React, { Component } from 'react';
import SingularCard from './SingularCard/SingularCard';
import { ScaleLoader } from 'react-spinners';

import axios from 'axios';

export default class CardComp extends Component {
  state = {
    data: [],
    loader: true
  }

  componentDidMount() {
    axios.get('https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15')
      .then(response => {
        this.setState({
          data: response.data.posts,
          loader: false
        })
      })
      .catch(error => alert('Please check your internet connection'))
  }

  render() {
    return (
        <div style={{ marginBottom: '5rem' }}>
          <div style={{
            display: this.state.loader === true ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            height: '75vh'
          }}>
            <ScaleLoader
              color="grey"
              loading={this.state.loader}
            />
          </div>
          { this.state.data.map((datum, index) => {
            return (
              <SingularCard
                key={index}
                title={datum.seo.title}
                excerpt={datum.seo.description}
                author={datum.author}
                image={datum.featured_image}
                />
              )
          }) }
        </div>
    );
  }
}
