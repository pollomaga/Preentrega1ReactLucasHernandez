import { Link } from "react-router-dom";
import "./NoPage.css"; 
function NoPage() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Página No Encontrada</h1>
      <p className="not-found-message">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="not-found-link">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NoPage;
