import {put, takeEvery, call} from 'redux-saga/effects';
import {getData} from '../action';
import GET_DATA from '../constant';

function* rootSaga() {
  yield call(getData);
}

export default rootSaga;
