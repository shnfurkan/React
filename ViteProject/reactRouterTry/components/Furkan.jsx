import {useNavigate} from 'react-router-dom'

function Furkan() {

    const navigate = useNavigate();

    return (  
        <>
        <div>Furkan is here!</div>
        <button onClick={()=> navigate('/Ahmet')}>Ahmet 'e Git</button>

        </>
    );
}

export default Furkan;
