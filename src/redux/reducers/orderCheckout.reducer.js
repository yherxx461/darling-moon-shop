const orderCheckoutReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'CHECKOUT_ORDER':
      // Clear cart after checkout
      return state.filter((item) => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export default orderCheckoutReducer;
