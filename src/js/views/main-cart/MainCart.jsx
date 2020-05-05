import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { message, notification } from 'antd';
import { Link } from 'react-router-dom';

import NavBar from '../../common/components/nav-bar';
import Footer from '../../common/components/footer';
import CartItem from '../../common/components/main-cart/cart-item';

import { bg1 } from '../../../style/images';

import '../../../style/css/ionicons.min.css';
import '../../../style/css/icomoon.css';
import '../../../style/css/style.css';

import { actions as orderActions } from '../../redux/modules/order';

const MainCart = ({
  adress,
  order,
  total,
  login,
  phone,
  comment,
  history,
  setOrderItemAmount,
  deleteOrderItem,
  setLogin,
  setPhone,
  setAdress,
  setComment,
  postOrder,
}) => {
  useEffect(() => {
    if (total === 0) {
      history.push('/');
    }
  }, [total]);

  

  const handleSetOrderItemAmount = (item) => {
    if (item.amount <= 100) {
      setOrderItemAmount(item);
    } else {
      message.error({
        content: 'Слишком много! Максимум: 100',
        key: 'order-item',
        duration: 1,
      });
    }
  };
  const handleDeleteOrderItem = (item) => {
    deleteOrderItem(item);
  };
  const handleLoginChange = (loginField) => {
    setLogin(loginField);
  };
  const handlePhoneChange = (phoneField) => {
    setPhone(phoneField);
  };
  const handleAdressChange = (adressField) => {
    setAdress(adressField);
  };
  const handleCommentChange = (commentField) => {
    setComment(commentField);
  };

  const handleSumm = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <div>
      <NavBar />
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: `url(${bg1})`, marginTop: 70 }}
      />

      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>Название блюда</th>
                      <th>Цена за единицу</th>
                      <th>Количество</th>
                      <th>Общая цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.map((item) => (
                      <CartItem
                        handleDeleteOrderItem={handleDeleteOrderItem}
                        handleSetOrderItemAmount={handleSetOrderItemAmount}
                        orderItem={item}
                        key={item._id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 mt-5 cart-wrap">
              <div className="cart-total mb-3">
                <h3>Код купона</h3>
                <p>Введите код купона, если у вас есть</p>
                <form action="#" className="info">
                  <div className="form-group">
                    <label htmlFor="">Код купона</label>
                    <input
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 mt-5 cart-wrap">
              <div className="cart-total mb-3">
                <h3>Введите ваши данные</h3>
                <form className="info">
                  <p>Введите имя</p>
                  <div className="form-group">
                    <label htmlFor="">Имя</label>
                    <input
                      value={login}
                      onChange={(e) => handleLoginChange(e.target.value)}
                      className="form-control text-left px-3"
                      placeholder=""
                      required
                    />
                  </div>
                  <p>Введите ваш телефон</p>
                  <div className="form-group">
                    <label htmlFor="">Телефон</label>
                    <input
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                  <p>Введите ваш Адрес</p>
                  <div className="form-group">
                    <label htmlFor="">Адрес</label>
                    <input
                      value={adress}
                      onChange={(e) => handleAdressChange(e.target.value)}
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                  <p>Введите ваш комментарий</p>
                  <div className="form-group">
                    <label htmlFor="">Комментарий</label>
                    <input
                      value={comment}
                      onChange={(e) => handleCommentChange(e.target.value)}
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 mt-5 cart-wrap">
              <div className="cart-total mb-3">
                <h3>Ваша корзина</h3>
                <p className="d-flex">
                  <span>Скидка</span>
                  <span>$0.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Итого</span>
                  <span>
                    {`$${order
                      .map((item) => item.price * item.amount)
                      .reduce(handleSumm, 0)}`}
                  </span>
                </p>
              </div>
              <p>
                <Link
                  onClick={(e) => {
                    if (order.length === 0 || !login) {
                      e.preventDefault();
                      message.error({
                        content: 'Введите ваше имя',
                        key: 'order-submit',
                        duration: 1,
                      });
                    } else if (order.length === 0 || !phone) {
                      e.preventDefault();
                      message.error({
                        content: 'Введите ваше телефон',
                        key: 'order-submit',
                        duration: 1,
                      });
                    } else if (order.length === 0 || !adress) {
                      e.preventDefault();
                      message.error({
                        content: 'Введите ваш адрес',
                        key: 'order-submit',
                        duration: 1,
                      });
                    }  else {
                      postOrder({
                        product: order.map((i) => i._id),
                        total: order
                          .map((item) => item.price * item.amount)
                          .reduce(handleSumm, 0),
                        login,
                        phone,
                        adress,
                        comment,
                      });
                      notification.open({
                        message: 'Заказ оформлен!',
                        description: 'Курьер свяжется с Вами в ближайшее время.',
                      });
                    }
                  }}
                  to="/"
                  className="btn btn-primary py-3 px-4"
                >
                  Отправить заказ
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  ...orderActions,
};

const mapStateToProps = (state) => ({
  order: state.order.order,
  total: state.order.total,
  login: state.order.login,
  phone: state.order.phone,
  adress: state.order.adress,
  comment: state.order.comment,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainCart)
);
