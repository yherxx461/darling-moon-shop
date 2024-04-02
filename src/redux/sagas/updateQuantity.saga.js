import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "UPDATE_QUANTITY actions

function* updateQuantity(action) {
  try {
    const { id } = action.payload;
    yield axios.put(`/api/cart/${id}`);
    yield put({ type: 'UPDATE_QUANTITY' });
  } catch (error) {
    console.log('ERROR UPDATING QUANTITY', error);
  }
}

function* updateQuantitySaga() {
  yield takeLatest('UPDATE_QUANTITY', updateQuantity);
}

export default updateQuantitySaga;
