import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Content from './Content';
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
        <Grid container spacing={24}>
            { data.map(restaurant => (
              <Grid item md={3} sm={4} xs={12}>
                <Content restaurant={restaurant} />
              </Grid>
            )) }
        </Grid>
      </div>
    );
  }
}

export default RestaurantContainer;
