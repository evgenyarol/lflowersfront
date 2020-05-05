import { createAction, handleActions } from 'redux-actions';

const ADD_ORDER_ITEM = 'app/order/ADD_ORDER_ITEM';
const SET_ORDER_ITEM_AMOUNT = 'app/order/SET_ORDER_ITEM_AMOUNT';
const DELETE_ORDER_ITEM = 'app/order/DELETE_ORDER_ITEM';
const SET_LOGIN = 'app/order/SET_LOGIN';
const SET_PHONE = 'app/order/SET_PHONE';
const SET_ADRESS = 'app/order/SET_ADRESS';
const SET_COMMENT = 'app/order/SET_COMMENT';
const SUBMIT_ORDER = 'app/order/SUBMIT_ORDER';
const GET_MENU = 'app/order/GET_MENU';
const SET_MENU = 'app/order/SET_MENU';
const POST_ORDER = 'app/order/POST_ORDER';
const CLEAR_STATE = 'app/order/CLEAR_STATE';

export const constants = {
  ADD_ORDER_ITEM,
  SET_ORDER_ITEM_AMOUNT,
  DELETE_ORDER_ITEM,
  SET_LOGIN,
  SET_PHONE,
  SET_ADRESS,
  SET_COMMENT,
  SUBMIT_ORDER,
  GET_MENU,
  SET_MENU,
  POST_ORDER,
  CLEAR_STATE,
};

// ------------------------------------
// Actions
// ------------------------------------
export const addOrderItem = createAction(
  ADD_ORDER_ITEM,
  (orderItem) => orderItem
);

export const setOrderItemAmount = createAction(
  SET_ORDER_ITEM_AMOUNT,
  (orderItem) => orderItem
);

export const deleteOrderItem = createAction(
  DELETE_ORDER_ITEM,
  (orderItem) => orderItem
);

export const setLogin = createAction(SET_LOGIN, (login) => login);

export const setPhone = createAction(SET_PHONE, (phone) => phone);

export const setAdress = createAction(SET_ADRESS, (adress) => adress);

export const setComment = createAction(SET_COMMENT, (comment) => comment);

export const submitOrder = createAction(SUBMIT_ORDER, () => {});

export const getMenu = createAction(GET_MENU, () => {});

export const setMenu = createAction(SET_MENU, (menu) => menu);

export const postOrder = createAction(POST_ORDER, (order) => order);

export const clearState = createAction(CLEAR_STATE, () => {});

export const actions = {
  addOrderItem,
  setOrderItemAmount,
  deleteOrderItem,
  setLogin,
  setPhone,
  setAdress,
  setComment,
  submitOrder,
  getMenu,
  setMenu,
  postOrder,
  clearState,
};

export const initialState = () => ({
  login: '',
  phone: '',
  adress : '',
  comment: '',
  menu: [],
  order: [],
  total: 0,
});

export const reducers = {
  [ADD_ORDER_ITEM]: (state, { payload }) => {
    return {
      ...state,
      order: [...state.order, payload],
      total: state.total + 1,
    };
  },
  [SET_ORDER_ITEM_AMOUNT]: (state, { payload }) => {
    return {
      ...state,
      order: state.order.map((item) => {
        if (item._id === payload._id) {
          return payload;
        }
        return item;
      }),
    };
  },
  [DELETE_ORDER_ITEM]: (state, { payload }) => {
    return {
      ...state,
      order: state.order.filter((item) => item._id !== payload._id),
      total: state.total - 1,
    };
  },
  [SET_LOGIN]: (state, { payload }) => {
    return {
      ...state,
      login: payload,
    };
  },
  [SET_PHONE]: (state, { payload }) => {
    return {
      ...state,
      phone: payload,
    };
  },
  [SET_ADRESS]: (state, { payload }) => {
    return {
      ...state,
      adress: payload,
    };
  },
  [SET_COMMENT]: (state, { payload }) => {
    return {
      ...state,
      comment: payload,
    };
  },
  [SET_MENU]: (state, { payload }) => {
    return {
      ...state,
      menu: payload,
    };
  },
  [CLEAR_STATE]: (state) => {
    return {
      ...state,
      order: [],
      login: '',
      adress : '',
      phone: '',
      comment: '',
      total: 0,
    };
  },
};

export default handleActions(reducers, initialState());
