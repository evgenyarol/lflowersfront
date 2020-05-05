import React from 'react';

const CartItem = ({
  orderItem,
  handleSetOrderItemAmount,
  handleDeleteOrderItem,
}) => {
  return (
    <tr className="text-center">
      <td className="product-remove">
        <button
          onClick={() => handleDeleteOrderItem(orderItem)}
          type="button"
          className="delete-item"
        >
          <span className="ion-ios-close" />
        </button>
      </td>

      <td className="product-name">
        <h3>{orderItem.title}</h3>
        <p>{orderItem.description}</p>
      </td>
      <td className="price">{`$${orderItem.price}`}</td>

      <td className="quantity">
        <div className="input-group mb-3">
          <input
            type="number"
            name="quantity"
            className="quantity form-control input-number"
            value={orderItem.amount}
            onChange={(e) =>
              handleSetOrderItemAmount({ ...orderItem, amount: e.target.value })
            }
            min="1"
            max="10"
          />
        </div>
      </td>

      <td className="total">{`$${orderItem.price * orderItem.amount}`}</td>
    </tr>
  );
};

export default CartItem;
