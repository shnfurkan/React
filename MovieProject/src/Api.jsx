import axios from "axios";
import { addMovies, deletingMovies, getMovies } from "./slices/MovieSlice";

export const gettedMoviesActions = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3000/data');
    dispatch(getMovies(response.data));
}

export const addedMoviesActions =  (movieData) => async (dispatch) => {
    await axios.post('http://localhost:3000/data', movieData);
    dispatch(addMovies(movieData));
}
    
export const deletedMoviesActions = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:3000/data/${id}`)
    dispatch(deletingMovies(id));
}
