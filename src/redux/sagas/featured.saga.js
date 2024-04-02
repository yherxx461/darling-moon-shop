import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_FEATURED_ITEMS" actions
function* fetchFeaturedItems() {
  try {
    const response = yield axios.get('/api/products/featured');
    yield put({ type: 'SET_FEATURED_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Products get request failed', error);
  }
}

function* featuredItemsSaga() {
  yield takeLatest('FETCH_FEATURED_ITEMS', fetchFeaturedItems);
}

export default featuredItemsSaga;
