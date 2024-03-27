const shoppingCart = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SHOPPING_CART':
      return action.payload;
    case 'UNSET_SHOPPING_CART':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default shoppingCart;
