import React from 'react';
import Grid from '@material-ui/core/Grid';

import withCrud from '../../hoc/withCrud';

import Content from './Content';
import AddButton from './AddButton';
import DialogForm from './DialogForm';
import { restaurantRoute } from '../../config/api';

const payload = {
  name: '',
  image: ''
}

class RestaurantContainer extends React.Component {
  state = {
    openDialog: false,
    dialogType: ''
  }

  controlDialogForm = (value, type = '') => () => {
    this.setState({
      openDialog: value,
      dialogType: type
    })
  }

  render() {
    const { data, idUpdate, ...payload } = this.props.hocState
console.log(this.props)
    return (
      <div style={{ scroll: 'auto' }}>
        <Grid container spacing={24}>
            { data.map((restaurant, index) => (
              <Grid key={index} item md={3} sm={4} xs={12}>
                <Content
                  restaurant={restaurant}
                  handleDelete={this.props.deleteData(restaurant._id)}
                  controlDialogForm={this.controlDialogForm}
                  showData={this.props.showData(restaurant._id)}
                />
              </Grid>
            )) }
        </Grid>

        <AddButton
          controlDialogForm={ this.controlDialogForm }
          resetPayload={ () => this.props.resetPayload(payload) }
        />

        <DialogForm
          state={ this.state }
          payload={ payload }
          handleFormChange={ this.props.handleFormChange }
          controlDialogForm={ this.controlDialogForm }
          postData={ this.props.postData }
          putData={ this.props.putData }
          idUpdate={ idUpdate }
        />
      </div>
    )
  }
}

export default withCrud(payload, restaurantRoute)(RestaurantContainer)
