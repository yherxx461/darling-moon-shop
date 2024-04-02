import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEM_DETAILS" actions
function* fetchItemDetails(action) {
  try {
    const response = yield axios.get(`/api/products/${action.payload}`);
    console.log('Item details response', response.data);
    yield put({ type: 'SET_ITEM_DETAILS', payload: response.data });
  } catch (error) {
    console.log('itemDetails request failed', error);
  }
}

function* itemDetailsSaga() {
  yield takeLatest('FETCH_ITEM_DETAILS', fetchItemDetails);
}

export default itemDetailsSaga;
