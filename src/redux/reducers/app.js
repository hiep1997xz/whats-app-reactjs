const initialState = {
  debug: true,
  loaded: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_STATE':
      return {
        ...state,
        ...action.state,
      }
    default:
      return state
  }
}

export default reducer;
