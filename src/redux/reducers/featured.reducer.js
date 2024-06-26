const featuredItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FEATURED_ITEMS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default featuredItemsReducer;
