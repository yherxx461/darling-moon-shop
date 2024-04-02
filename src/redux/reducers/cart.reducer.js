const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART':
      const cartItems = action.payload.map((item) => ({
        ...item,
        price: item.price || 0,
      }));
      return cartItems;
    case 'UNSET_CART':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.cart
export default cartReducer;
