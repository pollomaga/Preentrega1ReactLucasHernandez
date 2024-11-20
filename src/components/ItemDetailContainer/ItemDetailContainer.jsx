import { useParams } from "react-router-dom";
import camisetas from "../../data/camisetas";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams(); // Capturo el ID desde la URL
  const producto = camisetas.find((item) => item.id === id); // Busca el producto por ID

  // Mensaje de error
  if (!producto) {
    return <h2 className="error">Producto no encontrado</h2>;
  }

  return (
    <div className="item-detail-container">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="item-detail-image"
      />
      <div className="item-detail-info">
        <h1 className="item-detail-nombre">{producto.nombre}</h1>
        <p className="item-detail-descripcion">{producto.descripcion}</p>
        <p className="item-detail-precio">Precio: ${producto.precio}</p>
        <p className="item-detail-equipo">Equipo: {producto.equipo}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
