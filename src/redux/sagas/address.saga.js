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

function* addAddress(action) {
  try {
    yield axios.post(`/api/address/${action.payload}`, action.payload);
    yield put({ type: 'ADD_ADDRESS' }); // fetch address again after adding a new address
    yield put({ type: 'FETCH_ADDRESS' });
  } catch (error) {
    console.log('Error adding new address', error);
  }
}

function* deleteAddress(action) {
  try {
    yield axios.delete(`/api/address/${action.payload}`, action.payload);
    yield put({ type: 'DELETE_ADDRESS' });
    yield put({ type: 'FETCH_ADDRESS' });
  } catch (error) {
    console.log('Error in deleting address', error);
  }
}

function* updateAddress(action) {
  try {
    yield axios.put(`/api/address/${action.payload}`, action.payload);
    yield put({ type: 'UPDATE_ADDRESS' });
    yield put({ type: 'FETCH_ADDRESS' });
  } catch (error) {
    console.log('Error in deleting address', error);
  }
}

function* addressSaga() {
  yield takeLatest('FETCH_ADDRESS', fetchAddress);
  yield takeLatest('ADD_ADDRESS', addAddress);
  yield takeLatest('DELETE_ADDRESS', deleteAddress);
  yield takeLatest('UPDATE_ADDRESS', updateAddress);
}

export default addressSaga;
