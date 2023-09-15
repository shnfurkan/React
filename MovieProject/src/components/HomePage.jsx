import { useNavigate } from "react-router-dom"
import "../styles/Homepage.css"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const moviesImages = useSelector((state) => state.movie.movies)

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
                {moviesImages.slice(startIdx, endIdx).map((value, index) => (
                        <img key={index} src={value.movieImage} className="photo"/>
                    ))}
                </div>
                <button className="nav-button" onClick={handleNext} disabled={endIdx >= moviesImages.length}>
                    <ChevronRightIcon/>
                </button>
            </div>
        </>
    );
}

export default HomePage;
