import {NavLink} from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
    return (  
        <div>
            <nav className="navbar">
                <NavLink to="/">Home Page</NavLink>
                <NavLink to="/add-movies">Add Movies</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/about-us">AboutUs</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;


