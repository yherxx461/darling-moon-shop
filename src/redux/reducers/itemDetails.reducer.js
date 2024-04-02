const itemDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ITEM_DETAILS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
export default itemDetailsReducer;
