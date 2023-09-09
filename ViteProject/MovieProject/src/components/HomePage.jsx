import {useNavigate} from "react-router-dom"
import "../styles/Homepage.css"
import { useSelector, useDispatch } from 'react-redux'
import { useState , useEffect} from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from "axios";

function HomePage() {
    const navigate = useNavigate();
    // const moviesImages = useSelector((state) => state.movie.movies)
    const dispatch = useDispatch();

    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3000/data');
        setTasks(response.data);
      }
      useEffect(() => {
        fetchTasks();
      },[]);

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    
    const handlePrevious = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    
    const startIdx = currentPage * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    return (  
        <>
            <button className="button" onClick={() => navigate("/add-movies")}>Add Movies</button>

            <div className="photo-card">
                <button className="nav-button" onClick={handlePrevious} disabled={currentPage === 0}>
                    <ChevronLeftIcon/>
                </button>
                <div className="photo-container">
                {tasks.slice(startIdx, endIdx).map((value, index) => (
                        <img key={index} src={value.movieImage} className="photo"/>
                    ))}
                </div>
                <button className="nav-button" onClick={handleNext} disabled={endIdx >= tasks.length}>
                    <ChevronRightIcon/>
                </button>
            </div>
        </>
    );
}

export default HomePage;


