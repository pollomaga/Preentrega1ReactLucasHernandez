import { Link, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();


  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-links">
      
        <Link to="/" className={isActive("/") ? "active" : ""}>
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        
        <Link
          to="/category/espana"
          className={isActive("/category/espana") ? "active" : ""}
        >
          España
        </Link>
        <Link
          to="/category/inglaterra"
          className={isActive("/category/inglaterra") ? "active" : ""}
        >
          Inglaterra
        </Link>
        <Link
          to="/category/usa"
          className={isActive("/category/usa") ? "active" : ""}
        >
          USA
        </Link>
       
      
      </div>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
