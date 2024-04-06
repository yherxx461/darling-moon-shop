const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'UNSET_CART':
      return [];
    case 'ADD_TO_CART':
      // Add new item to the existing array of state
      return [...state, action.payload];
    case 'DELETE_CART_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.cart
export default cartReducer;
