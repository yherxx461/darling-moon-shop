import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CART" actions
function* fetchItemDetails() {
  try {
    const response = yield axios.get(`/api/products/${action.payload}`);
    yield put({ type: 'SET_ITEM_DETAILS', payload: response.data });
  } catch (error) {
    console.log('itemDetails request failed', error);
  }
}

function* itemDetailsSaga() {
  yield takeLatest('FETCH_ITEM_DETAILS', fetchItemDetails);
}

export default itemDetailsSaga;
