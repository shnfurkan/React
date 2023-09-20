import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  searchMovies: "",
}
export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies: (state,actions) => {
      state.movies = actions.payload;
    },
    addMovies: (state,actions) => {
      state.movies.push(actions.payload);
    },
    deletingMovies: (state,actions) => {
      const deletedMovies = state.movies.filter((value)=> {
        return value.id !== actions.payload
      })
      state.movies = deletedMovies;
    },
    searchChange: (state,actions) => {
    state.searchMovies = actions.payload
    }
  },
})

export const {addMovies,deletingMovies,searchChange,getMovies} = MovieSlice.actions

export default MovieSlice.reducer



