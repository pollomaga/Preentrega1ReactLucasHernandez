import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <Link to="/category/espana">España</Link>
        <Link to="/category/inglaterra">Inglaterra</Link>
        <Link to="/category/usa">USA</Link>
      </div>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
