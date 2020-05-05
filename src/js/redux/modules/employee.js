import { createAction, handleActions } from 'redux-actions';

const SET_NAME = 'app/employee/SET_NAME';
const SET_SURNAME = 'app/employee/SET_SURNAME';
const SET_TYPE = 'app/employee/SET_TYPE';
const SET_ORDER = 'app/employee/SET_ORDER';
const SET_EMPLOYEES = 'app/employee/SET_EMPLOYEES';
const GET_EMPLOYEES = 'app/employee/GET_EMPLOYEES';
const GET_EMPLOYEE_STATUSES = 'app/employee/GET_EMPLOYEE_STATUSES';
const GET_EMPLOYEE_TYPES = 'app/employee/GET_EMPLOYEE_TYPES';
const SET_EMPLOYEE_STATUSES = 'app/employee/SET_EMPLOYEE_STATUSES';
const SET_EMPLOYEE_TYPES = 'app/employee/SET_EMPLOYEE_TYPES';
const CREATE_EMPLOYEE = 'app/employee/CREATE_EMPLOYEE';
const EDIT_EMPLOYEE = 'app/employee/EDIT_EMPLOYEE';
const EDIT_EMPLOYEE_TYPES = 'app/employee/EDIT_EMPLOYEE_TYPES';
const DELETE_EMPLOYEE = 'app/employee/DELETE_EMPLOYEE';
const CLEAR_STATE = 'app/employee/CLEAR_STATE';

export const constants = {
  SET_NAME,
  SET_SURNAME,
  SET_ORDER,
  SET_TYPE,
  SET_EMPLOYEES,
  GET_EMPLOYEES,
  GET_EMPLOYEE_STATUSES,
  SET_EMPLOYEE_STATUSES,
  SET_EMPLOYEE_TYPES,
  GET_EMPLOYEE_TYPES,
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_TYPES,
  DELETE_EMPLOYEE,
  CLEAR_STATE,
};

// ------------------------------------
// Actions
// ------------------------------------
export const setName = createAction(SET_NAME, (firstName) => firstName);
export const setSurname = createAction(SET_SURNAME, (lastName) => lastName);
export const setType = createAction(SET_TYPE, (employeeType) => employeeType);
export const setOrder = createAction(SET_ORDER, (orderId) => orderId);
export const setEmployees = createAction(
  SET_EMPLOYEES,
  (employees) => employees
);
export const setEmployeeStatuses = createAction(
  SET_EMPLOYEE_STATUSES,
  (statuses) => statuses
);
export const setEmployeeTypes = createAction(
  SET_EMPLOYEE_TYPES,
  (types) => types
);
export const getEmployees = createAction(GET_EMPLOYEES, () => {});
export const getEmployeeStatuses = createAction(
  GET_EMPLOYEE_STATUSES,
  () => {}
);
export const getEmployeeTypes = createAction(GET_EMPLOYEE_TYPES, () => {});
export const editEmployeeTypes = createAction(EDIT_EMPLOYEE_TYPES, (employee) => employee);
export const createEmployee = createAction(
  CREATE_EMPLOYEE,
  (employee) => employee
);
export const editEmployee = createAction(EDIT_EMPLOYEE, (employee) => employee);
export const deleteEmployee = createAction(
  DELETE_EMPLOYEE,
  (employee) => employee
);
export const clearState = createAction(CLEAR_STATE, () => {});

export const actions = {
  setName,
  setSurname,
  setType,
  setOrder,
  setEmployees,
  getEmployees,
  getEmployeeStatuses,
  setEmployeeTypes,
  getEmployeeTypes,
  setEmployeeStatuses,
  createEmployee,
  editEmployee,
  deleteEmployee,
  clearState,
};

export const reducers = {
  [SET_NAME]: (state, { payload }) => {
    return {
      ...state,
      employee: {
        ...state.employee,
        firstName: payload,
      },
    };
  },
  [SET_SURNAME]: (state, { payload }) => {
    return {
      ...state,
      employee: {
        ...state.employee,
        lastName: payload,
      },
    };
  },
  [SET_TYPE]: (state, { payload }) => {
    return {
      ...state,
      employee: {
        ...state.employee,
        employeeType: payload,
      },
    };
  },
  [SET_ORDER]: (state, { payload }) => {
    return {
      ...state,
      employee: {
        ...state.employee,
        order: payload,
      },
    };
  },
  [SET_EMPLOYEES]: (state, { payload }) => {
    return {
      ...state,
      employees: payload,
    };
  },
  [SET_EMPLOYEE_STATUSES]: (state, { payload }) => {
    return {
      ...state,
      employeeStatuses: payload,
    };
  },
  [SET_EMPLOYEE_TYPES]: (state, { payload }) => {
    return {
      ...state,
      employeeTypes: payload,
    };
  },
  [CLEAR_STATE]: () => {
    return {
      employee: {
        firstName: '',
        lastName: '',
        employeeType: '',
      },
      employees: [],
      employeeStatuses: [],
      employeeTypes: [],
    };
  },
};

export const initialState = () => ({
  employee: {
    firstName: '',
    lastName: '',
    employeeType: '',
  },
  employees: [],
  employeeStatuses: [],
  employeeTypes: [],
});

export default handleActions(reducers, initialState());
