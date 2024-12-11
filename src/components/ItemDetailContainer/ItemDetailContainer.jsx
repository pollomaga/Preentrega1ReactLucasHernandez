import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";



function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "Items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No se encontró el producto con ID:", id);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) {
    return <h2 className="loading">Cargando producto...</h2>;
  }

  if (!producto) {
    return <h2 className="error">Producto no encontrado</h2>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
