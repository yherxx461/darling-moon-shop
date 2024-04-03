import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on actions
function* orderCheckoutSaga(action) {
  try {
    yield axios.delete(`/api/cart/${action.payload}`);
    yield put({ type: 'FETCH_CART' });
  } catch (error) {
    console.log('Error deleting item off cart', error);
  }
}

function* orderCheckout() {
  yield takeLatest('DELETE_CART_ITEM', orderCheckoutSaga);
}

export default orderCheckout;
