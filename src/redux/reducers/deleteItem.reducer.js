const deleteItemReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'DELETE_CART_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default deleteItemReducer;
