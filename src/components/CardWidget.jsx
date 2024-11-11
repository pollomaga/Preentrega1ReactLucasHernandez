import { TiShoppingCart } from "react-icons/ti";

function CartWidget() {
    return (
      <div className="carrito">
          <TiShoppingCart size="30px"/>
          <span className="badge">8</span>
      </div>
    )
  }
  
  export default CartWidget