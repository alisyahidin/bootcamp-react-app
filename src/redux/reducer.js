const reducer = (state, action) => {
  switch ( action.type ) {
    case 'GET_DATA':
      return { ...state, payload: action.payload, loader: false}
    default:
      return state
  }
}

export default reducer