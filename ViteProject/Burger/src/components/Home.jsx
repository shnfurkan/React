import BurgerYeni from '../assets/banneryeni.jpg';
import '../styles/Home.css'
import {useNavigate} from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    return (  
        <div className='mainPage' style={{backgroundImage:`url(${BurgerYeni})`}}>
            <div className='order'>
        <button onClick={() => navigate('/Menü')}>Sipariş Ver</button>
            </div>
            
        </div>
    );
}

export default Home;
