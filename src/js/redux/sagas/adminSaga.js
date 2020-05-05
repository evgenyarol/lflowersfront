import { put, fork, takeLatest, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  constants as orderAdminConstants,
  actions as orderAdminActions,
} from '../modules/orderAdmin';
import {
  constants as employeeConstants,
  actions as employeeActions,
} from '../modules/employee';
import {
  constants as adminConstants,
  actions as adminActions,
} from '../modules/admin';
import {
  adminOrderGetData,
  adminOrderStatusesGetData,
  adminEmployeeGetData,
  adminOrderDeleteData,
  adminOrderAssignEmployee,
  adminEmployeeStatusesGetData,
  adminEmployeeTypesGetData,
  adminEmployeeCreateData,
  adminEmployeeEditData,
  adminEmployeeDeleteData,
  adminGraphsEmpCreatedGetData,
  adminGraphsOrdCreatedGetData,
  adminGraphsRevGetData,
  adminTopsProducts,
  adminTopsOrders,
  adminTopsEmpPerf,
} from '../../common/api/index';
import { signIn, signUp } from '../../common/api/module/user';

export function* fetchOrdersData() {
  try {
    const response = yield call(adminOrderStatusesGetData);

    yield put(orderAdminActions.setOrderStatuses(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchOrderStatusesData() {
  try {
    const response = yield call(adminOrderGetData);

    yield put(orderAdminActions.setOrders(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchEmployeeStatusesData() {
  try {
    const response = yield call(adminEmployeeStatusesGetData);

    yield put(employeeActions.setEmployeeStatuses(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchEmployeeTypesData() {
  try {
    const response = yield call(adminEmployeeTypesGetData);

    yield put(employeeActions.setEmployeeTypes(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchEmployeesData() {
  try {
    const response = yield call(adminEmployeeGetData);

    yield put(employeeActions.setEmployees(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* deleteOrderData({ payload }) {
  try {
    yield call(adminOrderDeleteData, payload);

    const response = yield call(adminOrderGetData);

    yield put(orderAdminActions.setOrders(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* assignEmployeeData({ payload }) {
  try {
    yield call(adminOrderAssignEmployee, payload);

    const response = yield call(adminOrderGetData);

    yield put(orderAdminActions.setOrders(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* deleteEmployeeData({ payload }) {
  try {
    yield call(adminEmployeeDeleteData, payload);

    const responseEmployee = yield call(adminEmployeeGetData);

    yield put(employeeActions.setEmployees(responseEmployee.data));
  } catch (e) {
    console.log(e);
  }
}

export function* createEmployeeData({ payload }) {
  try {
    yield call(adminEmployeeCreateData, payload);

    yield put(employeeActions.clearState());

    const response = yield call(adminEmployeeGetData);

    yield put(employeeActions.setEmployees(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* editEmployeeData({ payload }) {
  try {
    yield call(adminEmployeeEditData, payload);

    const responseOrder = yield call(adminOrderGetData);

    yield put(orderAdminActions.setOrders(responseOrder.data));

    const responseEmployee = yield call(adminEmployeeGetData);

    yield put(employeeActions.setEmployees(responseEmployee.data));
  } catch (e) {
    console.log(e);
  }
}

export function* postLoginData({ payload }) {
  const result = yield call(signIn, payload);
  if (result.data.token) {
    localStorage.setItem('a_t', result.data.token);

    yield put(push('/admin/orders'));
  }
}

export function* postRegistrationData({ payload }) {
  yield call(signUp, payload);
  yield put(push('/admin'));
}

export function* fetchGraphsEmpCreated() {
  try {
    const response = yield call(adminGraphsEmpCreatedGetData);

    yield put(adminActions.setGraphsEmpCreated(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchGraphsOrdCreated() {
  try {
    const response = yield call(adminGraphsOrdCreatedGetData);

    yield put(adminActions.setGraphsOrdCreated(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchGraphsRev() {
  try {
    const response = yield call(adminGraphsRevGetData);

    yield put(adminActions.setGraphsRev(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchTopsProducts() {
  try {
    const response = yield call(adminTopsProducts);

    yield put(adminActions.setTopsProducts(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchTopsOrders() {
  try {
    const response = yield call(adminTopsOrders);

    yield put(adminActions.setTopsOrders(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchTopsEmpPerf() {
  try {
    const response = yield call(adminTopsEmpPerf);

    yield put(adminActions.setTopsEmpPerf(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* watchGetOrders() {
  yield takeLatest(orderAdminConstants.GET_ORDERS, fetchOrdersData);
}

function* watchGetOrderStatuses() {
  yield takeLatest(
    orderAdminConstants.GET_ORDER_STATUSES,
    fetchOrderStatusesData
  );
}

function* watchGetEmployeeStatuses() {
  yield takeLatest(
    employeeConstants.GET_EMPLOYEE_STATUSES,
    fetchEmployeeStatusesData
  );
}

function* watchGetEmployeeTypes() {
  yield takeLatest(
    employeeConstants.GET_EMPLOYEE_TYPES,
    fetchEmployeeTypesData
  );
}

function* watchGetEmployees() {
  yield takeLatest(employeeConstants.GET_EMPLOYEES, fetchEmployeesData);
}

function* watchDeleteOrder() {
  yield takeLatest(orderAdminConstants.DELETE_ORDER, deleteOrderData);
}

function* watchAssignEmployee() {
  yield takeLatest(orderAdminConstants.ASSIGN_EMPLOYEE, assignEmployeeData);
}

function* watchDeleteEmployee() {
  yield takeLatest(employeeConstants.DELETE_EMPLOYEE, deleteEmployeeData);
}

function* watchCreateEmployee() {
  yield takeLatest(employeeConstants.CREATE_EMPLOYEE, createEmployeeData);
}

function* watchEditEmployee() {
  yield takeLatest(employeeConstants.EDIT_EMPLOYEE, editEmployeeData);
}

function* watchSignIn() {
  yield takeLatest(orderAdminConstants.SIGN_IN, postLoginData);
}

function* watchSignUp() {
  yield takeLatest(orderAdminConstants.SING_UP, postRegistrationData);
}

function* watchGraphsEmpCreated() {
  yield takeLatest(
    adminConstants.GET_GRAPHS_EMP_CREATED,
    fetchGraphsEmpCreated
  );
}

function* watchGraphsOrdCreated() {
  yield takeLatest(
    adminConstants.GET_GRAPHS_ORD_CREATED,
    fetchGraphsOrdCreated
  );
}

function* watchGraphsRev() {
  yield takeLatest(adminConstants.GET_GRAPHS_REV, fetchGraphsRev);
}

function* watchTopsProducts() {
  yield takeLatest(adminConstants.GET_TOPS_PRODUCTS, fetchTopsProducts);
}

function* watchTopsOrders() {
  yield takeLatest(adminConstants.GET_TOPS_ORDERS, fetchTopsOrders);
}

function* watchTopsEmpPerf() {
  yield takeLatest(adminConstants.GET_TOPS_EMP_PERF, fetchTopsEmpPerf);
}

export const adminSaga = [
  fork(watchTopsProducts),
  fork(watchTopsOrders),
  fork(watchTopsEmpPerf),
  fork(watchGetOrders),
  fork(watchGraphsEmpCreated),
  fork(watchGraphsOrdCreated),
  fork(watchGraphsRev),
  fork(watchGetOrderStatuses),
  fork(watchGetEmployees),
  fork(watchDeleteOrder),
  fork(watchAssignEmployee),
  fork(watchGetEmployeeTypes),
  fork(watchGetEmployeeStatuses),
  fork(watchCreateEmployee),
  fork(watchEditEmployee),
  fork(watchDeleteEmployee),
  fork(watchSignIn),
  fork(watchSignUp),
];
