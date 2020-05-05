import React from 'react';

const MenuItem = ({ item, handleAddOrderItem }) => {
  const { title, price, discount, photo } = item;

  return (
    <div className="col-md-6 col-lg-3">
      <div className="product">
        <a href="/" className="img-prod">
          <img className="img-fluid" src={photo} alt="Menu Item" />
          {discount ? <span className="status">{`${discount}%`}</span> : null}
          <div className="overlay" />
        </a>
        <div className="text py-3 pb-4 px-3 text-center">
          <h3>
            <a href="/">{title}</a>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                {discount ? (
                  <div>
                    <span className="mr-2 price-dc">{`$${price}`}</span>
                    <span className="price-sale">
                      {`$${(price - price * (discount / 100)).toFixed(0)}`}
                    </span>
                  </div>
                ) : (
                  <span className="mr-2">{`$${price}`}</span>
                )}
              </p>
            </div>
          </div>
          <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
              <button
                type="button"
                onClick={() => handleAddOrderItem(item)}
                className="buy-now d-flex justify-content-center align-items-center mx-1"
              >
                <span>
                  <i className="ion-ios-cart" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
