import { useSelector,useDispatch } from 'react-redux'
import Rating from '@mui/material/Rating';
import "../styles/MoviesList.css"
import {searchChange} from "../slices/MovieSlice"
import { useEffect,useState } from 'react';
import "../App.css"
import { deletedMoviesActions } from '../Api';

function MoviesList() {
    const dispatch = useDispatch()

    const {movies,searchMovies} = useSelector((state) => state.movie)
    const [filteredTasks, setFilteredTasks] = useState([]);

      useEffect(() => {
        if (searchMovies) {
          const filtered = movies.filter((task) => task.movieName.toLowerCase().includes(searchMovies.toLowerCase()));
          setFilteredTasks(filtered);
        } else {
          setFilteredTasks(movies);
        }
      }, [searchMovies, movies])

      const handleDelete = (id) => {
        dispatch(deletedMoviesActions(id));
      }

    return (
        <>
        <div className='containerSearch'>
        <div className='search-group'>
            <label className='search'>Search:</label>
            <input className='input' value={searchMovies} onChange={(event) => dispatch(searchChange(event.target.value))} />
        </div>
        </div>

        <div className='container'>
            {
                filteredTasks.map((value,index)=> {
                    return (
                        <div key={index} className='moviesList'>
                            <h3>Movie Name:</h3>
                            {value.movieName}
                            <h3>Movie Type:</h3>
                            {value.movieType}
                            <h3>Movie Year:</h3>
                            {value.movieYear}
                            <h3>Movie Point:</h3>
                            <Rating name="customized-10" defaultValue={parseInt(value.moviePoint)} max={10}/>
                            <button className='deleteMovie' onClick={ () => handleDelete(value.id)}>Delete a Movie</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
}
export default MoviesList;
