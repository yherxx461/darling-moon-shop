import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAddress() {
  try {
    const response = yield axios.get('/api/address');
    yield put({ type: 'SET_ADDRESS', payload: response.data });
  } catch (error) {
    console.log('Error fetching addresses', error);
  }
}

function* addAddressSaga(action) {
  try {
    yield axios.post(`/api/address/${action.payload}`, action.payload);
    yield put({ type: 'FETCH_ADDRESS' }); // fetch address again after adding a new address
  } catch (error) {
    console.log('Error adding new address', error);
  }
}

function* addressSaga() {
  yield takeLatest('FETCH_ADDRESS', fetchAddress);
  yield takeLatest('ADD_ADDRESS', addAddressSaga);
}

export default addressSaga;
