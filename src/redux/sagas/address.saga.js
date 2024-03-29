import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAddress() {
  try {
    const response = yield axios.get('/api/addresses');
    yield put({ type: 'SET_ADDRESSES', payload: response.data });
  } catch (error) {
    console.log('Address get request failed', error);
  }
}

function* addressSaga() {
  yield takeLatest('FETCH_ADDRESS', fetchAddress);
}

export default addressSaga;
