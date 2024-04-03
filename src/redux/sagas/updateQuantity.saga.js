import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "UPDATE_QUANTITY actions

function* updateQuantity(action) {
  try {
    console.log('UPDATE_QUANTITY_PAYLOAD:', action.payload);
    yield axios.put(`/api/cart/${action.payload.id}`, action.payload);
    // quantity: action.payload.quantity,
    yield put({
      type: 'UPDATE_QUANTITY_REQUEST',
      payload: { id: action.payload.id, quantity: action.payload.quantity },
    });
  } catch (error) {
    console.log('ERROR UPDATING QUANTITY', error);
  }
}

function* updateQuantitySaga() {
  yield takeLatest('UPDATE_QUANTITY_REQUEST', updateQuantity);
}

export default updateQuantitySaga;
