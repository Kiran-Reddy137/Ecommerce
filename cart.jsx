// Cart.jsx
import React from "react";


const Cart = ({ cartItems, onClose, onIncrease, onDecrease, onRemove }) => {
  const calculateItemPrice = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + calculateItemPrice(item), 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h4>Your Cart</h4>
        <button onClick={onClose}>Close</button>
      </div>
      

      {cartItems.length === 0 ? (
        <li className="empty-cart">Your cart is empty</li>

      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item-details">
                  <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">£{calculateItemPrice(item)}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncrease(item.id)}>+</button>
                  <button onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            Total: £{calculateTotalPrice()}
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
