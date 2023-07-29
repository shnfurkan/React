import {useNavigate} from 'react-router-dom'

function Ahmet() {

    const navigate = useNavigate();

    return (  
        <>
        <div>Ahmet is here!</div>
        <button onClick={()=> navigate('/Furkan')}>Furkan'a geri git!</button>
        </>
    );
}

export default Ahmet;
