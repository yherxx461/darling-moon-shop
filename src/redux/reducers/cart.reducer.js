const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'UNSET_CART':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.cart
export default cartReducer;
