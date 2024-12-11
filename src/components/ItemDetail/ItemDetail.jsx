import React, { useState, useContext } from "react";
import { CartContext } from "../CartWidget/CartContext";
import "./ItemDetail.css";

function ItemDetail({ producto }) {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleIncrease = () => setCantidad(cantidad + 1);
  const handleDecrease = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    console.log(`Producto agregado: ${producto.nombre}, Cantidad: ${cantidad}`);
  };

  return (
    <div className="item-detail">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="item-image"
      />
      <h1 className="item-title">{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>Equipo: {producto.equipo}</p>
      <p>{producto.descripcion}</p>
      <div className="quantity-selector">
        <button onClick={handleDecrease}>-</button>
        <span>{cantidad}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Agregar al carrito
      </button>
    </div>
  );
  
  
}

export default ItemDetail;