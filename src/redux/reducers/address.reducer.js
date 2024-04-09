const addressReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return action.payload;
    case 'ADD_ADDRESS':
      return [...state, action.payload];
    case 'DELETE_ADDRESS':
      // Filter out the deleted address based on its ID
      return state.filter((address) => address.id !== action.payload);
    case 'UPDATE_ADDRESS':
      // Update the address in the state array with the same ID as the payload
      return state.map((address) =>
        address.id === action.payload.id ? action.payload : address
      );
    // case 'SET_DEFAULT_ADDRESS':
    //   // Set the isDefault property of the specified address to true
    //   return state.map((address) => ({
    //     ...address,
    //     isDefault: address.id === action.payload.id ? true : false,
    //   }));
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default addressReducer;
