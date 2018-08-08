import axios from 'axios';

const apiUri = 'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
const apiUriSingular = 'https://id.techinasia.com/wp-json/techinasia/3.0/posts/'

export function getDataAction() {
  return function(dispatch) {
    axios.get(apiUri)
    .then(response => {
      dispatch({
        type: 'GET_DATA',
        payload: response.data.posts
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function getDataSingular(param) {
  return function(dispatch) {
    console.log(apiUriSingular + param)
    axios.get(apiUriSingular + param)
    .then(response => {
      dispatch({
        type: 'GET_DATA_SINGULAR',
        datum: response.data.posts
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}