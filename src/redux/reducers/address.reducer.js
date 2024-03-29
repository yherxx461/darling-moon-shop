const addressReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADDRESSES':
      return action.payload;
    case 'UNSET_ADDRESSES':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default addressReducer;
