const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'UNSET_PRODUCTS':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.products
export default productsReducer;
