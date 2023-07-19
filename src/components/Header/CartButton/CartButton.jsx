import React from 'react';
import  {TiShoppingCart} from 'react-icons/ti';

import './CartButton.css';

const CartButton = () => {
  return (
    <button type="button" className="cart_button">
      <TiShoppingCart />
      <span className="cart-status">1</span>
    </button>
  );
};

export default CartButton;
