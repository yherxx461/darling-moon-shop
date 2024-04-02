const updateQuantityReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.products
export default updateQuantityReducer;
