import { all } from 'redux-saga/effects';
import { menuSaga } from './menuSaga';
import { adminSaga } from './adminSaga';

export default function* sagas() {
  yield all([...menuSaga, ...adminSaga]);
}
