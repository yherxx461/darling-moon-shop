const itemDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ITEM_DETAILS':
      return action.payload;
    case 'UNSET_ITEM_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default itemDetailsReducer;
