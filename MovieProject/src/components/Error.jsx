import error from "../assets/error.jpg"
import "../styles/Error.css"
import {NavLink} from "react-router-dom"
import Button from '@mui/material/Button';

function Error() {

    const buttonStyle = {
        backgroundColor: "#6a5acd",
        color: "white",
        fontWeight: "bold"
    }

    return (  
        <div className="error" style={{backgroundImage:`url(${error})`}}>
            <div className="error-text">
            <h1>Have you lost your way?</h1>
            <h3>Sorry, We couldn't find the page you were looking for. But there is contents you can discover on the homepage.</h3>
            <nav>
                <NavLink to="/">
                <Button variant="contained" color="secondary" style={buttonStyle}>Go to Home Page</Button>
                </NavLink>
            </nav>
            </div>
        </div>


    );
}

export default Error;



