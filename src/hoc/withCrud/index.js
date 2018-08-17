import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../Auxiliary';

const withCrud = (payload, apiRoute) => WrappedComponent => (
  class extends Component {
    state = {
      data: [],
      idUpdate: '',
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
          this.resetPayload(payload)
          this.getData()
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }

    showData = id => () => {
      axios.get(`${apiRoute}/${id}`)
        .then(res => {
          this.setState(prevState => ({
            ...prevState,
            idUpdate: id,
            ...res.data
          }))
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }

    putData = (id, payload) => () => {
      axios.put(`${apiRoute}/${id}`, payload)
        .then(res => {
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

    resetPayload = (payload) => {
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
            showData={ this.showData }
            putData={ this.putData }
            deleteData={ this.deleteData }
            resetPayload={ this.resetPayload }
            handleFormChange={ this.handleFormChange }
            { ...this.props }
          />
        </Aux>
      )
    }
  }
)

export default withCrud