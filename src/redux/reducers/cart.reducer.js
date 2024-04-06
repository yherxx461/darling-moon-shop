const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'UNSET_CART':
      return [];
    case 'ADD_TO_CART':
      return {
        // Must return previous state if no change is required for it to work
        ...state,
        items: [...state, action.payload],
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.cart
export default cartReducer;
