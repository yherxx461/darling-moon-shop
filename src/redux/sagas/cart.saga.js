import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CART" actions
function* fetchCartItems() {
  try {
    const response = yield axios.get('/api/cart');
    const cartItems = response.data.map((item) => ({
      ...item,
      price: item.price || 0,
    }));
    yield put({ type: 'SET_CART', payload: cartItems });
  } catch (error) {
    console.log('Cart get request failed', error);
  }
}

function* cartSaga() {
  yield takeLatest('FETCH_CART', fetchCartItems);
}

export default cartSaga;
