import React, { useState, Fragment, useEffect } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { message } from 'antd';

import MenuItem from '../../common/components/main-dashboard/menu-item';
import NavBar from '../../common/components/nav-bar';
import Footer from '../../common/components/footer';

import { bg1 } from '../../../style/images';

import '../../../style/css/ionicons.min.css';
import '../../../style/css/icomoon.css';
import '../../../style/css/style.css';

import { menuItemsCategories } from '../../../assets/mocks/menuItems';

import { actions as orderActions } from '../../redux/modules/order';

const MainDashboard = ({ addOrderItem, order, getMenu, menu }) => {
  const [filterCategory, setFilterCategory] = useState('');
  useEffect(() => {
    getMenu();
  }, []);

  const handleAddOrderItem = (item) => {
    if (!order.includes(item)) {
      addOrderItem(item);
    } else {
      message.error({
        content: 'Item has been already ordered! Check your cart!',
        key: 'order-item',
        duration: 1,
      });
    }
  };
  return (
    <Fragment>
      <NavBar />
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: `url(${bg1})`, marginTop: 70 }}
      />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">
                <li>
                  <button
                    type="button"
                    className={cn('menu-button', {
                      'menu-button-active': filterCategory === '',
                    })}
                    onClick={() => setFilterCategory('')}
                  >
                    All
                  </button>
                </li>
                {Object.keys(menuItemsCategories).map((item) => {
                  return (
                    <li key={menuItemsCategories[item]}>
                      <button
                        type="button"
                        className={cn('menu-button', {
                          'menu-button-active':
                            filterCategory === menuItemsCategories[item],
                        })}
                        onClick={() =>
                          setFilterCategory(menuItemsCategories[item])
                        }
                      >
                        {menuItemsCategories[item]}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            {menu
              .filter((item) => {
                if (filterCategory) {
                  return (
                    item.category === filterCategory
                  );
                }
                return item;
              })
              .map((item) => {
                return (
                  <MenuItem
                    handleAddOrderItem={handleAddOrderItem}
                    key={item._id}
                    item={item}
                  />
                );
              })}
          </div>
        </div>
      </section>
      <hr />
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  order: state.order.order,
  menu: state.order.menu,
});

const mapDispatchToProps = {
  ...orderActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDashboard);
