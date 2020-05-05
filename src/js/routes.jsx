import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import LazyLoading from 'common/components/LazyLoading';
import { isAuth, requireAuth } from './utils/helpers';

// This is show case how you can lazy loading component
// const ExampleRouteHandler = LazyLoading(() => import('views/example'));
// const Header = LazyLoading(() => import('common/components/Header/Header'));
const MainDashboard = LazyLoading(() => import('views/main-dashboard'));
const MainCart = LazyLoading(() => import('views/main-cart'));
const AdminOrders = LazyLoading(() => import('views/admin/order-dashboard'));
const AdminEmployees = LazyLoading(() =>
  import('views/admin/employee-dashboard')
);
const AdminCharts = LazyLoading(() => import('views/admin/charts'));
const AdminStatistics = LazyLoading(() => import('views/admin/statistics'));
const AuthLoginHandler = LazyLoading(() => import('views/admin/auth'));
const AuthRegisterHandler = LazyLoading(() =>
  import('views/admin/auth/AuthRegister')
);
const EmployeeHandler = LazyLoading(() => import('views/admin/employee'));

// This show case how you can access routing info in your component
// const LoginWithRouter = withRouter((props) => <LoginRouteHandler {...props} />);

module.exports = (
  <div>
    <Switch>
      <Route exact component={MainDashboard} path="/" />
      <Route exact component={MainCart} path="/cart" />
      <Route exact component={requireAuth(AdminOrders)} path="/admin/orders" />
      <Route
        exact
        component={requireAuth(AdminEmployees)}
        path="/admin/employees"
      />
      <Route exact component={requireAuth(AdminCharts)} path="/admin/charts" />
      <Route
        exact
        component={requireAuth(AdminStatistics)}
        path="/admin/statistics"
      />
      <Route exact component={isAuth(AuthLoginHandler)} path="/admin" />
      <Route
        exact
        component={isAuth(AuthRegisterHandler)}
        path="/admin/register"
      />
      <Route
        exact
        component={requireAuth(EmployeeHandler)}
        path="/admin/employee/:id"
      />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
