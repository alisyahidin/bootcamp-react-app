import axios from 'axios';

const apiUri = 'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'

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