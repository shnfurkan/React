import {NavLink} from 'react-router-dom'

function navBar() {
    return (  
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink> <br></br>
                <NavLink to='/AboutUs'>AboutUs</NavLink> <br></br>
                <NavLink to='/History'>History</NavLink>
            </nav>
        </div>
    );
}
export default navBar;
