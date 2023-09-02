import { useSelector,useDispatch } from 'react-redux'
import Rating from '@mui/material/Rating';
import "../styles/MoviesList.css"
import {deletingMovies} from "../slices/MovieSlice"
import { useEffect,useState } from 'react';
import axios from "axios";

function MoviesList() {
    const moviesData = useSelector((state) => state.movie.movies)
    const dispatch = useDispatch()

    return (  
        <div className='container'>
            {
                moviesData.map((value,index)=> {
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
                    <button className='deleteMovie' onClick={() => dispatch(deletingMovies(value.id))}>Delete a Movie</button>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default MoviesList;
