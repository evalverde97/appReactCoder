import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'; 

function CartWidget() {
  const {total} = useContext(CartContext);

  return (
    <Link to='/cart'>
      <div className="cart-widget">
        <div className="cart-widget__header">
            <div className="cart-widget__header-title">
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
      </div>
    </Link>
    )
};

export default CartWidget;