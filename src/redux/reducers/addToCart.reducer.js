const addToCartReducer = (state = [], action) => {
  switch (action.type) {
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

export default addToCartReducer;
