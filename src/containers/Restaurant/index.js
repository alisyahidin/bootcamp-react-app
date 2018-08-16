import React, { Component } from 'react';
import axios from 'axios';

import CardComponent from '../../components/Card';
import { restaurantRoute } from '../../config/api';

class RestaurantContainer extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(restaurantRoute)
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    const { data }= this.state

    return (
      <div style={{ scroll: 'auto' }}>
        { data.map(restaurant => <CardComponent />) }
      </div>
    );
  }
}

export default RestaurantContainer;
