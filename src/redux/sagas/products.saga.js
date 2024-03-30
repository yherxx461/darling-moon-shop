import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PRODUCTS" actions
function* fetchProducts() {
  try {
    const response = yield axios.get('/api/products');
    yield put({ type: 'SET_PRODUCTS', payload: response.data });
  } catch (error) {
    console.log('Products get request failed', error);
  }
}

function* productsSaga() {
  yield takeLatest('FETCH_PRODUCTS', fetchProducts);
}

export default productsSaga;
