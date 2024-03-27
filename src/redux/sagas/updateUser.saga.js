import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "UPDATE_USER" actions

function* updateUser(action) {
  try {
    console.log('UPDATE_USER_INFO PAYLOAD:', action.payload);
    yield axios.put(`/api/user/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('ERROR UPDATING USER INFO', error);
  }
}

function* updateUserSaga() {
  yield takeLatest('UPDATE_USER', updateUser);
}

export default updateUserSaga;
