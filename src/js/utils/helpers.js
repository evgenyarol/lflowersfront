import React from 'react';

export const formatDate = (date) => {
  let dd = new Date(date).getDate();
  if (dd < 10) dd = `0${dd}`;

  let mm = new Date(date).getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  let yy = new Date(date).getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;

  let h = new Date(date).getHours();
  if (h < 10) h = `0${h}`;

  let m = new Date(date).getMinutes();
  if (m < 10) m = `0${m}`;

  return `${dd}.${mm}.${yy} - ${h}:${m}`;
};

export const formatDateMonth = (date) => {
  let mm = new Date(date).getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  return `${mm}`;
};

export const requireAuth = (ComposedComponent) => {
  class Authenticate extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { history } = this.props;
      const isAuthenticated = window.localStorage.getItem('a_t');

      if (!isAuthenticated) {
        history.push('/admin');
      }
    }

    render() {
      const isAuthenticated = window.localStorage.getItem('a_t');

      return (
        <React.Fragment>
          {isAuthenticated ? <ComposedComponent {...this.props} /> : null}
        </React.Fragment>
      );
    }
  }

  return Authenticate;
};

export const isAuth = (ComposedComponent) => {
  class Authenticate extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { history } = this.props;
      const isAuthenticated = window.localStorage.getItem('a_t');

      if (isAuthenticated) {
        history.push('/admin/orders');
      }
    }

    render() {
      const isAuthenticated = window.localStorage.getItem('a_t');

      return (
        <React.Fragment>
          {!isAuthenticated ? <ComposedComponent {...this.props} /> : null}
        </React.Fragment>
      );
    }
  }

  return Authenticate;
};
