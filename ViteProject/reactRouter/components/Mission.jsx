import { useNavigate } from "react-router-dom";
function Mission() {
    const navigate = useNavigate();
    return (  
        <div>
    <div>Mission</div> <br></br>
    <button onClick={() => navigate('/')}>Geri Gel!</button>

        </div>
    );
}

export default Mission;

