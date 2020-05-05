import { createAction, handleActions } from 'redux-actions';

const SET_ORDERS = 'app/orderAdmin/SET_ORDERS';
const SET_ORDER_STATUSES = 'app/orderAdmin/SET_ORDER_STATUSES';
const DELETE_ORDER = 'app/orderAdmin/DELETE_ORDER';
const ASSIGN_EMPLOYEE = 'app/orderAdmin/ASSIGN_EMPLOYEE';
const GET_ORDERS = 'app/orderAdmin/GET_ORDERS';
const GET_ORDER_STATUSES = 'app/orderAdmin/GET_ORDER_STATUSES';
const SING_UP = 'app/orderAdmin/SING_UP';
const SIGN_IN = 'app/orderAdmin/SIGN_IN';

export const constants = {
  SET_ORDERS,
  GET_ORDERS,
  SET_ORDER_STATUSES,
  GET_ORDER_STATUSES,
  ASSIGN_EMPLOYEE,
  DELETE_ORDER,
  SING_UP,
  SIGN_IN,
};

// ------------------------------------
// Actions
// ------------------------------------
export const setOrders = createAction(SET_ORDERS, (orders) => orders);
export const setOrderStatuses = createAction(
  SET_ORDER_STATUSES,
  (statuses) => statuses
);
export const getOrders = createAction(GET_ORDERS, () => {});
export const getStatuses = createAction(GET_ORDER_STATUSES, () => {});
export const deleteOrder = createAction(DELETE_ORDER, (id) => id);
export const assignEmployee = createAction(
  ASSIGN_EMPLOYEE,
  (orderId, employeeId) => ({
    orderId,
    employeeId,
  })
);
export const singIn = createAction(SIGN_IN, (user) => user);
export const signUp = createAction(SING_UP, (user) => user);

export const actions = {
  setOrders,
  getOrders,
  setOrderStatuses,
  getStatuses,
  assignEmployee,
  deleteOrder,
  singIn,
  signUp,
};

export const reducers = {
  [SET_ORDERS]: (state, { payload }) => {
    return {
      ...state,
      orders: payload,
    };
  },
  [SET_ORDER_STATUSES]: (state, { payload }) => {
    return {
      ...state,
      orderStatuses: payload,
    };
  },
};

export const initialState = () => ({
  orders: [],
  orderStatuses: [],
});

export default handleActions(reducers, initialState());
