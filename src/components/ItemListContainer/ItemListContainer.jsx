import { Link, useParams } from "react-router-dom";
import camisetas from "../../data/camisetas";
import MainTitle from "../MainTitle/MainTitle"; // Importa el componente del título
import "./ItemListContainer.css";

function ItemListContainer() {
  const { id } = useParams(); // Capturo el parámetro de la categoría

  // Filtro los productos según la categoría
  const productosFiltrados = id
    ? camisetas.filter((producto) => producto.categoria === id)
    : camisetas;

  return (
    <div className="item-list-container">
      
      {!id && <MainTitle />}
      

      
      <ul className="item-list">
        {productosFiltrados.map((producto) => (
          <li key={producto.id} className="item">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="item-image"
            />
            <h3 className="item-nombre">{producto.nombre}</h3>
            <p className="item-precio">${producto.precio}</p>
            <Link to={`/detail/${producto.id}`} className="item-detalle-link">
              Ver detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
