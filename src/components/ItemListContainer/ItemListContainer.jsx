import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";


import db from "../../firebase";


import "./ItemListContainer.css";

import { Link } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        let collectionRef = collection(db, "Items");
        if (id) {
          const q = query(collectionRef, where("categoria", "==", id));
          const snapshot = await getDocs(q);
          const productosData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(productosData);
        } else {
          const snapshot = await getDocs(collectionRef);
          const productosData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(productosData);
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [id]);

  if (loading) {
    return <h2 className="loading">Cargando productos...</h2>;
  }

  return (
    <div className="item-list-container">
      {productos.map((producto) => (
        <div key={producto.id} className="item">
          <Link to={`/detail/${producto.id}`}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;