import Logo from "./Logo"
import CartWidget from "./CardWidget"
import "./navbar.css"
function Navbar() {
  return (
    <div className="navbar">
        <Logo/>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Uruguay</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Argentina</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Brasileirao</a> 
                </li>
                <li className="navbar-item">
                    <a href="">La Liga</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Bundesliga</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Premier</a> 
                </li>
                <li className="navbar-item">
                    <a href="">MLS</a> 
                </li>
            </ul>
    <CartWidget/>
    </div>
  )
}

export default Navbar