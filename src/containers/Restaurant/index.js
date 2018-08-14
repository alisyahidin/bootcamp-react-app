import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CarouselComponent from '../../components/CarouselComponent';
import CardComponent from '../../components/CardComponent';

import RestaurantDetail from '../RestaurantDetail';
import Aux from '../../hoc/Auxiliary';

export default class Restaurant extends Component {
  state = {
    openDetailRestaurant: false,
    restaurant: null,
    images: [
      {
        link: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=500&q=60'
      },
      {
        link: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a5e4cac8bcaf69ffaf5d3b1c2b063e4&auto=format&fit=crop&w=500&q=60'
      },
      {
        'link': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67fb2e7b1fbe39b18b51146234ef38aa&auto=format&fit=crop&w=500&q=60'
      }
    ],
    restaurants: [
      {
        name: 'Bakso',
        address: 'Jl. Ir Soekarno 123',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=500&q=60',
        foodList: [
          {
            name: 'Bakso Rudal',
            price: 10000
          },
          {
            name: 'Apple Juice',
            price: 3000
          }
        ]
      },
      {
        name: 'Piza',
        address: 'Jl. Ir 9879a87s97',
        image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fa061122a5ce899fcb5454dae8dbe99&auto=format&fit=crop&w=500&q=60',
        foodList: [
          {
            name: 'Bakso Rudal',
            price: 10000
          },
          {
            name: 'Apple Juice',
            price: 3000
          }
        ]
      },
      {
        name: 'Pisang Cokelat',
        address: 'Jl. Maju mundur',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9443baefd581d4e532b6d4f1e7879be&auto=format&fit=crop&w=500&q=60',
        foodList: [
          {
            name: 'Bakso Rudal',
            price: 10000
          },
          {
            name: 'Apple Juice',
            price: 3000
          }
        ]
      },
      {
        name: 'Pizza Asli',
        address: 'Jl. Maju Hutz',
        image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86c8c1fd5e9e5b384696472a095c42ac&auto=format&fit=crop&w=500&q=60',
        foodList: [
          {
            name: 'Bakso Rudal',
            price: 10000
          },
          {
            name: 'Apple Juice',
            price: 3000
          }
        ]
      }
    ]
  }

  handleRestaurantToggle = (toggle, restaurant) => () => {
    this.setState({
      openDetailRestaurant: toggle,
      restaurant
    })
  }

  render() {
    return (
      <Aux>
        <CarouselComponent images={ this.state.images } />

        <Grid container spacing={24}>
        { this.state.restaurants.map((restaurant, index) => {
          return (
            <Grid key={ index } item xs={12} sm={6} md={4}>
              <Button onClick={ this.handleRestaurantToggle(true, restaurant) } style={{ padding: 0, margin: 0, width: '100%' }}>
                <CardComponent restaurant={ restaurant }/>
              </Button>
            </Grid>
          )
        }) }
        </Grid>

        <RestaurantDetail
          openDetailRestaurant={ this.state.openDetailRestaurant }
          handleRestaurantToggle={ this.handleRestaurantToggle }
          restaurantName={ this.state.restaurant ? this.state.restaurant.name : '' }
          restaurantFoodList={ this.state.restaurant ? this.state.restaurant.foodList : [] }
        />
      </Aux>
    );
  }
}
