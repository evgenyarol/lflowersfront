import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = ({ total }) => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 1000,
        background: '#ffffff',
        top: 0,
        right: 0,
        left: 0,
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
          L'FLOWERS
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={{
                    fontSize: 16,
                  }}
                >
                  Главная
                </Link>
              </li>
              <li className="nav-item cta cta-colored">
                <Link
                  to="/cart"
                  disabled={total === 0}
                  className="nav-link"
                  style={{
                    fontSize: 16,
                    color: total === 0 ? 'gray' : 'black',
                  }}
                >
                  <span className="icon-shopping_cart" />[{total}]
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.order.total,
});

export default connect(mapStateToProps)(NavBar);
