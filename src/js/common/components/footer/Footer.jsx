import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h3>L'FLOWERS</h3>
              <Link to="/admin">Войти в админку</Link>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">У вас есть вопросы?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker" />
                    <span className="text">
                      Igumentckii trakt , 26 , Minsk , Belarus
                    </span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="icon icon-phone" />
                      <span className="text">+375291935711</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="icon icon-envelope" />
                      <span className="text">victoriamiksha@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright &copy; All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
