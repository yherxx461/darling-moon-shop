const orderCheckoutReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.payload;
    case 'CHECKOUT_ORDER':
      // Clear cart after checkout
      return state.filter((item) => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    case 'SUBMIT_ORDER_SUCCESS':
      return {
        ...state,
        success: true,
        error: null,
      };
    case 'SUBMIT_ORDER_FAIL':
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderCheckoutReducer;
