import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (  
        <>
        <div> Home </div> <br></br>
        <button onClick={() => navigate('/Mission')}>Mission 'a Git!</button>
        </>
    );
}
export default Home;
