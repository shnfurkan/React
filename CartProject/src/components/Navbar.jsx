import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"
import icon from "../images/icon.png"
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="Navbar-home">
        <button className="iconButton" onClick={() => navigate("/menu")}>
            <img src={icon} className="icon"></img>
        </button>
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
