import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on actions

function* fetchOrders() {
  try {
    const response = yield axios.get('/api/orders');
    yield put({ type: 'SET_ORDERS', payload: response.data });
  } catch (error) {
    console.log('Error fetching addresses', error);
  }
}

function* submitOrder(action) {
  try {
    yield axios.post('/api/orders', action.payload);
    yield put({ type: 'SUBMIT_ORDER_SUCCESS' });
  } catch (error) {
    yield put({ type: 'SUBMIT_ORDER_FAIL', payload: error.message });
  }
}

function* orderCheckout() {
  // yield takeLatest('DELETE_CART_ITEM', orderCheckoutSaga);
  yield takeLatest('FETCH_ORDERS', fetchOrders);
  yield takeLatest('SUBMIT_ORDER_REQUEST', submitOrder);
}

export default orderCheckout;
