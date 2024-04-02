import { put, takeLatest } from 'redux-saga/effects';

function* addToCartSaga(action) {
  try {
    const response = yield axios.post('/api/products/add', action.payload);
    yield put({ type: 'SET_ADD_TO_CART', payload: action.payload });
  } catch (error) {
    console.log('Error in updating new item to cart', error);
  }
}

// Watcher saga to listen for ADD_TO_CART actions
function* addToCart() {
  yield takeLatest('ADD_TO_CART', addToCartSaga);
}

export default addToCart;
