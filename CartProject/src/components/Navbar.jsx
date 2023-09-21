import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"
import icon from "../images/icon.png"

function Navbar() {
    return (
        <div className="Navbar-home">
        <img src={icon} className="icon"></img>
        <div className="Navbar">
            <nav>
                <NavLink to="/" className="nav-link">HomePage</NavLink>
                <NavLink to="/menu" className="nav-link">Menu</NavLink>
            </nav>
        </div>
        </div>
    );
}

export default Navbar;
