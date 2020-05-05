import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import order from './modules/order';
import admin from './modules/admin';
import employee from './modules/employee';
import orderAdmin from './modules/orderAdmin';

export const createRootReducer = (history) =>
  combineReducers({
    orderAdmin,
    admin,
    employee,
    order,
    router: connectRouter(history),
  });
