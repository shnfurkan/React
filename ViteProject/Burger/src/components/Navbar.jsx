import {Link} from 'react-router-dom'
import BurgerLogo from '../assets/burgerlogo.png'
import '../styles/Navbar.css'

function Navbar() {
    return (  
        <div className='navbar'>
            <div className='main'>
                <img src={BurgerLogo}></img>
        <nav className='mainLink'>
            <Link to='/' >Anasayfa</Link>
            <Link to='/Menü' >Menü</Link>
            <Link to='/About' >Hakkimizda</Link>
            <Link to='/Contact' >İletişim</Link>
        </nav>

        </div>
        </div>
    );
}

export default Navbar;


