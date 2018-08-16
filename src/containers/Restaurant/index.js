import React from 'react';
import Grid from '@material-ui/core/Grid';

import withCrud from '../../hoc/withCrud';

import Content from './Content';
import AddButton from './AddButton';
import { restaurantRoute } from '../../config/api';

const payload = {
  name: '',
  image: ''
}

const RestaurantContainer = (props) => {
  const { data, ...payload } = props.hocState

  return (
    <div style={{ scroll: 'auto' }}>
      <Grid container spacing={24}>
          { data.map((restaurant, index) => (
            <Grid key={index} item md={3} sm={4} xs={12}>
              <Content
                restaurant={restaurant}
                handleDelete={props.deleteData(restaurant._id)}
              />
            </Grid>
          )) }
      </Grid>
      <AddButton
        data={ payload }
        handleFormChange={ props.handleFormChange }
        handleStore={ props.postData }
      />
    </div>
  )
}

export default withCrud(payload, restaurantRoute)(RestaurantContainer)
