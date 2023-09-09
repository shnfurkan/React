import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  searchMovies: "",
}

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovies: (state,actions) => {

      const newMovie = {
        movieName: actions.payload.movieName,
        movieYear: actions.payload.movieYear,
        movieType: actions.payload.movieType,
        moviePoint: actions.payload.moviePoint,
        movieImage: actions.payload.movieImage,
        id: actions.payload.id,
      }
      state.movies.push(newMovie);
    },
    deletingMovies: (state,actions) => {
      const deletedMovies = state.movies.filter((value)=> {
        return value.id !== actions.payload
      })
      state.movies = deletedMovies;
    },
  },
})


export const {addMovies,deletingMovies} = MovieSlice.actions

export default MovieSlice.reducer



