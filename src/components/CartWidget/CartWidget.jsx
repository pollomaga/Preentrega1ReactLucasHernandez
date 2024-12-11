import "./CartWidget.css";
import React, { useContext } from "react";
import { CartContext } from "../CartWidget/CartContext"; 
import { Link } from "react-router-dom";

function CartWidget() {
  const { cart } = useContext(CartContext);

 
  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <img src="/assets/icon-cart.png" alt="Carrito" className="cart-icon" />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>
    </div>
  );
}

export default CartWidget;
