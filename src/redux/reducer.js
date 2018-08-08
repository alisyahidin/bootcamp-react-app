const reducer = (state, action) => {
  switch ( action.type ) {
    case 'GET_DATA':
      return { ...state, payload: action.payload, loader: false}
    case 'GET_DATA_SINGULAR':
      return { ...state, datum: action.datum, loader: false}
    default:
      return state
  }
}

export default reducer