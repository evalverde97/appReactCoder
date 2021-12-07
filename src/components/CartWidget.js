import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'; 

function CartWidget() {
  return (
    <div className="cart-widget">
      <div className="cart-widget__header">
            <div className="cart-widget__header-title">
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="cart-widget__header-total">
              <p>Total: $0.00</p>
            </div>
        </div>
    </div>
    )
};

export default CartWidget;