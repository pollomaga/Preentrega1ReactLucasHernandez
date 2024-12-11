import React, { useState, useContext } from "react";
import { CartContext } from "../CartWidget/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", address: "" });
  const [orderId, setOrderId] = useState(null);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

 const totalPrice = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.address) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const confirmCheckout = window.confirm("¿Estás seguro de generar tu orden de compra?");
    if (!confirmCheckout) return;

    
    const generatedOrderId = `ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    setOrderId(generatedOrderId);

    
    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      orderId: generatedOrderId,
      date: new Date().toISOString(),
    };

    console.log("Orden creada:", order);
  };

  const handleConfirmPurchase = () => {
    clearCart(); 
    setBuyer({ name: "", email: "", address: "" }); 
    setPurchaseConfirmed(true); 
  };

  if (cart.length === 0 && !orderId) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.nombre} />
            <div>
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Resumen de compra</h2>
        <div className="cart-items-summary">
          {cart.map((item) => (
            <p key={item.id}>
              <strong>{item.nombre}</strong> - Cantidad: {item.cantidad} - Subtotal: ${item.precio * item.cantidad}
            </p>
          ))}
        </div>
        <p><strong>Total:</strong> ${totalPrice}</p>

        <h3>Datos del comprador</h3>
        <form onSubmit={handleCheckout}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={buyer.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={buyer.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={buyer.address}
            onChange={handleInputChange}
          />
          <button type="submit">Generar orden</button>
        </form>

        
        {orderId && !purchaseConfirmed && (
          <div className="order-confirmation">
            <h3>¡Compra realizada con éxito!</h3>
            <p>Tu número de orden es: <strong>{orderId}</strong></p>
            <button onClick={handleConfirmPurchase} className="confirm-purchase-button">
              Confirmar compra
            </button>
          </div>
        )}

        {purchaseConfirmed && (
          <div className="purchase-completed">
            <h3>Gracias por tu compra.</h3>
            <p>¡Tu carrito ha sido vaciado!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
