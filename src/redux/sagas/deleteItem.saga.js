import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on actions
function* deleteCartItems(action) {
  try {
    yield axios.delete(`/api/cart/${action.payload}`);
    yield put({ type: 'FETCH_CART' });
  } catch (error) {
    console.log('Error deleting item off cart', error);
  }
}

function* deleteItemsSaga() {
  yield takeLatest('DELETE_CART_ITEM', deleteCartItems);
}

export default deleteItemsSaga;
