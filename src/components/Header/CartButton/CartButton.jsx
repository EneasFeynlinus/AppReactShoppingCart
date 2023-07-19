import React from 'react';
import  {TiShoppingCart} from 'react-icons/ti';

const CartButton = () => {
  return (
    <button type="button" className="cart_button">
      <TiShoppingCart />
    </button>
  );
};

export default CartButton;
