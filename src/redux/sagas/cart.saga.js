import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CART" actions
function* fetchCart() {
  try {
    const response = yield axios.get('/api/cart');
    yield put({ type: 'SET_CART', payload: response.data });
  } catch (error) {
    console.log('Cart get request failed', error);
  }
}

function* cartSaga() {
  yield takeLatest('FETCH_CART', fetchCart);
}

export default cartSaga;
