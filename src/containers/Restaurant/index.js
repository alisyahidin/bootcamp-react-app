import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Content from './Content';
import AddButton from './AddButton';
import { restaurantRoute } from '../../config/api';

class RestaurantContainer extends Component {
  state = {
    data: [],
    name: '',
    image: ''
  }

  getData = () => {
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

  handleFormChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleStore = () => {
    const { data, ...dataForm } = this.state

    axios.post(restaurantRoute, dataForm)
      .then(res => {
        this.getData()
      })
      .catch(err => {
        alert(err)
        console.log(err)
      })

    this.setState({
      name: '',
      image: ''
    })
  }

  handleDelete = restaurant => () => {
    axios.delete(`${restaurantRoute}/${restaurant._id}`)
      .then(res => {
        this.getData()
      })
      .catch(err => {
        alert(err)
        console.log(err)
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { data, name, image }= this.state

    return (
      <div style={{ scroll: 'auto' }}>
        <Grid container spacing={24}>
            { data.map((restaurant, index) => (
              <Grid key={index} item md={3} sm={4} xs={12}>
                <Content
                  restaurant={restaurant}
                  handleDelete={this.handleDelete(restaurant)}
                />
              </Grid>
            )) }
        </Grid>
        <AddButton
          data={{ name, image }}
          handleFormChange={ this.handleFormChange }
          handleStore={ this.handleStore }
        />
      </div>
    );
  }
}

export default RestaurantContainer;
