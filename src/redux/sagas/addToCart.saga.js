import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addToCartSaga(action) {
  try {
    yield axios.post('/api/cart', action.payload);
    yield put({ type: 'FETCH_CART' });
    // Dispatch SET_CART action to update cart items after adding them to the cart

    if (Array.isArray(action.payload)) {
      yield put({ type: 'SET_CART', payload: action.payload });
    }
  } catch (error) {
    console.log('Error in updating new item to cart', error);
  }
}

// Watcher saga to listen for ADD_TO_CART actions
function* addToCart() {
  yield takeLatest('ADD_TO_CART', addToCartSaga);
}

export default addToCart;
