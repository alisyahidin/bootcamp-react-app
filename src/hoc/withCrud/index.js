import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../Auxiliary';

const withCrud = (WrappedComponent, payload, apiRoute) => (
  class extends Component {
    state = {
      data: [],
      ...payload
    }

    getData = () => {
      axios.get(apiRoute)
        .then(res => {
          this.setState({
            data: res.data
          })
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }

    postData = () => {
      const { data, ...payload } = this.state

      axios.post(apiRoute, payload)
        .then(res => {
          this.clearPayload(payload)
          this.getData()
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }

    deleteData = id => () => {
      axios.delete(`${apiRoute}/${id}`)
        .then(res => {
          this.getData()
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }

    handleFormChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    clearPayload = (payload) => {
      Object.keys(payload).forEach(key => {
        payload[key] = ''
      })

      this.setState({ ...payload })
    }

    componentDidMount() {
      this.getData()
    }

    render() {
      return (
        <Aux>
          <WrappedComponent
            hocState={ this.state }
            postData={ this.postData }
            deleteData={ this.deleteData }
            handleFormChange={ this.handleFormChange }
            { ...this.props }
          />
        </Aux>
      )
    }
  }
)

export default withCrud