import {NavLink} from 'react-router-dom'

function Link() {
    return (  
        <div>
            <nav>
                <NavLink to='/Furkan'>Furkan</NavLink> <br></br>
                <NavLink to='/Ahmet'>Ahmet</NavLink>
            </nav>

        </div>
    );
}

export default Link;