import React from 'react';
import Grid from '@material-ui/core/Grid';

import withCrud from '../../hoc/withCrud';

import Content from './Content';
import AddButton from './AddButton';
import { foodRoute } from '../../config/api';

const payload = {
  name: '',
  image: '',
  price: '',
  restaurant_id: ''
}

const FoodContainer = (props) => {
  const { data, ...payload } = props.hocState

  return (
    <div style={{ scroll: 'auto' }}>
      <Grid container spacing={24}>
          { data.map((food, index) => (
            <Grid key={index} item md={2} sm={4} xs={12}>
              <Content
                food={food}
                handleDelete={props.deleteData(food._id)}
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

export default withCrud(payload, foodRoute)(FoodContainer)