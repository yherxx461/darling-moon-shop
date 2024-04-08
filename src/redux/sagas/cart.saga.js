import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CART" actions
function* fetchCart() {
  try {
    const response = yield axios.get('/api/cart');
    yield put({ type: 'SET_CART', payload: response.data });
  } catch (error) {
    console.log('Cart get request failed', error);
  }
}
function* addToCart(action) {
  try {
    // Send Post request to add item to the cart
    yield axios.post('/api/cart', action.payload);
    // After adding item to cart, fetch all items added to the cart
    yield put({ type: 'FETCH_CART' });
    // Dispatch SET_CART action to update cart items after adding them to the cart

    if (Array.isArray(action.payload)) {
      yield put({ type: 'SET_CART', payload: action.payload });
    }
  } catch (error) {
    console.log('Error in updating new item to cart', error);
  }
}

function* updateCartQuantity(action) {
  try {
    // Send Post request to add item to the cart
    yield axios.put(`/api/cart/${action.payload.id}`, action.payload);
    // After adding item to cart, fetch all items added to the cart
    yield put({ type: 'FETCH_CART' });
    // Dispatch SET_CART action to update cart items after adding them to the cart
  } catch (error) {
    console.log('Error in updating new item to cart', error);
  }
}

function* deleteCartItems(action) {
  try {
    yield axios.delete(`/api/cart/${action.payload}`);
    yield put({ type: 'FETCH_CART' });
  } catch (error) {
    console.log('Error deleting item off cart', error);
  }
}

function* clearCart(action) {
  try {
    yield axios.delete(`/api/cart/${action.payload.id}`, action.payload);
    yield put({ type: 'CLEAR_CART' });
  } catch (error) {
    console.error('Error clearing cart', error);
  }
}

function* cartSaga() {
  yield takeLatest('FETCH_CART', fetchCart);
  yield takeLatest('ADD_TO_CART', addToCart);
  yield takeLatest('UPDATE_CART_QUANTITY', updateCartQuantity);
  yield takeLatest('DELETE_CART_ITEM', deleteCartItems);
  yield takeLatest('CLEAR_CART', clearCart);
}

export default cartSaga;
