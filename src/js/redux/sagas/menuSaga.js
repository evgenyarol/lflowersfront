import { put, fork, takeLatest, call } from 'redux-saga/effects';
import {
  constants as orderConstants,
  actions as orderActions,
} from '../modules/order';
import { menuGetData, postOrder } from '../../common/api/index';

export function* fetchMenuData() {
  try {
    const response = yield call(menuGetData);

    yield put(orderActions.setMenu(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* postOrderData(payload) {
  try {
    yield call(postOrder, payload);
    yield put(orderActions.clearState());
  } catch (e) {
    console.log(e);
  }
}

function* watchGetExample() {
  yield takeLatest(orderConstants.GET_MENU, fetchMenuData);
}

function* watchPostOrder() {
  yield takeLatest(orderConstants.POST_ORDER, postOrderData);
}

export const menuSaga = [fork(watchGetExample), fork(watchPostOrder)];
