import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cart-widget">
      <TiShoppingCart size="30px" className="cart-icon" /> 
      <span className="badge">8</span> 
    </div>
  );
}

export default CartWidget;
