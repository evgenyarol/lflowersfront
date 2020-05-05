import { createAction, handleActions } from 'redux-actions';

const GET_GRAPHS_EMP_CREATED = 'app/admin/GET_GRAPHS_EMP_CREATED';
const SET_GRAPHS_EMP_CREATED = 'app/admin/SET_GRAPHS_EMP_CREATED';

const GET_GRAPHS_ORD_CREATED = 'app/admin/GET_GRAPHS_ORD_CREATED';
const SET_GRAPHS_ORD_CREATED = 'app/admin/SET_GRAPHS_ORD_CREATED';

const GET_GRAPHS_REV = 'app/admin/GET_GRAPHS_REV';
const SET_GRAPHS_REV = 'app/admin/SET_GRAPHS_REV';

const GET_TOPS_PRODUCTS = 'app/admin/GET_TOPS_PRODUCTS';
const SET_TOPS_PRODUCTS = 'app/admin/SET_TOPS_PRODUCTS';

const GET_TOPS_ORDERS = 'app/admin/GET_TOPS_ORDERS';
const SET_TOPS_ORDERS = 'app/admin/SET_TOPS_ORDERS';

const GET_TOPS_EMP_PERF = 'app/admin/GET_TOPS_EMP_PERF';
const SET_TOPS_EMP_PERF = 'app/admin/SET_TOPS_EMP_PERF';

export const constants = {
  GET_GRAPHS_EMP_CREATED,
  SET_GRAPHS_EMP_CREATED,
  GET_GRAPHS_ORD_CREATED,
  SET_GRAPHS_ORD_CREATED,
  GET_GRAPHS_REV,
  SET_GRAPHS_REV,
  GET_TOPS_PRODUCTS,
  SET_TOPS_PRODUCTS,
  GET_TOPS_ORDERS,
  SET_TOPS_ORDERS,
  GET_TOPS_EMP_PERF,
  SET_TOPS_EMP_PERF,
};

// ------------------------------------
// Actions
// ------------------------------------
export const setGraphsEmpCreated = createAction(
  SET_GRAPHS_EMP_CREATED,
  (data) => data
);
export const getGraphsEmpCreated = createAction(
  GET_GRAPHS_EMP_CREATED,
  () => {}
);

export const setGraphsOrdCreated = createAction(
  SET_GRAPHS_ORD_CREATED,
  (data) => data
);
export const getGraphsOrdCreated = createAction(
  GET_GRAPHS_ORD_CREATED,
  () => {}
);

export const setGraphsRev = createAction(SET_GRAPHS_REV, (data) => data);
export const getGraphsRev = createAction(GET_GRAPHS_REV, () => {});

export const setTopsProducts = createAction(SET_TOPS_PRODUCTS, (data) => data);
export const getTopsProducts = createAction(GET_TOPS_PRODUCTS, () => {});

export const setTopsOrders = createAction(SET_TOPS_ORDERS, (data) => data);
export const getTopsOrders = createAction(GET_TOPS_ORDERS, () => {});

export const setTopsEmpPerf = createAction(SET_TOPS_EMP_PERF, (data) => data);
export const getTopsEmpPerf = createAction(GET_TOPS_EMP_PERF, () => {});

export const actions = {
  getGraphsEmpCreated,
  setGraphsEmpCreated,
  setGraphsOrdCreated,
  getGraphsOrdCreated,
  setGraphsRev,
  getGraphsRev,
  setTopsProducts,
  getTopsProducts,
  setTopsOrders,
  getTopsOrders,
  setTopsEmpPerf,
  getTopsEmpPerf,
};

export const reducers = {
  [SET_GRAPHS_EMP_CREATED]: (state, { payload }) => {
    return {
      ...state,
      graphsEmpCreated: payload,
    };
  },
  [SET_GRAPHS_ORD_CREATED]: (state, { payload }) => {
    return {
      ...state,
      graphsOrdCreated: payload,
    };
  },
  [SET_GRAPHS_REV]: (state, { payload }) => {
    return {
      ...state,
      graphsRev: payload,
    };
  },
  [SET_TOPS_PRODUCTS]: (state, { payload }) => {
    return {
      ...state,
      topsProducts: payload,
    };
  },
  [SET_TOPS_ORDERS]: (state, { payload }) => {
    return {
      ...state,
      topsOrders: payload,
    };
  },
  [SET_TOPS_EMP_PERF]: (state, { payload }) => {
    return {
      ...state,
      topsEmpPerf: payload,
    };
  },
};

export const initialState = () => ({
  graphsEmpCreated: {},
  graphsOrdCreated: {},
  graphsRev: {},
  topsProducts: [],
  topsOrders: [],
  topsEmpPerf: [],
});

export default handleActions(reducers, initialState());
